// Задание 1
// Необходимо создать переменную в которой будет храниться температура в градусах Цельсия, преобразовать значение в температуру по фаренгейту.
// Формула перевода градусов Цельсия в градусы Фаренгейта: градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
// Вывести в консоль температуру в Цельсиях и Фаренгейтах.

// const tempCel = 36;
// const tempFar = 9/5*tempCel + 32;
// console.log (tempFar);
// console.log (`В цельсиях ${tempCel} в Фаренгейтах ${tempFar}`);

// Задание 2
// Необходимо создать переменную name, записать в эту переменную свое имя. Необходимо также создать переменную admin и присвоить этой переменной значение из переменной name. Вывести значение переменной admin в консоль.

// const nam = "Кирилл";
// const admin = nam;
// console.log (nam);


// HW#2 

// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

// let num1 = prompt("Введите первое число");
// let num2 = prompt("Введите второе число");
// if (num1 <=1) {
//     alert("Первое число  введено корректно");
// } else {
//     alert("Первое число введено неверно");
// }
// if (num2 >=3) {
//     alert("Второе число введено корректно");
// } else {
//     alert("Второе число введено неверно");
// }


// Задание 2
// Перепишите код к тернарному оператору

// let test = true;
// if (test === true) {
// console.log('+++');
// } else {
// console.log('---');
// }

// let test = true;
// ((test === true) ? console.log('+++') : console.log('---'))

// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

// let day = prompt("Введите число из интервала от 1 до 31")
// if (day >= 1 && day <= 10) {
//     alert("Первая декада месяцы")
// } 
// else if (day >= 11 && day <= 20) {
//     alert("Вторая декада месяцы")
// } 
// else if (day >= 21 && day <= 31) {
//     alert("Третья декада месяцы")
// }


// Задание 4
// Необязательное задание. (Если вам показалось домашнее задание простым, выполняем данный пункт)
// (Для решения задания вам потребуется оператор остаток от деления %, например 10%3 === 1 , десять разделить на 3, остаток 1, второй пример 7 % 5, тут остаток от деления будет 2, ну и 3 пример это 14 % 10 === 4, остаток от деления на 10 будет равен 4)

// Необходимо от пользователя получить число.
// Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

// Пример:
// Пользователь ввел число 163. Программа должна вывести:
// "В числе 163 количество сотен: 1, десятков: 6, единиц: 3"

// Пример 2:
// Пользователь ввел число 74. Программа должна вывести:
// "В числе 74 количество сотен: 0, десятков: 7, единиц: 4"

// Пример 3:
// Пользователь ввел число 9537. Программа должна вывести:
// "В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"

// Уточнение: пользователь всегда вводит корректное положительное целое число.

// let num = prompt("Введите число");
// let num1 = Number.parseInt ((num/100)%10);
// let num2 = Number.parseInt ((num/10)%10);
// let nume3 = Number.parseInt (num%10);
// alert (`В числе ${num} количество сотен: ${num1} колличество десятков: ${num2} колличество единиц: ${nume3}`);