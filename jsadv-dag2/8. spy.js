function sum(a, b) {
  console.log(a + b);
}

sum = spy(sum);

function spy(func) {
  const handler = {
    apply(target, thisArg, args) {
      wrapper.calls.push(args);
      Reflect.apply(target, thisArg, args);
    }
  };
  const wrapper = new Proxy(func, handler);
  wrapper.calls = [];
  return wrapper;
}

const result1 = sum(3, 2);
const result2 = sum(50, 5);
console.log(result1, result2);

sum.calls.forEach(([arg1, arg2]) => {
  console.log(`Arg1: ${arg1}, arg2: ${arg2}`);
});