const numberToWords = (number) => {
  const wordOfNumber = {
    1: 'satu',
    2: 'dua',
    3: 'tiga',
    4: 'empat',
    5: 'lima',
    6: 'enam',
    7: 'tujuh',
    8: 'delapan',
    9: 'sembilan',
  }

  switch (number) {
    case 10:
      return 'sepuluh'
    break
    case 11:
      return 'sebelas'
    break
    case 100: 
      return 'seratus'
    break
    case 1000: 
      return 'seribu'
    break
    case 10000:
      return 'sepuluh ribu'
    break
    case 11000:
      return 'sebelas ribu'
    break
    case 100000: 
      return 'seratus ribu'
    break
    case 10000000: 
      return 'satu milyar'
    break
  }

  for (let key in wordOfNumber) {
    if (number === Number(key)) {
      return wordOfNumber[key]
    }

    if (number > 10 && number != 11 && number < 19) {
      let belasan = number - 10
      return `${wordOfNumber[belasan]} belas`
    }

    if (number >= 20 && number <= 99) {
      return `${numberToWords(Math.floor(number/10))} puluh ${numberToWords(number % 10)}`
    }

    if (number > 100 && number <= 199) {
      return `seratus ${numberToWords(number % 100)}`
    }

    if (number >= 200 && number <= 999) {
      return `${numberToWords(Math.floor(number/100))} ratus ${numberToWords(number % 100)}`
    }

    if (number >= 1000 && number <= 1999) {
      return `seribu ${numberToWords(Math.floor(number % 1000))}`
    }

    if (number >= 2000 && number <= 9999) {
      return `${numberToWords(Math.floor(number / 1000))} ribu ${numberToWords(Math.floor(number % 1000))}`
    }

    if (number >= 10000 && number <= 10999) {
      return `${numberToWords(Math.floor(number/1000))} ribu ${numberToWords(number % 1000)}`
    }

    if (number >= 12000 & number <= 19999) {
      return `${numberToWords(Math.floor(number/1000))} ribu ${numberToWords(number % 1000)}`
    }

    if (number >= 20000 && number <= 99999) {
      return `${numberToWords(Math.floor(number / 10000))} puluh ${numberToWords(number % 10000)}`
    }

    if (number >= 100000 && number <= 199999) {
      return `${numberToWords(Math.floor(number / 1000))} ribu ${numberToWords(number % 1000)}`
    }

    if (number >= 200000 && number <= 999999) {
      return `${numberToWords(Math.floor(number / 100000))} ratus  ${numberToWords(number % 100000)}`
    }

    if (number >= 1000000 && number <= 9999999) {
      return `${numberToWords(Math.floor(number / 1000000))} juta
      ${numberToWords(number % 1000000)}`
    }

    if (number >= 10000000 && number <= 1000000000000) {
      return `${numberToWords(Math.floor(number / 1000000000))} milyar`
    }

    if (number >= 100000000000000 && number <= 9999999999999999) {
      return `${numberToWords(Math.floor(number / 1000000000000))} triliun ${numberToWords(number % 1000000000000)}`
    }
    
  }
}

// console.log(numberToWords(1));
// console.log(numberToWords(9));
// console.log(numberToWords(11));
// console.log(numberToWords(2202));
// console.log(numberToWords(9999));
// console.log(numberToWords(999999));
console.log(numberToWords(9999999));
// console.log(numberToWords(10000000000));
// console.log(numberToWords(1000000000000));
// console.log(numberToWords(1000000000000005));
// console.log(numberToWords(999999000000000));
