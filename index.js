function numberInWords(number) {
    let angkaObject = {
        0: '',
        1: 'satu',
        2: 'dua',
        3: 'tiga',
        4: 'empat',
        5: 'lima',
        6: 'enam',
        7: 'tujuh',
        8: 'delapan',
        9: 'sembilan',
        10: 'sepuluh',
        11: 'sebelas',
        100: 'seratus',
        1000: 'seribu ',
    }

    if (number < 12) {
        return angkaObject[number];
    }else if (number < 20) {
        return angkaObject[number % 10] + ' belas'
    }else if (number < 100) {
        return angkaObject[Math.floor(number/10)] + ' puluh ' + angkaObject[number % 10]
    }else if (number < 200) {
        return angkaObject[100] + numberInWords(number - 100)
    }else if (number < 1000) {
        return angkaObject[Math.floor(number/100)] + ' ratus ' + numberInWords(number % 100)
    }else if (number < 2000) {
        return angkaObject[1000] + numberInWords(number - 1000)
    }else if (number <= 10000) {
        return angkaObject[Math.floor(number/1000)] + ' ribu ' + numberInWords(number % 1000)
    }else if (number < 100000) {
        return angkaObject[Math.floor(number/10000)] + ' puluh ' + numberInWords(number % 10000)
    }else if (number < 1000000) {
        return numberInWords(Math.floor(number / 1000)) + 'ribu'+ numberInWords(number % 1000)
    }else if (number < 10000000) {
        return numberInWords(Math.floor(number / 1000000)) + ' juta '+ numberInWords(number % 1000000)
    }else if (number < 100000000) {
        return numberInWords(Math.floor(number / 1000000)) + ' juta '+ numberInWords(number % 1000000)
    }else if (number < 1000000000) {
        return numberInWords(Math.floor(number / 1000000)) + ' juta '+ numberInWords(number % 1000000)
    }else if (number < 10000000000) {
        return numberInWords(Math.floor(number / 1000000000)) + ' milyar '+ numberInWords(number % 1000000000)
    }else if (number < 100000000000) {
        return numberInWords(Math.floor(number / 1000000000)) + ' milyar '+ numberInWords(number % 1000000000)
    }
}

// console.log(numberInWords(4));
// console.log(numberInWords(27));
// console.log(numberInWords(102));
// console.log(numberInWords(38079));
// console.log(numberInWords(82102713));
// console.log(numberInWords());
// console.log(numberInWords(20));
// console.log(numberInWords(107));
// console.log(numberInWords(500));
// console.log(numberInWords(1231));
// console.log(numberInWords(1232311));
// console.log(numberInWords(92390987));
// console.log(numberInWords(923987789));
// console.log(numberInWords(1220777989));
// console.log(numberInWords(24987987987));

