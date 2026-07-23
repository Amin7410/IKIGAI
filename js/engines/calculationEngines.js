import { normalCDF } from '../core/mathUtils.js';

/**
 * 1. Engine Bản 1 (Bản Gốc Theo Excel)
 */
export const ExcelOriginalEngine = {
  name: 'Bản 1',
  calculateStdDev: function(minTotal, maxTotal, stdMath, stdLit, stdEng) {
    return (maxTotal - minTotal) / 3.92;
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
 * 2. Engine Bản 2
 */
export const MathCorrectedEngine = {
  name: 'Bản 2',
  calculateStdDev: function(minTotal, maxTotal, stdMath, stdLit, stdEng) {
    // Độ lệch chuẩn cố định chuẩn hóa bằng 1.00 (theo trung vị đánh giá rủi ro)
    return 1.00;
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
