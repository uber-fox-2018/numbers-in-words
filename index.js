function in_words(num) {

    let numberToWords = {
       1: 'satu',
       2: 'dua',
       3: 'tiga',
       4: 'empat',
       5: 'lima',
       6: 'enam',
       7: 'tujuh',
       8: 'delapan',
       9: 'sembilam',
       10: 'sepuluh',
       11: 'sebelas',
       100: 'seratus',
       1000: 'seribu',
       10000: 'sepuluh ribu'
    }

    if (num == 0) {
        return ''
    } else if (num < 12) {
        return numberToWords[num]
    } else if (num < 20) {
        return `${numberToWords[num % 10]} belas`
    } else if (num < 100) {
        return `${numberToWords[Math.trunc(num/10)]} puluh ${numberToWords[num % 10]}`
    } else if (num < 200) {
        return `${numberToWords[100]} ${in_words(num - 100)}`
    } else if (num < 1000) {
        return `${numberToWords[Math.trunc(num/100)]} ratus ${in_words(num % 100)}`
    } else if (num < 2000) {
        return `${numberToWords[1000]} ${in_words(num - 1000)}`
    } else if (num < 10000) {
        return `${numberToWords[Math.trunc(num/1000)]} ribu ${in_words(num % 1000)}`
    } else if (num < 20000) {
        return `${numberToWords[Math.trunc(num/1000) - 10]} belas ribu ${in_words(num % 1000)}`
    } else if (num < 100000) {
        return `${in_words(Math.trunc(num/1000))} ribu ${in_words(num % 1000)}`
    } else if (num < 1000000) {
        return `${in_words(Math.trunc(num/1000))} ribu ${in_words(num % 1000)}`
    } else if (num < 1000000) {
        return `${in_words(Math.trunc(num/1000000))} juta ${in_words(num % 10000)}`
    }
}

// console.log(in_words(5))
// console.log(in_words(13))
// console.log(in_words(55))
// console.log(in_words(100))
// console.log(in_words(156))
// console.log(in_words(277))
// console.log(in_words(421))
// console.log(in_words(1273))
// console.log(in_words(1993))
// console.log(in_words(4444))
// console.log(in_words(13677))
// console.log(in_words(87562))
// console.log(in_words(268996))
// console.log(in_words(4567789))
