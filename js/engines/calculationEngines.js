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
    const rMathEng = 0.45;
    const rMathLit = 0.25;
    const rLitEng = 0.35;

    const covMathEng = rMathEng * stdMath * stdEng;
    const covMathLit = rMathLit * stdMath * stdLit;
    const covLitEng  = rLitEng  * stdLit * stdEng;

    const varianceTotal = Math.pow(stdMath, 2) + Math.pow(stdLit, 2) + Math.pow(stdEng, 2)
                        + (2 * covMathEng) + (2 * covMathLit) + (2 * covLitEng);

    return Math.sqrt(varianceTotal);
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
