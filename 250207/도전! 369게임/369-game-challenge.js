const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
const n = input;  // n을 문자열로 처리

const MOD = 10 ** 9 + 7;
const digits = n.split('').map(Number);
const len = digits.length;

// 메모이제이션을 위한 Map (key: "pos,started,tight,has369,mod")
const memo = new Map();

/**
 * dp(pos, started, tight, has369, mod)
 * pos: 현재 자릿수 인덱스 (0부터 len-1)
 * started: 숫자 시작 여부 (boolean)
 * tight: 상한 제한 여부 (boolean)
 * has369: 지금까지 3,6,9 중 하나가 등장했는지 (boolean)
 * mod: 지금까지 자리수 합의 mod 3 (0,1,2)
 */
function dp(pos, started, tight, has369, mod) {
  if (pos === len) {
    // 숫자를 전혀 선택하지 않은 경우는 0이므로 제외
    if (!started) return 0;
    // 조건: 3,6,9가 등장했거나, 자리수 합이 3의 배수인 경우
    return (has369 || mod === 0) ? 1 : 0;
  }
  
  const key = `${pos},${started},${tight},${has369},${mod}`;
  if (memo.has(key)) return memo.get(key);
  
  let res = 0;
  // 현재 자릿수의 선택 가능한 최대 digit
  const limit = tight ? digits[pos] : 9;
  
  for (let d = 0; d <= limit; d++) {
    // 숫자 시작 여부: 이미 시작했거나 현재 d가 0이 아니면 시작한 것으로 간주
    const newStarted = started || (d !== 0);
    // tight 여부: 이전까지 tight이고, 현재 d가 limit과 같아야 함
    const newTight = tight && (d === limit);
    
    let newHas369 = has369;
    let newMod = mod;
    if (newStarted) {
      // d가 3, 6, 9 중 하나면 has369 갱신
      if (d === 3 || d === 6 || d === 9) {
        newHas369 = true;
      }
      newMod = (mod + d) % 3;
    }
    
    res = (res + dp(pos + 1, newStarted, newTight, newHas369, newMod)) % MOD;
  }
  
  memo.set(key, res);
  return res;
}

const ans = dp(0, false, true, false, 0);
console.log(ans);
