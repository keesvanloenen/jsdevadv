(function toon(melding) {
  console.log(melding);
})('hallo daar');

// ---------------------------------------

const listeners = [];

// for(var i = 0; i < 3; i++) {
//   listeners.push((function(val) {
//     return function() {
//       console.log(val);
//     }
//   })(i));
// }


for(let i = 0; i < 3; i++) {
  listeners.push(function() {
      console.log(i);
  });
}

listeners.forEach((fn) => fn());