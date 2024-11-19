const kc_docent = {
  voornaam: 'Marco',
  achternaam: 'Pil',
}

// kc_docent.salaris = 66_000.99;
// kc_docent['salaris'] = 66_000.99;
Object.defineProperty(kc_docent, 'salaris', { value: 66_000.99, writable: true, enumerable: false })


for (const prop in kc_docent) {
  console.log(prop);
}

console.log(kc_docent.salaris);