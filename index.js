
function inWords(number) {

    if (number <= 0) {
        return ''
    }
    var numtoStr = [
        '', 'satu', 'dua', 'tiga', 'empat', 'lima',
        'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh',
    ]
    var division = {
        trilyun: 1000000000000,
        milyar: 1000000000,
        juta: 1000000,
        ribu: 1000,
        ratus: 100,
        puluh: 10,
        '': 1
    }
    for (let key in division) {
        var firstDigit = Math.floor(number / division[key])
        var lastDigit = Math.floor(number % division[key])

        if (number >= division[key]) {
            if (number < 100) {
                if (number > 11 && number < 20) {
                    if (number === 11) {
                        return 'sebelas'
                    } else {
                        return `${inWords(lastDigit)} belas`
                    }
                }
                return `${numtoStr[firstDigit]}${[key]} ${inWords(lastDigit)}`
            }
            else {
                if (firstDigit === 1 && number < 2000) {
                    return `se${[key]} ${inWords(lastDigit)}`
                } else {
                    return `${inWords(firstDigit)}${[key]} ${inWords(lastDigit)}`
                }
            }
        }
    }
}

console.log(inWords(231231316));