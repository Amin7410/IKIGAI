const fs = require('fs');
const CryptoJS = require('crypto-js');

const dbContent = fs.readFileSync('js/data/db.js', 'utf8');

// Trick to evaluate the ES module content in Node.js
// We replace 'export const db =' with 'module.exports ='
const cjsContent = dbContent.replace('export const db =', 'module.exports =');
fs.writeFileSync('temp_db.js', cjsContent, 'utf8');

const db = require('./temp_db.js');

const PASSWORD = 'HongHanh123';

console.log('Bắt đầu mã hóa CSDL IKIGAI...');

const rawData = JSON.stringify(db);
const encrypted = CryptoJS.AES.encrypt(rawData, PASSWORD).toString();

const jsContent = `// File này được sinh tự động. Chứa CSDL đã mã hóa AES-256.
window.ENCRYPTED_DB = "${encrypted}";
`;

fs.writeFileSync('js/data_payload.js', jsContent, 'utf-8');
console.log('Đã lưu CSDL mã hóa vào: js/data_payload.js');

// Xóa file tạm
fs.unlinkSync('temp_db.js');
