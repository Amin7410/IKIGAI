// ---------------- ANTI-CLONE (Domain Restriction) ----------------
const allowedDomains = ['amin7410.github.io', 'localhost', '127.0.0.1'];
if (!allowedDomains.includes(window.location.hostname) && window.location.hostname !== "") {
    document.body.innerHTML = '<div style="display:flex;justify-content:center;align-items:center;height:100vh;background-color:#0f172a;color:#ef4444;font-family:sans-serif;text-align:center;padding:20px;"><div><h1 style="font-size:2rem;margin-bottom:10px;">Lỗi Bản Quyền</h1><p>Ứng dụng này đang được chạy trái phép trên một tên miền không được cấp phép.</p></div></div>';
    throw new Error("Unauthorized domain!");
}
// ---------------------------------------------------------------

// ---------------- ANTI-SCRAPING & ANTI-F12 ----------------
document.addEventListener('contextmenu', event => event.preventDefault()); // Chặn chuột phải
document.addEventListener('keydown', function(e) {
  // Chặn F12
  if (e.key === 'F12' || e.keyCode === 123) {
    e.preventDefault();
  }
  // Chặn Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
  if (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) {
    e.preventDefault();
  }
  // Chặn Ctrl+U (View Source)
  if (e.ctrlKey && e.key.toUpperCase() === 'U') {
    e.preventDefault();
  }
});
// ----------------------------------------------------------

import { db } from './data/db.js';
import { normalCDF } from './core/mathUtils.js';
import { ExcelOriginalEngine, MathCorrectedEngine } from './engines/calculationEngines.js';
import { renderGaussChart, renderIkigaiChart } from './ui/charts.js';

export const CONFIG = {
  SHOW_ENGINE_SWITCHER: false
};

let isMathCorrectedEngine = true;

export function getActiveEngine() {
  return MathCorrectedEngine;
}

export function switchEngine(checked) {
  isMathCorrectedEngine = true;
  calculateNormalProbabilities();
  syncScoresFromModule1(false);
}

/**
 * =====================================================================
 * MODULE 1: DỰ BÁO TUYỂN SINH THPT THƯỜNG (Sheet 1 & 2 Excel)
 * =====================================================================
 */
export function calculateNormalProbabilities() {
  const mathInput = document.getElementById('mathScore');
  const litInput = document.getElementById('litScore');
  const engInput = document.getElementById('engScore');

  if (!mathInput || !litInput || !engInput) return;

  const math = parseFloat(mathInput.value) || 0;
  const lit = parseFloat(litInput.value) || 0;
  const eng = parseFloat(engInput.value) || 0;

  // Tự động đồng bộ điểm sang Module 2
  const specMath = document.getElementById('specMathScore');
  const specLit = document.getElementById('specLitScore');
  const specEng = document.getElementById('specEngScore');
  if (specMath && specMath.value != math) specMath.value = math;
  if (specLit && specLit.value != lit) specLit.value = lit;
  if (specEng && specEng.value != eng) specEng.value = eng;

  // 1. Hệ số co giãn beta theo môn (Sheet 2)
  const betaMath = 0.84;
  const betaLit = 0.90;
  const betaEng = 0.94;

  // 2. Sai số chuẩn theo môn (Sheet 2)
  const seMath = 0.10;
  const seLit = 0.12;
  const seEng = 0.08;

  // 3. Hệ số rủi ro K theo môn (Sheet 2)
  const kMath = (math >= 9.5) ? 0.75 : (math >= 8.5 ? 1.20 : 2.00);
  const kLit  = (lit >= 8.5)  ? 0.80 : (lit >= 8.0  ? 1.40 : 2.20);
  const kEng  = (eng >= 9.5)  ? 0.75 : (eng >= 8.5  ? 1.20 : 2.00);

  // 4. Điểm tối thiểu & tối đa từng môn (khoảng tin cậy 95% có rủi ro)
  const minMath = math * betaMath - (1.96 * seMath * kMath);
  const maxMath = math * betaMath + (1.96 * seMath * kMath);

  const minLit = lit * betaLit - (1.96 * seLit * kLit);
  const maxLit = lit * betaLit + (1.96 * seLit * kLit);

  const minEng = eng * betaEng - (1.96 * seEng * kEng);
  const maxEng = eng * betaEng + (1.96 * seEng * kEng);

  const minTotal = minMath + minLit + minEng;
  const maxTotal = maxMath + maxLit + maxEng;

  // 5. Điểm kỳ vọng trung bình mu (Sheet 2: F2 = (E6+E7)/2)
  const mean = (minTotal + maxTotal) / 2;

  const stdMath = (maxMath - minMath) / 3.92;
  const stdLit = (maxLit - minLit) / 3.92;
  const stdEng = (maxEng - minEng) / 3.92;

  const engine = getActiveEngine();
  const stdDev = engine.calculateStdDev(minTotal, maxTotal, stdMath, stdLit, stdEng);

  const meanEl = document.getElementById('statMean');
  const stdEl = document.getElementById('statStdDev');
  if (meanEl) meanEl.innerText = mean.toFixed(2);
  if (stdEl) stdEl.innerText = stdDev.toFixed(2);

  const s1Val = document.getElementById('nv1Select')?.value;
  const s2Val = document.getElementById('nv2Select')?.value;
  const s3Val = document.getElementById('nv3Select')?.value;

  const s1 = db.schools.find(s => s.id == s1Val) || db.schools[0];
  const s2 = db.schools.find(s => s.id == s2Val) || db.schools[1] || db.schools[0];
  const s3 = db.schools.find(s => s.id == s3Val) || db.schools[2] || db.schools[0];

  // Quy chế tuyển sinh: NV2 cộng +1.0đ, NV3 cộng +2.0đ so với điểm chuẩn dự kiến
  const scoreNv1 = s1.score2027;
  const scoreNv2 = s2.score2027 + 1.0;
  const scoreNv3 = s3.score2027 + 2.0;

  const probs = engine.calculateProbabilities(scoreNv1, scoreNv2, scoreNv3, mean, stdDev);

  renderNVResultCards(s1, s2, s3, probs, scoreNv1, scoreNv2, scoreNv3, mean);
  renderGaussChart('gaussChart', mean, stdDev, scoreNv1, scoreNv2, scoreNv3);

  // Cập nhật tính toán cho Module 2
  calculateSpecialized();
}

