function NumberInWords(num){
    let words = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas']
    
    if (num < 12){
        return words[num]
    }
    if (num >= 12 && num <= 19){
        let remains = num - 10
        return words[remains] + ' belas'
    }
    if (num >= 20 && num <=99){
        let remains = Math.floor(num/10)
        let remains2 = num%10
        return words[remains] + ' puluh ' + words[remains2]
    }
    if (num >= 100 && num <= 199){
        let remains = num%100
        return 'seratus '+ NumberInWords(remains)
    }
    if (num >=200 && num <= 999){
        let remains = Math.floor(num/100)
        let remains2 = num%100
        return words[remains] + ' ratus ' + NumberInWords(remains2)
    }
    if (num >= 1000 && num <= 1999){
        let remains = num%1000
        return 'seribu '+ NumberInWords(remains)
    }
    if (num >= 2000 && num <= 9999){
        let remains = Math.floor(num/1000)
        let remains2 = num%1000
        return words[remains] + ' ribu '+ NumberInWords(remains2)
    }
    if (num >= 10000 && num <= 10999){
        let remains = Math.floor(num/1000)
        let remains2 = num%1000
        return words[remains] + ' ribu '+ NumberInWords(remains2)
    }
    if (num >= 11000 && num <= 11999){
        let remains = Math.floor(num/1000)
        let remains2 = num%1000
        return kata[remains] + ' ribu '+ NumberInWords(remains2)
    }
    if (num >= 12000 && num <= 99999){
        let remains = Math.floor(num/1000)
        let remains2 = num%1000
        return NumberInWords(remains) + ' ribu '+ NumberInWords(remains2)
    }
    if (num >= 100000 && num <= 199999){
        let remains = Math.floor(num/1000)
        let remains2 = num%1000
        return NumberInWords(remains)+ ' ribu ' + NumberInWords(remains2)
    }
    if (num >= 200000 && num <= 999999){
        let remains = Math.floor(num/1000)
        let remains2 = num%1000
        return NumberInWords(remains) +' ribu '+ NumberInWords(remains2)
    }
    if (num >= 1000000 && num <= 999999999){
        let remains = Math.floor(num/1000000)
        let remains2 = num%1000000
        return NumberInWords(remains) +' juta '+ NumberInWords(remains2)
    }
    if (num >= 1000000000 && num <= 999999999999){
        let remains = Math.floor(num/1000000000)
        let remains2 = num%1000000000
        return NumberInWords(remains) + ' milyar ' + NumberInWords(remains2)
    }
    if (num >= 1000000000000 && num <= 999999999999999){
        let remains = Math.floor(num/1000000000000)
        let remains2 = num%1000000000000
        return NumberInWords(remains) +' triliun '+ NumberInWords(remains2)
    }
}

console.log(NumberInWords(20))
console.log(NumberInWords(27))
console.log(NumberInWords(102))
console.log(NumberInWords(28079))
console.log(NumberInWords(82102713))
console.log(NumberInWords(999000000000099)) 