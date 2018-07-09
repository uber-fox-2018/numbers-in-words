function inWords(number){
    var kamus = {
        0:" ",
        1:"satu",
        2:"dua",
        3:"tiga",
        4:"empat",
        5:"lima",
        6:"enam",
        7:"tujuh",
        8:"delapan",
        9:"sembilan",
        10:"sepuluh",
        11:"sebelas"
        // 100:"seratus",
        // 1000:"seribu"
    };
    var pecahan =[' belas ',' puluh ',' ratus ',' ribu ',' juta ',' milliar ',' trilliun ']
    var result=''

    if(number>=0 && number<=11){
        result += kamus[number]
        return result
    }else if(number>=12 && number<=19){
        result += kamus[number-10] + pecahan[0];
        return result
    }else if(number>=20 && number<=99){
        result += kamus[Math.floor(number/10)] + pecahan[1];
        return result + inWords(number%10)
    }else if(number>=100 && number<=999){
        let ratusan = Math.floor(number/100)
        if(ratusan === 1){
            result += "seratus "
            return result + inWords(number%100);
        }else{
            result += kamus[ratusan] + pecahan[2];
            return result + inWords(number%100)
        }
    }else if(number>=1000 && number<=9999){
        let ribuan = Math.floor(number/1000);
        if(ribuan === 1){
            result += " seribu "
            return result + inWords(number%1000);
        }else{
            result += kamus[ribuan] + pecahan[3];
            return result + inWords(number%1000)
        }
    }else if(number >= 10000 && number <= 999999){
        let puluhRibu = Math.floor(number/1000);
        result += inWords(puluhRibu) + pecahan[3];
        return result + inWords(number%1000)
    }else if(number >= 1000000 && number <= 9999999999){
        let juta = Math.floor(number/1000000);
        result += inWords(juta) + pecahan[4];
        return result + inWords(number % 1000000)
    }else if(number >= 10000000000 && number<=9999999999999){
        let milliar = Math.floor(number/1000000000);
        result += inWords(milliar) + pecahan[5];
        return result + inWords(number % 1000000000)
    }else if(number >= 10000000000000 && number <= 9999999999999999 ){
        let trilliun =  Math.floor(number/1000000000000);
        result += inWords(trilliun) + pecahan[6];
        return result + inWords(number%1000000000000)
    }
}

console.log(inWords(16000))
console.log(inWords(82102713))
console.log(inWords(999999999999999))