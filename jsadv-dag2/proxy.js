const target = { id: 27, city: 'Ede' }; // target

const handler = {
  get(target, key) {
    console.log(`target: ${target}, key: ${key}`);
    if (key === 'city') {
      return 'Barneveld';
    }
    return target[key];
  }
}

const proxy = new Proxy(target, handler);

Object.values(proxy).forEach(value => console.log(value));
// console.log(proxy.id);       // consumer