function renderNVResultCards(s1, s2, s3, probs, scoreNv1, scoreNv2, scoreNv3, mean) {
  const container = document.getElementById('nvResultCards');
  if (!container) return;
  let html = '';

  const nvList = [
    { name: 'NV1: ' + s1.name, score: scoreNv1, rawScore: s1.score2027, prob: probs.nv1, note: '' },
    { name: 'NV2: ' + s2.name, score: scoreNv2, rawScore: s2.score2027, prob: probs.nv2, note: ' (+1.0đ quy chế NV2)' },
    { name: 'NV3: ' + s3.name, score: scoreNv3, rawScore: s3.score2027, prob: probs.nv3, note: ' (+2.0đ quy chế NV3)' }
  ];

  nvList.forEach((item) => {
    let badgeColor = 'bg-red-500/20 text-red-400 border-red-500/30';
    let badgeText = '🔴 Nguy Hiểm';
    let percentColor = 'text-red-400';
    let percentDisplay = (item.prob * 100).toFixed(1) + '%';

    // Chỉ số chênh lệch năng lực: EI = mu - TargetScore (Sheet 2 & Yêu cầu khách)
    const ei = (mean !== undefined) ? (mean - item.score) : 0;

    if (ei >= 5.0) {
      badgeColor = 'bg-purple-500/20 text-purple-300 border-purple-500/40';
      badgeText = '🟣 Lãng Phí Điểm Số (Thấp hơn năng lực ≥ 5đ)';
      percentColor = 'text-purple-300';
    } else if (item.prob >= 0.75) {
      badgeColor = 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      badgeText = '🟢 An Toàn Cao';
      percentColor = 'text-emerald-400';
    } else if (item.prob >= 0.30) {
      badgeColor = 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      badgeText = '🟡 Cân Nhắc';
      percentColor = 'text-amber-400';
    }

    html += '<div class="bg-gray-800/50 p-4 rounded-xl border border-gray-700 flex items-center justify-between gap-3">';
    html += '<div class="flex-1 min-w-0"><div class="flex items-center gap-2 flex-wrap"><span class="font-bold text-white text-sm">' + item.name + '</span><span class="text-[10px] px-2 py-0.5 rounded ' + badgeColor + ' border font-semibold whitespace-nowrap">' + badgeText + '</span></div>';
    html += '<div class="text-xs text-gray-400 mt-1">Điểm chuẩn xét tuyển dự báo 2027: <span class="font-bold text-gray-200">' + item.score.toFixed(2) + '</span><span class="text-[11px] text-amber-300/90 ml-1 font-medium">' + item.note + '</span></div></div>';
    html += '<div class="text-right shrink-0"><div class="text-2xl font-black ' + percentColor + '">' + percentDisplay + '</div>';
    html += '<div class="text-[10px] text-gray-400">' + (probs.isJoint ? 'Xác suất phân bố rời rạc' : 'Xác suất độc lập') + '</div></div></div>';
  });

  container.innerHTML = html;
}

/**
 * =====================================================================
 * MODULE 2: DỰ BÁO TUYỂN SINH TRƯỜNG CHUYÊN (Sheet 3 & 4 Excel)
 * =====================================================================
 */
export function syncScoresFromModule1(triggerCalc = true) {
  const mathM1 = document.getElementById('mathScore')?.value;
  const litM1 = document.getElementById('litScore')?.value;
  const engM1 = document.getElementById('engScore')?.value;

  if (mathM1 && document.getElementById('specMathScore')) {
    document.getElementById('specMathScore').value = mathM1;
  }
  if (litM1 && document.getElementById('specLitScore')) {
    document.getElementById('specLitScore').value = litM1;
  }
  if (engM1 && document.getElementById('specEngScore')) {
    document.getElementById('specEngScore').value = engM1;
  }

  if (triggerCalc) {
    onSpecSchoolChange();
  }
}

