document.getElementById('encryptBtn').addEventListener('click', () => {
    const text = document.getElementById('inputText').value;
    const technique = document.getElementById('techniqueSelect').value;
    const result = encryptText(text, technique);
    document.getElementById('outputText').value = result;
});

document.getElementById('decryptBtn').addEventListener('click', () => {
    const text = document.getElementById('inputText').value;
    const technique = document.getElementById('techniqueSelect').value;
    const result = decryptText(text, technique);
    document.getElementById('outputText').value = result;
});

function encryptText(text, technique) {
    switch (technique) {
        case 'caesar':
            return caesarCipher(text, 3);
        case 'base64':
            return btoa(text); 
        case 'aes':
            return aesEncrypt(text, 'secret-key');
        default:
            return text;
    }
}

function decryptText(text, technique) {
    switch (technique) {
        case 'caesar':
            return caesarCipher(text, -3); 
        case 'base64':
            return atob(text); 
        case 'aes':
            return aesDecrypt(text, 'secret-key'); 
        default:
            return text;
    }
}

// Caesar Cipher
function caesarCipher(str, shift) {
    return str.split('').map(char => {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {
            return String.fromCharCode(((code - 65 + shift) % 26) + 65); 
        } else if (code >= 97 && code <= 122) {
            return String.fromCharCode(((code - 97 + shift) % 26) + 97); 
        }
        return char;
    }).join('');
}

// AES
function aesEncrypt(text, key) {
    return CryptoJS.AES.encrypt(text, key).toString();
}

function aesDecrypt(ciphertext, key) {
    return CryptoJS.AES.decrypt(ciphertext, key).toString(CryptoJS.enc.Utf8);
}
