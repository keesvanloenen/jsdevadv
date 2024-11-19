/*
WAAROM Symbols??

- uniekheid
- zichtbaarheid
*/

const recording = { subject: 'Security' } 

function lib1LengthPropAdder(obj) {
  //obj['lib1-length'] = 42;    // uniekheid met prefix
  //Object.defineProperty(obj, 'lib1-length', { value: 42, writable: true, enumerable: false });
  const length = Symbol('length, dit is handig voor programmeurs om te weten');
  obj[length] = 42;
}

function lib2LengthPropAdder(obj) {
  obj['lib2-length'] = 163;
}

lib1LengthPropAdder(recording);
lib2LengthPropAdder(recording);
console.log(recording);

// -----------------------------------------

// zichtbaarheid:

// 1. de for-in loop
for (const prop in recording) {
  console.log(prop, ':', recording[prop])
}

// 2. via .keys, .values etc.
console.log(Object.keys(recording));
console.log(Object.values(recording));
console.log(Object.entries(recording));

Object.entries(recording).forEach(([prop, value]) => {
  console.log(prop, value);
});

// 3. via .stringify()
console.log(JSON.stringify(recording));

// 4. .getOwnPropertyNames()
console.log(Object.getOwnPropertyNames(recording));

// voor de symbols
console.log(Object.getOwnPropertySymbols(recording));
