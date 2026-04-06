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

// function shop(name, pricePerKg, quantity) {
//   const totalCost = pricePerKg * quantity;
//   return `Товар: ${name}, Вартість: ${totalCost.toFixed(2)} грн`;
// }

// console.log(shop('banana', 30, 4.5));
// console.log(shop('cherry', 58, 1.3));
// console.log(shop('orange', 89, 3.4));

////////////////////////////////////////
// Д/З до модуля № 26

// ---1---

// class Abonent {
//   constructor(name, phone) {
//     this.name = name;
//     this._phone = phone;
//   }

//   set phone(newPhone) {
//     if (typeof newPhone === 'string' && newPhone.length > 0) {
//       this._phone = newPhone;
//     } else {
//       console.log('Невірний номер телефону!');
//     }
//   }

//   get info() {
//     return `Абонент: ${this.name}, Телефон: ${this._phone}`;
//   }
// }

// const user1 = new Abonent('Анна', '+380991234567');
// const user2 = new Abonent('Іван', '+380507654321');
// const user3 = new Abonent('Олена', '+380631112233');

// console.log(user1.info);
// console.log(user2.info);
// console.log(user3.info);

// user1.phone = '+380991234568';
// console.log(user1.info);

/////////////Д/З до модуля № 27

// const Calculator = function () {
//   this.a = 0;
//   this.b = 0;

//   this.read = function () {
//     this.a = parseFloat(prompt('Введіть перше число:'));
//     this.b = parseFloat(prompt('Введіть друге число:'));
//   };

//   this.sum = function () {
//     return this.a + this.b;
//   };

//   this.mul = function () {
//     return this.a * this.b;
//   };
// };

// const calc = new Calculator();
// calc.read();
// console.log('Сума:', calc.sum());
// console.log('Добуток:', calc.mul());

// **Як це працює:**

// - `read()` — через `prompt` отримує два числа та зберігає їх у `this.a` і `this.b`. `Number()` перетворює рядок з prompt на число
// - `sum()` — повертає `a + b`
// - `mul()` — повертає `a * b`

// **Приклад результату** якщо ввести `5` і `3`:
// ```
// Сума: 8
// Множення: 15

// Д/З до модуля № 28

// Д/З: Створити меню з жанрами фільмів. При кліку на жанр виводити назви фільмів цього жанру. (можна використовувати будь-які жанри та фільми)

// let activeBtn = null;

// function showFilms(btn, genre) {
//   // Знімаємо active з попередньої кнопки
//   if (activeBtn) activeBtn.classList.remove('active');
//   btn.classList.add('active');
//   activeBtn = btn;

//   // Ховаємо всі списки фільмів
//   document
//     .querySelectorAll('.films')
//     .forEach(el => (el.style.display = 'none'));

//   // Показуємо потрібний
//   document.getElementById(genre).style.display = 'block';

//   // Оновлюємо заголовок
//   document.getElementById('films-title').textContent = btn.textContent;

//   // Показуємо блок
//   document.getElementById('films-box').style.display = 'block';
// }

// Д/З до модуля № 29

// const btn1 = document.querySelector('#btn1');
// const btn2 = document.querySelector('#btn2');
// const btn3 = document.querySelector('#btn3');
// const btn4 = document.querySelector('#btn4');
// const btn5 = document.querySelector('#btn5');

// const btn6 = document.querySelector('#btn6');

// btn1.addEventListener('click', () => console.log('click'));
// btn2.addEventListener('contextmenu', () => console.log('contextmenu'));
// btn3.addEventListener('mouseout', () => console.log('mouseover'));
// btn4.addEventListener('mousedown', () => console.log('mousedown'));
// btn5.addEventListener('mousemove', () => console.log('mousemove'));

// btn6.addEventListener('keydown', () => console.log('keydown'));

// const addBtn = document.querySelector('#add');
// const removeBtn = document.querySelector('#remove');
// const clickBtn = document.querySelector('#click');

// const handleClick = () => {
//   console.log('Hello');
// };
// addBtn.addEventListener('click', () => {
//   clickBtn.addEventListener('click', handleClick);
// });

// removeBtn.addEventListener('click', () => {
//   clickBtn.removeEventListener('click', handleClick);
// });

// const clickBtn = document.querySelector('#click');
// const infoClick = event => {
//   console.log('event', event.target);
// };

// clickBtn.addEventListener('click', infoClick);

const form = document.querySelector('.form');
const loginInput = form.querySelector('input[type="text"]');
const passwordInput = form.querySelector('input[type="password"]');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const login = loginInput.value;
  const password = passwordInput.value;
  console.log(`Логін: ${login}, пароль: ${password}`);
  form.reset();
}
