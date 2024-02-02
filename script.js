// function menshee(a,b) {
//     if(a>b){
//         return b
//     } else return a 
// }
// console.log(menshee(2,5));



// function myFunc(num) {
//     if(num % 2 === 0){
//         return'Четное число';
//     } else {
//         return'Нечетное число';
//     }
// } 
// console.log(myFunc(6));
// console.log(myFunc(9));


// function square(num) {
//     return num ** 2
// }
// console.log(square(5));

// function square2(num) {
//     console.log(num ** 2);
// }
// square2(3);



// function survey() {
//     let age = prompt('Сколько вам лет?');
//     if(age < 0) {
//     alert('Вы ввели неправильное значение');
//     }   else if(age <= 12 ) { 
//         alert('Привет, друг!');
//     }   else{ alert('Добро пожаловать!');
//     }  
// }
// survey();




// function numbers(num1, num2) {
//     if (isNaN(num1) || isNaN(num2)) {
//         return 'Одно или оба значения не являются числом';
//     } else {
//         return num1 * num2;
//     }
// }
// console.log(numbers(5, 5));
// console.log(numbers('auu', 5));



// function data() {
//     let numerik = prompt('Запишите любое число ?');
//     if(isNaN(numerik)){
//         return "Данный параметр не является числом"
//     } else {
//         return `n в кубе = ${numerik ** 3}`
//     } 
// }
// data();



// const circle1 = {
//    radius: 7,
//    getArea:function(a){
//     return 3,14 * this.radius ** 2;
//    },
//    getPerimetr:function(b){
//    return 2 * 3,14 * this.radius;
//    },
// }
// const circle2 = {
//    radius: 8,
//    getArea:function(a){
//    return 3,14 * this.radius ** 2;
//    },
//    getPerimetr:function(b){
//     return 2 * 3,14 * this.radius;
//    },
// }
// console.log(circle1.getArea());
// console.log(circle1.getPerimetr());
// console.log(circle2.getArea());
// console.log(circle2.getPerimetr());
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

// const numbs = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < numbs.length; i++) {
// 	if (numbs[i] === 10){
// 	console.log(numbs[i]);
//     break;
//    }
//    console.log(numbs[i]);
// }

// const numb = [1, 5, 4, 10, 0, 3];
// const index = numb.indexOf(4);
// console.log(index);


// let a = [1, 3, 5, 10, 20];
// a = a.join(' ');
// console.log(a);


// const bay = [];
// for(let i=0; i<3; i++){
//     bay.push([])
//     for(let j=0; j<3; j++){
//     bay[i].push(1)
//     } 
// };
// console.log(bay);



// const c = [1, 1, 1];
// for(let i = 0; i < 3; i++){
//     c.push(2);
// }
// console.log(c);





// const au = [9, 8, 7, 'a', 6, 5];
// au.sort((a, b) => a - b);
// let result = au.filter(item => typeof item === 'number');
// console.log(result);

// function data() {
//     let numerik = prompt('Запишите любое число ?');
//     if(isNaN(numerik)){
//         return "Данный параметр не является числом"
//     } else {
//         return `n в кубе = ${numerik ** 3}`
//     } 
// }
// data();




// const inp = [9, 8, 7, 6, 5];
// let user = +prompt('Угадайте число');
// if (inp.includes(user)){
//     alert('Угадал')
// } else { 
//     alert('Не угадал')
// };



// const st = 'abcdef';
// let reversedSt = st.split('').reverse().join('');
// console.log(reversedSt);



// let arr = [[1, 2, 3],[4, 5, 6]];
// let arrflat = arr.flat();
// console.log(arrflat);

// const massive = [1,2,3,4,5,6,7,8,9,10];

// for (let i = 0; i < massive.length - 1; i++) {
//   console.log(massive[i] + massive[i + 1]);
// };

// const array = [1, 2, 3, 4, 5];

// function func(a) {
//   return a.map((el) => el ** 2);
// }

// console.log(func(array));



// const words = ['слово', '', 'слог', 'длинное предложение', 'буква'];
// function getLengthWords(array) {
//   return array.map((a)=> a.length);
// }
// console.log(getLengthWords(words))



// const numbers = [-1, 0, 5, -10, 56];
// const numbers2 = [-25, 25, 0, -1000, -2];

// function filterPositive(array) {
//   return array.filter((elem)=> elem < 0)
// };
// console.log(filterPositive(numbers));
// console.log(filterPositive(numbers2));
  



// const array2 = [];

// for (let i = 0; i < 10; i++) {
//   const randomNumber = Math.floor(Math.random() * 11)
//   array2.push(randomNumber)
// }
// console.log(array2);


