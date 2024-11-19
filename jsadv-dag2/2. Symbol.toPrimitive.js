const obj = {
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return 42;
    }
    if (hint === 'string') {
      return 'hi';
    }
    if(hint === 'default') {
      return true;
    }
  }
}

// nummerieke conversie
console.log(Number(obj));
console.log(+obj);
console.log(obj * 2);

// string conversie
console.log(String(obj));
console.log(`${obj}`);

// default conversie
console.log(obj == 'iets');
console.log(obj == 1);
console.log('appel' + obj);


