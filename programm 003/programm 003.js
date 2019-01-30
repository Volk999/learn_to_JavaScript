'use script';

console.log(leftBorderWidth);
//console.log(second);

var leftBorderWidth = 1;
//let second =2;
const pi = 3.14;

/*типы данных - Урок 003*/

var number = 5;
var string = "Hello!";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4/0);
console.log('string'*9);

let something;
console.log(something);

// создание объекта
let persone = {
    name: "John",
    age: 25,
    isMarried: false
};

//вывод параметра объекта
console.log(persone.name);

//2-й метод вывода свойства объекта

console.log(persone["name"]);

// создание массива с именами фотографий
let arr = ['plum.png','orange.jpg','apple.bmp'];

// вывод элемента массива
console.log (arr[1]);

// вывод сообщения для пользователя
alert("First message");

// вывод диалогового окна с выбором
confirm("Are you here?");

// вывод запроса с резульатом отображающимся в консоле
let answer = confirm ("Are you have cake?");
console.log(answer);

//вывод запроса с указанием варианта ответа
let answer2 = prompt("Are you heve 18 years old?", "Yes");
console.log(answer2);

// получение числа с преобразованием типа - оператор typeof
console.log(typeof(answer2));
console.log(typeof(arr));

// вывод результата конкатенации
console.log("arr" + " - object");

// сложение числа и строки
console.log (4 + "- object");

// модификация текстового типа в числовой при вводе (достигается унарным плюсом)
let two_object = +prompt("Are you have 18 years old?");
console.log(typeof(two_object));

//операции инкремента и декремента
let incr = 10, decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);

//пример постфиксной формы

let incr2=10, decr2=10;

console.log(incr2++);
console.log(decr2--);

// получение остатка от деления
console.log(5%2);

// сравнение по значениям 
console.log("2"==2);

// сравнение по типу данных
console.log("2"===2);

// Операция логического умножения -> И
let isChecked = true, isClose = false;

console.log(isChecked && isClose);

// Операция логического сложения -> ИЛИ
console.log(isChecked || isClose);
