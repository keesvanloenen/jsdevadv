function overload(fn_n_params, fn_m_params) {
  if (
    arguments.length !== 2 ||
    typeof fn_n_params != 'function' ||
    typeof fn_m_params != 'function'
  ) {
    throw new Error('Function expects 2 functions as input');
  }

  const n = fn_n_params.length;
  const m = fn_m_params.length;

  if (n === m) {
    throw new Error('Functions should have different number of parameters');
  }

  return function(...args) {
    if (args.length === n) {
      return fn_n_params(...args);
    }
    return fn_m_params(...args);
  }
}

const createVector = overload(
  function (a, b) {
    return { x: a,  y: b };
  },
  function (x, y) {
    return { a: x,  b: y };
  },

  // function (length) {
  //   return { x: length / 1.414,  y: length / 1.414 };
  // }
);

const res1 = createVector(3, 4);  // => { x: 3,  y: 4 }
const res2 = createVector(7.07);   // => { x: 5,  y: 5 }
// const res3 = createVector(1,2,3); // ❌ error

console.log(res1);
console.log(res2);