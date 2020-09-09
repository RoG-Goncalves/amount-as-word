import finalAmount from './finalAmount.js'

export const digitsSeparate = (value) => {
  let x = /^((\d{1,3})(\.\d{3})*)(\,\d{2})?$/;

  let input = x.exec(value)

  let myNumber = input[1].replace(/\./g, "")
  let myCents = input[4].replace(/\,/g, "")

  //Next version i can change this for an iteration 
  let digits = myNumber.split("").reverse();
  let billions3 = digits.length >= 12 ? parseInt(digits[11], 10) : 0;
  let billions2 = digits.length >= 11 ? parseInt(digits[10], 10) : 0;
  let billions1 = digits.length >= 10 ? parseInt(digits[9], 10) : 0;

  let millions3 = digits.length >= 9 ? parseInt(digits[8], 10) : 0;
  let millions2 = digits.length >= 8 ? parseInt(digits[7], 10) : 0;
  let millions1 = digits.length >= 7 ? parseInt(digits[6], 10) : 0;

  let thousands3 = digits.length >= 6 ? parseInt(digits[5], 10) : 0;
  let thousands2 = digits.length >= 5 ? parseInt(digits[4], 10) : 0;
  let thousands1 = digits.length >= 4 ? parseInt(digits[3], 10) : 0;

  let hundreds = digits.length >= 3 ? parseInt(digits[2], 10) : 0;
  let tens = digits.length >= 2 ? parseInt(digits[1], 10) : 0;
  let ones = digits.length >= 1 ? parseInt(digits[0], 10) : 0;

  let digitsTotal = ` ${billions3}${billions2}${billions1}${millions3}${millions2}${millions1}${thousands3}${thousands2}${thousands1}${hundreds}${tens}${ones}`;

  return finalAmount(digitsTotal, myCents);
}