// const array3 = [];
// let summ = 0;
// for (let i = 0; i < 6; i++) {
//     const randomNumber2 = Math.floor(Math.random() * 11);
//     summ = summ + randomNumber2;
//     array3.push(randomNumber2);
// }
// console.log(summ / array3.length);


// dz7



// // 1 задание 
// const lowerCaseString = 'js';
// const upperCaseString = lowerCaseString.toUpperCase();
// console.log(upperCaseString); 




// // 2 задание 
// let num = 32.58884; 

// Math.round(num);
// Math.floor(num); 
// Math.ceil(num);



// // 3 задание 
// function searchStart(array, str) {
//   return array.filter((el) => el.toLowerCase().startsWith(str.toLowerCase()))
//   }
// console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко')); // ['Кошка', 'Комар']
// console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру')); // ['груша']
// console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино')); // []




// // 4 задание 
// let numbers = [52, 53, 49, 77, 21, 32];

// Math.max(...numbers);
// Math.min(...numbers);


// // 5 задание 
// function getRandomNumber() {
//     console.log(Math.floor(Math.random() * 10 + 1)); 
//  }

//  getRandomNumber()
// for


// //  6 задание 
//  function getRandomArrNumbers(num) {
//     let length = Math.floor(num / 2);
//     let arr = []
  
//     for(let i=0; i<length;i++){
//       arr.push(Math.floor(Math.random() * (num+1)))
//     }
  
//     return arr
//   }
  
// getRandomArrNumbers(10);



// // 7 задание 
// function getRandomNumber(min, max) {
//    return Math.floor(Math.random() * (max - min + 1) + min);
// }
  
  
// getRandomNumber(4, 12);


// // 8 задание 
// let date = new Date();
// console.log(date.toLocaleDateString('ru-RU'));


// let currentDate = new Date();
// currentDate.setDate(currentDate.getDate() + 73);
// console.log(currentDate);



// // 9 задание 
// function getFullDate(d) {
//     return `Дата: ${d.getDate()} ${d
//       .getMonth()
//       .toLocaleString('ru-RU')} ${d.getFullYear()} \n 
//     Время: ${d.getHours() < 10? '0' + d.getHours():d.getHours()}:${d.getMinutes() < 10? '0' + d.getMinutes():d.getMinutes()}:${d.getSeconds() < 10? '0' + d.getSeconds():d.getSeconds()} `;
//   }



// // 10 задание 
// function getFullDate(d) {
//   return `Дата: ${d.getDate()} ${d
//     .getMonth()
//     .toLocaleString('ru-RU')} ${d.getFullYear()} \n 
//   Время: ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} `;
// }


// 11 задание
  function game() {
    let array = [
      'Яблоко',
      'Груша',
      'Дыня',
      'Виноград',
      'Персик',
      'Апельсин',
      'Мандарин',
    ];
  
    alert(array.join(' '))
    let firstElement = prompt('Чему равнялся первый элемент массива?').toLowerCase()
    let lastElement = prompt('Чему равнялся последний элемент массива?').toLowerCase()
  
    if(firstElement === array[0].toLowerCase() && lastElement === array[array.length - 1].toLowerCase()) alert('Вы победили')
    else if(firstElement === array[0].toLowerCase() || lastElement === array[array.length - 1].toLowerCase()) alert('Вы были близки к победе')
    else alert('Вы проиграли')
  
  }



// hw8

// Задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 },
  ];
  
  // Использую колбэк для сортировки по возрасту, от наименьшего к наибольшему
  const sortedPeople = people.sort((a, b) => a.age - b.age);
  
  console.log(sortedPeople);

// Задание 2
function isPositive(num) {
    return num > 0;
}

function isMale(person) {
    return person.gender === 'male';
}

function filter(arr, ruleFunction) {
    const filteredResult = [];
    arr.map(item => {
        if(ruleFunction(item)) {
            filteredResult.push(item);
        }
    });
    return filteredResult;
}

console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]



// Задание 3
const peopl = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(peopl, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'}, {name: 'Олег', gender: 'male'}]```


// Задание 4
count = 0;

let interval = setInterval(() => {
  const currentDate = new Date();
  console.log(currentDate);
  count += 3;
  if (count >= 30) {
    clearInterval(interval);
    console.log('30 секунд прошло');
  }
}, 3000);

function delayForSecond(fn) {
  setTimeout(fn, 1000)
}

delayForSecond(()=>console.log('Привет Глеб'))



// Задание 5
function delayForSecond(cb) {
    setTimeout(() => {
      if (cb) {
        cb();
      }
      console.log('Прошла одна секунда');
    }, 1000);
  }

