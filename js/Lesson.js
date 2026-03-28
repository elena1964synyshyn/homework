// Модуль № 24

// Функції

// function showMessage (name, sity) {
//  console.log(" hello , my name is " + name + " I'm from " + sity);
// }
// showMessage("Nata", "Napoli");
// showMessage("Olena", "Lviv");

// const userName = "Ann";
// const sayHi = function () {
//   let messege = "Hello, my name ";
//   console.log(messege + userName);
// console.log("Hi") ;
// } ;
// sayHi();

// function summ(a, b) {

//  return a+b;
// }
// let result = summ(7,8);
// console.log(result);

// const testFunk = function (a,b) {
//   console.log("a :", a)
//   console.log("b :", b);

//   return testFunk;
// };
// testFunk(5, 8);

// Порядок виконання коду

// const a = function(){
//  console.log("function a");

// };
// const b = function(){
// console.log("function b");
// };
// const c = function(){
// console.log("function c");
// };
// a();

// Аргументи і rest

// const addName = function(...arg){
//   // const arg= Array.from(arguments);
//   // console.log(arguments);
//   console.log(arg);
// };
// addName(1, 3, 5);

// Callback

// function ask(questions, yes, no){
//  if( confirm(questions)) {
//   yes();

//  } else {
//   no();
//  }
// }
// function showOk(){
//   console.log("you say ok");
// }
// function showCancel(){
//   console.log("you say No");
// }
// ask(" Yes or no?", showOk, showCancel);

// Hof

// const hello = function (name){
//   console.log(`Hello, ${name}`);
// };
// const searchName = function(callback){
// const name = "Ivan";
// callback(name);
// };
// searchName(hello);
// // hello("Ann");

// function  checkAge(age) {
// if(age > 18){
//   return console.log("Hello");
// }
//   return console.log("Good Bye");

// }
// checkAge(12);

// function showMovie(age){
//   if(age< 21){
//     return
//   }
//   return console.log("Go to movie!");
// }
// showMovie(21);

// Стрілочні функції

// const test = (arg) => {
// console.log(arg);

// };

// test("hello");

// const showMovie = age => {
//   if (age > 21) {
//     return console.log('hello');
//   }

//   return console.log('bye');
// };
// showMovie(12);

// const a = () => {
//   console.log('a');
// };
// const b = () => {
//   console.log('b');
// };
// const c = () => {
//   console.log('c');
//   a();
//   b();
// };
// c();

// const addNumber = number => {
//   let summ = Number(number) + 10;
//   return console.log(summ);
// };

// console.log(document);
// const numberRef = document.querySelector('input[name="number"]');

// const buttonrRef = document.querySelector('button');

// buttonrRef.addEventListener('click', () => addNumber(numberRef.value));

// Модуль № 25

// Замикання

// function createNewSum(n) {
//   return function () {
//     console.log(10 * n);
//   };
// }
// const calc = createNewSum(5);
// calc();

// function changeColor() {}

// Модуль № 25
// function createNewSum(n) {
//   return function () {
//     console.log(10 * n);
//   };
// }
// const calc = createNewSum(5);
// calc();

// function createNewSum(n) {
//   return function (num) {
//     return n + num;
//   };
// }
// const addFive = createNewSum(5);
// console.log(addFive(10));

// function createUrl(domain) {
//   return function (url) {
//     return `https://${url}.${domain}`;
//   };
// }
// const comUrl = createUrl('com');
// const comUa = createUrl('ua');

// console.log(comUrl('google'));
// console.log(comUrl('facebook'));

// console.log(comUa('google'));
// console.log(comUa('facebook'));

// This Це функція, яка створює нову функцію для обчислення суми числа та заданого значення. Внутрішня функція має доступ до змінної 'n' із зовнішньої функції, що дозволяє їй виконувати обчислення, коли її викликають із певним числом.

// function hello() {
//   console.log('hello', this);
// }

// hello();

// const user = {
//   name: 'Ivan',
//   city: 'Kyiv',
//   sayHello: hello,
// };

// user.sayHello();

// ------

// function abc() {
//   console.log('B function');
//   console.log(this);
// }
// abc();

