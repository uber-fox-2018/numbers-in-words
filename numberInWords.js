function NumberInWords(num){
    let kata = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas']
    var str = ''
    if (num >= 0 && num <= 11){
        return str += kata[num]
    }
    if (num >= 12 && num <= 19){
        let sisa = num - 10
        return kata[sisa] + ' belas'
    }
    if (num >= 20 && num <=99){
        let sisa1 = Math.floor(num/10)
        let sisa = num%10
        return kata[sisa1] + ' puluh ' + kata[sisa]
    }
    if (num >= 100 && num <= 199){
        let sisa = num%100
        return 'seratus '+ NumberInWords(sisa)
    }
    if (num >=200 && num <= 999){
        let sisa = Math.floor(num/100)
        let sisa1 = num%100
        return kata[sisa] + ' ratus ' + NumberInWords(sisa1)
    }
    if (num >= 1000 && num <= 1999){
        let sisa = num%1000
        return 'seribu '+ NumberInWords(sisa)
    }
    if (num >= 2000 && num <= 9999){
        let sisa = Math.floor(num/1000)
        let sisa1 = num%1000
        return kata[sisa] + ' ribu '+ NumberInWords(sisa1)
    }
    if (num >= 10000 && num <= 10999){
        let sisa = Math.floor(num/1000)
        let sisa1 = num%1000
        return kata[sisa] + ' ribu '+ NumberInWords(sisa1)
    }
    if (num >= 11000 && num <= 11999){
        let sisa = Math.floor(num/1000)
        let sisa1 = num%1000
        return kata[sisa] + ' ribu '+ NumberInWords(sisa1)
    }
    if (num >= 12000 && num <= 99999){
        let sisa = Math.floor(num/1000)
        let sisa1 = num%1000
        return NumberInWords(sisa) + ' ribu '+ NumberInWords(sisa1)
    }
    if (num >= 100000 && num <= 199999){
        let sisa1 = Math.floor(num/1000)
        let sisa = num%1000
        return NumberInWords(sisa1)+ ' ribu ' + NumberInWords(sisa)
    }
    if (num >= 200000 && num <= 999999){
        let sisa = Math.floor(num/1000)
        let sisa1 = num%1000
        return NumberInWords(sisa) +' ribu '+ NumberInWords(sisa1)
    }
    if (num >= 1000000 && num <= 999999999){
        let sisa = Math.floor(num/1000000)
        let sisa1 = num%1000000
        return NumberInWords(sisa) +' juta '+ NumberInWords(sisa1)
    }
    if (num >= 1000000000 && num <= 999999999999){
        let sisa = Math.floor(num/1000000000)
        let sisa1 = num%1000000000
        return NumberInWords(sisa) + ' milyar ' + NumberInWords(sisa1)
    }
    if (num >= 1000000000000 && num <= 999999999999999){
        let sisa = Math.floor(num/1000000000000)
        let sisa1 = num%1000000000000
        return NumberInWords(sisa) +' triliun '+ NumberInWords(sisa1)
    }
}

console.log(NumberInWords(999000000000000))