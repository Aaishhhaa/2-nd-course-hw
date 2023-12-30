let = 0;
for (let i = 'Привет'; i < 2; i++) {
    console.log(i);
}


let a = 1;

while (a < 6) {
    console.log(a);
    a++;
}


let j = 7;

while(j <= 22){
    console.log(j);
    j++;
}


const obj = {
    'Вася': 200,
    'Петя': 300,
    'Коля': 400
}
for(let key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов.`);
}
let n = 1000;
let num = 0;
while(n > 50){
    n = n / 2
    console.log(n);
    num++
};


let firstDay = 5;
let daysMonth = 31;
while(firstDay <= 31 ){
    console.log(`Сегодня пятница ${firstDay} число`)
    firstDay += 7
}
