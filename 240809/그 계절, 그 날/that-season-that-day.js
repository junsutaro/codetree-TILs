const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const [Y, M, D] = input.split(' ').map(Number);

const isDate = {
    1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30,
    7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12:31
}

const ans = findAns(Y, M, D);
console.log(ans);


function findAns(Y, M, D) {
    // console.log('findAns 실행!')
    if ( isExistDate(Y, M, D) === true ) {
        return whatWeather(M)
    }
    return '-1'
}


function isExistDate(Y, M, D) {
    // console.log('isExistDate 실행!')

    if ( M === 2 && D === 29 ) {
        if ( isLunarYear(Y) === true ) {
            return true
        }
        return false
    }
    else {
        if (( M > 0 && M <= 12) && D <= isDate[M] ) {
            return true
        }
        return false
    }
}

function isLunarYear(Year) {
    // console.log('isLunarYear 실행!')

    if ( Year % 4 !== 0 ) {
        return false;
    }
    if ( Year % 100 !== 0 ) {
        return true;
    }
    if ( Year % 400 !== 0 ) {
        return false;
    }
    return true;
}

function whatWeather ( M ) {
    // console.log('whatWeather 실행!')
    if ( M >= 3 && M <= 5 ) { return 'Spring'}
    if ( M >= 6 && M <= 8 ) { return 'Summer'}
    if ( M >= 9 && M <= 11 ) { return 'Fall'}
    if ( M > 13 && M >= 12 || M >= 1 || M <= 2 ) { return 'Winter'}
}