export function onSpecSchoolChange() {
  const schoolSelect = document.getElementById('specSchoolSelect');
  if (!schoolSelect) return;
  const schoolId = schoolSelect.value;
  const selectedProgram = db.specializedSchools.find(s => s.id == schoolId) || db.specializedSchools[0];

  const math = parseFloat(document.getElementById('specMathScore')?.value) || 8.5;
  const lit  = parseFloat(document.getElementById('specLitScore')?.value)  || 8.0;
  const eng  = parseFloat(document.getElementById('specEngScore')?.value)  || 8.5;

  const progName = selectedProgram.program.toLowerCase();
  const labelEl = document.getElementById('specSubjectLabel');
  const inputEl = document.getElementById('specScoreInput');
  const hintEl = document.getElementById('specInputHint');

  // Cập nhật nhãn và tự động điền điểm nếu là môn chung (lưu ý ghi chú Sheet 4)
  if (progName.includes('tiếng anh')) {
    if (labelEl) labelEl.innerText = '3. Điểm học bạ môn chuyên Tiếng Anh (Thang 10 - Hệ số 2)';
    if (inputEl) inputEl.value = eng;
    if (hintEl) hintEl.innerText = '* Tự động lấy từ điểm Tiếng Anh (bạn có thể điều chỉnh nếu thi chuyên sâu).';
  } else if (progName.includes('toán')) {
    if (labelEl) labelEl.innerText = '3. Điểm học bạ môn chuyên Toán (Thang 10 - Hệ số 2)';
    if (inputEl) inputEl.value = math;
    if (hintEl) hintEl.innerText = '* Tự động lấy từ điểm Toán.';
  } else if (progName.includes('ngữ văn') || progName.includes('văn')) {
    if (labelEl) labelEl.innerText = '3. Điểm học bạ môn chuyên Ngữ văn (Thang 10 - Hệ số 2)';
    if (inputEl) inputEl.value = lit;
    if (hintEl) hintEl.innerText = '* Tự động lấy từ điểm Ngữ văn.';
  } else if (progName.includes('vật lí') || progName.includes('hóa học') || progName.includes('sinh học')) {
    if (labelEl) labelEl.innerText = '3. Điểm môn Khoa học Tự nhiên (KHTN) lớp 9 xét chuyên ' + selectedProgram.program;
    if (hintEl) hintEl.innerText = '* Lưu ý quy định mới (Sheet 4): Môn Lý, Hóa, Sinh nhập điểm môn Khoa Học Tự Nhiên lớp 9.';
  } else if (progName.includes('lịch sử') || progName.includes('địa lí')) {
    if (labelEl) labelEl.innerText = '3. Điểm môn Lịch sử - Địa lý lớp 9 xét chuyên ' + selectedProgram.program;
    if (hintEl) hintEl.innerText = '* Lưu ý quy định mới (Sheet 4): Môn Sử, Địa nhập điểm môn Lịch sử - Địa lý lớp 9.';
  } else if (progName.includes('tin học')) {
    if (labelEl) labelEl.innerText = '3. Điểm môn Tin học / Toán lớp 9 xét chuyên Tin học';
    if (hintEl) hintEl.innerText = '* Chuyên Tin: Nhập điểm Tin học hoặc điểm Toán nâng cao lớp 9.';
  } else {
    if (labelEl) labelEl.innerText = '3. Điểm học bạ môn chuyên ' + selectedProgram.program + ' (Thang 10)';
    if (hintEl) hintEl.innerText = '* Nhập điểm môn chuyên dự thi tương ứng.';
  }

  // Cập nhật thông tin điểm chuẩn lịch sử
  const hist2024El = document.getElementById('specHist2024');
  const hist2025El = document.getElementById('specHist2025');
  const hist2026El = document.getElementById('specHist2026');
  const hist2027El = document.getElementById('specHist2027');

  if (hist2024El) hist2024El.innerText = selectedProgram.score2024 ? selectedProgram.score2024.toFixed(2) : '--';
  if (hist2025El) hist2025El.innerText = selectedProgram.score2025 ? selectedProgram.score2025.toFixed(2) : '--';
  if (hist2026El) hist2026El.innerText = selectedProgram.score2026 ? selectedProgram.score2026.toFixed(2) : '--';
  if (hist2027El) hist2027El.innerText = selectedProgram.score2027 ? selectedProgram.score2027.toFixed(2) : '--';

  calculateSpecialized();
}

