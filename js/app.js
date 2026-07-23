import { db } from './data/db.js';
import { normalCDF } from './core/mathUtils.js';
import { ExcelOriginalEngine, MathCorrectedEngine } from './engines/calculationEngines.js';
import { renderGaussChart, renderIkigaiChart } from './ui/charts.js';

export const CONFIG = {
  SHOW_ENGINE_SWITCHER: true
};

let isMathCorrectedEngine = false;

export function getActiveEngine() {
  return isMathCorrectedEngine ? MathCorrectedEngine : ExcelOriginalEngine;
}

export function switchEngine(checked) {
  isMathCorrectedEngine = checked;
  const label = document.getElementById('currentEngineLabel');
  const desc = document.getElementById('currentEngineDesc');
  const badge = document.getElementById('engineBadge');

  if (checked) {
    if (label) label.innerText = 'Bản 2';
    if (badge) {
      badge.innerText = 'Bản 2';
      badge.className = 'text-[10px] px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 font-semibold';
    }
  } else {
    if (label) label.innerText = 'Bản 1';
    if (badge) {
      badge.innerText = 'Bản 1';
      badge.className = 'text-[10px] px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-semibold';
    }
  }
  calculateNormalProbabilities();
}

export function calculateNormalProbabilities() {
  const mathInput = document.getElementById('mathScore');
  const litInput = document.getElementById('litScore');
  const engInput = document.getElementById('engScore');

  if (!mathInput || !litInput || !engInput) return;

  const math = parseFloat(mathInput.value) || 0;
  const lit = parseFloat(litInput.value) || 0;
  const eng = parseFloat(engInput.value) || 0;

  const kMath = (math >= 9.0) ? 0.75 : (math >= 8.0 ? 1.85 : 2.50);
  const kLit = (lit >= 8.5) ? 0.80 : (lit >= 7.5 ? 1.40 : 2.20);
  const kEng = (eng >= 9.0) ? 0.75 : (eng >= 8.0 ? 1.85 : 2.50);

  const minMath = math - (1.96 * 1.0 * kMath);
  const maxMath = math + (1.96 * 1.0 * kMath);

  const minLit = lit - (1.96 * 1.0 * kLit);
  const maxLit = lit + (1.96 * 1.0 * kLit);

  const minEng = eng - (1.96 * 1.0 * kEng);
  const maxEng = eng + (1.96 * 1.0 * kEng);

  const minTotal = minMath + minLit + minEng;
  const maxTotal = maxMath + maxLit + maxEng;
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
  const s2 = db.schools.find(s => s.id == s2Val) || db.schools[1];
  const s3 = db.schools.find(s => s.id == s3Val) || db.schools[2];

  const probs = engine.calculateProbabilities(s1.score2026, s2.score2026, s3.score2026, mean, stdDev);

  renderNVResultCards(s1, s2, s3, probs);
  renderGaussChart('gaussChart', mean, stdDev, s1.score2026, s2.score2026, s3.score2026);
}

function renderNVResultCards(s1, s2, s3, probs) {
  const container = document.getElementById('nvResultCards');
  if (!container) return;
  let html = '';

  const nvList = [
    { name: 'NV1: ' + s1.name, score: s1.score2026, prob: probs.nv1, label: 'NV Vừa Sức' },
    { name: 'NV2: ' + s2.name, score: s2.score2026, prob: probs.nv2, label: 'NV An Toàn' },
    { name: 'NV3: ' + s3.name, score: s3.score2026, prob: probs.nv3, label: 'NV Bảo Hiểm' }
  ];

  nvList.forEach((item) => {
    let badgeColor = 'bg-red-500/20 text-red-400 border-red-500/30';
    let badgeText = '🔴 Nguy Hiểm';
    let percentDisplay = (item.prob * 100).toFixed(1) + '%';

    if (item.prob >= 0.75) {
      badgeColor = 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      badgeText = '🟢 An Toàn Cao';
    } else if (item.prob >= 0.30) {
      badgeColor = 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      badgeText = '🟡 Cân Nhắc';
    }

    html += '<div class="bg-gray-800/50 p-4 rounded-xl border border-gray-700 flex items-center justify-between">';
    html += '<div><div class="flex items-center gap-2"><span class="font-bold text-white">' + item.name + '</span><span class="text-[10px] px-2 py-0.5 rounded ' + badgeColor + ' border font-semibold">' + badgeText + '</span></div>';
    html += '<div class="text-xs text-gray-400 mt-1">Điểm chuẩn dự báo 2026: <span class="font-bold text-gray-200">' + item.score + '</span></div></div>';
    html += '<div class="text-right"><div class="text-2xl font-black ' + (item.prob >= 0.75 ? 'text-emerald-400' : (item.prob >= 0.3 ? 'text-amber-400' : 'text-red-400')) + '">' + percentDisplay + '</div>';
    html += '<div class="text-[10px] text-gray-400">' + (probs.isJoint ? 'Xác suất phân bố rời rạc' : 'Xác suất độc lập') + '</div></div></div>';
  });

  if (probs.isJoint && probs.rot !== undefined) {
    html += '<div class="bg-red-950/30 p-3 rounded-xl border border-red-800/40 text-xs text-red-300 flex justify-between items-center"><span><i class="fa-solid fa-triangle-exclamation mr-1"></i> Xác suất rớt sạch cả 3 nguyện vọng:</span><span class="font-bold text-sm">' + (probs.rot * 100).toFixed(1) + '%</span></div>';
  }

  container.innerHTML = html;
}

