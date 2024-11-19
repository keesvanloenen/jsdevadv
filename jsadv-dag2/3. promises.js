// fetch('https://randomuser.me/api').then(res => res.json()).then((data => console.log(data.results[0].name.first)));

import fs from 'fs';

const SuperReader = (fileName = 'sinterklaas.txt') => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) {
        reject('Something went horribly wrong');
      } else {
        resolve(data);
      }
    });
  });
};

SuperReader().then(inhoud => console.log(inhoud)).catch(err => console.error(`Foutje: ${err}`));
SuperReader(`3. promises.js`).then(inhoud => console.log(inhoud)).catch(err => console.error(`Foutje: ${err}`));
SuperReader().then(inhoud => console.log(inhoud)).catch(err => console.error(`Foutje: ${err}`));
