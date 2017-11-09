/**
 * Исправьте проблему с таймером: должны выводиться числа от 0 до 9.
 * Доп. задание: предложите несколько вариантов решения.
 */
function throttle (time, callback){
  let isTime = false;

  return function(...args){
    if (isTime) {
      return;
    }

    callback(args);
    isTime = true;

    setTimeout(() => {
      isTime = false;
    }, time);
  };
}


module.exports = { throttle };
