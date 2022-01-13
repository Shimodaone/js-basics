// === Таски на переменные:

// 1) Создайте две переменные a и b. Выведите в консоль результ их умножения.

// const a = 10;
// const b = 2;
// console.log('a * b =', a * b);

// 2) Создайте две переменные c и d. Выведите в консоль результат деления.

// const c = 10;
// const d = 2;
// console.log('c / d =', c / d);

// 3) Создайте две переменные e и f. Выведите в консоль результат сложения.

// const e = 10;
// const f = 2;
// console.log('e + f =', e + f);

// 4) Определите переменные со значениями 11, true, "java script", "100" и выведите их в консоль

// const g = 11;
// const h = true;
// const i = 'java script';
// const j = '100';
// console.log(g, h, i, j);

/* 
5) Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --
let num = 1;
num = num + 11;
num = num - 11;
num = num * 11;
num = num / 11;
num = num + 1;
num = num - 1;
*/

// let num = 1;
// num += 11;
// num -= 11;
// num *= 11;
// num /= 11;
// num++;
// num--;

// === Таски на prompt (вводить с помощью prompt, выводить с помощью alert):

// 1) Запросить число у пользователя, возвести его в квадрат и вывести результат.

// const number1 = Number(prompt('Введите число'));
// alert(number1**2);

// 2) Вывести среднее арифметическое двух чисел. Числа запрашивать у пользователя.

// const number2 = Number(prompt('Введите первое число'));
// const number3 = Number(prompt('Введите второе число'));
// alert((number2 + number3) / 2);

// 3) Перевести число минут в секунды и вывести результат. Число минут запрашивать у пользователя.

// const number4 = Number(prompt('Введите количество минут'));
// alert(number4 * 60);

// 4) Создайте переменную greeting со значением 'Hello, ' и объявите переменную userName. Спросите имя пользователя и занесите данное значение в переменную userName. Выведите сообщение с приветствием, например, 'Hello, Vasya!'.

// const greeting = 'Hello, ';
// let userName = prompt('Введите имя пользователя');
// alert(greeting + userName + '!');

// === Таски на условия:

// 1) Спросить переменную у юзера. Если переменная равна числу 10, то выведите 'Верно', иначе выведите 'Неверно'.

// const ten = Number(prompt('Введите число от 1 до 9'));
// if (ten === 10) {
//   alert('Верно');
// } else {
//   alert('Неверно');
// }

/*
2) Напишите две проверки.
Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'.
Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'
Проверьте работу скрипта при test, равном true, false.
*/

// -- первая проверка

// const test = true;
// if (test === true) {
//   console.log('Верно');
// } else {
//   console.log('Неверно');
// }

// -- вторая проверка

// const test = prompt('Введите любое значение');
// if (Boolean(test) === true && test !== 'false') {
//   alert('Верно');
// } else {
//   alert('Неверно');
// }

// -- третья проверка

// const test = true;
// if (test !== true) {
//   console.log('Верно');
// } else {
//   console.log('Неверно');
// }

// -- четвертая проверка

// const test = prompt('Введите любое значение');
// if (Boolean(test) !== true && test !== 'true') {
//   alert('Верно');
// } else {
//   alert('Неверно');
// }

// 3) Вычислить сумму покупки с учетом скидки. Скидка 3% предоставляется, если сумма покупки больше 500 грн., а скидка 5% - если сумма покупки больше 800 грн. Сумму покупки вводит юзер.

// const purchase = Number(prompt('Введите сумму покупки'));
// if (purchase > 800) {
//   console.log('К оплате с учетом скидки 5% : ', purchase * 0.95);
// } else if (purchase <= 800 && purchase > 500) {
//   console.log('К оплате с учетом скидки 3% : ', purchase * 0.97);
// } else {
//   console.log('No money, no honey!');
// }

// === Таски на циклы.

// 1) Вывод чисел от 25 до 0 (порядок уменьшения).

// let start = 25;
// const end = 0;
// while (start >= end) {
//   console.log(start);
//   start--
// }

// const end = 0;
// for (let start = 25; start >= end; start--) {
//   console.log(start);
// }

// 2) Вывод чисел от 10 до 50, которые кратны 5.

// let start = 10;
// const end = 50;
// while (start <= end) {
//   if (start % 5 === 0) {
//     console.log(start);
//   }
//   start++
// }

// const end = 50;
// for (let start = 10; start <= end; start += 5) {
//   console.log(start);
// }

// 3) Найти сумму чисел в пределах от 1 до 100.

// let start = 1;
// const end = 100;
// let sum = 0;
// while (start <= end) {
//   sum += start;
//   start++
// }
// console.log(sum);

// const end = 100;
// let sum = 0;
// for (let start = 1; start <= end; start++) {
//   sum += start;
// }
// console.log(sum);

// === Таски на switch..case.

// 1) Запросить у пользователя номер дня недели и вывести соответствующее полное строковое название (например, если пользователь вводит 7 - выводится сообщение "воскресенье"). предусмотреть ошибку введения (default).

// const day = prompt('Введите номер дня недели');
// switch (day) {
//   case '1':
//     alert('Понедельник');
//     break;
//   case '2':
//     alert('Вторник');
//     break;
//   case '3':
//     alert('Среда');
//     break;
//   case '4':
//     alert('Четверг');
//     break;
//   case '5':
//     alert('Пятница');
//     break;
//   case '6':
//     alert('Суббота');
//     break;
//   case '7':
//     alert('Воскресенье');
//     break;
//   default:
//     alert('Не смешной комментарий, претендующий на остроумие');
//     break;
// }

// 2) В переменной day лежит какое-то число из интервала от 1 до 31. Определите, в какую декаду месяца попадает это число (в первую, вторую или третью).

// const day = Number(prompt('Введите число месяца'));
// switch (true) {
//   case day >= 1 && day <=10:
//     alert('Это число попадает в первую декаду');
//     break;
//   case day >= 11 && day <=20:
//     alert('Это число попадает во вторую декаду');
//     break;
//   case day >= 21 && day <=31:
//     alert('Это число попадает в третью декаду');
//     break;
//   default:
//     alert('Сколько же дней в твоем месяце? О_О');
//     break;
// }