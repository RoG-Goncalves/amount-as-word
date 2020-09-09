const centsAsWord = (value) => {
  return (value == 0 ? '' : tensAsWord(value))
}
//------------------------------------------------------------------------------
const digitAsWord = (value) => {
  return ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"][value];
}
//------------------------------------------------------------------------------
const tensAsWord = (value) => {
  let tens = Math.floor(value / 10);
  let ones = value % 10;

  if (tens <= 0) {
    return digitAsWord(ones);
  }

  let exceptionsTens = ["dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezesete", "dezoito", "dezenove"];

  if (tens === 1) {
    return exceptionsTens[ones];
  }
  let groupsTens = ["vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"];
  let result = groupsTens[tens - 2] + (ones > 0 ? " e " + digitAsWord(ones) : "");
  return result;
}
//------------------------------------------------------------------------------
const hundredsAsWord = (value) => {
  let hundreds = Math.floor(value / 100)
  let tens = value.toString().split('').reverse().splice(0, 2).reverse().join('');
  if (hundreds === 0) {
    return tensAsWord(value)
  }
  if (hundreds === 1 && tens === 0 && ones === 0) {
    return 'cem'
  }
  let groupsHundreds = ["cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"]
  return groupsHundreds[hundreds - 1] + (tens > 0 ? " e " + tensAsWord(parseInt(tens)) : "");
}
//------------------------------------------------------------------------------
const thousandsAsWord = (value, myCents) => {
  let thousands = Math.floor(value / 1000);
  let hundreds = value.toString().split('').reverse().splice(0, 3).reverse().join('');
  if (thousands === 0) {
    return hundredsAsWord(hundreds);
  }
  if (thousands === 1 && hundreds === 0 && tens === 0 && ones === 0) {
    return (hundredsAsWord(thousands) + " mil");
  } return (`${hundredsAsWord(thousands)} mil ${myCents == 0 ? 'e' : ','} ${hundredsAsWord(hundreds)}`)
}
//------------------------------------------------------------------------------
const millionsAsWord = (value) => {
  let millions = Math.floor(value / 1000000);
  let thousands = value.toString().split('').reverse().splice(0, 6).reverse().join('');
  if (millions <= 0) {
    return thousandsAsWord(thousands);
  }
  return (thousandsAsWord(millions) + (millions > 1 ? " milhões" : " milhão") + " , " + thousandsAsWord(thousands))
}
//------------------------------------------------------------------------------
const billionsAsWord = (value) => {
  let billions = Math.floor(value / 1000000000);
  let millions = value.toString().split('').reverse().splice(0, 9).reverse().join('');
  if (billions <= 0) {
    return millionsAsWord(millions);
  }
  return (millionsAsWord(billions) + (billions > 1 ? " bilhões" : " bilhão") + " , " + millionsAsWord(millions))
}
//------------------------------
export default function finalAmount(value, myCents) {
  console.log(value);
  console.log(myCents);
  return (`${billionsAsWord(value)} Reais ${myCents == 0 ? '' : 'e'}  ${centsAsWord(myCents)} ${myCents == 0 ? '' : 'centavos'}`)
}