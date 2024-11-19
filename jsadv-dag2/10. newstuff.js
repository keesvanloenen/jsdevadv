const car = {}
console.log(car.brand ?? 'Opel');

// &&=
let x = 10;
let y = 20;

if (x) {    // voor 2021
  x = y;
}

x &&= y;    // per 2021

// ----------------------------------------

let a = 0;
let b = 20;

if (!a) {
  a = b;
}

a ||= b

// -------------------------------------

const movies = [
  { title: 'Inception', rating: 8.8 },
  { title: 'Interstellar', rating: 9.9 },
  { title: 'Dunkirk', rating: 7.9 },
];

const myCallback = movie => movie.rating >= 8.5 
                            ? 'High' 
                            : 'Low';

const groupedMovies = Object.groupBy(movies, myCallback);

for (const group in groupedMovies) {
  console.log(`Group: ${group}`);
  groupedMovies[group].forEach(movie => {
    console.log(`\t title: ${movie.title}: ${movie.rating}`);
  })
}