import { digitsSeparate } from './utils/digitsSeparate.js';

class App {
  constructor() {
    this.render()
  }

  render() {
    document.getElementById('root').innerHTML = `

      <div>Extenso: ${digitsSeparate(prompt('Digite o montante - R$'))} </div>
    `
  }
}
new App();