// ------------------------------------------------------------

// // ----Домашнє завдання до модуля № 22----

// // let = 1;
// // console.log(1>0);
// // let =0;
// // console.log(0>0);
// // let = -3;
// // console.log(-3<0);

// // let = 'test';
// // console.log('test' === 'test');
// // let = 'querty';
// // console.log('test' ==='querty' );
// // let = true;
// // console.log('test' ===true );

// // let =1 ;
// // console.log(1 > 10 ? 1 - 5 : 1 + 5); // 6  — 1 менше 10, додаємо 5

// // let = 10;
// // console.log(10 > 10 ? 10 -5 : 10 + 5);  // 15 — 10 не більше 10, додаємо 5

// // let =13 ;
// // console.log(13 > 10 ? 13 - 5 : 13 + 5);  // 8  — 13 більше 10, віднімаємо 5

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
// ------------------------------------------------------------
// // Д/З до модуля № 23

// // 1------

// // const fruts =[
// //   {id: 0, name: "Apple"},
// //    { id: 1, name: "Tomat" },
// //   { id: 2, name: "Cherry" },
// //   { id: 3, name: "Orange" },
// // ];
// // const names = fruts.map(fruit => fruit.name);
// // console.log(fruts);

// // 2------

// // for (let i = 2; i <= 10; i += 2) {
// //   console.log(i);
// // };

// // 3--------

// // let i = 0;
// // for (let i = 0; i < 5; i++) {
// //   console.log(`number ${i}!`);
// // };

// // while (i < 5) {
// //   console.log(`number ${i}!`);
// //   i++;
// // };

// // 4-------

// // let number;

// // do {
// //   number = prompt("Введіть число більше за 100:");

// //   if (number === "" || number === null) {
// //     alert("Ввід скасовано!");
// //     break;
// //   }

// // } while (number <= 100);

// // if (number > 100) {
// //   alert(`Чудово! Ви ввели число ${number}, яке більше за 100!`);
// // }

// // 5-------

// // const users = [
// //   { name: "Оля", age: 23 },
// //   { name: "Аня", age: 29 },
// //   { name: "Юля", age: 10 },
// //   { name: "Катя", age: 20 },
// // ];

// // const averageAge = users.reduce((sum, user) => sum + user.age, 0) / users.length;

// // console.log(`Середній вік: ${averageAge}`);
// // -----Середній вік: 20.5-----
// -----------------------------------------------------------

// Домашка до модуля № 24

// ---1---

// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm('Батьки дозволили?');
//   }
// }
// console.log(checkAge(20));
// console.log(checkAge(15));

// function checkAge(age) {
//   return age > 18 ? true : confirm('Батьки дозволили?');
// }
// function checkAge(age) {
//   return age > 18 || confirm('Батьки дозволили?');
// }

// ---2---
// function min(a, b) {
//   return a < b ? a : b;
// }
// console.log(min(5, 10));
// console.log(min(-3, 2));
// console.log(min(1, 1));

// ---3---

// const ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };

// ask(
//   'Ви згодні?',
//   () => {
//     alert('Ви погодились.');
//   },
//   () => {
//     alert('Ви скасували виконання.');
//   },
// );

// Д/З до модуля № 25

// ---1---

// const student = {
//   name: 'Olena',
//   speciality: 'Frontend',
//   course: 1,

//   getInfo: function () {
//     console.log(
//       `Ім'я: ${this.name}, Спеціальність: ${this.specialty}, Середній бал: ${this.gpa}, Пропущені заняття: ${this.missedClasses}`,
//     );
//   },
// };

// const student1 = {
//   name: 'Ivan',
//   specialty: 'Backend',
//   gpa: 4.5,
//   missedClasses: 2,
// };
// const student2 = {
//   name: 'Марія',
//   specialty: 'Математика',
//   gpa: 3.8,
//   missedClasses: 7,
// };
// const student3 = {
//   name: 'Олег',
//   specialty: 'Фізика',
//   gpa: 4.1,
//   missedClasses: 1,
// };

// student.getInfo.call(student1);
// student.getInfo.apply(student2);
// student.getInfo.bind(student3)();

//2
// function showHTML() {
//   document.getElementById('result').innerHTML =
//     'HTML — це мова розмітки, яка визначає структуру веб-сторінки за допомогою тегів.';
// }
// function showCSS() {
//   document.getElementById('result').innerHTML =
//     'CSS — це мова стилів, яка використовується для опису вигляду та форматування веб-сторінки.';
// }

//3

function shop(name, pricePerKg, quantity) {
  const totalCost = pricePerKg * quantity;
  return `Товар: ${name}, Вартість: ${totalCost.toFixed(2)} грн`;
}

console.log(shop('banana', 30, 4.5));
console.log(shop('cherry', 58, 1.3));
console.log(shop('orange', 89, 3.4));
