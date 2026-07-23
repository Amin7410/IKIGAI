/**
 * Database Layer for IKIGAI Positioning System
 * Stores static dataset for Schools, Specialized Programs, Careers, and Combos
 */
export const db = {
  schools: [
    {id: 1, name: 'THPT Nguyễn Thượng Hiền', district: 'Tân Bình', score2024: 24.25, score2025: 24.5, score2026: 25.5},
    {id: 2, name: 'THPT Nguyễn Thị Minh Khai', district: 'Quận 3', score2024: 23.25, score2025: 23.75, score2026: 24.5},
    {id: 3, name: 'THPT Bùi Thị Xuân', district: 'Quận 1', score2024: 22.25, score2025: 22.25, score2026: 24.25},
    {id: 4, name: 'THPT Gia Định', district: 'Bình Thạnh', score2024: 22.75, score2025: 23.0, score2026: 24.0},
    {id: 5, name: 'THPT Lê Quý Đôn', district: 'Quận 3', score2024: 22.5, score2025: 22.25, score2026: 23.75},
    {id: 6, name: 'THPT Phú Nhuận', district: 'Phú Nhuận', score2024: 22.5, score2025: 22.5, score2026: 23.5},
    {id: 7, name: 'THPT Nguyễn Hữu Huân', district: 'TP. Thủ Đức', score2024: 22.0, score2025: 22.25, score2026: 23.5},
    {id: 8, name: 'THPT Mạc Đĩnh Chi', district: 'Quận 6', score2024: 21.0, score2025: 21.25, score2026: 22.75},
    {id: 9, name: 'THPT Trần Phú', district: 'Tân Phú', score2024: 21.5, score2025: 21.75, score2026: 22.75},
    {id: 10, name: 'THPT Marie Curie', district: 'Quận 3', score2024: 19.75, score2025: 19.5, score2026: 22.25},
    {id: 11, name: 'THPT Trưng Vương', district: 'Quận 1', score2024: 21.0, score2025: 20.25, score2026: 21.75},
    {id: 12, name: 'THPT Trần Hưng Đạo', district: 'Gò Vấp', score2024: 19.5, score2025: 19.75, score2026: 21.0},
    {id: 13, name: 'THPT Lương Thế Vinh', district: 'Quận 1', score2024: 19.0, score2025: 19.25, score2026: 20.75},
    {id: 14, name: 'THPT Ten Lơ Man', district: 'Quận 1', score2024: 18.25, score2025: 18.0, score2026: 20.5},
    {id: 15, name: 'THPT Hùng Vương', district: 'Quận 5', score2024: 18.5, score2025: 18.25, score2026: 20.0}
  ],
  specializedSchools: [
    {id: 1, name: 'THPT Chuyên Lê Hồng Phong - Chuyên Anh', score2026: 39.0},
    {id: 2, name: 'THPT Chuyên Lê Hồng Phong - Chuyên Toán', score2026: 39.5},
    {id: 3, name: 'THPT Chuyên Trần Đại Nghĩa - Chuyên Anh', score2026: 38.0},
    {id: 4, name: 'THPT Gia Định - Chuyên Tin', score2026: 35.5}
  ],
  careers: [
    {id: 'cntt', name: 'CNTT, AI, Khoa học dữ liệu', priorityCombos: ['A00', 'A01', 'X26'], recommended: ['Vật lí', 'Tin học', 'Công nghệ', 'GDKT&PL']},
    {id: 'kinhte', name: 'Kinh tế, Tài chính - Ngân hàng, Quản trị', priorityCombos: ['A01', 'D01', 'X25'], recommended: ['GDKT&PL', 'Tin học', 'Địa lí', 'Vật lí']},
    {id: 'yduoc', name: 'Y khoa, Dược, Công nghệ sinh học', priorityCombos: ['B00', 'D07'], recommended: ['Hóa học', 'Sinh học', 'Vật lí', 'Tin học']},
    {id: 'luat', name: 'Luật, Báo chí, Truyền thông', priorityCombos: ['C00', 'D01', 'D14'], recommended: ['GDKT&PL', 'Địa lí', 'Tin học', 'Mĩ thuật']}
  ],
  subjectList: ['Vật lí', 'Hóa học', 'Sinh học', 'Địa lí', 'GDKT&PL', 'Tin học', 'Công nghệ', 'Mĩ thuật', 'Âm nhạc'],
  combos: [
    {name: 'Tổ hợp 1: Tự Nhiên & Công Nghệ', subjects: ['Vật lí', 'Hóa học', 'Tin học', 'Công nghệ'], blocks: ['A00', 'A01', 'X26']},
    {name: 'Tổ hợp 2: Y Sinh & Môi Trường', subjects: ['Hóa học', 'Sinh học', 'Vật lí', 'Tin học'], blocks: ['B00', 'A00', 'D07']},
    {name: 'Tổ hợp 3: Kinh Tế - Số & Logistics', subjects: ['Vật lí', 'Tin học', 'GDKT&PL', 'Địa lí'], blocks: ['A01', 'D01', 'D10', 'X25']},
    {name: 'Tổ hợp 4: Xã Hội & Truyền Thông', subjects: ['GDKT&PL', 'Địa lí', 'Tin học', 'Mĩ thuật'], blocks: ['C00', 'D01', 'D14', 'D15']},
    {name: 'Tổ hợp 5: Thiết Kế & Mỹ Thuật', subjects: ['Mĩ thuật', 'Tin học', 'Công nghệ', 'Vật lí'], blocks: ['V00', 'V01', 'H00', 'H01']}
  ]
};
