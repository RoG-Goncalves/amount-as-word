# Amount As Word

A simple Script for writing out any given value in Brazilian Reais (for now, it can write out up to R$ 999.999.999.999,99. Sorry Bezos, you won't be able to use it);

# usage:
* npm i amount-as-word
* import amountAsWord from 'amount-as-word/utils/amountAsWord.js'

# expected results:

* amountAsWord('122,22')
//-> cento e vinte e dois Reais e vinte e dois centavos
* amountAsWord('888.999.777.654,27')
//-> oitocentos e oitenta e oito bilhões , novecentos e noventa e nove milhões , setecentos e setenta e sete mil , seiscentos e cinquenta e quatro Reais e  vinte e sete centavos

<strong> Values shoud be entered as strings</strong>

# for testing:
Just run the 'index.html' with Live Server and you will be prompted to write some value in BRL - It sould be in format: /^((\d{1,3})(\.\d{3})*)(\,\d{2})?$/
You'll get the value in the screen.
