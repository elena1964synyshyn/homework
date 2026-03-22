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

// // Тернарний оператор
// 2+2===4? console.log("1") : console.log("2")
// 5*5===24 ? console.log(true) : console.log(false);

// if (5+5 === 7){
//   console.log("5+5 === 7");
// }else if(2+2 === 4){
//   console.log("2+2 === 4");
// }else{
//   console.log("no");
// } 

// let lend = "ua";
// if (lend === "ua") {
//   console.log("понеділок");
// } else if (lend ==="en") { 
//   console.log("Monday");
// } else{
//   console.log("Reset");
// }

// switch/case

// let num = 10
// switch (num) {
//   case 0:
//     console.log(0);
//   break;
//    case 5:
//     console.log(5);
//   break;
//   case 10:
//     console.log(10);
//   break;
// }

// let cost;
// const sub =  "premium";
// switch (sub) {
//   case 'free':
//   cost = 0;
//   break;  

//   case "pro":
//     cost = 100;
//     break;

//     case "premium":
//       cost = 500;

//       default : console.log("Invalid sub");
// }
// console.log(cost);

// const min = prompt("Введіть хвилину");
// if (min >= 0 && min <=14) {
//   console.log("Перша чверть") 
// } else if ( min >=15 && min <=29) {
//   console.log("Друга чверть ")
// } else if (min >= 30 && min <= 44) {
//   console.log ("Третя чверть")
// } else if ( min >= 45 && min <=59) {
//   console.log("четверта чверть");
// }

// const value = prompt("Введіть назву товару").toLowerCase();
// let cost;

// switch (value) {
//   case "яблуко":
//     cost =10
//     alert(`${value} коштує ${cost} гривень`); 
//     break;

//     case "вишня":
//     cost =50
//     alert(`${value} коштує ${cost} гривень`); 
//     break;

//     case "груша":
//     cost =45
//     alert(`${value} коштує ${cost} гривень`); 
//     break;

//     case "чорниця":
//     cost =135
//     alert(`${value} коштує ${cost} гривень`); 
//     break;

//     case "диня":
//     cost =170
//     alert(`${value} коштує ${cost} гривень`); 
//     break; 
//     default:
//        alert(`Товару ${value}, немає в наявності`);
// }
// ------------------------------------------------------------

// ----Домашнє завдання----

// let = 1;
// console.log(1>0);
// let =0; 
// console.log(0>0);
// let = -3;
// console.log(-3<0);


// let = 'test';
// console.log('test' === 'test');
// let = 'querty';
// console.log('test' ==='querty' );
// let = true;
// console.log('test' ===true );


// let =1 ;
// console.log(1 > 10 ? 1 - 5 : 1 + 5); // 6  — 1 менше 10, додаємо 5

// let = 10;
// console.log(10 > 10 ? 10 -5 : 10 + 5);  // 15 — 10 не більше 10, додаємо 5

// let =13 ;
// console.log(13 > 10 ? 13 - 5 : 13 + 5);  // 8  — 13 більше 10, віднімаємо 5

// const month = prompt('Введіть число від 1 до 12:');

// const months = {
//     1: 'Січень',
//     2: 'Лютий',
//     3: 'Березень',
//     4: 'Квітень',
//     5: 'Травень',
//     6: 'Червень',
//     7: 'Липень',
//     8: 'Серпень',
//     9: 'Вересень',
//     10: 'Жовтень',
//     11: 'Листопад',
//     12: 'Грудень'
// };
// console.log(months[month] ?? 'Невірне число!');

// const num = prompt('Введіть тризначне число:');

// const a = Number(num[123]);
// const b = Number(num[456]);
// const c = Number(num[999]);

// console.log(123 + 456 + 999);
// ------------------------------------------------------------

// Модуль №23. Mасиви i цикли

// const a =5;

// if (true) {
//   const b = 10;
//   console.log("block", b);
  
// }
// console.log("global", a);

// Цикли

// let a = 0;
// while (a<5) {
//   a++;
//   console.log("a", a);
// }

// let a= 3;
// while (a) {
//   console.log("a" , a);
//   a--;
// }