// document.querySelector('p').onclick = abc;

// function changeColor() {
//   console.log(this);
//   this.style.background = 'green';
// }
// document.querySelector('div').onclick = changeColor;

// function changeColor() {
//   this.style.background = 'green';
// }
// let user = document.querySelectorAll('div');
// user.forEach(function (element) {
//   element.onclick = changeColor;
// });

//------------

// const showList = () => {
//   console.log(this);
// };
// showList();

// const list = {
//   name: ['Ann', 'Olga', 'Olena'],
//   showList: showList,
// };
// list.showList();

//----------------

// function hello() {
//   console.log(this);
// }

// const user = {
//   name: 'Ivan',
//   age: 30,
//   hello: hello,
//   sayHelloWindow: hello.bind(window),
//   info: function (city) {
//     console.log(`Name is ${this.name}`);
//     console.log(`Age is ${this.age}`);
//     console.log(`City is ${city}`);
//   },
// };
// // user.info();

// const Ann = {
//   name: 'Anna',
//   age: 25,
// };
// user.info.bind(Ann)('Kyiv');

// const annInfo = user.info.bind(Ann, 'Kyiv');
// annInfo();

// const userInfo = {
//   name: 'name',
//   age: 43,
//   logInfo: function (job) {
//     console.group(`${this.name} info:`);
//     console.log(`Name is: ${this.name}`);
//     console.log(`Age is: ${this.age}`);
//     console.log(`Job is: ${job}`);
//     console.groupEnd();
//   },
// };
// const Vano = {
//   name: 'Vano',
//   age: 25,
// };

// userInfo.logInfo.call(Vano, 'Developer');

//apply

// const showUserInfo = {
//   name: name,
//   age: 78,
//   logInfo: function (job, city) {
//     console.group(`${this.name} info:`);
//     console.log(`Name is: ${this.name}`);
//     console.log(`Age is: ${this.age}`);
//     console.log(`Job is: ${job}`);
//     console.log(`City is: ${city}`);
//     console.groupEnd();
//   },
// };

// const Vano = {
//   name: 'Vano',
//   age: 78,
// };

// showUserInfo.logInfo.apply(Vano, ['Developer', 'Kyiv']);

/////////////////////////////////////////////////////////////

// const message = function (name, stars) {
//   console.log(`${name}, Welcome to ${this.hotel}, stars ${stars}`);
// };

// const Bukovel = { hotel: 'Bukovel' };
// const Turist = { hotel: 'Turist' };

// message.call(Bukovel, 'Olena', 5);
// message.call(Turist, 'Luba', 4);

// message.apply(Bukovel, ['Olena', 5]);
// message.apply(Turist, ['Luba', 4]);

// message.bind(Bukovel, 'Olena', 5)();
// message.bind(Turist, 'Luba', 4)();

//////////////////////////////////////////////////////////

// const cart = {
//   showItems() {
//     console.log('В корзині:', this.items);
//   },
// };
// const woman = {
//   items: ['Сукня', 'Туфлі', 'Сумка'],
// };
// const man = {
//   items: ['Костюм', 'Туфлі', 'Годинник'],
// };
// const kid = { items: ['Футболка', 'Шорти', 'Кросівки'] };

// cart.showItems.call(woman);
// cart.showItems.bind(man)();
// cart.showItems.call(kid);

// document
//   .querySelector('#wom')
//   .addEventListener('click', cart.showItems.bind(woman));

// document
//   .querySelector('#man')
//   .addEventListener('click', cart.showItems.bind(man));

// document
//   .querySelector('#kid')
//   .addEventListener('click', cart.showItems.bind(kid));

//////////////////////////////////////////////////

// const infoCar = {
//   name: 'BMW',
//   model: 'X5',
//   color: 'white',
//   showInfo: function () {
//     console.log(
//       `Car: ${this.name}, Model: ${this.model}, Color: ${this.color}`,
//     );
//   },
// };

// car2 = {
//   name: 'Audi',
//   model: 'Q7',
//   color: 'black',
// };
// // infoCar.showInfo();
// // infoCar.showInfo.bind(car2)();
// //
// infoCar.showInfo.apply(car2);
