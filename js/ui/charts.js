let gaussChartInstance = null;
let ikigaiChartInstance = null;

export function renderGaussChart(canvasId, mean, stdDev, s1, s2, s3) {
  const ctx = document.getElementById(canvasId).getContext('2d');
  const labels = [];
  const dataPoints = [];

  const start = mean - 4 * stdDev;
  const end = mean + 4 * stdDev;
  const step = (end - start) / 60;

  for (let x = start; x <= end; x += step) {
    labels.push(x.toFixed(1));
    const y = (1 / (stdDev * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - mean) / stdDev, 2));
    dataPoints.push(y);
  }

  if (gaussChartInstance) gaussChartInstance.destroy();

  gaussChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Phân Phối Chuẩn Gauss',
        data: dataPoints,
        borderColor: '#818cf8',
        backgroundColor: 'rgba(99, 102, 241, 0.15)',
        fill: true,
        tension: 0.4,
        pointRadius: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#9ca3af', maxTicksLimit: 8 } },
        y: { display: false }
      }
    }
  });
}

export function renderIkigaiChart(canvasId, scatterData) {
  const ctx = document.getElementById(canvasId).getContext('2d');

  const datasets = scatterData.map(s => ({
    label: s.subject,
    data: [{x: s.x, y: s.y}],
    backgroundColor: '#818cf8',
    pointRadius: 6
  }));

  datasets.push({
    label: 'Mốc Ikigai I(10,10)',
    data: [{x: 10, y: 10}],
    backgroundColor: '#ec4899',
    pointRadius: 10,
    pointStyle: 'star'
  });

  if (ikigaiChartInstance) ikigaiChartInstance.destroy();

  ikigaiChartInstance = new Chart(ctx, {
    type: 'scatter',
    data: { datasets: datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { title: { display: true, text: 'Trục Ox: Đam Mê (1-10)', color: '#9ca3af' }, min: 0, max: 10.5, grid: { color: 'rgba(255,255,255,0.05)' } },
        y: { title: { display: true, text: 'Trục Oy: Năng Lực (1-10)', color: '#9ca3af' }, min: 0, max: 10.5, grid: { color: 'rgba(255,255,255,0.05)' } }
      }
    }
  });
}
