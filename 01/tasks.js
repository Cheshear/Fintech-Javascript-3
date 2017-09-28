/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
function getMinMax(string) {
  let result = string.match(/(-)?\d+(\.\d+)?/g);

  if (result === null) {
    min = -Infinity;
    max = Infinity;
    return { min, max };
  }
  let min = parseFloat(result[0]);
  let max = parseFloat(result[0]);

  for (let i = 1; i < result.length; ++i) {
    if (parseFloat(result[i]) < min) {
      min = parseFloat(result[i]);
    }
    if (parseFloat(result[i]) > max) {
      max = parseFloat(result[i]);
    }
  }
  return { min, max };
}

/* ============================================= */

/**
 * Напишите рекурсивную функцию вычисления чисел Фибоначчи
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciSimple(x) {
  if (x === 0) {
    return 0;
  }
  if (x === 1) {
    return 1;
  }
  return fibonacciSimple(x - 1) + fibonacciSimple(x - 2);
}

/* ============================================= */

/**
 * Напишите функцию для вычисления числа Фибоначчи с мемоизацией:
 * при повторных вызовах функция не вычисляет значения, а достает из кеша.
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
let fibonacciNumbers = [];

fibonacciNumbers.push(0);
fibonacciNumbers.push(1);

function fibonacciWithCache(x) {
  if (x === 0) {
    return x;
  }
  if (x === 1) {
    return x;
  }
  if (fibonacciNumbers.length <= x) {
    let xNumber = fibonacciWithCache(x - 1) + fibonacciWithCache(x - 2);

    fibonacciNumbers.push(xNumber);
    return xNumber;
  }
  return fibonacciNumbers[x];
}

/* ============================================= */

/**
 * Напишите функцию printNumbers, выводящую числа в столбцах
 * так, чтобы было заполнено максимальное число столбцов при
 * минимальном числе строк.
 * Разделитель межу числами в строке - один пробел,
 * на каждое число при печати - отводится 2 символа
 * Пример работы: printNumbers(11, 3)
 *  0  4  8
 *  1  5  9
 *  2  6 10
 *  3  7 11
 * @param  {number} max  максимальное число (до 99)
 * @param  {number} cols количество столбцов
 * @return {string}
 */
function matrixArray(rows, columns) {
  const arr = [];

  for (let i = 0; i < columns; i++) {
    arr[i] = [];
    for (let j = 0; j < rows; j++) {
      arr[i][j] = columns * j + i;
    }
  }
  return arr;
}

function printNumbers(max, cols) {
  let rows = Math.floor(max / cols + 1);
  let str = '';
  let myMatrix = matrixArray(cols, rows);

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      if (myMatrix[i][j] > max) {
        str += '';
      } else if (myMatrix[i][j] < 10 && j === 0) {
        str += ' ' + myMatrix[i][j];
      } else if (myMatrix[i][j] < 10 && j !== 0) {
        str += '  ' + myMatrix[i][j];
      } else if (j === 0) {
        str += myMatrix[i][j];
      } else {
        str += ' ' + myMatrix[i][j];
      }
    }
    if (i !== (rows - 1)) {
      str += '\n';
    }
  }
  return str;
}

/* ============================================= */

/**
 * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
 * @param  {string} value
 * @return {string}
 */

function rle(input) {
  let count = 0;
  let rleString = '';
  let thisChar = input[0];
  let symbol;

  for (let i = 0; i < input.length; ++i) {
    symbol = input.charAt(i);
    if ((thisChar !== symbol)) {
      rleString += thisChar + ((count > 1) ? count : '');
      thisChar = symbol;
      count = 0;
    }
    count++;
  }
  rleString += thisChar + ((count > 1) ? count : '');
  return rleString;
}

console.log();
module.exports = {
  getMinMax,
  rle,
  printNumbers,
  fibonacciSimple,
  fibonacciWithCache
};
