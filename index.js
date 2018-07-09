


function numberInWords(num){
    let kamus  = {
                0: '',
                1:'satu',
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
                1000: 'seribu',
                10000: 'sepuluh ribu',
            }

    if (num < 12) {
        return kamus[num]
    } else if (num < 20){
        return (kamus[num % 10]) + ' belas'
    } else if (num < 100) {
        return kamus[Math.floor(num/10)] + ' puluh ' + kamus[num%10]
    } else if(num < 200) {
        return kamus[100] + " "+   numberInWords(num -100)
    }else if(num < 1000) {
        return kamus[Math.floor(num/100)] + ' ratus ' + numberInWords(num % 100)
    } else if (num < 2000){
        return kamus[1000] +' '+ numberInWords(num-1000)
    }else if(num <= 10000){
        return kamus[Math.floor(num / 1000)] + ' Ribu ' + numberInWords(num % 1000)
    }else if(num < 20000){
        return kamus[Math.floor(num / 1000)] + ' Ratus ' + numberInWords(num % 1000)
    }else if(num <= 100000){
        return kamus[Math.floor(num / 10000)] + ' Puluh ' + numberInWords(num % 10000)
    }else if(num < 1000000){
        return numberInWords(Math.floor(num / 1000)) + ' Ribu ' + numberInWords(Math.floor(num % 1000))
    }else if (num < 10000000) {
        return numberInWords(Math.floor(num / 1000000)) + ' Juta ' + numberInWords(num % 1000000)
    }else if (num < 1000000000) {
        return numberInWords(Math.floor(num / 1000000)) + ' Juta ' + numberInWords(num % 1000000)
    }else if (num < 10000000000) {
        return numberInWords(Math.floor(num / 10000000)) + ' Milyar ' + numberInWords(num % 10000000)
    }
}


console.log(numberInWords(4)) // 'empat'
console.log(numberInWords(27)) // "dua puluh tujuh"
console.log(numberInWords(102))//"seratus dua"
console.log(numberInWords(38079)) // "tiga puluh delapan ribu tujuh puluh sembian"
console.log(numberInWords(82102713))// "delapan puluh dua juta seratus dua ribu tujuh ratus tiga belas"
