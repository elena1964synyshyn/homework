// 1
// let name = "Olena";
// let sity = "Napoli";
// city = name;
// console.log(city);

// 2
// let name = 'Olena';
// console.log(`привіт ${1}`);привіт 1
// console.log(`привіт ${"name"}`);привіт name
// console.log(`привіт ${name}`);привіт Olena

// 3
// let a = "5";
// let b = "13cvb";
// let c = "12.9sxdcfgv";
// console.log(typeof Number(a));-number
// console.log(typeof parseInt(b));-number
// console.log(typeof parseFloat(c));-number

// 4
// console.log((0.1 * 10 + 0.2 * 10) /10);-0,3

// 5
// console.log(Math.max(20, 10, 50, 40));-50

// ***6**
// console.log(Math.random() * (4 - 2) + 2);=2.7802751375150363

// ***7**
// const message = "Welcome to Bahamas!";
// console.log(message.length);-19

// ***8**
// const message = "Welcome to Bahamas!";
// console.log(message.toUpperCase());-WELCOME TO BAHAMAS!

// ***9**
// let user = {};
// user.name = 'Olena';
// user.age = 61;
// user.city = "Napoli";
// // console.log(user);
// delete user.city;
// user['like flowers'] = true;
// console.log(user);
// -{ name: ' Olena', age: 61, city: 'Napoli' }
//  {name: ' Olena', age: 61, like flowers: true}

// ***10**

// for (key in user) {
//   console.log(key);
//   console.log(user[key]);
// }
// -name
// script.js:55  Olena
// script.js:54 age
// script.js:55 61
// script.js:54 like flowers
// script.js:55 true

// const message = 'Javascript is awesome!';

// // виведення

// alert(message);
// console.log(message);

// #2 lesson

// Отримання даних

// Confirm
// const isconfirm = confirm('Please confirm reservation');
// console.log(isconfirm);
// -true;
// const test = confirm('yes or no?');

// console.log(test);-true;

// Confirm

// const isConfirm = confirm('Please cofirm reservation');
// console.log(isconfirm);

// const test = confirm('Yes or no?');
// console.log = test;

// Prompt

// const userName = prompt('Pleas enter your name:');
// console.log(userName);
// const number = prompt('Pleas enter your number:');
// console.log(number);

// String
// value = false;
// console.log(typeof value);

// const newValue = String(value);
// console.log(typeof newValue);

// /number

// value = '123';
// console.log(typeof value);
// const newValue = Number(value);
// console.log(typeof newValue);

// Boolean

// console.log(Boolean(1));
// console.log(Boolean(0));

// console.log(Boolean('Вітаю'));
// console.log(Boolean(''));

// console.log(Boolean(NaN));
// console.log(Boolean(null));

// Оператори
// console.log(2 + 2);
// console.log(10 - 4);
// console.log(3 * 5);
// console.log(15 / 3);

// Остачы выд дылення

// console.log(8 % 3);
// console.log(10 % 3);
// console.log(10 % 2);

// Пыднесення до степеня

// console.log(5 ** 2);
// console.log(4 ** 4);

// Оператори порывняння
// a==b-дорівнює
// А!=в не дорівнює
// а===в строго дорівнює
// а!==в строго не дорівнює

// console.log(5 > 3);
// console.log(5 < 3);
// console.log(5 >= 5);
// console.log(7 <= 4);

// let value = 0;
// console.log(value == 0);

// Приведення до типу
// and

// console.log(5 === 5 && 6 > 3);
// console.log(6 + 3 >= 9 && 8 + 1 === 9);

// or-(abo)

// console.log(5 + 5 === 25 || 2 * 2 === 6);

// not

// console.log(знак оклику означае false);

// if-якщо

// if (5 + 5 === 10){
//   console.log("Hello");
// }
// if (5 + 5 === 25){console.log("1");}else{
//   console.log("2");
// }

// if (2 + 2 === 4){
//   console.log("Hello");
// }else{console.log("No hello");}

// Тернарний оператор
// 2+2===4? console.log("1") : console.log("2")
// 5*5===24 ? console.log(true) : console.log(false);

if (5+5 === 7){
  console.log("5+5 === 7");
}else if(2+2 === 4){
  console.log("2+2 === 4");
}else{
  console.log("no");
} 
