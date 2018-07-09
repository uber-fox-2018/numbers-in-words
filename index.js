function numInWords (num) {
    let wordsNum = {
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
        1000: 'seribu',
    }
    let containStr = ''
    let numRec = 0
    for (let key in wordsNum) {
        if (num <= 0) {
            return containStr
        } else {
            if (num <= 11) {
                containStr += wordsNum[num]
                numRec = num - num
                return containStr + numInWords(numRec)
            } else if (num >= 12 && num <= 19) {
                // 13 = tiga belas
                // numRec = num - 10
                let satuan = wordsNum[Math.floor(num % 10)]
                containStr += satuan + ' belas'
                // containStr +=  'belas'
                numRec = num - num
                return containStr + numInWords(numRec)
            } else if (num >= 20 && num <= 99) {
                //23 = dua puluh tiga
                let puluhan = wordsNum[Math.floor(num / 10)]
                numRec += num % 10
                containStr += puluhan + ' puluh '
                return containStr + numInWords(numRec)
            } else if (num >= 200 && num <= 999) {
                // 245 = dua ratus empat puluh lima
                let ratusan = wordsNum[Math.floor(num / 100)] // angka depan
                numRec = num % 100
                containStr += ratusan + ' ratus '
                return containStr + numInWords(numRec)
            } else if (num >= 100 && num <= 199) {
                containStr += wordsNum[100] + ' '
                numRec = num % 100
                return containStr + numInWords(numRec)
            } else if (num >= 1000 && num <= 1999) {
                containStr += wordsNum[1000] + ' '
                numRec = num % 1000
                return containStr + numInWords(numRec)
            } else if (num >= 2000 && num <= 9999) {
                // 9989 = sembilan ribu sembilan ratus delapan puluh sembilan
                let ribuan = wordsNum[Math.floor(num / 1000)]
                containStr += ribuan + ' ribu '
                numRec = num % 1000
                return containStr + numInWords(numRec)
            } else if (num >= 10000 && num <= 10999) {
                // 11898 = sebelas ribu delapan ratus sembilan puluh delapan
                let belasRibu = wordsNum[Math.floor(num / 1000)] 
                containStr += belasRibu + ' ribu '
                numRec = num % 10000
                return containStr + numInWords(numRec)
            } else if (num >= 11000 && num <= 11999) {
                let belasRibu = wordsNum[Math.floor(num / 1000)]
                containStr += belasRibu + ' ribu '
                numRec = num % 11000
                return containStr + numInWords(numRec)
            } else if (num >= 12000 && num <= 19999) {
                // 19987 = sembilan belas | ribu | sembilan ratus delapan puluh tujuh
                let belasRibu = wordsNum[Math.floor((num - 10000) / 1000)] // 9
                containStr += belasRibu + ' belas ribu '
                return containStr + numInWords(num % 1000)
            } else if (num >= 20000 && num <= 99999) {
                // 56786 = lima puluh enam ribu tujuh ratus delapan puluh enam
                return `${numInWords(Math.floor((num / 10000) * 10))} ribu ${numInWords(num % 1000)}`
            } else if (num >= 100000 && num <= 999999) {
                // 198789 = seratus sembilan puluh delapan | ribu | tujuh ratus delapan puluh sembilan
                // console.log(num % 1000);
                
                return `${numInWords(Math.floor((num / 100000) * 100))} ribu ${numInWords(num % 1000)}`
            } else if (num >= 1000000 && num <= 999999999) {
                // sembilan ratus sembilan puluh sembilan juta
                // console.log(Math.floor((num / 10000000) * 10));
                // console.log(num % 1000000);
                
                return `${numInWords(Math.floor((num / 10000000) * 10))} juta ${numInWords(num % 1000000)}`
            } else if (num >= 1000000000 && num <= 9999999999) {
                console.log(Math.floor((num / 10000000000) * 10));
                console.log(Math.floor((num % 1000000000)));
                
                return `${numInWords(Math.floor((num / 10000000000) * 10))} miliyar ${numInWords(num % 1000000000)}`
            } else if (num >= 1000000000000 && num <= 999999999999999) {
                //999.999.999.999.999
                console.log(Math.floor((num / 10000000000000) * 10));
                
                return `${numInWords(Math.floor((num / 10000000000000) * 10))} triliyun ${numInWords(num % 10000000000)}`
            }
        }
    }
    
}

console.log(numInWords(998789876785785));
// console.log(numInWords(10));
// console.log(numInWords(76));
// console.log(numInWords(100));
// console.log(numInWords(999));
// console.log(numInWords(1000));
// console.log(numInWords(1879));