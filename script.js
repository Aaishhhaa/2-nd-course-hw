function menshee(a,b) {
    if(a>b){
        return b
    } else return a 
}
console.log(menshee(2,5));



function myFunc(num) {
    if(num % 2 === 0){
        return'Четное число';
    } else {
        return'Нечетное число';
    }
} 
console.log(myFunc(6));
console.log(myFunc(9));


function square(num) {
    return num ** 2
}
console.log(square(5));

function square2(num) {
    console.log(num ** 2);
}
square2(3);



function survey() {
    let age = prompt('Сколько вам лет?');
    if(age < 0) {
    alert('Вы ввели неправильное значение');
    }   else if(age <= 12 ) { 
        alert('Привет, друг!');
    }   else{ alert('Добро пожаловать!');
    }  
}
survey();




function numbers(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return num1 * num2;
    }
}
console.log(numbers(5, 5));
console.log(numbers('auu', 5));


function data() {
    let numerik = prompt('Запишите любое число ?');
    if(isNaN(numerik)){
        return "Данный параметр не является числом"
    } else {
        return `n в кубе = ${numerik ** 3}`
    } 
}
data();



const circle1 = {
   radius: 7,
   getArea:function(a){
    return 3,14 * this.radius ** 2;
   },
   getPerimetr:function(b){
   return 2 * 3,14 * this.radius;
   },
}
const circle2 = {
   radius: 8,
   getArea:function(a){
   return 3,14 * this.radius ** 2;
   },
   getPerimetr:function(b){
    return 2 * 3,14 * this.radius;
   },
}
console.log(circle1.getArea());
console.log(circle1.getPerimetr());
console.log(circle2.getArea());
console.log(circle2.getPerimetr());




function seasons() {
    const num = +prompt('Введите месяц')
    if (num === 12 || num === 1 || num === 2) {
    alert('Зима')
    } else if(num === 3 || num === 4 || num === 5) {
    alert('Весна')
    } else if(num === 6 || num === 7 || num === 8) {
    alert('Лето')
    } else if(num === 9 || num === 10 || num === 11) {
    alert('Осень')
    } else {
    alert('Вы ввели неправильное значение')
    }
};
// console.log(seasons(12));
// console.log(seasons(4));
// console.log(seasons(7));
// console.log(seasons(9));
// console.log(seasons(13));