export function calculateSpecialized() {
  const scoreInput = document.getElementById('specScoreInput');
  const schoolSelect = document.getElementById('specSchoolSelect');
  const mathEl = document.getElementById('specMathScore');
  const litEl  = document.getElementById('specLitScore');
  const engEl  = document.getElementById('specEngScore');

  if (!scoreInput || !schoolSelect) return;

  const specScore = parseFloat(scoreInput.value) || 0;
  const schoolId = schoolSelect.value;
  const selectedSchool = db.specializedSchools.find(s => s.id == schoolId) || db.specializedSchools[0];

  const math = parseFloat(mathEl?.value) || 8.5;
  const lit  = parseFloat(litEl?.value)  || 8.0;
  const eng  = parseFloat(engEl?.value)  || 8.5;

  // 1. Tính tổng 3 môn thường đã trừ rủi ro theo Sheet 4 (G2 = (G6+G7)/2)
  const betaMath = 0.84, betaLit = 0.90, betaEng = 0.94;
  const seMath = 0.10, seLit = 0.12, seEng = 0.08;
  const kMath = (math >= 9.5) ? 0.75 : (math >= 8.5 ? 1.20 : 2.00);
  const kLit  = (lit >= 8.5)  ? 0.80 : (lit >= 8.0  ? 1.40 : 2.20);
  const kEng  = (eng >= 9.5)  ? 0.75 : (eng >= 8.5  ? 1.20 : 2.00);

  const minMath = math * betaMath - (1.96 * seMath * kMath);
  const maxMath = math * betaMath + (1.96 * seMath * kMath);
  const minLit = lit * betaLit - (1.96 * seLit * kLit);
  const maxLit = lit * betaLit + (1.96 * seLit * kLit);
  const minEng = eng * betaEng - (1.96 * seEng * kEng);
  const maxEng = eng * betaEng + (1.96 * seEng * kEng);

  const minBaseTotal = minMath + minLit + minEng;
  const maxBaseTotal = maxMath + maxLit + maxEng;
  const baseExpected = (minBaseTotal + maxBaseTotal) / 2; // G2 trong Excel

  const baseDisplayEl = document.getElementById('specBaseExpectedDisplay');
  if (baseDisplayEl) baseDisplayEl.innerText = baseExpected.toFixed(2) + ' / 30đ';

  // 2. Điểm trung bình 3 môn thường (Sheet 4: E2 = (B2+C2+D2)/3)
  const avgBase = (math + lit + eng) / 3.0;

  // 3. Chỉ số năng lực chuyên biệt (Sheet 4: SI = F2 - E2)
  const si = specScore - avgBase;

  // 4. Delta phân nhóm rủi ro (Sheet 4: I2 & J2)
  // IF(H2>=0.8, 2.15, IF(F2>=9.5, 2.15, IF(F2>=8.5, 4.49, 6.68)))
  let delta = 6.68;
  let groupName = 'Nhóm 3 (Rủi ro cao)';
  let deltaVol = 1.50; // Dải dao động phong độ môn chuyên (Sheet 4 J8-J9)

  if (si >= 0.8) {
    delta = 2.15;
    deltaVol = 0.75;
    groupName = 'Nhóm 1 (Ưu tiên năng lực vượt trội - SI ≥ 0.8)';
  } else if (specScore >= 9.5) {
    delta = 2.15;
    deltaVol = 1.00;
    groupName = 'Nhóm 1 (Điểm cực cao ≥ 9.5)';
  } else if (specScore >= 8.5) {
    delta = 4.49;
    deltaVol = 1.25;
    groupName = 'Nhóm 2 (Năng lực Khá - Giỏi)';
  } else {
    delta = 6.68;
    deltaVol = 1.50;
    groupName = 'Nhóm 3 (Rủi ro rơi điểm cao)';
  }

  // 5. Điểm môn chuyên kỳ vọng đã trừ rủi ro (Sheet 4: J2)
  const specExpected = Math.min(10, Math.max(0, Math.round((specScore - delta) * 100) / 100));

  // 6. Dải biến thiên điểm chuyên (Sheet 4: J8, J9)
  const specMin = Math.max(0, Math.round((specExpected - deltaVol) * 100) / 100);
  const specMax = Math.min(10, Math.round((specExpected + deltaVol) * 100) / 100);

  // 7. Tổng điểm xét tuyển chuyên (Sheet 4: L2 = G2 + J2*2)
  const totalSpecExpected = Math.round((baseExpected + (specExpected * 2)) * 100) / 100;

  // 8. Độ lệch chuẩn phong độ & dải dự báo (Sheet 4: M2 = MIN((J9-J8)/6, 1.5), N2 = M2*2)
  const specStd = Math.min((specMax - specMin) / 6.0, 1.5);
  const totalSpecStd = Math.round((specStd * 2.0) * 100) / 100;

  const lowRange = Math.round((totalSpecExpected - totalSpecStd) * 100) / 100;
  const highRange = Math.round((totalSpecExpected + totalSpecStd) * 100) / 100;

  // 9. Xác suất trúng tuyển chuyên
  const targetCutoff = selectedSchool.score2027;
  const prob = 1 - normalCDF(targetCutoff, totalSpecExpected, Math.max(0.6, totalSpecStd));

  // Cập nhật UI
  const avgBaseEl = document.getElementById('specAvgBase');
  const siValEl = document.getElementById('specSIValue');
  const groupBadgeEl = document.getElementById('specGroupBadge');
  const specExpEl = document.getElementById('specExpectedScore');

  if (avgBaseEl) avgBaseEl.innerText = avgBase.toFixed(2);
  if (siValEl) siValEl.innerText = (si >= 0 ? '+' : '') + si.toFixed(2);
  if (groupBadgeEl) groupBadgeEl.innerText = groupName;
  if (specExpEl) specExpEl.innerText = specExpected.toFixed(2) + '/10 (Dải: ' + specMin.toFixed(2) + ' - ' + specMax.toFixed(2) + ')';

  const totalExpEl = document.getElementById('specTotalExpected');
  const rangeEl = document.getElementById('specPointRange');
  const probEl = document.getElementById('specProbPercent');
  const targetEl = document.getElementById('specTargetCutoff');

  if (totalExpEl) totalExpEl.innerText = totalSpecExpected.toFixed(2) + '/50';
  if (rangeEl) rangeEl.innerText = lowRange.toFixed(2) + ' - ' + highRange.toFixed(2);
  if (probEl) probEl.innerText = (prob * 100).toFixed(1) + '%';
  if (targetEl) targetEl.innerText = targetCutoff.toFixed(2) + 'đ (' + selectedSchool.school + ')';

  const box = document.getElementById('specWarningBox');
  if (box) {
    if (prob >= 0.70) {
      box.className = 'p-4 rounded-xl border border-emerald-500/40 bg-emerald-950/30 text-emerald-300 font-semibold';
      box.innerHTML = '🟢 AN TOÀN CAO: Xác suất đậu > 70%. Tổng điểm dự báo vượt ngưỡng an toàn cho lớp chuyên!';
    } else if (prob >= 0.40) {
      box.className = 'p-4 rounded-xl border border-amber-500/40 bg-amber-950/30 text-amber-300 font-semibold';
      box.innerHTML = '🟡 CÂN NHẮC / CẠNH TRANH: Xác suất đậu 40% - 70%. Cần tăng cường luyện đề chuyên sâu để bứt phá!';
    } else {
      box.className = 'p-4 rounded-xl border border-red-500/40 bg-red-950/30 text-red-300 font-semibold';
      box.innerHTML = '🔴 NGUY HIỂM / RỦI RO CAO: Xác suất đậu < 40%. Độ rơi điểm đề thi chuyên lớn, nên có phương án trường Thường an toàn!';
    }
  }
}

