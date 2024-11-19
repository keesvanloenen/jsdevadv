const reverser = {
  wijzigMaar() {
    const arr = string.split(' ');
    arr.push('Gewijzigd:');
    return arr.reverse();
  },
};
const message = 'Er zijn 15 problemen';

console.log(message.split(''));
console.log(message.split(' '));
console.log(message.split(/\d+/g));
console.log(message.split(reverser));


