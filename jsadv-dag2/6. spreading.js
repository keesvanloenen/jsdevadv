const arr = ['a', 'b', 'c'];
const arr2 = [...arr];        // (shallow copy)
arr2[0] = 'z';

const person = {
  id: 10,
  role: 'admin',
}

let piet = {
  ...person, 
  length: 1.89,
  role: 'editor',
}

console.log(piet);

piet.id = 100;                  // ❌ muteert het object, lastig te detecteren
piet = { ...piet, id: 100 };    // ✅ object wordt opnieuw toegewezen, beter te detecteren