/**
 * =====================================================================
 * MODULE 3: ĐỊNH HƯỚNG IKIGAI CHỌN MÔN LỚP 10 (Sheet 5 & 6 Excel)
 * =====================================================================
 */
export function openScaleModal() {
  const modal = document.getElementById('scaleModal');
  const content = document.getElementById('scaleModalContent');
  if (!modal || !content) return;

  let html = '<div class="space-y-3">';
  html += '<div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">';

  db.evaluationScale.forEach(item => {
    let colorCls = 'border-emerald-500/30 bg-emerald-950/20 text-emerald-300';
    if (item.level <= 2) colorCls = 'border-red-500/30 bg-red-950/20 text-red-300';
    else if (item.level <= 4) colorCls = 'border-amber-500/30 bg-amber-950/20 text-amber-300';
    else if (item.level <= 6) colorCls = 'border-blue-500/30 bg-blue-950/20 text-blue-300';

    html += `
      <div class="p-3 rounded-xl border ${colorCls} space-y-1">
        <div class="flex justify-between items-center">
          <span class="font-extrabold text-white text-sm">Mức ${item.level} (${item.range})</span>
          <span class="text-[11px] px-2 py-0.5 rounded bg-gray-900/80 font-semibold text-gray-300">${item.title}</span>
        </div>
        <div class="text-[11px] text-pink-300 font-medium"><i class="fa-solid fa-heart mr-1"></i> Đam mê: ${item.passion}</div>
        <div class="text-[11px] text-gray-300">${item.desc}</div>
      </div>
    `;
  });

  html += '</div></div>';
  content.innerHTML = html;
  modal.classList.remove('hidden');
}

export function closeScaleModal() {
  const modal = document.getElementById('scaleModal');
  if (modal) modal.classList.add('hidden');
}

export function initSubjectRatings() {
  const container = document.getElementById('subjectRatingsContainer');
  if (!container) return;
  let html = '';

  const passionOptionsHtml = `
    <option value="10">Mức 10 - Đam mê mãnh liệt</option>
    <option value="9">Mức 9 - Rất đam mê</option>
    <option value="8" selected>Mức 8 - Đam mê rõ ràng</option>
    <option value="7">Mức 7 - Yêu thích</option>
    <option value="6">Mức 6 - Khá yêu thích</option>
    <option value="5">Mức 5 - Có quan tâm</option>
    <option value="4">Mức 4 - Ít hứng thú</option>
    <option value="3">Mức 3 - Không yêu thích</option>
    <option value="2">Mức 2 - Rất ít hứng thú</option>
    <option value="1">Mức 1 - Không có đam mê</option>
  `;

  const abilityOptionsHtml = `
    <option value="10">Mức 10 - Năng lực vượt trội (9.5–10đ)</option>
    <option value="9">Mức 9 - Năng lực xuất sắc (9.0–9.4đ)</option>
    <option value="8" selected>Mức 8 - Năng lực rất tốt (8.5–8.9đ)</option>
    <option value="7">Mức 7 - Năng lực tốt (8.0–8.4đ)</option>
    <option value="6">Mức 6 - Năng lực khá tốt (7.5–7.9đ)</option>
    <option value="5">Mức 5 - Năng lực khá (7.0–7.4đ)</option>
    <option value="4">Mức 4 - NL trung bình khá (6.5–6.9đ)</option>
    <option value="3">Mức 3 - NL trung bình (6.0–6.4đ)</option>
    <option value="2">Mức 2 - NL còn hạn chế (5.0–5.9đ)</option>
    <option value="1">Mức 1 - NL chưa đáp ứng (< 5.0đ)</option>
  `;

  db.subjectList.forEach((sub, idx) => {
    html += '<div class="bg-gray-800/40 p-2.5 sm:p-3 rounded-xl border border-gray-700/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3">';
    html += '<span class="font-semibold text-xs sm:text-sm text-gray-200 shrink-0">' + sub + '</span>';
    html += '<div class="grid grid-cols-2 gap-2 w-full sm:w-auto sm:flex sm:items-center justify-end flex-1">';
    html += '<div class="text-center w-full sm:w-40"><span class="text-[10px] text-pink-300 font-semibold block mb-0.5"><i class="fa-solid fa-heart text-pink-400 mr-0.5"></i> Đam mê</span><select id="passion-' + idx + '" class="w-full bg-gray-900 border border-gray-700 rounded-lg px-1.5 py-1 text-[10px] sm:text-[11px] font-bold text-pink-300 focus:border-pink-500" onchange="window.ikigaiApp.calculateIkigai()">' + passionOptionsHtml + '</select></div>';
    html += '<div class="text-center w-full sm:w-44"><span class="text-[10px] text-indigo-300 font-semibold block mb-0.5"><i class="fa-solid fa-brain text-indigo-400 mr-0.5"></i> Năng lực (Điểm TB)</span><select id="ability-' + idx + '" class="w-full bg-gray-900 border border-gray-700 rounded-lg px-1.5 py-1 text-[10px] sm:text-[11px] font-bold text-indigo-300 focus:border-indigo-500" onchange="window.ikigaiApp.calculateIkigai()">' + abilityOptionsHtml + '</select></div>';
    html += '</div></div>';
  });
  container.innerHTML = html;
}

