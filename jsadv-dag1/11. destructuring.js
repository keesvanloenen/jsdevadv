const [kleur1, kleur2, kleur3] = ['zwart', 'geel', 'rood'];
console.log(kleur3);

const voer = {  id: 10, viscoziteit: 44.5, kleur: 'zwart' };
const { id = 12, kleur: color } = voer;
console.log(color, id);

function doeIets({land, lengte}) {
  console.log(lengte);
}

const paspoort = { id: 10, land: 'NL', lengte: 22.3 }
doeIets(paspoort)