const factuur = {
  id: 102,
  jaar: 2024,
  gebruikersnaam: 'Helen',
}

// for-in loop: loop door properties van een object
for(let prop in factuur) {
  console.log(prop, ':', factuur[prop]);
}