function* myCities() {
  yield 'Ede';
  yield 'Urk';
  yield 'Epe';
}

let cities = myCities();
console.log(cities.next());
console.log(cities.next());
console.log(cities.next());
console.log(cities.next());