// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

function sumArray(array) {
    if (array == null) {
      return 0;
    } else if (array.length < 2) {
      return 0;
    } else {
      array = array.sort(function(a,b) {return a - b;});
      var total = 0;
      for (var i = 1; i < array.length - 1; i++) {
        total += array[i];
      }
      return total;
    }
  }

  //----------------------

  sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0

  //----------------------
  function sumArray(array) {
    return Array.isArray(array) && array.length > 1
      ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
      : 0
  }