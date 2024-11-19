// 👉 strong reference
// let user = {name: 'Ab Coude'};
// let human = [user];

// user =  null;
// console.log(human[0]);

// 👉 weak reference
let user = {name: 'Ab Coude'};
let human = [new WeakRef(user)];

user = null;
console.log(human[0].deref());
//                   ^^^^^ beschikbaar zolang niet garbage-collected
