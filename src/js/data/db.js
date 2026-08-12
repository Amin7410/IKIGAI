/**
 * Database Layer for IKIGAI Positioning System
 * Dữ liệu đã được mã hóa để bảo mật (AES-256).
 * Sẽ được giải mã và nạp vào đây trong thời gian chạy (runtime) sau khi nhập đúng Mật khẩu.
 */
export const db = {
  schools: [],
  specializedSchools: [],
  careerCombosRaw: [],
  subjectList: [],
  evaluationScale: [],
  combos: [],
  careers: []
};
