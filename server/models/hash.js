var CryptoJS = require("crypto-js");

module.exports = {

    Encrypt: (s) => {
        return CryptoJS.AES.encrypt(s, 'ndjksnjkdnak').toString();
    },
    
    Decrypt: (h) => {
        var bytes  = CryptoJS.AES.decrypt(h, 'secret key 123');
        return bytes.toString(CryptoJS.enc.Utf8);
    }
}

