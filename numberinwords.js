function in_words(num) {

    var angkaA= ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh']
    var angkaB= ['', 'se', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan']
    var result= ''

    if (num <= 10) {
        var result= result + angkaA[num]
    } else
   
    if (num < 20) {
        var result= result + angkaB[num] + ' belas'
    } else

    if (num < 100) {
        var result= result + angkaB[String(num)[0]] + ' puluh ' + angkaA[String(num)[1]]
    } else

    if (num < 1000) {
        var result= result + angkaB[String(num)[0]] + ' ratus ' + in_words(Number(String(num).slice(1)))
    } else

    if (num < 10000) {
        var result= result + angkaB[String(num)[0]] + ' ribu ' + in_words(Number(String(num).slice(1)))
    } else
     
    if (num < 100000) {
        var result= result + angkaB[String(num)[0]] + ' puluh ribu ' + in_words(Number(String(num).slice(1)))
    } else

    if (num < 1000000) {
        var result= result + angkaB[String(num)[0]] + ' ratus ribu ' + in_words(Number(String(num).slice(1)))
    } else

    if (num < 10000000) {
        var result= result + angkaA[String(num)[0]] + ' juta ' + in_words(Number(String(num).slice(1)))
    } else

    if (num < 20000000) {
        var result= result + angkaA[String(num)[0]] + ' belas juta ' + in_words(Number(String(num).slice(1)))
    } else

    if (num < 100000000) {
        var result= result + angkaA[String(num)[0]] + ' puluh juta ' + in_words(Number(String(num).slice(1)))
    } else

    if (num < 1000000000) {
        var result= result + angkaA[String(num)[0]] + ' ratus juta ' + in_words(Number(String(num).slice(1)))
    } 

    return result

}

console.log (in_words(4))
console.log (in_words(27))
console.log (in_words(102))
console.log (in_words(38079))
console.log (in_words(82,102,713))