
exports.min = function min(arr = [0]) {
  if (arr.length != 0) {
    return Math.min.apply(null, arr);
  }
  else {
    return arr = 0;
  }
}

exports.max = function max(ar = [0]) {

  if (ar.length != 0) {
    return Math.max.apply(null, ar);
  }
  else {
    return ar = 0;
  }
}

exports.avg = function avg(a = [0]) {
  if (a.length != 0) {
    let sum = a.reduce((a, b) => a + b, 0);
     let result = sum / a.length;
     return result;
  }
  else {
    return a = 0;
  }
}