export function calculateSpecialized() {
  const scoreInput = document.getElementById('specScoreInput');
  const typeSelect = document.getElementById('specTypeSelect');
  const schoolSelect = document.getElementById('specSchoolSelect');

  if (!scoreInput || !typeSelect || !schoolSelect) return;

  const specScore = parseFloat(scoreInput.value) || 0;
  const type = typeSelect.value;
  const schoolId = schoolSelect.value;

  const school = db.specializedSchools.find(s => s.id == schoolId) || db.specializedSchools[0];

  let penaltyMax = (specScore >= 9.5) ? 0.92 : ((specScore >= 9.0) ? 2.50 : 4.50);
  let penaltyMin = (specScore >= 9.5) ? 3.50 : ((specScore >= 9.0) ? 5.50 : 6.48);

  const engMultiplierMax = (type === 'english') ? 0.95 : 1.0;
  const engMultiplierMin = (type === 'english') ? 0.90 : 1.0;

  const specMax = (specScore - penaltyMax) * engMultiplierMax;
  const specMin = (specScore - penaltyMin) * engMultiplierMin;

  const baseMean = parseFloat(document.getElementById('statMean')?.innerText) || 24;
  const totalSpecMax = baseMean + (specMax * 2);
  const totalSpecMin = baseMean + (specMin * 2);

  const specMean = (totalSpecMax + totalSpecMin) / 2;
  const specStd = (totalSpecMax - totalSpecMin) / 3.92;

  const prob = 1 - normalCDF(school.score2026, specMean, specStd);

  const rangeEl = document.getElementById('specPointRange');
  const probEl = document.getElementById('specProbPercent');
  if (rangeEl) rangeEl.innerText = totalSpecMin.toFixed(1) + ' - ' + totalSpecMax.toFixed(1);
  if (probEl) probEl.innerText = (prob * 100).toFixed(1) + '%';

  const box = document.getElementById('specWarningBox');
  if (box) {
    if (prob >= 0.7) {
      box.className = 'p-4 rounded-xl border border-emerald-500/40 bg-emerald-950/30 text-emerald-300 font-semibold';
      box.innerHTML = '🟢 AN TOÀN: Xác suất đậu > 70%. Năng lực đạt ngưỡng an toàn cho lớp Chuyên!';
    } else if (prob >= 0.4) {
      box.className = 'p-4 rounded-xl border border-amber-500/40 bg-amber-950/30 text-amber-300 font-semibold';
      box.innerHTML = '🟡 CÂN NHẮC: Xác suất đậu 40 - 70%. Khu vực cạnh tranh quyết định, cần tập trung giải đề chuyên sâu!';
    } else {
      box.className = 'p-4 rounded-xl border border-red-500/40 bg-red-950/30 text-red-300 font-semibold';
      box.innerHTML = '🔴 NGUY HIỂM: Xác suất đậu < 40%. Độ rơi điểm môn Chuyên quá lớn, nên tập trung cho trường Thường!';
    }
  }
}