export function calculateIkigai() {
  const careerSelect = document.getElementById('careerSelect');
  if (!careerSelect) return;
  const selectedCareerId = careerSelect.value;
  const career = db.careers.find(c => c.id === selectedCareerId) || db.careers[0];

  const scatterData = [];

  db.subjectList.forEach((sub, idx) => {
    const pass = parseFloat(document.getElementById('passion-' + idx)?.value) || 8;
    const abil = parseFloat(document.getElementById('ability-' + idx)?.value) || 8;
    const dist = Math.sqrt(Math.pow(10 - pass, 2) + Math.pow(10 - abil, 2));

    scatterData.push({
      subject: sub,
      x: pass,
      y: abil,
      dist: dist
    });
  });

  renderIkigaiChart('ikigaiChart', scatterData);
  renderIkigaiCombos(scatterData, career);
}

function renderIkigaiCombos(scatterData, career) {
  const container = document.getElementById('ikigaiComboResults');
  if (!container) return;

  const combos = [...db.combos];

  combos.forEach(c => {
    let sumDist = 0;
    let warnings = [];
    let hasCriticalRisk = false; // Rủi ro kép (cực ghét & cực dốt)
    let hasWeakAbility = false;  // Năng lực < 6.0
    let hasLowPassion = false;   // Đam mê < 5.0
    let isAllHigh = true;        // Hoàn hảo (Y >= 6.0 & X >= 5.0 cho cả 4 môn)

    c.subjects.forEach(subName => {
      const item = scatterData.find(s => s.subject === subName);
      const x = item ? item.x : 5.0; // Đam mê
      const y = item ? item.y : 5.0; // Năng lực
      const dist = item ? item.dist : 5.0;
      sumDist += dist;

      // Tiêu chuẩn cảnh báo 5 cấp độ chuẩn xác theo Báo cáo Đề tài 24.7 (P341 - P360)
      if (y < 5.0 && x < 5.0) {
        // Cấp 4: Rủi ro Kép (P_Yếu > 0 & P_ĐM > 0)
        warnings.push({
          type: 'red',
          title: '🚨 Cảnh báo nghiêm trọng: Rủi ro Kép',
          subject: subName,
          text: `Môn gặp rủi ro: <strong>${subName}</strong> (Năng lực: Mức ${y} | Đam mê: Mức ${x}). Môn học này bị yếu cả về năng lực lẫn không có đam mê. Nếu chọn tổ hợp này, môn học này sẽ trở thành nguy hiểm kéo tụt điểm trung bình chung (GPA) lớp 10. Không khuyến nghị chọn tổ hợp này trừ khi bắt buộc do yêu cầu của Ngành học mà bạn mơ ước.`
        });
        hasCriticalRisk = true;
        isAllHigh = false;
      } else if (y < 5.0) {
        // Cấp 2: Cảnh báo Năng lực Yếu (P_Yếu > 0)
        warnings.push({
          type: 'yellow',
          title: '🟡 Cảnh báo: Rào cản về kiến thức nền tảng',
          subject: subName,
          text: `Môn gặp rủi ro: <strong>${subName}</strong> (Năng lực: Mức ${y}). Học sinh thích môn này nhưng nền tảng học lực cấp THCS chưa đạt, lên Lớp 10, độ khó tăng cao dễ dẫn đến đuối sức. Cần tăng cường Kế hoạch học tập Bổ trợ ôn tập kiến thức còn hổng để kéo năng lực lên mốc trên 7.0 trước khi vào năm học.`
        });
        hasWeakAbility = true;
        isAllHigh = false;
      } else if (x < 5.0) {
        // Cấp 3: Cảnh báo Thiếu Đam Mê (P_ĐM > 0)
        warnings.push({
          type: 'orange',
          title: '🟠 Cảnh báo: Nguy cơ quá tải & chán nản',
          subject: subName,
          text: `Môn gặp rủi ro: <strong>${subName}</strong> (Đam mê: Mức ${x}). Học sinh có sức học khá/giỏi môn này nhưng không yêu thích. Chọn môn này sẽ gây ra tâm lý gượng ép, áp lực kéo dài trong suốt 3 năm THPT. Cân nhắc đổi sang môn tự chọn thuộc nhóm môn tương đương mà học sinh có hứng thú hơn.`
        });
        hasLowPassion = true;
        isAllHigh = false;
      }
    });

    const avgDist = sumDist / c.subjects.length;
    const matchesCareer = c.blocks.some(b => career.priorityCombos.includes(b));
    const bonus = matchesCareer ? 1.5 : 0;
    
    // Cấp 5: Cảnh báo lệch định hướng ngành (U = 0 và P_Risk > 0)
    const isCareerMismatched = !matchesCareer;
    const hasRisk = hasCriticalRisk || hasWeakAbility || hasLowPassion;
    let isSevereMismatch = isCareerMismatched && hasRisk;

    if (isSevereMismatch) {
      warnings.push({
        type: 'darkred',
        title: '🚫 Cảnh báo tổ hợp lệch định hướng và rủi ro cao',
        subject: 'Định hướng nghề',
        text: `Tổ hợp này vừa không hỗ trợ cho mục tiêu xét tuyển Đại học (Ngành mơ ước), vừa bắt buộc phải học môn chưa đủ năng lực. Do đó, hệ thống đã tự động bị loại khỏi danh sách đề xuất Top 3.`
      });
    }

    // Tính chỉ số K và phạt thứ hạng nếu có rủi ro nghiêm trọng để tránh bẫy "cực ghét cực dốt"
    let penalty = 0;
    if (hasCriticalRisk) penalty += 5.0; // Phạt nặng tổ hợp rủi ro kép
    else if (isSevereMismatch) penalty += 3.0;

    c.kIndex = avgDist - bonus + penalty;
    c.rawKIndex = avgDist - bonus;
    c.avgDist = avgDist;
    c.bonus = bonus;
    c.warnings = warnings;
    c.isAllHigh = isAllHigh;
    c.hasCriticalRisk = hasCriticalRisk;
    c.hasWeakAbility = hasWeakAbility;
    c.hasLowPassion = hasLowPassion;
    c.isSevereMismatch = isSevereMismatch;
  });

  // Sắp xếp tổ hợp theo chỉ số K tăng dần (càng nhỏ càng tối ưu)
  combos.sort((a, b) => a.kIndex - b.kIndex);

  let html = '';
  combos.forEach((c, idx) => {
    const isBest = (idx === 0 && !c.hasCriticalRisk && !c.isSevereMismatch);

    // Xác định huy hiệu trạng thái Ikigai theo 5 cấp độ chuẩn
    let badgeHtml = '';
    if (c.hasCriticalRisk) {
      badgeHtml = '<span class="text-[10px] px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-bold border border-red-500/30">🔴 Rủi Ro Kép</span>';
    } else if (c.isSevereMismatch) {
      badgeHtml = '<span class="text-[10px] px-2 py-0.5 rounded bg-rose-900/40 text-rose-300 font-bold border border-rose-700/50">🚫 Lệch Ngành & Rủi Ro</span>';
    } else if (c.hasWeakAbility) {
      badgeHtml = '<span class="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">🟡 Cảnh Báo Năng Lực Yếu</span>';
    } else if (c.hasLowPassion) {
      badgeHtml = '<span class="text-[10px] px-2 py-0.5 rounded bg-orange-500/20 text-orange-300 font-bold border border-orange-500/30">🟠 Cảnh Báo Thiếu Đam Mê</span>';
    } else if (c.isAllHigh) {
      badgeHtml = '<span class="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">🟢 Chuẩn Ikigai Lý Tưởng</span>';
    } else {
      badgeHtml = '<span class="text-[10px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-semibold border border-indigo-500/30">Khá Phù Hợp</span>';
    }

    const cardBg = isBest 
      ? 'bg-gradient-to-r from-indigo-950/60 to-purple-950/60 border-indigo-500/60 shadow-lg shadow-indigo-950/30' 
      : 'bg-gray-800/40 border-gray-700/60';

    html += '<div class="' + cardBg + ' p-4 rounded-xl border flex flex-col gap-2.5">';
    html += '<div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">';
    html += '<div class="flex items-center gap-2 flex-wrap"><span class="font-bold text-white text-sm">' + c.name + '</span>' + (isBest ? '<span class="text-[10px] px-2 py-0.5 rounded bg-emerald-500/30 text-emerald-300 font-extrabold border border-emerald-500/50">Top 1 Tối Ưu</span>' : '') + badgeHtml + '</div>';
    html += '<div class="text-right shrink-0"><span class="text-xs text-gray-400 mr-2">Chỉ số K:</span><span class="text-xl font-black ' + (isBest ? 'text-emerald-400' : 'text-purple-300') + '">' + c.rawKIndex.toFixed(2) + '</span></div>';
    html += '</div>';

    html += '<div class="text-xs text-gray-300">4 Môn lựa chọn: <span class="font-semibold text-indigo-300">' + c.subjects.join(' + ') + '</span></div>';
    html += '<div class="text-[11px] text-gray-400">Khối thi đại học mở ra: <span class="text-gray-300 font-medium">' + c.blocks.join(', ') + '</span> ' + (c.bonus > 0 ? '<span class="text-amber-400 font-semibold">(Được cộng ưu tiên ngành -1.5đ)</span>' : '') + '</div>';
    html += '<div class="text-[11px] text-gray-400">Ngành nghề tương ứng: <span class="text-gray-300">' + c.majors + '</span></div>';

    // Hiển thị chi tiết cảnh báo và lời khuyên sư phạm
    if (c.warnings && c.warnings.length > 0) {
      html += '<div class="pt-2 mt-1 border-t border-gray-700/50 space-y-1.5">';
      c.warnings.forEach(w => {
        let textCls = 'text-amber-300 bg-amber-950/30 border-amber-800/40';
        if (w.type === 'red' || w.type === 'darkred') textCls = 'text-red-300 bg-red-950/30 border-red-800/40';
        else if (w.type === 'orange') textCls = 'text-orange-300 bg-orange-950/30 border-orange-800/40';

        html += '<div class="text-xs p-2 rounded-lg border ' + textCls + ' leading-relaxed">';
        html += '<div class="font-bold mb-0.5">' + w.title + '</div>';
        html += '<div class="text-[11px] opacity-90">' + w.text + '</div>';
        html += '</div>';
      });
      html += '</div>';
    } else if (c.isAllHigh) {
      html += '<div class="mt-2 p-2.5 rounded-lg bg-emerald-900/20 border border-emerald-500/20">';
      html += '<div class="text-[11px] font-bold text-emerald-400 mb-1">🟢 Tổ hợp tương thích tối ưu</div>';
      html += '<div class="text-[11px] text-emerald-200">Học sinh có nền tảng năng lực vững chắc và hứng thú đồng đều ở cả 4 môn. Nên ưu tiên đăng ký Tổ hợp môn này!</div>';
      html += '</div>';
    }

    html += '</div>';
  });

  container.innerHTML = html;
}

