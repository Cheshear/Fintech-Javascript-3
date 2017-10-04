/**
 * Исправьте проблему с таймером: должны выводиться числа от 0 до 9.
 * Доп. задание: предложите несколько вариантов решения.
 */
function timer(logger = console.log) {
  for (let i = 0; i < 10; i++) {
    let bound = logger.bind({
      ind: i
    });
    setTimeout(() => {
      bound(i);
    }, 100);
  }
}

/*= ============================================ */

/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind(func, context, ...args) {
  return () => {
    return func.call(func, context, args);
  }
}

/*= ============================================ */

/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)( ) // 6
 * sum :: Number -> sum
 * sum :: void -> Number
 */
function sum(x) {
  if (x === undefined) {
    return 0;
  }
  let result = x;
  return function prevSum(y) {
    if (y === undefined) {
      return result;
    } else {
      result += y;
      return prevSum;
    }
  }
}


/*= ============================================ */

/**
 * Определите, являются ли строчки анаграммами (например, “просветитель” — “терпеливость”).
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
function anagram(first, second) {
  if (first.split('').sort().join('') === second.split('').sort().join('')) {
    return true;
  }
  return false;
}

/*= ============================================ */

/**
 * Сократите массив до набора уникальных значений
 * [1,1, 2, 6, 3, 6, 2] → [1, 2, 3, 6]
 * @param {Array<number>} исходный массив
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getUnique(arr) {
  const result = [];
  let comparator = (a, b) => {
    return a - b;
  };
  arr.sort(comparator);
  arr.forEach(function getU(item, i) {
    if (i !== 0) {
      if (arr[i - 1] < item) {
        result.push(item);
      }
    } else {
      result.push(item);
    }
  });
  return result;
}

/**
 * Найдите пересечение двух массивов
 * [1, 3, 5, 7, 9] и [1, 2, 3, 4] → [1, 3]
 * @param {Array<number>, Array<number>} first, second исходные массивы
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getIntersection(first, second) {
  const result = [];
  let comparator = (a, b) => {
    return a - b;
  };
  first.sort(comparator);
  second.sort(comparator);
  let i = 0, j = 0;
  while (i < first.length && j < second.length) {
    if (first[i] < second[j]) {
      ++i;
    } else if (second[j] < first[i]) {
      ++j;
    } else {
      result.push(first[i])
      ++i;
      ++j;
    }
  }
  return result;
}

/* ============================================= */

/**
 * Две строки называются изоморфными, когда в строке A можно заменить
 * конкретный символ на любой другой для получения строки B. (Расстояние Левенштейна, при возможных мутациях
 * ограничивающихся заменой символа - отличается на 1).
 * Отдельно стоит отметить что строка изоморфна самой себе.
 * Порядок символов должен остаться неизменным. Каждый
 * последовательный символ в строке A сравнивается с
 * каждым последовательным символов в строке B.
 *
 * @param  {string} left
 * @param  {string} right
 * @return {boolean}
 */
function isIsomorphic(left, right) {
  if (left.length === right.length) {
    let counter = 0;
    for (let i = 0; i < left.length; ++i) {
      if (left[i] !== right[i]) {
        ++counter;
      }
    }
    if (counter > 1) {
      return false;
    }
    return true;
  }
  return false;
}

module.exports = {
  timer,
  customBind,
  sum,
  anagram,
  getUnique,
  getIntersection,
  isIsomorphic
};