export function initSubjectRatings() {
  const container = document.getElementById('subjectRatingsContainer');
  if (!container) return;
  let html = '';

  db.subjectList.forEach((sub, idx) => {
    html += '<div class="bg-gray-800/40 p-3 rounded-xl border border-gray-700/60 flex items-center justify-between gap-4"><span class="font-semibold text-sm text-gray-200 w-28">' + sub + '</span><div class="flex items-center gap-4"><div class="text-center"><span class="text-[10px] text-gray-400 block">Đam mê</span><input type="number" id="passion-' + idx + '" value="8" min="1" max="10" class="w-14 bg-gray-900 border border-gray-700 rounded-lg px-2 py-1 text-xs text-center font-bold text-pink-400" oninput="window.ikigaiApp.calculateIkigai()"></div><div class="text-center"><span class="text-[10px] text-gray-400 block">Năng lực</span><input type="number" id="ability-' + idx + '" value="8" min="1" max="10" class="w-14 bg-gray-900 border border-gray-700 rounded-lg px-2 py-1 text-xs text-center font-bold text-indigo-400" oninput="window.ikigaiApp.calculateIkigai()"></div></div></div>';
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
    const pass = parseFloat(document.getElementById('passion-' + idx)?.value) || 5;
    const abil = parseFloat(document.getElementById('ability-' + idx)?.value) || 5;
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
    c.subjects.forEach(subName => {
      const item = scatterData.find(s => s.subject === subName);
      sumDist += item ? item.dist : 5.0;
    });
    const avgDist = sumDist / 4.0;
    const matchesCareer = c.blocks.some(b => career.priorityCombos.includes(b));
    const bonus = matchesCareer ? 1.5 : 0;
    c.kIndex = avgDist - bonus;
    c.avgDist = avgDist;
    c.bonus = bonus;
  });

  combos.sort((a, b) => a.kIndex - b.kIndex);

  let html = '';
  combos.forEach((c, idx) => {
    const isBest = (idx === 0);
    html += '<div class="' + (isBest ? 'bg-gradient-to-r from-indigo-900/50 to-purple-900/50 border-indigo-500/50' : 'bg-gray-800/40 border-gray-700/60') + ' p-4 rounded-xl border flex flex-col md:flex-row justify-between items-start md:items-center gap-3"><div><div class="flex items-center gap-2 mb-1"><span class="font-bold text-white text-sm">' + c.name + '</span>' + (isBest ? '<span class="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">Top 1 Tối Ưu</span>' : '') + '</div><div class="text-xs text-gray-300">4 Môn: <span class="font-semibold text-indigo-300">' + c.subjects.join(' + ') + '</span></div><div class="text-[11px] text-gray-400 mt-1">Khối thi mở ra: ' + c.blocks.join(', ') + ' ' + (c.bonus > 0 ? '<span class="text-amber-400 font-semibold">(Được thưởng ngành -1.5đ)</span>' : '') + '</div></div><div class="text-right whitespace-nowrap"><div class="text-xs text-gray-400">Chỉ số K</div><div class="text-xl font-black ' + (isBest ? 'text-emerald-400' : 'text-purple-300') + '">' + c.kIndex.toFixed(2) + '</div></div></div>';
  });

  container.innerHTML = html;
}

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
      s1.innerHTML += '<option value="' + s.id + '">' + s.name + ' (' + s.district + ') - ĐC 2026: ' + s.score2026 + '</option>';
      s2.innerHTML += '<option value="' + s.id + '">' + s.name + ' (' + s.district + ') - ĐC 2026: ' + s.score2026 + '</option>';
      s3.innerHTML += '<option value="' + s.id + '">' + s.name + ' (' + s.district + ') - ĐC 2026: ' + s.score2026 + '</option>';
    });
    s1.value = 1;
    s2.value = 2;
    s3.value = 3;
  }

  const specSelect = document.getElementById('specSchoolSelect');
  if (specSelect) {
    specSelect.innerHTML = '';
    db.specializedSchools.forEach(s => {
      specSelect.innerHTML += '<option value="' + s.id + '">' + s.name + ' - ĐC: ' + s.score2026 + '</option>';
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

  calculateNormalProbabilities();
  calculateSpecialized();
  calculateIkigai();
}

window.ikigaiApp = {
  switchEngine,
  calculateNormalProbabilities,
  calculateSpecialized,
  calculateIkigai,
  changeTab,
  initApp
};

window.switchEngine = (checked) => window.ikigaiApp.switchEngine(checked);
window.calculateNormalProbabilities = () => window.ikigaiApp.calculateNormalProbabilities();
window.calculateSpecialized = () => window.ikigaiApp.calculateSpecialized();
window.calculateIkigai = () => window.ikigaiApp.calculateIkigai();
window.changeTab = (tabId) => window.ikigaiApp.changeTab(tabId);

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