/**
 * =====================================================================
 * TAB NAVIGATION & APP INITIALIZATION
 * =====================================================================
 */
export function changeTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
  const targetTab = document.getElementById(tabId);
  if (targetTab) targetTab.classList.remove('hidden');

  document.querySelectorAll('[id$="-btn"]').forEach(btn => {
    btn.className = 'px-6 py-3 font-semibold text-sm border-b-2 border-transparent text-gray-400 hover:text-gray-200 flex items-center gap-2 whitespace-nowrap';
  });
  const btnEl = document.getElementById(tabId + '-btn');
  if (btnEl) btnEl.className = 'px-6 py-3 font-semibold text-sm border-b-2 border-indigo-500 text-indigo-400 flex items-center gap-2 whitespace-nowrap';
}

export function initApp() {
  const s1 = document.getElementById('nv1Select');
  const s2 = document.getElementById('nv2Select');
  const s3 = document.getElementById('nv3Select');

  if (s1 && s2 && s3) {
    s1.innerHTML = '';
    s2.innerHTML = '';
    s3.innerHTML = '';
    db.schools.forEach(s => {
      const optHtml = '<option value="' + s.id + '">' + s.name + ' (' + s.district + ') - Chuẩn 2027: ' + s.score2027.toFixed(2) + '</option>';
      s1.innerHTML += optHtml;
      s2.innerHTML += optHtml;
      s3.innerHTML += optHtml;
    });
    // Mặc định chọn 3 trường mẫu thực tế
    s1.value = 1;  // THPT Trưng Vương (21.88đ)
    s2.value = 3;  // THPT Ten Lơ Man (20.35đ)
    s3.value = 4;  // THPT Năng khiếu TDTT (13.78đ)
  }

  const specSchool = document.getElementById('specSchoolSelect');
  if (specSchool) {
    specSchool.innerHTML = '';
    db.specializedSchools.forEach(s => {
      specSchool.innerHTML += '<option value="' + s.id + '">' + s.fullName + ' - Chuẩn 2027: ' + s.score2027.toFixed(2) + '</option>';
    });
  }

  const carSelect = document.getElementById('careerSelect');
  if (carSelect) {
    carSelect.innerHTML = '';
    db.careers.forEach(c => {
      carSelect.innerHTML += '<option value="' + c.id + '">' + c.name + '</option>';
    });
  }

  initSubjectRatings();

  const switcherContainer = document.getElementById('engineSwitcherContainer');
  if (switcherContainer) {
    if (CONFIG.SHOW_ENGINE_SWITCHER) {
      switcherContainer.classList.remove('hidden');
    } else {
      switcherContainer.classList.add('hidden');
    }
  }

  // Khởi chạy tính toán cho cả 3 module
  calculateNormalProbabilities();
  onSpecSchoolChange();
  calculateIkigai();
}

