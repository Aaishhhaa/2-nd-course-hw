let password = '12345';
let user = prompt('Введите пароль');
if (user === prompt) {
    alert("пароль введен верно") 
} else {
    alert("пароль введен неверно")
};


let c = 25;
if (c > 0 && c < 10) {
    console.log('Верно')
} else {
    console.log('Неверно')
};


let d = 188;
let e = 77;
if (d > 100 || e > 100) {
    console.log('Верно')
} else {
    console.log('Неверно')
};
 

let a = '2';
let b = '3';

alert(+a + +b);


let month = +prompt('Какой сейчас месяц?');
switch(month){
    case 12, 1, 2:
    console.log('Зима');
    break;
    case 3, 4, 5:
    console.log('Весна');
    break;
    case 6, 7, 8:
    console.log('Лето');
    break;
    case 9, 10, 11:
    console.log('Осень');
    break;
    default:
    console.log('Такого месяца не существует');
    break;
}


let number = +prompt('Пожалуйста, введите любое число');
if (isNaN(number))
    if(number % 2 === 0){
        console.log('четное число')
    } else { console.log('нечетное число')
}
alert(number);


const clientOS = 1;
if (clientOS === 1) {
    console.log('Установите версию приложения для iOS по ссылке')
} else {
    console.log('Установите версию приложения для Android по ссылке')
}

const clientOS2 = 1;
const clientDeviceYear = 2015;

if(clientOS === 1){
    if(clientDeviceYear < 2015){
       console.log('установите облегченное приложение на Android')
    } else{ 
        console.log('установите обычное приложение на Android')
    }
} else {
   if(clientDeviceYear < 2015){
        console.log('установите облегченное приложение на IOS')
    }
    else {
        console.log('установите обычное приложение на IOS') 
    }
}