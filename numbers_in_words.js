function convertNumbers(num) {
    let result = '';
    let wordsConvert = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'];

    if (num < 10) {
        result += wordsConvert[num];
    } 

    if (num >= 10 && num < 100) {
        if (num >= 11 && num < 20) {
            let backDigit = num % 10;
            if (num === 11) {
                return 'sebelas';
            } else {
                return convertNumbers(backDigit) + ' belas';
            }
        }
        let frontDigit = Math.floor(num / 10);
        let backDigit = num % 10;
        if (num === 10) {
            return 'sepuluh';
        } else {
            return convertNumbers(frontDigit) + ' puluh ' + convertNumbers(backDigit);
        }

    } else if (num >= 100 && num < 1000) {
        let frontDigit = Math.floor(num / 100);
        let backDigit = num % 100;
        if (num === 100) {
            return 'seratus';
        } else if (frontDigit === 1) {
            return 'seratus ' + convertNumbers(backDigit);
        } else {
            return convertNumbers(frontDigit) + ' ratus ' + convertNumbers(backDigit);
        }

    } else if (num >= 1000 && num < 100000) {
        let frontDigit = Math.floor(num / 1000);
        let backDigit = num % 1000;
        if (frontDigit === 1) {
            return 'seribu ' + convertNumbers(backDigit);
        } else {
            return convertNumbers(frontDigit) + ' ribu ' + convertNumbers(backDigit);
        }

    } else if (num >= 100000 && num < 1000000) {
        let frontDigit = Math.floor(num / 100000);
        let backDigit = num % 100000;
        if (frontDigit === 1) {
            return 'seratus ' + convertNumbers(backDigit);
        } else {
            return convertNumbers(frontDigit) + ' ratus ' + convertNumbers(backDigit);
        }

    } else if (num >= 1000000 && num < 1000000000) {
        let frontDigit = Math.floor(num / 1000000);
        let backDigit = num % 1000000;
        if (frontDigit === 1) {
            return 'sejuta ' + convertNumbers(backDigit);
        } else {
            return convertNumbers(frontDigit) + ' juta ' + convertNumbers(backDigit);
        }

    } else if (num >= 1000000000 && num < 1000000000000) {
        let frontDigit = Math.floor(num / 1000000000);
        let backDigit = num % 1000000000;
        return convertNumbers(frontDigit) + ' milyar ' + convertNumbers(backDigit);

    } else if (num >= 1000000000000 && num < 1000000000000000) {
        let frontDigit = Math.floor(num / 1000000000000);
        let backDigit = num % 1000000000000;
        return convertNumbers(frontDigit) + ' triliun ' + convertNumbers(backDigit);
    }

    return result;
}

// console.log(convertNumbers(7));
// console.log(convertNumbers(10));
// console.log(convertNumbers(11));
// console.log(convertNumbers(15));
// console.log(convertNumbers(23));
// console.log(convertNumbers(91));
// console.log(convertNumbers(149));
// console.log(convertNumbers(248));
// console.log(convertNumbers(975));
// console.log(convertNumbers(1000));
// console.log(convertNumbers(8357));
// console.log(convertNumbers(10000));
// console.log(convertNumbers(16595));
// console.log(convertNumbers(567123));
// console.log(convertNumbers(9213123));
// console.log(convertNumbers(1000000));
// console.log(convertNumbers(99123567));
console.log(convertNumbers(123456789));
console.log(convertNumbers(111222555777));
console.log(convertNumbers(999777555333111));