// do while


// let a = 0;
// do {
//   console.log(a);
//   a++;
// } while ( a < 5);

// for

// for (let a=0 ; a<3; a++) {
//   console.log(a);
// } 
// // aбо
// let a = 0;
// for(; a< 3; a++) {
//   console.log(a);
// }

// break && continue

// let summ = 0;
// while (true) {
//  let value =+prompt("Введіть число");
//  if (!value) break; 
//  summ += value;
// }
// console.log("Summ" , summ);

// for (let i = 0; i < 10; i++) {
//   if(i % 2 === 0) continue; console.log(i);
// }


// масиви

// let arr = ["apple","orange","plum"];


// arr[2] = "lemon";
// arr[3] = "cherry";

// console.log(arr);

// arr.push("tomat");
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.unshift("tomat");
// console.log(arr);


// старий метод:

// for (let i = 0; i<arr.length; i++){
//  console.log(arr[i]) ;  
// }

// Новий метод

// for (let item of arr) {
// console.log(item); 
// }

// виводити на індекс(не дуже хороший перебір):

// for(let key in arr){
//   console.log(arr[key]);
// }

// let matrix = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9],
// ];
// console.log(matrix[1] [2]);

// Методи привсоєння.

// let a=5;
// let b=a;
// a=10;

// console.log(a);
// console.log(b);

// let arr = [1,2,3];
// let arr2 = arr;
// arr.push(4);
// console.log(arr2);

// let arr = ["a", "b", "c" , "d", "f"];

// delete arr[2];
// console.log(arr);  так з масивами робити не можна, видаляється по іншому

// arr.splice(2, 1);
// console.log(arr);

// console.log(arr.slice(1, 3));

// let a = [1, 2, 3];
// console.log(arr.concat(a, "test"));

// console.log(arr.indexOf("c", 1));
// console.log(arr.lastIndexOf("c"));

// console.log(arr.includes("c", 1));

// Find

// const fruts = [
//   { id: 0, name: "Apple"},
//   { id: 1, name: "Tomat"},
//    { id: 2, name: "Cherry"},
//     { id: 3, name: "Orange"},
// ];

// console.log(fruts.find((item) => item.id === 1));
// console.log(fruts.find((item) => item.id === 2));
// console.log(fruts.find((item) => item.id === 3));

// console.log(fruts.filter((item) => item.id < 2));

// Map

// let result = fruts.map((item) => item.name.length);

// console.log(result);

// ---Split

// let names = 'Luba, Lena, David, Sofia';

// let arr = names.split(", ");
// console.log(arr);

// let newString =arr.join(", ");
// console.log(newString);

// let arr = [1, 2, 3, 4, 5];
// let red = arr.reduce((summ, item)=> summ+item);
// console.log(red);


// let arr =[23, 40, 30];
// let summ = arr.reduce((sum, item) => sum + item) / arr.lengts;
// console.log(summ);???


// ------------------------------------------------------------
// Д/З до модуля № 23

// 1------

// const fruts =[
//   {id: 0, name: "Apple"},
//    { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];
// const names = fruts.map(fruit => fruit.name);
// console.log(fruts);

// 2------

// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// };

// 3--------

// let i = 0;
// for (let i = 0; i < 5; i++) {
//   console.log(`number ${i}!`);
// };

// while (i < 5) {
//   console.log(`number ${i}!`);
//   i++;
// };


// 4-------

// let number;

// do {
//   number = prompt("Введіть число більше за 100:");

//   if (number === "" || number === null) {
//     alert("Ввід скасовано!");
//     break;
//   }

// } while (number <= 100);

// if (number > 100) {
//   alert(`Чудово! Ви ввели число ${number}, яке більше за 100!`);
// }

// 5-------

// const users = [
//   { name: "Оля", age: 23 },
//   { name: "Аня", age: 29 },
//   { name: "Юля", age: 10 },
//   { name: "Катя", age: 20 },
// ];

// const averageAge = users.reduce((sum, user) => sum + user.age, 0) / users.length;

// console.log(`Середній вік: ${averageAge}`);
// -----Середній вік: 20.5-----

