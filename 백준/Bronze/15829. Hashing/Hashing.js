function calculateHash(n, str) {
    const r = 31;
    const M = 1234567891;
    
    let hashValue = 0;
    let power = 1;
    
    for (let i = 0; i < n; i++) {
        const charValue = str.charCodeAt(i) - 'a'.charCodeAt(0) + 1;
        hashValue = (hashValue + (charValue * power) % M) % M;
        power = (power * r) % M;
    }
    
    return hashValue;
}

// 입력 처리
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = parseInt(input[0]);
const str = input[1].trim();

console.log(calculateHash(n, str));
