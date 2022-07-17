
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result =[];
  if (arguments.length == 0) { return result };
  matrix.forEach((el, index) => {
    if ((index + 1)%2 !== 0) {
      el.forEach(el => { result.push(el) });
    } else {
      for (let i = el.length - 1; i >= 0; i--) {
        result.push(el[i]);
      }
    }
  });
  return result;
}
