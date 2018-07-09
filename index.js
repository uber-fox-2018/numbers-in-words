function numberToWord(num) {
    let bilangan = ['', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima', 'Enam', 'Tujuh', 'Delapan', 'Sembilan', 'Sepuluh', 'Sebelas', 'Seratus ', 'Seribu ']
    let satuan = [' Belas', ' Puluh ', ' Ratus ', ' Ribu ', ' Juta ']

    if(num < 12){
        return bilangan[num]
    }else if (num < 20) {
        return bilangan[num % 10] + ' Belas '
    }else if (num < 100){
        return bilangan[Math.floor(num / 10)] + ' Puluh ' + bilangan[num % 10]
    }else if (num < 200){
        return bilangan[12] + numberToWord(num - 100)
    }else if(num < 1000){
        return bilangan[Math.floor(num / 100)] + ' Ratus ' + numberToWord(num % 100)
    }else if(num < 2000){
        return bilangan[13] + numberToWord(num - 1000)
    }else if(num <= 10000){
        return bilangan[Math.floor(num / 1000)] + ' Ribu ' + numberToWord(num % 1000)
    }else if(num < 20000){
        return bilangan[Math.floor(num / 1000)] + ' Ratus ' + numberToWord(num % 1000)
    }else if(num <= 100000){
        return bilangan[Math.floor(num / 10000)] + ' Puluh ' + numberToWord(num % 10000)
    }else if(num < 1000000){
        return numberToWord(Math.floor(num / 1000)) + ' Ribu ' + numberToWord(Math.floor(num % 1000))
    }else if (num < 10000000) {
        return numberToWord(Math.floor(num / 1000000)) + ' Juta ' + numberToWord(num % 1000000)
    }else if (num < 1000000000) {
        return numberToWord(Math.floor(num / 1000000)) + ' Juta ' + numberToWord(num % 1000000)
    }else if (num < 10000000000) {
        return numberToWord(Math.floor(num / 10000000)) + ' Milyar ' + numberToWord(num % 10000000)
    }
}


console.log(numberToWord(4));
console.log(numberToWord(27));
console.log(numberToWord(102));
console.log(numberToWord(38079));
console.log(numberToWord(82102713));
console.log(numberToWord(8211271302));
