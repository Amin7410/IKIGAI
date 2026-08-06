import { normalCDF } from '../core/mathUtils.js';

/**
 * 1. Engine Bản 1 (Công thức chuẩn thống kê theo độ phân tán 3.92 SE)
 */
export const ExcelOriginalEngine = {
  name: 'Bản 1',
  calculateStdDev: function(minTotal, maxTotal, stdMath, stdLit, stdEng) {
    return Math.max(0.2, (maxTotal - minTotal) / 3.92);
  },
  calculateProbabilities: function(d1, d2, d3, mean, stdDev) {
    const p1 = 1 - normalCDF(d1, mean, stdDev);
    const p2 = 1 - normalCDF(d2, mean, stdDev);
    const p3 = 1 - normalCDF(d3, mean, stdDev);
    return {
      nv1: p1,
      nv2: p2,
      nv3: p3,
      isJoint: false
    };
  }
};

/**
 * 2. Engine Bản 2 (Theo công thức Sheet 2 mới của Excel: sigma = MIN((Max - Min)/6, 1.0))
 */
export const MathCorrectedEngine = {
  name: 'Bản 2',
  calculateStdDev: function(minTotal, maxTotal, stdMath, stdLit, stdEng) {
    // Công thức Excel Sheet 2: MIN((MaxTotal - MinTotal)/6, 1.0)
    const rawSigma = (maxTotal - minTotal) / 6.0;
    return Math.min(Math.max(rawSigma, 0.25), 1.00);
  },
  calculateProbabilities: function(d1, d2, d3, mean, stdDev) {
    const p1 = 1 - normalCDF(d1, mean, stdDev);
    const p2 = 1 - normalCDF(d2, mean, stdDev);
    const p3 = 1 - normalCDF(d3, mean, stdDev);
    return {
      nv1: p1,
      nv2: p2,
      nv3: p3,
      isJoint: false
    };
  }
};