window.ikigaiApp = {
  switchEngine,
  calculateNormalProbabilities,
  calculateSpecialized,
  syncScoresFromModule1,
  onSpecSchoolChange,
  calculateIkigai,
  changeTab,
  openScaleModal,
  closeScaleModal,
  initApp
};

window.switchEngine = (checked) => window.ikigaiApp.switchEngine(checked);
window.calculateNormalProbabilities = () => window.ikigaiApp.calculateNormalProbabilities();
window.calculateSpecialized = () => window.ikigaiApp.calculateSpecialized();
window.calculateIkigai = () => window.ikigaiApp.calculateIkigai();
window.changeTab = (tabId) => window.ikigaiApp.changeTab(tabId);
window.openScaleModal = () => window.ikigaiApp.openScaleModal();
window.closeScaleModal = () => window.ikigaiApp.closeScaleModal();

window.unlockSystem = () => {
  const pwdInput = document.getElementById('systemPassword');
  const errorEl = document.getElementById('login-error');
  const password = pwdInput ? pwdInput.value : sessionStorage.getItem('ikigai_pwd');

  if (!password) {
    if (errorEl) {
      errorEl.innerText = "Vui lòng nhập mật khẩu!";
      errorEl.classList.remove('hidden');
    }
    return;
  }

  try {
    // Giải mã dữ liệu
    const bytes = CryptoJS.AES.decrypt(window.ENCRYPTED_DB, password);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    
    // Nạp dữ liệu vào db
    db.schools = decryptedData.schools;
    db.specializedSchools = decryptedData.specializedSchools;
    db.careerCombosRaw = decryptedData.careerCombosRaw;
    db.subjectList = decryptedData.subjectList;
    db.evaluationScale = decryptedData.evaluationScale;
    db.combos = decryptedData.combos;
    db.careers = decryptedData.careers;

    // Lưu phiên đăng nhập
    sessionStorage.setItem('ikigai_pwd', password);
    
    // Ẩn overlay, hiện app
    const overlay = document.getElementById('login-overlay');
    const content = document.getElementById('app-content');
    if (overlay) overlay.classList.add('hidden');
    if (content) content.classList.remove('hidden');
    
    // Khởi tạo app
    initApp();

  } catch (e) {
    console.error("Sai mật khẩu hoặc lỗi giải mã", e);
    if (errorEl) {
      errorEl.innerText = "Mật khẩu không chính xác!";
      errorEl.classList.remove('hidden');
    }
    sessionStorage.removeItem('ikigai_pwd');
  }
}

// Kiểm tra phiên đăng nhập cũ
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    if (sessionStorage.getItem('ikigai_pwd')) {
      window.unlockSystem();
    }
  });
} else {
  if (sessionStorage.getItem('ikigai_pwd')) {
    window.unlockSystem();
  }
}
