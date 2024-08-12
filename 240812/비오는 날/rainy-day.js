class Weather {
    constructor(date, week, weatherCondition) {
        this.date = date;
        this.week = week;
        this.weatherCondition = weatherCondition;
    }

    getDateObject() {
        return new Date(this.date);
    }


    toString() {
        return `${this.date} ${this.week} ${this.weatherCondition}`
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

let weathers = [];

for ( let i = 1; i <= n ; i ++ ) {
    const [date, week, condition] = input[i].split(' ');
    weathers.push(new Weather(date, week, condition)); 
}

weathers.sort((a, b) => a.date.localeCompare(b.date));

for ( let i = 0 ; i < n ; i ++ ) {
    if ( weathers[i].weatherCondition === 'Rain') {
        console.log(weathers[i].toString())
        break
    }
}