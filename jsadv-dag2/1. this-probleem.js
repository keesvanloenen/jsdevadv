const polis = {
  code: 'C123',
  openPDF() {
    console.log(`pdf voor polis ${this.code} wordt opgehaald ...`)
    setTimeout(() => {
      console.log(`pdf voor polis ${this.code} is klaar voor gebruik!`)
    }, 2000)
  }
}

polis.openPDF();
