const fs = require('fs');
const path = require('path');
const JavaScriptObfuscator = require('javascript-obfuscator');

const SRC_DIR = path.join(__dirname, 'src', 'js');
const DEST_DIR = path.join(__dirname, 'js');

// Options cấu hình mức độ làm rối cực cao
const obfuscatorOptions = {
    compact: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 1,
    deadCodeInjection: true,
    deadCodeInjectionThreshold: 0.4,
    debugProtection: true,       // Gây treo F12 (Anti-Debugging)
    debugProtectionInterval: 4000,
    disableConsoleOutput: true,  // Vô hiệu hóa console.log
    identifierNamesGenerator: 'hexadecimal',
    log: false,
    numbersToExpressions: true,
    renameGlobals: false,
    selfDefending: true,
    simplify: true,
    splitStrings: true,
    splitStringsChunkLength: 5,
    stringArray: true,
    stringArrayCallsTransform: true,
    stringArrayCallsTransformThreshold: 1,
    stringArrayEncoding: ['base64'],
    stringArrayIndexesType: [
        'hexadecimal-number'
    ],
    stringArrayIndexShift: true,
    stringArrayRotate: true,
    stringArrayShuffle: true,
    stringArrayWrappersCount: 5,
    stringArrayWrappersChainedCalls: true,
    stringArrayWrappersParametersMaxCount: 5,
    stringArrayWrappersType: 'function',
    stringArrayThreshold: 1,
    transformObjectKeys: true,
    unicodeEscapeSequence: false
};

function getAllJSFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            getAllJSFiles(filePath, fileList);
        } else if (file.endsWith('.js') && file !== 'data_payload.js') { // Bỏ qua payload đã mã hóa AES
            fileList.push(filePath);
        }
    }
    return fileList;
}

function processFiles() {
    console.log('Bắt đầu quy trình Obfuscation (Làm rối mã nguồn)...');
    
    // Đảm bảo thư mục đích tồn tại
    if (!fs.existsSync(DEST_DIR)){
        fs.mkdirSync(DEST_DIR, { recursive: true });
    }

    const jsFiles = getAllJSFiles(SRC_DIR);
    
    jsFiles.forEach(file => {
        const relativePath = path.relative(SRC_DIR, file);
        const destPath = path.join(DEST_DIR, relativePath);
        
        // Tạo thư mục con nếu cần
        const destDir = path.dirname(destPath);
        if (!fs.existsSync(destDir)){
            fs.mkdirSync(destDir, { recursive: true });
        }

        const sourceCode = fs.readFileSync(file, 'utf8');
        
        console.log(`Đang làm rối: ${relativePath}`);
        try {
            const obfuscationResult = JavaScriptObfuscator.obfuscate(sourceCode, obfuscatorOptions);
            fs.writeFileSync(destPath, obfuscationResult.getObfuscatedCode(), 'utf8');
        } catch(e) {
            console.error(`Lỗi khi làm rối ${relativePath}:`, e);
        }
    });

    console.log('✅ Hoàn tất Obfuscation! Mã nguồn đã được bảo vệ.');
}

processFiles();
