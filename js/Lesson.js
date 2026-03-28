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
