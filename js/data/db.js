/**
 * Database Layer for IKIGAI Positioning System
 * Source: Dữ liệu dự án_NTN.xlsx (Full 170 standard schools + 42 specialized programs + Careers)
 */
export const db = {
  schools: [
    {
        "id": 1,
        "name": "THPT Trưng Vương",
        "district": "TP.HCM cũ",
        "score2024": 21.0,
        "score2025": 20.25,
        "score2026": 21.75,
        "scoreWMA": 21.15,
        "score2027": 21.88,
        "quota": 900
    },
    {
        "id": 2,
        "name": "THPT Bùi Thị Xuân",
        "district": "TP.HCM cũ",
        "score2024": 22.25,
        "score2025": 22.25,
        "score2026": 24.25,
        "scoreWMA": 23.25,
        "score2027": 24.49,
        "quota": 630
    },
    {
        "id": 3,
        "name": "THPT Ten Lơ Man",
        "district": "TP.HCM cũ",
        "score2024": 18.25,
        "score2025": 18.0,
        "score2026": 20.5,
        "scoreWMA": 19.3,
        "score2027": 20.35,
        "quota": 585
    },
    {
        "id": 4,
        "name": "THPT Năng khiếu TDTT",
        "district": "TP.HCM cũ",
        "score2024": 13.0,
        "score2025": 11.75,
        "score2026": 14.0,
        "scoreWMA": 13.12,
        "score2027": 13.56,
        "quota": 280
    },
    {
        "id": 5,
        "name": "THCS và THPT Trần Đại Nghĩa",
        "district": "TP.HCM cũ",
        "score2024": 20.0,
        "score2025": 24.5,
        "score2026": 24.0,
        "scoreWMA": 23.35,
        "score2027": 24.19,
        "quota": 360
    },
    {
        "id": 6,
        "name": "THPT Lương Thế Vinh",
        "district": "TP.HCM cũ",
        "score2024": 20.5,
        "score2025": 20.75,
        "score2026": 22.75,
        "scoreWMA": 21.7,
        "score2027": 23.49,
        "quota": 225
    },
    {
        "id": 7,
        "name": "THPT Giồng Ông Tố",
        "district": "TP.HCM cũ",
        "score2024": 16.75,
        "score2025": 17.5,
        "score2026": 18.75,
        "scoreWMA": 17.98,
        "score2027": 18.72,
        "quota": 675
    },
    {
        "id": 8,
        "name": "THPT Thủ Thiêm",
        "district": "TP.HCM cũ",
        "score2024": 14.0,
        "score2025": 12.5,
        "score2026": 14.25,
        "scoreWMA": 13.68,
        "score2027": 14.1,
        "quota": 810
    },
    {
        "id": 9,
        "name": "THPT Lê Quý Đôn",
        "district": "TP.HCM cũ",
        "score2024": 22.5,
        "score2025": 22.25,
        "score2026": 23.75,
        "scoreWMA": 23.05,
        "score2027": 24.04,
        "quota": 560
    },
    {
        "id": 10,
        "name": "THPT Nguyễn Thị Minh Khai",
        "district": "TP.HCM cũ",
        "score2024": 23.25,
        "score2025": 23.75,
        "score2026": 24.5,
        "scoreWMA": 24.02,
        "score2027": 25.02,
        "quota": 810
    },
    {
        "id": 11,
        "name": "THPT Lê Thị Hồng Gấm",
        "district": "TP.HCM cũ",
        "score2024": 14.75,
        "score2025": 12.0,
        "score2026": 14.25,
        "scoreWMA": 13.68,
        "score2027": 14.09,
        "quota": 495
    },
    {
        "id": 12,
        "name": "THPT Marie Curie",
        "district": "TP.HCM cũ",
        "score2024": 19.75,
        "score2025": 19.5,
        "score2026": 22.25,
        "scoreWMA": 20.93,
        "score2027": 22.23,
        "quota": 1000
    },
    {
        "id": 13,
        "name": "THPT Nguyễn Thị Diệu",
        "district": "TP.HCM cũ",
        "score2024": 15.25,
        "score2025": 10.5,
        "score2026": 15.75,
        "scoreWMA": 14.08,
        "score2027": 14.67,
        "quota": 765
    },
    {
        "id": 14,
        "name": "THPT Nguyễn Trãi",
        "district": "TP.HCM cũ",
        "score2024": 13.75,
        "score2025": 11.25,
        "score2026": 15.25,
        "scoreWMA": 13.75,
        "score2027": 14.37,
        "quota": 675
    },
    {
        "id": 15,
        "name": "Trung học thực hành Sài Gòn",
        "district": "TP.HCM cũ",
        "score2024": 21.0,
        "score2025": 21.5,
        "score2026": 23.5,
        "scoreWMA": 22.4,
        "score2027": 23.6,
        "quota": 175
    },
    {
        "id": 16,
        "name": "THPT Nguyễn Hữu Thọ",
        "district": "TP.HCM cũ",
        "score2024": 16.0,
        "score2025": 14.0,
        "score2026": 18.25,
        "scoreWMA": 16.52,
        "score2027": 17.58,
        "quota": 765
    },
    {
        "id": 17,
        "name": "THPT Hùng Vương",
        "district": "TP.HCM cũ",
        "score2024": 18.25,
        "score2025": 17.75,
        "score2026": 21.0,
        "scoreWMA": 19.48,
        "score2027": 20.61,
        "quota": 1035
    },
    {
        "id": 18,
        "name": "Trung học thực hành Sư phạm",
        "district": "TP.HCM cũ",
        "score2024": 23.0,
        "score2025": 23.0,
        "score2026": 24.5,
        "scoreWMA": 23.75,
        "score2027": 24.96,
        "quota": 280
    },
    {
        "id": 19,
        "name": "THPT Trần Khai Nguyên",
        "district": "TP.HCM cũ",
        "score2024": 19.75,
        "score2025": 21.0,
        "score2026": 23.0,
        "scoreWMA": 21.75,
        "score2027": 23.08,
        "quota": 720
    },
    {
        "id": 20,
        "name": "THPT Trần Hữu Trang",
        "district": "TP.HCM cũ",
        "score2024": 13.75,
        "score2025": 12.5,
        "score2026": 14.0,
        "scoreWMA": 13.5,
        "score2027": 13.89,
        "quota": 540
    },
    {
        "id": 21,
        "name": "THPT Mạc Đĩnh Chi",
        "district": "TP.HCM cũ",
        "score2024": 22.5,
        "score2025": 22.25,
        "score2026": 24.25,
        "scoreWMA": 23.3,
        "score2027": 24.39,
        "quota": 990
    },
    {
        "id": 22,
        "name": "THPT Bình Phú",
        "district": "TP.HCM cũ",
        "score2024": 19.5,
        "score2025": 20.25,
        "score2026": 22.5,
        "scoreWMA": 21.23,
        "score2027": 22.44,
        "quota": 720
    },
    {
        "id": 23,
        "name": "THPT Nguyễn Tất Thành",
        "district": "TP.HCM cũ",
        "score2024": 17.0,
        "score2025": 16.75,
        "score2026": 19.75,
        "scoreWMA": 18.3,
        "score2027": 19.28,
        "quota": 855
    },
    {
        "id": 24,
        "name": "THPT Phạm Phú Thứ",
        "district": "TP.HCM cũ",
        "score2024": 14.75,
        "score2025": 14.25,
        "score2026": 17.0,
        "scoreWMA": 15.72,
        "score2027": 16.46,
        "quota": 675
    },
    {
        "id": 25,
        "name": "THPT Lê Thánh Tôn",
        "district": "TP.HCM cũ",
        "score2024": 17.25,
        "score2025": 17.25,
        "score2026": 20.0,
        "scoreWMA": 18.62,
        "score2027": 19.72,
        "quota": 585
    },
    {
        "id": 26,
        "name": "THPT Tân Phong",
        "district": "TP.HCM cũ",
        "score2024": 14.0,
        "score2025": 13.75,
        "score2026": 15.75,
        "scoreWMA": 14.8,
        "score2027": 15.41,
        "quota": 765
    },
    {
        "id": 27,
        "name": "THPT Ngô Quyền",
        "district": "TP.HCM cũ",
        "score2024": 18.75,
        "score2025": 20.0,
        "score2026": 21.25,
        "scoreWMA": 20.38,
        "score2027": 21.3,
        "quota": 765
    },
    {
        "id": 28,
        "name": "THPT Nam Sài Gòn",
        "district": "TP.HCM cũ",
        "score2024": 20.25,
        "score2025": 20.25,
        "score2026": 22.25,
        "scoreWMA": 21.25,
        "score2027": 22.55,
        "quota": 225
    },
    {
        "id": 29,
        "name": "THPT Lương Văn Can",
        "district": "TP.HCM cũ",
        "score2024": 13.5,
        "score2025": 12.25,
        "score2026": 15.75,
        "scoreWMA": 14.25,
        "score2027": 15.0,
        "quota": 675
    },
    {
        "id": 30,
        "name": "THPT Ngô Gia Tự",
        "district": "TP.HCM cũ",
        "score2024": 14.0,
        "score2025": 10.5,
        "score2026": 13.25,
        "scoreWMA": 12.58,
        "score2027": 13.16,
        "quota": 765
    },
    {
        "id": 31,
        "name": "THPT Tạ Quang Bửu",
        "district": "TP.HCM cũ",
        "score2024": 15.25,
        "score2025": 15.0,
        "score2026": 18.0,
        "scoreWMA": 16.55,
        "score2027": 17.45,
        "quota": 720
    },
    {
        "id": 32,
        "name": "THPT Nguyễn Văn Linh",
        "district": "TP.HCM cũ",
        "score2024": 11.25,
        "score2025": 10.5,
        "score2026": 11.75,
        "scoreWMA": 11.28,
        "score2027": 11.55,
        "quota": 675
    },
    {
        "id": 33,
        "name": "THPT Võ Văn Kiệt",
        "district": "TP.HCM cũ",
        "score2024": 16.5,
        "score2025": 15.0,
        "score2026": 18.0,
        "scoreWMA": 16.8,
        "score2027": 17.65,
        "quota": 720
    },
    {
        "id": 34,
        "name": "Phổ thông NK TDTT Nguyễn Thị Định",
        "district": "TP.HCM cũ",
        "score2024": 13.0,
        "score2025": 12.5,
        "score2026": 14.5,
        "scoreWMA": 13.6,
        "score2027": 14.16,
        "quota": 360
    },
    {
        "id": 35,
        "name": "THPT Nguyễn Huệ",
        "district": "TP.HCM cũ",
        "score2024": 15.25,
        "score2025": 15.0,
        "score2026": 18.5,
        "scoreWMA": 16.8,
        "score2027": 17.96,
        "quota": 675
    },
    {
        "id": 36,
        "name": "THPT Phước Long",
        "district": "TP.HCM cũ",
        "score2024": 16.25,
        "score2025": 16.25,
        "score2026": 19.25,
        "scoreWMA": 17.75,
        "score2027": 18.89,
        "quota": 675
    },
    {
        "id": 37,
        "name": "THPT Long Trường",
        "district": "TP.HCM cũ",
        "score2024": 12.0,
        "score2025": 10.5,
        "score2026": 12.5,
        "scoreWMA": 11.8,
        "score2027": 12.3,
        "quota": 720
    },
    {
        "id": 38,
        "name": "THPT Nguyễn Văn Tăng",
        "district": "TP.HCM cũ",
        "score2024": 11.0,
        "score2025": 10.5,
        "score2026": 12.0,
        "scoreWMA": 11.35,
        "score2027": 11.63,
        "quota": 1125
    },
    {
        "id": 39,
        "name": "THPT Dương Văn Thì",
        "district": "TP.HCM cũ",
        "score2024": 14.75,
        "score2025": 13.5,
        "score2026": 16.5,
        "scoreWMA": 15.25,
        "score2027": 16.08,
        "quota": 765
    },
    {
        "id": 40,
        "name": "THPT Nguyễn Khuyến",
        "district": "TP.HCM cũ",
        "score2024": 18.25,
        "score2025": 18.75,
        "score2026": 20.75,
        "scoreWMA": 19.65,
        "score2027": 20.4,
        "quota": 855
    },
    {
        "id": 41,
        "name": "THPT Nguyễn Du",
        "district": "TP.HCM cũ",
        "score2024": 19.5,
        "score2025": 18.75,
        "score2026": 21.75,
        "scoreWMA": 20.4,
        "score2027": 21.82,
        "quota": 595
    },
    {
        "id": 42,
        "name": "THPT Nguyễn An Ninh",
        "district": "TP.HCM cũ",
        "score2024": 15.25,
        "score2025": 13.75,
        "score2026": 16.25,
        "scoreWMA": 15.3,
        "score2027": 16.02,
        "quota": 900
    },
    {
        "id": 43,
        "name": "THPT Diên Hồng",
        "district": "TP.HCM cũ",
        "score2024": 15.0,
        "score2025": 11.75,
        "score2026": 15.0,
        "scoreWMA": 14.03,
        "score2027": 15.25,
        "quota": 450
    },
    {
        "id": 44,
        "name": "THPT Sương Nguyệt Anh",
        "district": "TP.HCM cũ",
        "score2024": 14.25,
        "score2025": 11.25,
        "score2026": 13.5,
        "scoreWMA": 12.97,
        "score2027": 13.25,
        "quota": 450
    },
    {
        "id": 45,
        "name": "THPT Nguyễn Hiền",
        "district": "TP.HCM cũ",
        "score2024": 19.75,
        "score2025": 16.25,
        "score2026": 19.75,
        "scoreWMA": 18.7,
        "score2027": 19.8,
        "quota": 595
    },
    {
        "id": 46,
        "name": "THPT Trần Quang Khải",
        "district": "TP.HCM cũ",
        "score2024": 16.75,
        "score2025": 16.0,
        "score2026": 17.75,
        "scoreWMA": 17.03,
        "score2027": 17.78,
        "quota": 990
    },
    {
        "id": 47,
        "name": "THPT Nam Kỳ Khởi Nghĩa",
        "district": "TP.HCM cũ",
        "score2024": 15.5,
        "score2025": 13.75,
        "score2026": 16.5,
        "scoreWMA": 15.47,
        "score2027": 16.31,
        "quota": 765
    },
    {
        "id": 48,
        "name": "THPT Võ Trường Toản",
        "district": "TP.HCM cũ",
        "score2024": 20.75,
        "score2025": 21.5,
        "score2026": 22.5,
        "scoreWMA": 21.85,
        "score2027": 22.75,
        "quota": 765
    },
    {
        "id": 49,
        "name": "THPT Trường Chinh",
        "district": "TP.HCM cũ",
        "score2024": 18.0,
        "score2025": 17.25,
        "score2026": 19.25,
        "scoreWMA": 18.4,
        "score2027": 19.55,
        "quota": 900
    },
    {
        "id": 50,
        "name": "THPT Phan Văn Hớn",
        "district": "TP.HCM cũ",
        "score2024": 16.0,
        "score2025": 16.0,
        "score2026": 16.0,
        "scoreWMA": 16.0,
        "score2027": 16.72,
        "quota": 810
    },
    {
        "id": 51,
        "name": "TH, THCS và THPT Lê Thị Riêng",
        "district": "TP.HCM cũ",
        "score2024": 16.25,
        "score2025": 16.25,
        "score2026": 16.25,
        "scoreWMA": 16.25,
        "score2027": 16.94,
        "quota": 450
    },
    {
        "id": 52,
        "name": "THPT Thạnh Lộc",
        "district": "TP.HCM cũ",
        "score2024": 16.25,
        "score2025": 15.5,
        "score2026": 17.5,
        "scoreWMA": 16.65,
        "score2027": 17.64,
        "quota": 810
    },
    {
        "id": 53,
        "name": "THPT Thanh Đa",
        "district": "TP.HCM cũ",
        "score2024": 15.0,
        "score2025": 13.75,
        "score2026": 16.25,
        "scoreWMA": 15.25,
        "score2027": 15.81,
        "quota": 720
    },
    {
        "id": 54,
        "name": "THPT Võ Thị Sáu",
        "district": "TP.HCM cũ",
        "score2024": 19.5,
        "score2025": 17.75,
        "score2026": 21.0,
        "scoreWMA": 19.73,
        "score2027": 20.94,
        "quota": 855
    },
    {
        "id": 55,
        "name": "THPT Gia Định",
        "district": "TP.HCM cũ",
        "score2024": 23.0,
        "score2025": 18.75,
        "score2026": 23.5,
        "scoreWMA": 21.98,
        "score2027": 24.02,
        "quota": 855
    },
    {
        "id": 56,
        "name": "THPT Phan Đăng Lưu",
        "district": "TP.HCM cũ",
        "score2024": 16.0,
        "score2025": 13.5,
        "score2026": 17.5,
        "scoreWMA": 16.0,
        "score2027": 16.78,
        "quota": 810
    },
    {
        "id": 57,
        "name": "THPT Trần Văn Giàu",
        "district": "TP.HCM cũ",
        "score2024": 17.25,
        "score2025": 14.75,
        "score2026": 18.0,
        "scoreWMA": 16.88,
        "score2027": 17.62,
        "quota": 900
    },
    {
        "id": 58,
        "name": "THPT Hoàng Hoa Thám",
        "district": "TP.HCM cũ",
        "score2024": 18.25,
        "score2025": 16.75,
        "score2026": 20.75,
        "scoreWMA": 19.05,
        "score2027": 20.38,
        "quota": 855
    },
    {
        "id": 59,
        "name": "THPT Gò Vấp",
        "district": "TP.HCM cũ",
        "score2024": 16.5,
        "score2025": 15.75,
        "score2026": 18.0,
        "scoreWMA": 17.02,
        "score2027": 18.08,
        "quota": 675
    },
    {
        "id": 60,
        "name": "THPT Nguyễn Công Trứ",
        "district": "TP.HCM cũ",
        "score2024": 20.25,
        "score2025": 20.0,
        "score2026": 22.0,
        "scoreWMA": 21.05,
        "score2027": 22.42,
        "quota": 855
    },
    {
        "id": 61,
        "name": "THPT Trần Hưng Đạo",
        "district": "TP.HCM cũ",
        "score2024": 19.75,
        "score2025": 20.25,
        "score2026": 22.25,
        "scoreWMA": 21.15,
        "score2027": 22.14,
        "quota": 990
    },
    {
        "id": 62,
        "name": "THPT Nguyễn Trung Trực",
        "district": "TP.HCM cũ",
        "score2024": 17.25,
        "score2025": 17.25,
        "score2026": 19.75,
        "scoreWMA": 18.5,
        "score2027": 19.51,
        "quota": 900
    },
    {
        "id": 63,
        "name": "THPT Phú Nhuận",
        "district": "TP.HCM cũ",
        "score2024": 22.5,
        "score2025": 22.5,
        "score2026": 24.0,
        "scoreWMA": 23.25,
        "score2027": 24.29,
        "quota": 855
    },
    {
        "id": 64,
        "name": "THPT Hàn Thuyên",
        "district": "TP.HCM cũ",
        "score2024": 15.25,
        "score2025": 13.5,
        "score2026": 16.25,
        "scoreWMA": 15.23,
        "score2027": 16.04,
        "quota": 765
    },
    {
        "id": 65,
        "name": "THPT Tân Bình",
        "district": "TP.HCM cũ",
        "score2024": 19.5,
        "score2025": 19.75,
        "score2026": 21.5,
        "scoreWMA": 20.58,
        "score2027": 21.3,
        "quota": 855
    },
    {
        "id": 66,
        "name": "THPT Nguyễn Chí Thanh",
        "district": "TP.HCM cũ",
        "score2024": 18.25,
        "score2025": 18.0,
        "score2026": 20.25,
        "scoreWMA": 19.17,
        "score2027": 19.99,
        "quota": 810
    },
    {
        "id": 67,
        "name": "THPT Trần Phú",
        "district": "TP.HCM cũ",
        "score2024": 23.25,
        "score2025": 22.75,
        "score2026": 24.25,
        "scoreWMA": 23.6,
        "score2027": 24.68,
        "quota": 945
    },
    {
        "id": 68,
        "name": "THPT Nguyễn Thượng Hiền",
        "district": "TP.HCM cũ",
        "score2024": 24.25,
        "score2025": 23.5,
        "score2026": 25.5,
        "scoreWMA": 24.65,
        "score2027": 25.83,
        "quota": 675
    },
    {
        "id": 69,
        "name": "THPT Nguyễn Thái Bình",
        "district": "TP.HCM cũ",
        "score2024": 17.0,
        "score2025": 16.25,
        "score2026": 18.75,
        "scoreWMA": 17.65,
        "score2027": 18.62,
        "quota": 720
    },
    {
        "id": 70,
        "name": "THPT Nguyễn Hữu Huân",
        "district": "TP.HCM cũ",
        "score2024": 23.25,
        "score2025": 23.5,
        "score2026": 24.25,
        "scoreWMA": 23.83,
        "score2027": 24.77,
        "quota": 765
    },
    {
        "id": 71,
        "name": "THPT Thủ Đức",
        "district": "TP.HCM cũ",
        "score2024": 20.5,
        "score2025": 21.0,
        "score2026": 22.75,
        "scoreWMA": 21.78,
        "score2027": 23.33,
        "quota": 900
    },
    {
        "id": 72,
        "name": "THPT Tam Phú",
        "district": "TP.HCM cũ",
        "score2024": 18.0,
        "score2025": 17.75,
        "score2026": 20.0,
        "scoreWMA": 18.93,
        "score2027": 19.84,
        "quota": 765
    },
    {
        "id": 73,
        "name": "THPT Hiệp Bình",
        "district": "TP.HCM cũ",
        "score2024": 14.0,
        "score2025": 13.5,
        "score2026": 16.75,
        "scoreWMA": 15.23,
        "score2027": 16.11,
        "quota": 675
    },
    {
        "id": 74,
        "name": "THPT Đào Sơn Tây",
        "district": "TP.HCM cũ",
        "score2024": 13.5,
        "score2025": 11.75,
        "score2026": 14.75,
        "scoreWMA": 13.6,
        "score2027": 14.57,
        "quota": 855
    },
    {
        "id": 75,
        "name": "THPT Linh Trung",
        "district": "TP.HCM cũ",
        "score2024": 15.0,
        "score2025": 12.5,
        "score2026": 16.25,
        "scoreWMA": 14.88,
        "score2027": 15.82,
        "quota": 990
    },
    {
        "id": 76,
        "name": "THPT Bình Chiểu",
        "district": "TP.HCM cũ",
        "score2024": 14.0,
        "score2025": 12.25,
        "score2026": 15.75,
        "scoreWMA": 14.35,
        "score2027": 15.31,
        "quota": 900
    },
    {
        "id": 77,
        "name": "THPT Bình Chánh",
        "district": "TP.HCM cũ",
        "score2024": 13.5,
        "score2025": 10.75,
        "score2026": 14.25,
        "scoreWMA": 13.05,
        "score2027": 13.78,
        "quota": 900
    },
    {
        "id": 78,
        "name": "THPT Tân Túc",
        "district": "TP.HCM cũ",
        "score2024": 14.0,
        "score2025": 10.5,
        "score2026": 12.75,
        "scoreWMA": 12.33,
        "score2027": 12.88,
        "quota": 855
    },
    {
        "id": 79,
        "name": "THPT Vĩnh Lộc B",
        "district": "TP.HCM cũ",
        "score2024": 15.75,
        "score2025": 13.75,
        "score2026": 16.25,
        "scoreWMA": 15.4,
        "score2027": 16.41,
        "quota": 900
    },
    {
        "id": 80,
        "name": "Phổ thông Năng khiếu TDTT Bình Chánh",
        "district": "TP.HCM cũ",
        "score2024": 14.0,
        "score2025": 12.0,
        "score2026": 13.5,
        "scoreWMA": 13.15,
        "score2027": 13.65,
        "quota": 450
    },
    {
        "id": 81,
        "name": "THPT Phong Phú",
        "district": "TP.HCM cũ",
        "score2024": 12.5,
        "score2025": 10.5,
        "score2026": 10.75,
        "scoreWMA": 11.03,
        "score2027": 11.49,
        "quota": 855
    },
    {
        "id": 82,
        "name": "THPT Lê Minh Xuân",
        "district": "TP.HCM cũ",
        "score2024": 15.0,
        "score2025": 12.75,
        "score2026": 14.25,
        "scoreWMA": 13.95,
        "score2027": 14.51,
        "quota": 900
    },
    {
        "id": 83,
        "name": "THPT Đa Phước",
        "district": "TP.HCM cũ",
        "score2024": 11.5,
        "score2025": 10.5,
        "score2026": 10.5,
        "scoreWMA": 10.7,
        "score2027": 11.07,
        "quota": 720
    },
    {
        "id": 84,
        "name": "THPT Bình Khánh",
        "district": "TP.HCM cũ",
        "score2024": 10.5,
        "score2025": 10.5,
        "score2026": 10.0,
        "scoreWMA": 10.25,
        "score2027": 10.79,
        "quota": 405
    },
    {
        "id": 85,
        "name": "THPT Cần Thạnh",
        "district": "TP.HCM cũ",
        "score2024": 10.5,
        "score2025": 10.5,
        "score2026": 9.0,
        "scoreWMA": 9.75,
        "score2027": 10.29,
        "quota": 320
    },
    {
        "id": 86,
        "name": "THPT An Nghĩa",
        "district": "TP.HCM cũ",
        "score2024": 10.5,
        "score2025": 10.5,
        "score2026": 10.0,
        "scoreWMA": 10.25,
        "score2027": 10.79,
        "quota": 360
    },
    {
        "id": 87,
        "name": "THPT Củ Chi",
        "district": "TP.HCM cũ",
        "score2024": 16.25,
        "score2025": 12.25,
        "score2026": 16.0,
        "scoreWMA": 14.93,
        "score2027": 15.88,
        "quota": 810
    },
    {
        "id": 88,
        "name": "THPT Quang Trung",
        "district": "TP.HCM cũ",
        "score2024": 13.0,
        "score2025": 11.5,
        "score2026": 12.25,
        "scoreWMA": 12.17,
        "score2027": 12.63,
        "quota": 810
    },
    {
        "id": 89,
        "name": "THPT An Nhơn Tây",
        "district": "TP.HCM cũ",
        "score2024": 11.5,
        "score2025": 10.5,
        "score2026": 11.5,
        "scoreWMA": 11.2,
        "score2027": 11.81,
        "quota": 810
    },
    {
        "id": 90,
        "name": "THPT Trung Phú",
        "district": "TP.HCM cũ",
        "score2024": 15.5,
        "score2025": 14.25,
        "score2026": 16.25,
        "scoreWMA": 15.5,
        "score2027": 16.42,
        "quota": 765
    },
    {
        "id": 91,
        "name": "THPT Trung Lập",
        "district": "TP.HCM cũ",
        "score2024": 11.75,
        "score2025": 10.5,
        "score2026": 10.5,
        "scoreWMA": 10.75,
        "score2027": 11.36,
        "quota": 585
    },
    {
        "id": 92,
        "name": "THPT Phú Hòa",
        "district": "TP.HCM cũ",
        "score2024": 13.5,
        "score2025": 11.75,
        "score2026": 13.5,
        "scoreWMA": 12.98,
        "score2027": 13.6,
        "quota": 720
    },
    {
        "id": 93,
        "name": "THPT Tân Thông Hội",
        "district": "TP.HCM cũ",
        "score2024": 14.75,
        "score2025": 14.0,
        "score2026": 14.75,
        "scoreWMA": 14.52,
        "score2027": 15.2,
        "quota": 720
    },
    {
        "id": 94,
        "name": "THPT Nguyễn Hữu Cầu",
        "district": "TP.HCM cũ",
        "score2024": 22.5,
        "score2025": 23.0,
        "score2026": 24.0,
        "scoreWMA": 23.4,
        "score2027": 24.4,
        "quota": 765
    },
    {
        "id": 95,
        "name": "THPT Lý Thường Kiệt",
        "district": "TP.HCM cũ",
        "score2024": 19.75,
        "score2025": 20.25,
        "score2026": 20.75,
        "scoreWMA": 20.4,
        "score2027": 21.12,
        "quota": 765
    },
    {
        "id": 96,
        "name": "THPT Bà Điểm",
        "district": "TP.HCM cũ",
        "score2024": 18.5,
        "score2025": 19.0,
        "score2026": 20.5,
        "scoreWMA": 19.65,
        "score2027": 20.71,
        "quota": 810
    },
    {
        "id": 97,
        "name": "THPT Nguyễn Văn Cừ",
        "district": "TP.HCM cũ",
        "score2024": 16.5,
        "score2025": 14.75,
        "score2026": 15.5,
        "scoreWMA": 15.48,
        "score2027": 16.4,
        "quota": 675
    },
    {
        "id": 98,
        "name": "THPT Nguyễn Hữu Tiến",
        "district": "TP.HCM cũ",
        "score2024": 18.0,
        "score2025": 17.5,
        "score2026": 19.0,
        "scoreWMA": 18.35,
        "score2027": 19.27,
        "quota": 675
    },
    {
        "id": 99,
        "name": "THPT Phạm Văn Sáng",
        "district": "TP.HCM cũ",
        "score2024": 16.75,
        "score2025": 16.25,
        "score2026": 17.5,
        "scoreWMA": 16.98,
        "score2027": 17.76,
        "quota": 810
    },
    {
        "id": 100,
        "name": "THPT Hồ Thị Bi",
        "district": "TP.HCM cũ",
        "score2024": 17.5,
        "score2025": 17.0,
        "score2026": 17.25,
        "scoreWMA": 17.23,
        "score2027": 17.84,
        "quota": 855
    },
    {
        "id": 101,
        "name": "THPT Long Thới",
        "district": "TP.HCM cũ",
        "score2024": 12.25,
        "score2025": 12.0,
        "score2026": 13.25,
        "scoreWMA": 12.68,
        "score2027": 13.27,
        "quota": 450
    },
    {
        "id": 102,
        "name": "THPT Phước Kiển",
        "district": "TP.HCM cũ",
        "score2024": 12.75,
        "score2025": 10.75,
        "score2026": 11.75,
        "scoreWMA": 11.65,
        "score2027": 12.04,
        "quota": 855
    },
    {
        "id": 103,
        "name": "THPT Dương Văn Dương",
        "district": "TP.HCM cũ",
        "score2024": 13.0,
        "score2025": 10.5,
        "score2026": 13.25,
        "scoreWMA": 12.38,
        "score2027": 12.88,
        "quota": 765
    },
    {
        "id": 104,
        "name": "THPT Tây Thạnh",
        "district": "TP.HCM cũ",
        "score2024": 21.0,
        "score2025": 21.75,
        "score2026": 23.25,
        "scoreWMA": 22.35,
        "score2027": 23.36,
        "quota": 1035
    },
    {
        "id": 105,
        "name": "THPT Lê Trọng Tấn",
        "district": "TP.HCM cũ",
        "score2024": 19.5,
        "score2025": 18.5,
        "score2026": 21.75,
        "scoreWMA": 20.33,
        "score2027": 22.81,
        "quota": 675
    },
    {
        "id": 106,
        "name": "THPT Thoại Ngọc Hầu",
        "district": "TP.HCM cũ",
        "score2024": 16.25,
        "score2025": 16.25,
        "score2026": 16.25,
        "scoreWMA": 16.25,
        "score2027": 16.94,
        "quota": 675
    },
    {
        "id": 107,
        "name": "THPT Vĩnh Lộc",
        "district": "TP.HCM cũ",
        "score2024": 16.5,
        "score2025": 16.75,
        "score2026": 19.0,
        "scoreWMA": 17.82,
        "score2027": 18.64,
        "quota": 720
    },
    {
        "id": 108,
        "name": "THPT Nguyễn Hữu Cảnh",
        "district": "TP.HCM cũ",
        "score2024": 18.0,
        "score2025": 18.25,
        "score2026": 21.0,
        "scoreWMA": 19.57,
        "score2027": 20.76,
        "quota": 630
    },
    {
        "id": 109,
        "name": "THPT Bình Hưng Hòa",
        "district": "TP.HCM cũ",
        "score2024": 18.5,
        "score2025": 17.75,
        "score2026": 19.75,
        "scoreWMA": 18.9,
        "score2027": 19.87,
        "quota": 855
    },
    {
        "id": 110,
        "name": "THPT Bình Tân",
        "district": "TP.HCM cũ",
        "score2024": 15.0,
        "score2025": 14.25,
        "score2026": 16.0,
        "scoreWMA": 15.27,
        "score2027": 15.89,
        "quota": 855
    },
    {
        "id": 111,
        "name": "THPT Hoàng Thế Thiện (trường Bình Trị Đông B trước)",
        "district": "TP.HCM cũ",
        "score2024": 13.0,
        "score2025": 13.0,
        "score2026": 15.5,
        "scoreWMA": 14.25,
        "score2027": 15.53,
        "quota": 810
    },
    {
        "id": 112,
        "name": "THPT An Lạc",
        "district": "TP.HCM cũ",
        "score2024": 15.25,
        "score2025": 15.25,
        "score2026": 17.25,
        "scoreWMA": 16.25,
        "score2027": 16.89,
        "quota": 855
    },
    {
        "id": 113,
        "name": "THPT Lý Thái Tổ",
        "district": "Bình Dương cũ",
        "score2024": 17.05,
        "score2025": 17.55,
        "score2026": 17.25,
        "scoreWMA": 17.3,
        "score2027": 17.99,
        "quota": 810
    },
    {
        "id": 114,
        "name": "THPT Lê Lợi",
        "district": "Bình Dương cũ",
        "score2024": 14.75,
        "score2025": 14.65,
        "score2026": 13.25,
        "scoreWMA": 13.97,
        "score2027": 14.56,
        "quota": 315
    },
    {
        "id": 115,
        "name": "THPT Tân Bình",
        "district": "Bình Dương cũ",
        "score2024": 10.25,
        "score2025": 15.8,
        "score2026": 13.5,
        "scoreWMA": 13.54,
        "score2027": 14.15,
        "quota": 450
    },
    {
        "id": 116,
        "name": "THPT Dĩ An",
        "district": "Bình Dương cũ",
        "score2024": 23.3,
        "score2025": 22.1,
        "score2026": 23.25,
        "scoreWMA": 22.91,
        "score2027": 23.83,
        "quota": 540
    },
    {
        "id": 117,
        "name": "THPT Võ Minh Đức",
        "district": "Bình Dương cũ",
        "score2024": 18.1,
        "score2025": 17.9,
        "score2026": 20.0,
        "scoreWMA": 18.99,
        "score2027": 19.79,
        "quota": 810
    },
    {
        "id": 118,
        "name": "THCS và THPT Minh Hòa",
        "district": "Bình Dương cũ",
        "score2024": 13.0,
        "score2025": 12.5,
        "score2026": 10.75,
        "scoreWMA": 11.72,
        "score2027": 12.25,
        "quota": 360
    },
    {
        "id": 119,
        "name": "THPT Bình An",
        "district": "Bình Dương cũ",
        "score2024": 18.25,
        "score2025": 19.35,
        "score2026": 19.0,
        "scoreWMA": 18.95,
        "score2027": 19.71,
        "quota": 470
    },
    {
        "id": 120,
        "name": "THPT Nguyễn Đình Chiểu",
        "district": "Bình Dương cũ",
        "score2024": 16.15,
        "score2025": 16.15,
        "score2026": 16.75,
        "scoreWMA": 16.45,
        "score2027": 17.19,
        "quota": 585
    },
    {
        "id": 121,
        "name": "THPT Trịnh Hoài Đức",
        "district": "Bình Dương cũ",
        "score2024": 23.65,
        "score2025": 22.25,
        "score2026": 23.25,
        "scoreWMA": 23.03,
        "score2027": 23.95,
        "quota": 765
    },
    {
        "id": 122,
        "name": "THPT Nguyễn Trãi",
        "district": "Bình Dương cũ",
        "score2024": 19.15,
        "score2025": 18.15,
        "score2026": 19.75,
        "scoreWMA": 19.15,
        "score2027": 19.92,
        "quota": 630
    },
    {
        "id": 123,
        "name": "THPT Nguyễn An Ninh",
        "district": "Bình Dương cũ",
        "score2024": 17.4,
        "score2025": 17.65,
        "score2026": 15.75,
        "scoreWMA": 16.65,
        "score2027": 17.32,
        "quota": 540
    },
    {
        "id": 124,
        "name": "THPT Huỳnh Văn Nghệ",
        "district": "Bình Dương cũ",
        "score2024": 15.4,
        "score2025": 16.8,
        "score2026": 15.0,
        "scoreWMA": 15.62,
        "score2027": 16.28,
        "quota": 675
    },
    {
        "id": 125,
        "name": "THPT Phước Vĩnh",
        "district": "Bình Dương cũ",
        "score2024": 11.6,
        "score2025": 12.2,
        "score2026": 11.5,
        "scoreWMA": 11.73,
        "score2027": 12.26,
        "quota": 630
    },
    {
        "id": 126,
        "name": "THPT Bến Cát",
        "district": "Bình Dương cũ",
        "score2024": 17.7,
        "score2025": 17.6,
        "score2026": 18.5,
        "scoreWMA": 18.07,
        "score2027": 18.79,
        "quota": 810
    },
    {
        "id": 127,
        "name": "THPT Dầu Tiếng",
        "district": "Bình Dương cũ",
        "score2024": 13.4,
        "score2025": 13.15,
        "score2026": 12.5,
        "scoreWMA": 12.88,
        "score2027": 13.45,
        "quota": 450
    },
    {
        "id": 128,
        "name": "THPT Bình Phú",
        "district": "Bình Dương cũ",
        "score2024": 14.85,
        "score2025": 16.55,
        "score2026": 15.5,
        "scoreWMA": 15.69,
        "score2027": 16.39,
        "quota": 810
    },
    {
        "id": 129,
        "name": "THPT Trần Văn Ơn",
        "district": "Bình Dương cũ",
        "score2024": 16.25,
        "score2025": 17.2,
        "score2026": 16.75,
        "scoreWMA": 16.79,
        "score2027": 17.54,
        "quota": 540
    },
    {
        "id": 130,
        "name": "THCS và THPT Tây Sơn",
        "district": "Bình Dương cũ",
        "score2024": 12.6,
        "score2025": 13.4,
        "score2026": 10.25,
        "scoreWMA": 11.66,
        "score2027": 12.19,
        "quota": 450
    },
    {
        "id": 131,
        "name": "THCS và THPT Nguyễn Huệ",
        "district": "Bình Dương cũ",
        "score2024": 12.05,
        "score2025": 14.7,
        "score2026": 9.0,
        "scoreWMA": 11.32,
        "score2027": 11.83,
        "quota": 450
    },
    {
        "id": 132,
        "name": "THPT Tây Nam",
        "district": "Bình Dương cũ",
        "score2024": 14.6,
        "score2025": 15.35,
        "score2026": 14.5,
        "scoreWMA": 14.78,
        "score2027": 15.44,
        "quota": 675
    },
    {
        "id": 133,
        "name": "THPT Tân Phước Khánh",
        "district": "Bình Dương cũ",
        "score2024": 17.7,
        "score2025": 18.1,
        "score2026": 19.25,
        "scoreWMA": 18.59,
        "score2027": 19.38,
        "quota": 495
    },
    {
        "id": 134,
        "name": "THPT Thái Hòa",
        "district": "Bình Dương cũ",
        "score2024": 16.25,
        "score2025": 17.25,
        "score2026": 15.5,
        "scoreWMA": 16.18,
        "score2027": 16.82,
        "quota": 765
    },
    {
        "id": 135,
        "name": "THPT An Mỹ",
        "district": "Bình Dương cũ",
        "score2024": 16.9,
        "score2025": 17.35,
        "score2026": 18.5,
        "scoreWMA": 17.84,
        "score2027": 18.62,
        "quota": 810
    },
    {
        "id": 136,
        "name": "THPT Phước Hòa",
        "district": "Bình Dương cũ",
        "score2024": 10.9,
        "score2025": 13.95,
        "score2026": 11.75,
        "scoreWMA": 12.24,
        "score2027": 12.79,
        "quota": 270
    },
    {
        "id": 137,
        "name": "THPT Bàu Bàng",
        "district": "Bình Dương cũ",
        "score2024": 13.35,
        "score2025": 15.05,
        "score2026": 15.25,
        "scoreWMA": 14.81,
        "score2027": 15.48,
        "quota": 585
    },
    {
        "id": 138,
        "name": "THPT Long Hòa",
        "district": "Bình Dương cũ",
        "score2024": 12.15,
        "score2025": 12.75,
        "score2026": 12.0,
        "scoreWMA": 12.25,
        "score2027": 12.81,
        "quota": 270
    },
    {
        "id": 139,
        "name": "THPT Nguyễn Thị Minh Khai",
        "district": "Bình Dương cũ",
        "score2024": 20.2,
        "score2025": 19.05,
        "score2026": 20.25,
        "scoreWMA": 19.88,
        "score2027": 20.68,
        "quota": 855
    },
    {
        "id": 140,
        "name": "THPT Thường Tân",
        "district": "Bình Dương cũ",
        "score2024": 13.95,
        "score2025": 14.95,
        "score2026": 12.0,
        "scoreWMA": 13.27,
        "score2027": 13.84,
        "quota": 240
    },
    {
        "id": 141,
        "name": "THPT Thanh Tuyền",
        "district": "Bình Dương cũ",
        "score2024": 13.65,
        "score2025": 13.85,
        "score2026": 13.5,
        "scoreWMA": 13.63,
        "score2027": 14.25,
        "quota": 225
    },
    {
        "id": 142,
        "name": "THPT Hà Huy Tập",
        "district": "Bình Dương cũ",
        "score2024": 16.5,
        "score2025": 16.5,
        "score2026": 16.5,
        "scoreWMA": 16.5,
        "score2027": 17.2,
        "quota": 720
    },
    {
        "id": 143,
        "name": "THPT Vũng Tàu",
        "district": "Bà Rịa - Vũng Tàu cũ",
        "score2024": 22.05,
        "score2025": 21.25,
        "score2026": 21.75,
        "scoreWMA": 21.66,
        "score2027": 24.69,
        "quota": 855
    },
    {
        "id": 144,
        "name": "THPT Châu Thành",
        "district": "Bà Rịa - Vũng Tàu cũ",
        "score2024": 17.85,
        "score2025": 9.0,
        "score2026": 18.5,
        "scoreWMA": 15.52,
        "score2027": 16.61,
        "quota": 540
    },
    {
        "id": 145,
        "name": "THPT Trần Phú",
        "district": "Bà Rịa - Vũng Tàu cũ",
        "score2024": 13.65,
        "score2025": 7.75,
        "score2026": 9.0,
        "scoreWMA": 9.55,
        "score2027": 9.96,
        "quota": 450
    },
    {
        "id": 146,
        "name": "THPT Xuyên Mộc",
        "district": "Bà Rịa - Vũng Tàu cũ",
        "score2024": 15.15,
        "score2025": 15.25,
        "score2026": 12.25,
        "scoreWMA": 13.73,
        "score2027": 14.38,
        "quota": 450
    },
    {
        "id": 147,
        "name": "THPT Phú Mỹ",
        "district": "Bà Rịa - Vũng Tàu cũ",
        "score2024": 16.65,
        "score2025": 6.5,
        "score2026": 11.5,
        "scoreWMA": 11.03,
        "score2027": 11.99,
        "quota": 900
    },
    {
        "id": 148,
        "name": "THPT Trần Hưng Đạo",
        "district": "Bà Rịa - Vũng Tàu cũ",
        "score2024": 12.45,
        "score2025": 10.5,
        "score2026": 11.5,
        "scoreWMA": 11.39,
        "score2027": 11.97,
        "quota": 585
    },
    {
        "id": 149,
        "name": "THPT Hắc Dịch",
        "district": "Bà Rịa - Vũng Tàu cũ",
        "score2024": 13.2,
        "score2025": 10.0,
        "score2026": 9.0,
        "scoreWMA": 10.14,
        "score2027": 10.5,
        "quota": 630
    },
    {
        "id": 150,
        "name": "THPT Trần Văn Quan",
        "district": "Bà Rịa - Vũng Tàu cũ",
        "score2024": 13.65,
        "score2025": 8.0,
        "score2026": 10.75,
        "scoreWMA": 10.51,
        "score2027": 11.07,
        "quota": 450
    },
    {
        "id": 151,
        "name": "THPT Võ Thị Sáu",
        "district": "Bà Rịa - Vũng Tàu cũ",
        "score2024": 13.35,
        "score2025": 11.75,
        "score2026": 11.0,
        "scoreWMA": 11.7,
        "score2027": 12.3,
        "quota": 495
    },
    {
        "id": 152,
        "name": "THPT Hòa Hội",
        "district": "Bà Rịa - Vũng Tàu cũ",
        "score2024": 13.05,
        "score2025": 10.25,
        "score2026": 10.25,
        "scoreWMA": 10.81,
        "score2027": 11.33,
        "quota": 405
    },
    {
        "id": 153,
        "name": "THPT Nguyễn Bỉnh Khiêm",
        "district": "Bà Rịa - Vũng Tàu cũ",
        "score2024": 13.35,
        "score2025": 11.0,
        "score2026": 10.25,
        "scoreWMA": 11.1,
        "score2027": 11.34,
        "quota": 585
    },
    {
        "id": 154,
        "name": "THPT Nguyễn Trãi",
        "district": "Bà Rịa - Vũng Tàu cũ",
        "score2024": 13.65,
        "score2025": 9.25,
        "score2026": 10.0,
        "scoreWMA": 10.51,
        "score2027": 10.93,
        "quota": 405
    },
    {
        "id": 155,
        "name": "THPT Phước Bửu",
        "district": "Bà Rịa - Vũng Tàu cũ",
        "score2024": 13.5,
        "score2025": 9.5,
        "score2026": 9.0,
        "scoreWMA": 10.05,
        "score2027": 10.34,
        "quota": 450
    },
    {
        "id": 156,
        "name": "THPT Long Hải - Phước Tỉnh",
        "district": "Bà Rịa - Vũng Tàu cũ",
        "score2024": 11.7,
        "score2025": 12.5,
        "score2026": 10.5,
        "scoreWMA": 11.34,
        "score2027": 11.9,
        "quota": 495
    },
    {
        "id": 157,
        "name": "THPT Nguyễn Văn Cừ",
        "district": "Bà Rịa - Vũng Tàu cũ",
        "score2024": 12.45,
        "score2025": 8.25,
        "score2026": 9.0,
        "scoreWMA": 9.46,
        "score2027": 9.78,
        "quota": 405
    },
    {
        "id": 158,
        "name": "THPT Minh Đạm",
        "district": "Bà Rịa - Vũng Tàu cũ",
        "score2024": 17.1,
        "score2025": 14.0,
        "score2026": 11.5,
        "scoreWMA": 13.37,
        "score2027": 13.9,
        "quota": 495
    },
    {
        "id": 159,
        "name": "THPT Nguyễn Khuyến",
        "district": "Bà Rịa - Vũng Tàu cũ",
        "score2024": 17.85,
        "score2025": 17.25,
        "score2026": 15.75,
        "scoreWMA": 16.62,
        "score2027": 16.99,
        "quota": 765
    },
    {
        "id": 160,
        "name": "THPT Nguyễn Huệ",
        "district": "Bà Rịa - Vũng Tàu cũ",
        "score2024": 19.05,
        "score2025": 19.0,
        "score2026": 19.25,
        "scoreWMA": 19.13,
        "score2027": 20.37,
        "quota": 900
    },
    {
        "id": 161,
        "name": "THPT Đinh Tiên Hoàng",
        "district": "Bà Rịa - Vũng Tàu cũ",
        "score2024": 17.85,
        "score2025": 15.0,
        "score2026": 17.25,
        "scoreWMA": 16.7,
        "score2027": 17.66,
        "quota": 720
    },
    {
        "id": 162,
        "name": "THPT Trần Nguyên Hãn",
        "district": "Bà Rịa - Vũng Tàu cũ",
        "score2024": 18.45,
        "score2025": 16.0,
        "score2026": 16.5,
        "scoreWMA": 16.74,
        "score2027": 17.71,
        "quota": 720
    },
    {
        "id": 163,
        "name": "THPT Ngô Quyền",
        "district": "Bà Rịa - Vũng Tàu cũ",
        "score2024": 13.5,
        "score2025": 5.25,
        "score2026": 10.0,
        "scoreWMA": 9.28,
        "score2027": 9.76,
        "quota": 405
    },
    {
        "id": 164,
        "name": "THPT Hòa Bình",
        "district": "Bà Rịa - Vũng Tàu cũ",
        "score2024": 14.4,
        "score2025": 9.0,
        "score2026": 9.0,
        "scoreWMA": 10.08,
        "score2027": 10.45,
        "quota": 450
    },
    {
        "id": 165,
        "name": "THPT Trần Quang Khải",
        "district": "Bà Rịa - Vũng Tàu cũ",
        "score2024": 12.45,
        "score2025": 9.5,
        "score2026": 12.75,
        "scoreWMA": 11.71,
        "score2027": 12.18,
        "quota": 540
    },
    {
        "id": 166,
        "name": "THPT Dương Bạch Mai",
        "district": "Bà Rịa - Vũng Tàu cũ",
        "score2024": 13.65,
        "score2025": 8.5,
        "score2026": 9.0,
        "scoreWMA": 9.78,
        "score2027": 10.18,
        "quota": 450
    },
    {
        "id": 167,
        "name": "THPT Bà Rịa",
        "district": "Bà Rịa - Vũng Tàu cũ",
        "score2024": 16.2,
        "score2025": 14.25,
        "score2026": 14.0,
        "scoreWMA": 14.51,
        "score2027": 15.25,
        "quota": 540
    },
    {
        "id": 168,
        "name": "THPT Bưng Riềng",
        "district": "Bà Rịa - Vũng Tàu cũ",
        "score2024": 12.3,
        "score2025": 9.5,
        "score2026": 9.0,
        "scoreWMA": 9.81,
        "score2027": 10.15,
        "quota": 450
    },
    {
        "id": 169,
        "name": "THPT Nguyễn Du",
        "district": "Bà Rịa - Vũng Tàu cũ",
        "score2024": 11.55,
        "score2025": 11.5,
        "score2026": 15.25,
        "scoreWMA": 13.38,
        "score2027": 14.27,
        "quota": 405
    },
    {
        "id": 170,
        "name": "THPT Võ Nguyên Giáp",
        "district": "Bà Rịa - Vũng Tàu cũ",
        "score2024": 9.0,
        "score2025": 9.0,
        "score2026": 9.0,
        "scoreWMA": 9.0,
        "score2027": 9.41,
        "quota": 675
    }
],
  specializedSchools: [
    {
        "id": 1,
        "school": "THPT chuyên Lê Hồng Phong",
        "program": "Tiếng Anh",
        "fullName": "THPT chuyên Lê Hồng Phong - Tiếng Anh",
        "score2024": 37.0,
        "score2025": 35.5,
        "score2026": 36.25,
        "scoreWMA": 36.17,
        "score2027": 36.65
    },
    {
        "id": 2,
        "school": "THPT chuyên Lê Hồng Phong",
        "program": "Tiếng Anh – Đề án 5695",
        "fullName": "THPT chuyên Lê Hồng Phong - Tiếng Anh – Đề án 5695",
        "score2024": 37.5,
        "score2025": 35.75,
        "score2026": 37.75,
        "scoreWMA": 37.1,
        "score2027": 37.1
    },
    {
        "id": 3,
        "school": "THPT chuyên Lê Hồng Phong",
        "program": "Địa lí",
        "fullName": "THPT chuyên Lê Hồng Phong - Địa lí",
        "score2024": 34.0,
        "score2025": 31.5,
        "score2026": 34.5,
        "scoreWMA": 33.5,
        "score2027": 33.84
    },
    {
        "id": 4,
        "school": "THPT chuyên Lê Hồng Phong",
        "program": "Hóa học",
        "fullName": "THPT chuyên Lê Hồng Phong - Hóa học",
        "score2024": 35.0,
        "score2025": 32.5,
        "score2026": 38.5,
        "scoreWMA": 36.0,
        "score2027": 36.36
    },
    {
        "id": 5,
        "school": "THPT chuyên Lê Hồng Phong",
        "program": "Vật lí",
        "fullName": "THPT chuyên Lê Hồng Phong - Vật lí",
        "score2024": 34.5,
        "score2025": 30.75,
        "score2026": 34.25,
        "scoreWMA": 33.25,
        "score2027": 33.58
    },
    {
        "id": 6,
        "school": "THPT chuyên Lê Hồng Phong",
        "program": "Tiếng Nhật",
        "fullName": "THPT chuyên Lê Hồng Phong - Tiếng Nhật",
        "score2024": 30.0,
        "score2025": 30.75,
        "score2026": 30.75,
        "scoreWMA": 30.6,
        "score2027": 30.29
    },
    {
        "id": 7,
        "school": "THPT chuyên Lê Hồng Phong",
        "program": "Tiếng Pháp",
        "fullName": "THPT chuyên Lê Hồng Phong - Tiếng Pháp",
        "score2024": 31.0,
        "score2025": 30.75,
        "score2026": 31.25,
        "scoreWMA": 31.05,
        "score2027": 30.74
    },
    {
        "id": 8,
        "school": "THPT chuyên Lê Hồng Phong",
        "program": "Sinh học",
        "fullName": "THPT chuyên Lê Hồng Phong - Sinh học",
        "score2024": 34.75,
        "score2025": 37.5,
        "score2026": 39.25,
        "scoreWMA": 37.83,
        "score2027": 37.83
    },
    {
        "id": 9,
        "school": "THPT chuyên Lê Hồng Phong",
        "program": "Lịch sử",
        "fullName": "THPT chuyên Lê Hồng Phong - Lịch sử",
        "score2024": 27.0,
        "score2025": 30.5,
        "score2026": 33.25,
        "scoreWMA": 31.17,
        "score2027": 31.49
    },
    {
        "id": 10,
        "school": "THPT chuyên Lê Hồng Phong",
        "program": "Tin học",
        "fullName": "THPT chuyên Lê Hồng Phong - Tin học",
        "score2024": 37.25,
        "score2025": 32.25,
        "score2026": 33.0,
        "scoreWMA": 33.62,
        "score2027": 33.29
    },
    {
        "id": 11,
        "school": "THPT chuyên Lê Hồng Phong",
        "program": "Toán",
        "fullName": "THPT chuyên Lê Hồng Phong - Toán",
        "score2024": 37.25,
        "score2025": 37.25,
        "score2026": 37.5,
        "scoreWMA": 37.38,
        "score2027": 37.0
    },
    {
        "id": 12,
        "school": "THPT chuyên Lê Hồng Phong",
        "program": "Tiếng Trung",
        "fullName": "THPT chuyên Lê Hồng Phong - Tiếng Trung",
        "score2024": 28.5,
        "score2025": 30.5,
        "score2026": 32.75,
        "scoreWMA": 31.22,
        "score2027": 31.23
    },
    {
        "id": 13,
        "school": "THPT chuyên Lê Hồng Phong",
        "program": "Ngữ văn",
        "fullName": "THPT chuyên Lê Hồng Phong - Ngữ văn",
        "score2024": 36.0,
        "score2025": 36.0,
        "score2026": 36.75,
        "scoreWMA": 36.38,
        "score2027": 36.01
    },
    {
        "id": 14,
        "school": "THPT chuyên Trần Đại Nghĩa",
        "program": "Tiếng Anh",
        "fullName": "THPT chuyên Trần Đại Nghĩa - Tiếng Anh",
        "score2024": 36.0,
        "score2025": 34.25,
        "score2026": 36.25,
        "scoreWMA": 35.6,
        "score2027": 36.21
    },
    {
        "id": 15,
        "school": "THPT chuyên Trần Đại Nghĩa",
        "program": "Tiếng Anh – Đề án 5695",
        "fullName": "THPT chuyên Trần Đại Nghĩa - Tiếng Anh – Đề án 5695",
        "score2024": 37.0,
        "score2025": 35.0,
        "score2026": 37.0,
        "scoreWMA": 36.4,
        "score2027": 36.4
    },
    {
        "id": 16,
        "school": "THPT chuyên Trần Đại Nghĩa",
        "program": "Địa lí",
        "fullName": "THPT chuyên Trần Đại Nghĩa - Địa lí",
        "score2024": 28.0,
        "score2025": 29.5,
        "score2026": 32.0,
        "scoreWMA": 30.45,
        "score2027": 30.45
    },
    {
        "id": 17,
        "school": "THPT chuyên Trần Đại Nghĩa",
        "program": "Hóa học",
        "fullName": "THPT chuyên Trần Đại Nghĩa - Hóa học",
        "score2024": 34.25,
        "score2025": 30.25,
        "score2026": 36.5,
        "scoreWMA": 34.17,
        "score2027": 34.52
    },
    {
        "id": 18,
        "school": "THPT chuyên Trần Đại Nghĩa",
        "program": "Vật lí",
        "fullName": "THPT chuyên Trần Đại Nghĩa - Vật lí",
        "score2024": 33.5,
        "score2025": 29.5,
        "score2026": 32.5,
        "scoreWMA": 31.8,
        "score2027": 32.12
    },
    {
        "id": 19,
        "school": "THPT chuyên Trần Đại Nghĩa",
        "program": "Sinh học",
        "fullName": "THPT chuyên Trần Đại Nghĩa - Sinh học",
        "score2024": 33.0,
        "score2025": 35.75,
        "score2026": 37.75,
        "scoreWMA": 36.2,
        "score2027": 36.2
    },
    {
        "id": 20,
        "school": "THPT chuyên Trần Đại Nghĩa",
        "program": "Lịch sử",
        "fullName": "THPT chuyên Trần Đại Nghĩa - Lịch sử",
        "score2024": 24.75,
        "score2025": 27.0,
        "score2026": 31.75,
        "scoreWMA": 28.93,
        "score2027": 29.21
    },
    {
        "id": 21,
        "school": "THPT chuyên Trần Đại Nghĩa",
        "program": "Tin học",
        "fullName": "THPT chuyên Trần Đại Nghĩa - Tin học",
        "score2024": 34.25,
        "score2025": 30.5,
        "score2026": 31.75,
        "scoreWMA": 31.88,
        "score2027": 31.56
    },
    {
        "id": 22,
        "school": "THPT chuyên Trần Đại Nghĩa",
        "program": "Toán",
        "fullName": "THPT chuyên Trần Đại Nghĩa - Toán",
        "score2024": 35.75,
        "score2025": 35.25,
        "score2026": 35.25,
        "scoreWMA": 35.35,
        "score2027": 35.0
    },
    {
        "id": 23,
        "school": "THPT chuyên Trần Đại Nghĩa",
        "program": "Ngữ văn",
        "fullName": "THPT chuyên Trần Đại Nghĩa - Ngữ văn",
        "score2024": 34.0,
        "score2025": 35.5,
        "score2026": 36.0,
        "scoreWMA": 35.45,
        "score2027": 35.1
    },
    {
        "id": 24,
        "school": "THPT chuyên Hùng Vương – Bình Dương",
        "program": "Tiếng Anh",
        "fullName": "THPT chuyên Hùng Vương – Bình Dương - Tiếng Anh",
        "score2024": 34.05,
        "score2025": 34.4,
        "score2026": 32.25,
        "scoreWMA": 33.26,
        "score2027": 33.75
    },
    {
        "id": 25,
        "school": "THPT chuyên Hùng Vương – Bình Dương",
        "program": "Địa lí",
        "fullName": "THPT chuyên Hùng Vương – Bình Dương - Địa lí",
        "score2024": 31.05,
        "score2025": 26.0,
        "score2026": 27.0,
        "scoreWMA": 27.51,
        "score2027": 27.79
    },
    {
        "id": 26,
        "school": "THPT chuyên Hùng Vương – Bình Dương",
        "program": "Hóa học",
        "fullName": "THPT chuyên Hùng Vương – Bình Dương - Hóa học",
        "score2024": 33.2,
        "score2025": 34.55,
        "score2026": 32.75,
        "scoreWMA": 33.38,
        "score2027": 33.05
    },
    {
        "id": 27,
        "school": "THPT chuyên Hùng Vương – Bình Dương",
        "program": "Vật lí",
        "fullName": "THPT chuyên Hùng Vương – Bình Dương - Vật lí",
        "score2024": 32.8,
        "score2025": 30.15,
        "score2026": 28.25,
        "scoreWMA": 29.73,
        "score2027": 29.73
    },
    {
        "id": 28,
        "school": "THPT chuyên Hùng Vương – Bình Dương",
        "program": "Tiếng Nhật",
        "fullName": "THPT chuyên Hùng Vương – Bình Dương - Tiếng Nhật",
        "score2024": 27.0,
        "score2025": 27.0,
        "score2026": 27.0,
        "scoreWMA": 27.0,
        "score2027": 27.27
    },
    {
        "id": 29,
        "school": "THPT chuyên Hùng Vương – Bình Dương",
        "program": "Sinh học",
        "fullName": "THPT chuyên Hùng Vương – Bình Dương - Sinh học",
        "score2024": 32.6,
        "score2025": 28.74,
        "score2026": 31.75,
        "scoreWMA": 31.02,
        "score2027": 31.33
    },
    {
        "id": 30,
        "school": "THPT chuyên Hùng Vương – Bình Dương",
        "program": "Lịch sử",
        "fullName": "THPT chuyên Hùng Vương – Bình Dương - Lịch sử",
        "score2024": 29.85,
        "score2025": 24.3,
        "score2026": 27.0,
        "scoreWMA": 26.76,
        "score2027": 27.03
    },
    {
        "id": 31,
        "school": "THPT chuyên Hùng Vương – Bình Dương",
        "program": "Tin học",
        "fullName": "THPT chuyên Hùng Vương – Bình Dương - Tin học",
        "score2024": 33.8,
        "score2025": 29.45,
        "score2026": 27.0,
        "scoreWMA": 29.09,
        "score2027": 29.1
    },
    {
        "id": 32,
        "school": "THPT chuyên Hùng Vương – Bình Dương",
        "program": "Toán",
        "fullName": "THPT chuyên Hùng Vương – Bình Dương - Toán",
        "score2024": 34.1,
        "score2025": 36.45,
        "score2026": 30.25,
        "scoreWMA": 32.88,
        "score2027": 32.55
    },
    {
        "id": 33,
        "school": "THPT chuyên Hùng Vương – Bình Dương",
        "program": "Ngữ văn",
        "fullName": "THPT chuyên Hùng Vương – Bình Dương - Ngữ văn",
        "score2024": 30.6,
        "score2025": 31.4,
        "score2026": 34.75,
        "scoreWMA": 32.92,
        "score2027": 33.24
    },
    {
        "id": 34,
        "school": "THPT chuyên Lê Quý Đôn – Vũng Tàu",
        "program": "Tiếng Anh",
        "fullName": "THPT chuyên Lê Quý Đôn – Vũng Tàu - Tiếng Anh",
        "score2024": 35.2,
        "score2025": 36.1,
        "score2026": 33.25,
        "scoreWMA": 34.49,
        "score2027": 34.87
    },
    {
        "id": 35,
        "school": "THPT chuyên Lê Quý Đôn – Vũng Tàu",
        "program": "Địa lí",
        "fullName": "THPT chuyên Lê Quý Đôn – Vũng Tàu - Địa lí",
        "score2024": 27.0,
        "score2025": 27.0,
        "score2026": 27.0,
        "scoreWMA": 27.0,
        "score2027": 27.27
    },
    {
        "id": 36,
        "school": "THPT chuyên Lê Quý Đôn – Vũng Tàu",
        "program": "Hóa học",
        "fullName": "THPT chuyên Lê Quý Đôn – Vũng Tàu - Hóa học",
        "score2024": 35.65,
        "score2025": 33.5,
        "score2026": 32.5,
        "scoreWMA": 33.43,
        "score2027": 33.76
    },
    {
        "id": 37,
        "school": "THPT chuyên Lê Quý Đôn – Vũng Tàu",
        "program": "Vật lí",
        "fullName": "THPT chuyên Lê Quý Đôn – Vũng Tàu - Vật lí",
        "score2024": 32.02,
        "score2025": 30.0,
        "score2026": 28.5,
        "scoreWMA": 29.65,
        "score2027": 29.95
    },
    {
        "id": 38,
        "school": "THPT chuyên Lê Quý Đôn – Vũng Tàu",
        "program": "Sinh học",
        "fullName": "THPT chuyên Lê Quý Đôn – Vũng Tàu - Sinh học",
        "score2024": 36.75,
        "score2025": 34.25,
        "score2026": 31.25,
        "scoreWMA": 33.25,
        "score2027": 33.25
    },
    {
        "id": 39,
        "school": "THPT chuyên Lê Quý Đôn – Vũng Tàu",
        "program": "Lịch sử",
        "fullName": "THPT chuyên Lê Quý Đôn – Vũng Tàu - Lịch sử",
        "score2024": 27.0,
        "score2025": 27.0,
        "score2026": 27.0,
        "scoreWMA": 27.0,
        "score2027": 27.27
    },
    {
        "id": 40,
        "school": "THPT chuyên Lê Quý Đôn – Vũng Tàu",
        "program": "Tin học",
        "fullName": "THPT chuyên Lê Quý Đôn – Vũng Tàu - Tin học",
        "score2024": 35.5,
        "score2025": 35.75,
        "score2026": 27.0,
        "scoreWMA": 31.33,
        "score2027": 31.01
    },
    {
        "id": 41,
        "school": "THPT chuyên Lê Quý Đôn – Vũng Tàu",
        "program": "Toán",
        "fullName": "THPT chuyên Lê Quý Đôn – Vũng Tàu - Toán",
        "score2024": 37.77,
        "score2025": 38.25,
        "score2026": 30.5,
        "scoreWMA": 34.28,
        "score2027": 33.94
    },
    {
        "id": 42,
        "school": "THPT chuyên Lê Quý Đôn – Vũng Tàu",
        "program": "Ngữ văn",
        "fullName": "THPT chuyên Lê Quý Đôn – Vũng Tàu - Ngữ văn",
        "score2024": 37.77,
        "score2025": 36.5,
        "score2026": 34.25,
        "scoreWMA": 35.63,
        "score2027": 35.99
    }
],
  careerCombosRaw: [
    {
        "group": "Khối A – tự nhiên, kỹ thuật, kinh tế",
        "code": "A00",
        "subjects": "Toán, Vật lí, Hóa học",
        "majors": "Kỹ thuật, công nghệ, kinh tế, tài chính, xây dựng, y dược một số trường"
    },
    {
        "group": "Khối A – tự nhiên, kỹ thuật, kinh tế",
        "code": "A01",
        "subjects": "Toán, Vật lí, Tiếng Anh",
        "majors": "CNTT, kỹ thuật, kinh tế, logistics, quản trị"
    },
    {
        "group": "Khối A – tự nhiên, kỹ thuật, kinh tế",
        "code": "A02",
        "subjects": "Toán, Vật lí, Sinh học",
        "majors": "Kỹ thuật y sinh, môi trường, nông nghiệp, sinh học"
    },
    {
        "group": "Khối A – tự nhiên, kỹ thuật, kinh tế",
        "code": "A04",
        "subjects": "Toán, Vật lí, Địa lí",
        "majors": "Kỹ thuật, địa lý, quy hoạch, môi trường"
    },
    {
        "group": "Khối A – tự nhiên, kỹ thuật, kinh tế",
        "code": "A05",
        "subjects": "Toán, Hóa học, Lịch sử",
        "majors": "Một số ngành xã hội – tự nhiên giao thoa"
    },
    {
        "group": "Khối A – tự nhiên, kỹ thuật, kinh tế",
        "code": "A06",
        "subjects": "Toán, Hóa học, Địa lí",
        "majors": "Môi trường, nông nghiệp, địa lý, tài nguyên"
    },
    {
        "group": "Khối B – y sinh, sức khỏe, nông nghiệp",
        "code": "B00",
        "subjects": "Toán, Hóa học, Sinh học",
        "majors": "Y, dược, điều dưỡng, xét nghiệm, công nghệ sinh học"
    },
    {
        "group": "Khối B – y sinh, sức khỏe, nông nghiệp",
        "code": "B08",
        "subjects": "Toán, Sinh học, Tiếng Anh",
        "majors": "Y sinh, công nghệ sinh học, điều dưỡng, môi trường"
    },
    {
        "group": "Khối B – y sinh, sức khỏe, nông nghiệp",
        "code": "B02",
        "subjects": "Toán, Sinh học, Địa lí",
        "majors": "Môi trường, nông nghiệp, tài nguyên"
    },
    {
        "group": "Khối B – y sinh, sức khỏe, nông nghiệp",
        "code": "B04/X13",
        "subjects": "Toán, Sinh học, GDKT&PL",
        "majors": "Một số ngành sức khỏe, sinh học, giáo dục, xã hội ứng dụng"
    },
    {
        "group": "Khối C – xã hội, luật, sư phạm, báo chí",
        "code": "C00",
        "subjects": "Ngữ văn, Lịch sử, Địa lí",
        "majors": "Luật, báo chí, sư phạm, xã hội học, quản lý nhà nước"
    },
    {
        "group": "Khối C – xã hội, luật, sư phạm, báo chí",
        "code": "C01",
        "subjects": "Ngữ văn, Toán, Vật lí",
        "majors": "Kỹ thuật, quản lý, kinh tế ở một số trường"
    },
    {
        "group": "Khối C – xã hội, luật, sư phạm, báo chí",
        "code": "C02",
        "subjects": "Ngữ văn, Toán, Hóa học",
        "majors": "Sức khỏe, môi trường, công nghệ thực phẩm, kinh tế"
    },
    {
        "group": "Khối C – xã hội, luật, sư phạm, báo chí",
        "code": "C03",
        "subjects": "Ngữ văn, Toán, Lịch sử",
        "majors": "Luật, quản lý nhà nước, hành chính, xã hội"
    },
    {
        "group": "Khối C – xã hội, luật, sư phạm, báo chí",
        "code": "C04",
        "subjects": "Ngữ văn, Toán, Địa lí",
        "majors": "Kinh tế, quản trị, du lịch, luật, truyền thông"
    },
    {
        "group": "Khối C – xã hội, luật, sư phạm, báo chí",
        "code": "C14",
        "subjects": "Ngữ văn, Toán, GDKT&PL",
        "majors": "Luật, quản lý nhà nước, kinh tế, hành chính"
    },
    {
        "group": "Khối D – ngoại ngữ, kinh tế, xã hội, truyền thông",
        "code": "D01",
        "subjects": "Toán, Ngữ văn, Tiếng Anh",
        "majors": "Rất rộng: kinh tế, luật, ngôn ngữ, truyền thông, quản trị"
    },
    {
        "group": "Khối D – ngoại ngữ, kinh tế, xã hội, truyền thông",
        "code": "D07",
        "subjects": "Toán, Hóa học, Tiếng Anh",
        "majors": "Y dược, kỹ thuật hóa, công nghệ thực phẩm, kinh tế"
    },
    {
        "group": "Khối D – ngoại ngữ, kinh tế, xã hội, truyền thông",
        "code": "D08",
        "subjects": "Toán, Sinh học, Tiếng Anh",
        "majors": "Y sinh, môi trường, sinh học, nông nghiệp"
    },
    {
        "group": "Khối D – ngoại ngữ, kinh tế, xã hội, truyền thông",
        "code": "D09",
        "subjects": "Toán, Lịch sử, Tiếng Anh",
        "majors": "Luật, xã hội, quan hệ quốc tế, truyền thông"
    },
    {
        "group": "Khối D – ngoại ngữ, kinh tế, xã hội, truyền thông",
        "code": "D10",
        "subjects": "Toán, Địa lí, Tiếng Anh",
        "majors": "Du lịch, logistics, kinh tế, địa lý, quản trị"
    },
    {
        "group": "Khối D – ngoại ngữ, kinh tế, xã hội, truyền thông",
        "code": "D14",
        "subjects": "Ngữ văn, Lịch sử, Tiếng Anh",
        "majors": "Báo chí, luật, sư phạm, quan hệ quốc tế"
    },
    {
        "group": "Khối D – ngoại ngữ, kinh tế, xã hội, truyền thông",
        "code": "D15",
        "subjects": "Ngữ văn, Địa lí, Tiếng Anh",
        "majors": "Du lịch, truyền thông, xã hội, ngôn ngữ"
    },
    {
        "group": "Khối D – ngoại ngữ, kinh tế, xã hội, truyền thông",
        "code": "D03, D04, D05, D06",
        "subjects": "Văn, Toán, Pháp/Trung/Đức/Nhật",
        "majors": "Nhóm ngành ngôn ngữ, quốc tế học, du lịch"
    },
    {
        "group": "Khối K/X mới – Tin học, Công nghệ, GDKT&PL",
        "code": "X26/K01",
        "subjects": "Toán, Tiếng Anh, Tin học",
        "majors": "CNTT, khoa học dữ liệu, AI, thương mại điện tử"
    },
    {
        "group": "Khối K/X mới – Tin học, Công nghệ, GDKT&PL",
        "code": "X25",
        "subjects": "Toán, Tiếng Anh, GDKT&PL",
        "majors": "Kinh tế, luật, quản trị, tài chính"
    },
    {
        "group": "Khối K/X mới – Tin học, Công nghệ, GDKT&PL",
        "code": "X21",
        "subjects": "Toán, Địa lí, GDKT&PL",
        "majors": "Kinh tế, luật, du lịch, quản lý nhà nước"
    },
    {
        "group": "Khối K/X mới – Tin học, Công nghệ, GDKT&PL",
        "code": "X05/A10",
        "subjects": "Toán, Vật lí, GDKT&PL",
        "majors": "Kỹ thuật – quản lý, kinh tế kỹ thuật"
    },
    {
        "group": "Khối K/X mới – Tin học, Công nghệ, GDKT&PL",
        "code": "X09/A11",
        "subjects": "Toán, Hóa học, GDKT&PL",
        "majors": "Kinh tế, công nghệ thực phẩm, môi trường"
    },
    {
        "group": "Khối K/X mới – Tin học, Công nghệ, GDKT&PL",
        "code": "X22",
        "subjects": "Toán, Địa lí, Tin học",
        "majors": "Logistics, địa lý, du lịch số, kinh tế số"
    },
    {
        "group": "Khối K/X mới – Tin học, Công nghệ, GDKT&PL",
        "code": "X23/X24",
        "subjects": "Toán, Địa lí, Công nghệ",
        "majors": "Công nghệ, nông nghiệp, quy hoạch, tài nguyên"
    },
    {
        "group": "Khối V/H – kiến trúc, mỹ thuật, thiết kế",
        "code": "V00",
        "subjects": "Toán, Vật lí, Vẽ mỹ thuật",
        "majors": "Kiến trúc, quy hoạch, thiết kế nội thất"
    },
    {
        "group": "Khối V/H – kiến trúc, mỹ thuật, thiết kế",
        "code": "V01",
        "subjects": "Toán, Ngữ văn, Vẽ mỹ thuật",
        "majors": "Kiến trúc, mỹ thuật ứng dụng"
    },
    {
        "group": "Khối V/H – kiến trúc, mỹ thuật, thiết kế",
        "code": "V02",
        "subjects": "Toán, Tiếng Anh, Vẽ mỹ thuật",
        "majors": "Kiến trúc, thiết kế, quy hoạch"
    },
    {
        "group": "Khối V/H – kiến trúc, mỹ thuật, thiết kế",
        "code": "H00",
        "subjects": "Ngữ văn, Năng khiếu vẽ 1, Năng khiếu vẽ 2",
        "majors": "Mỹ thuật, thiết kế đồ họa, thời trang"
    },
    {
        "group": "Khối V/H – kiến trúc, mỹ thuật, thiết kế",
        "code": "H01",
        "subjects": "Toán, Ngữ văn, Vẽ mỹ thuật",
        "majors": "Thiết kế, mỹ thuật ứng dụng"
    },
    {
        "group": "Khối V/H – kiến trúc, mỹ thuật, thiết kế",
        "code": "H06",
        "subjects": "Ngữ văn, Tiếng Anh, Vẽ mỹ thuật",
        "majors": "Thiết kế, truyền thông thị giác"
    },
    {
        "group": "Khối M/N/S/T – năng khiếu",
        "code": "M00",
        "subjects": "Ngữ văn, Toán, Đọc diễn cảm/Hát",
        "majors": "Giáo dục mầm non"
    },
    {
        "group": "Khối M/N/S/T – năng khiếu",
        "code": "M01, M09",
        "subjects": "Văn/Toán + năng khiếu",
        "majors": "Giáo dục mầm non, giáo dục tiểu học một số trường"
    },
    {
        "group": "Khối M/N/S/T – năng khiếu",
        "code": "N00, N01",
        "subjects": "Ngữ văn + năng khiếu âm nhạc",
        "majors": "Âm nhạc, sư phạm âm nhạc"
    },
    {
        "group": "Khối M/N/S/T – năng khiếu",
        "code": "S00",
        "subjects": "Ngữ văn + năng khiếu sân khấu/điện ảnh",
        "majors": "Sân khấu, điện ảnh, diễn viên, đạo diễn"
    },
    {
        "group": "Khối M/N/S/T – năng khiếu",
        "code": "T00, T01, T03, T04",
        "subjects": "Toán/Văn/Sinh/Lý + năng khiếu TDTT",
        "majors": "Giáo dục thể chất, huấn luyện thể thao"
    }
],
  subjectList: [
    "Vật lí",
    "Hóa học",
    "Sinh học",
    "Địa lí",
    "GDKT&PL",
    "Tin học",
    "Công nghệ",
    "Mĩ thuật",
    "Âm nhạc",
    "Lịch sử"
],
  combos: [
    {
        "id": "A00",
        "name": "Tổ hợp A00: Tự nhiên truyền thống",
        "subjects": [
            "Vật lí",
            "Hóa học"
        ],
        "blocks": [
            "A00",
            "A01",
            "X26"
        ],
        "majors": "Kỹ thuật, công nghệ, kinh tế, tài chính, xây dựng, y dược"
    },
    {
        "id": "A01",
        "name": "Tổ hợp A01: Kỹ thuật - Công nghệ - Ngoại ngữ",
        "subjects": [
            "Vật lí",
            "Tin học"
        ],
        "blocks": [
            "A01",
            "D01",
            "X26"
        ],
        "majors": "CNTT, AI, Khoa học dữ liệu, Kỹ thuật, Logistics, Quản trị"
    },
    {
        "id": "B00",
        "name": "Tổ hợp B00: Y Dược & Sinh hóa",
        "subjects": [
            "Hóa học",
            "Sinh học"
        ],
        "blocks": [
            "B00",
            "B08",
            "D07"
        ],
        "majors": "Y khoa, Dược, Điều dưỡng, Công nghệ sinh học, Môi trường"
    },
    {
        "id": "C00",
        "name": "Tổ hợp C00: Xã hội & Nhân văn",
        "subjects": [
            "Lịch sử",
            "Địa lí"
        ],
        "blocks": [
            "C00",
            "C03",
            "C14"
        ],
        "majors": "Luật, Báo chí, Truyền thông, Sư phạm, Quản lý nhà nước"
    },
    {
        "id": "D01",
        "name": "Tổ hợp D01: Kinh tế - Quản trị - Ngôn ngữ",
        "subjects": [
            "Địa lí",
            "GDKT&PL"
        ],
        "blocks": [
            "D01",
            "D10",
            "X25"
        ],
        "majors": "Kinh tế, Tài chính, Marketing, Ngoại ngữ, Quan hệ quốc tế"
    },
    {
        "id": "X26",
        "name": "Tổ hợp Công nghệ mới (X26/K01): CNTT & AI",
        "subjects": [
            "Tin học",
            "Công nghệ"
        ],
        "blocks": [
            "X26",
            "A01",
            "K01"
        ],
        "majors": "Khoa học máy tính, AI, Kỹ thuật phần mềm, Thương mại điện tử"
    },
    {
        "id": "V00",
        "name": "Tổ hợp V00/H00: Thiết kế & Nghệ thuật",
        "subjects": [
            "Mĩ thuật",
            "Tin học"
        ],
        "blocks": [
            "V00",
            "V01",
            "H00",
            "H01"
        ],
        "majors": "Kiến trúc, Thiết kế đồ họa, Nội thất, Mỹ thuật ứng dụng"
    }
],
  careers: [
    {
      id: 'cntt',
      name: 'CNTT, AI, Khoa học dữ liệu, Kỹ thuật số',
      priorityCombos: ['A00', 'A01', 'X26/K01'],
      recommended: ['Tin học', 'Vật lí', 'Công nghệ', 'Toán']
    },
    {
      id: 'kinhte',
      name: 'Kinh tế, Tài chính - Ngân hàng, Quản trị, Logistics',
      priorityCombos: ['A01', 'D01', 'X25', 'D10'],
      recommended: ['GDKT&PL', 'Tin học', 'Địa lí', 'Vật lí']
    },
    {
      id: 'yduoc',
      name: 'Y khoa, Dược, Điều dưỡng, Công nghệ sinh học',
      priorityCombos: ['B00', 'B08', 'D07'],
      recommended: ['Hóa học', 'Sinh học', 'Vật lí', 'Tin học']
    },
    {
      id: 'luat',
      name: 'Luật, Quản lý nhà nước, Báo chí, Xã hội học',
      priorityCombos: ['C00', 'C14', 'D01', 'D14'],
      recommended: ['GDKT&PL', 'Địa lí', 'Lịch sử', 'Tin học']
    },
    {
      id: 'kientruc',
      name: 'Kiến trúc, Mỹ thuật, Thiết kế đồ họa, Truyền thông thị giác',
      priorityCombos: ['V00', 'V01', 'H00', 'H01'],
      recommended: ['Mĩ thuật', 'Tin học', 'Vật lí', 'Công nghệ']
    }
  ]
};
