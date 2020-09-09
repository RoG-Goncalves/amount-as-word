import amountAsWord from './utils/amountAsWord.js';

class App {
  constructor() {
    this.render()
  }

  render() {
    document.getElementById('root').innerHTML = `

      <div>Extenso: ${amountAsWord(prompt('Digite o montante - R$'))} </div>
    `
  }
}
export default amountAsWord;
new App();