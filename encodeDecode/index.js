// Require filesystem Access
let fs = require('fs');
// Read the file buffer
let imageBuffer = fs.readFileSync('./test-pattern.jpg');

//  Encode image buffer to hex
let imageBufferHexCode = new Buffer.from(imageBuffer).toString('hex');

//  Output encoded data to console
console.log(imageBufferHexCode);

// Decode hex
let decodedImgHex = new Buffer.from(imageBufferHexCode, 'hex')

// Save decoded file system 
fs.writeFileSync('decodedHexImg.jpg', decodedImgHex);