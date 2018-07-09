function numberToWords(number) {
    // Your code here
    var satuan = {
        1 :'satu',
        2 : 'dua',
        3 : 'tiga',
        4 : 'empat',
        5 : 'lima',
        6 : 'enam',
        7 : 'tujuh',
        8 : 'delapan',
        9 : 'sembilan',
        10 : 'sepuluh',
        11 : 'sebelas'
    }
    
    var convert = ''
    for(var key in satuan){
        if(number === 0){
            return ''
        }else if(number <= 11){
                if(number === Number(key)){
                    return convert = satuan[key] + numberToWords(number - Number(key))
                }
        }else if(number >= 12 && number <= 19 ){
            if(number - 10 === Number(key)){
                return convert = satuan[key] +' belas '+ numberToWords(number - number)
            }
        }else if(number >= 20 && number <= 99){
            if(Math.floor(number/10) === Number(key)){
                return convert = satuan[key] +' puluh '+ numberToWords(number % 10)
            }
        }else if(number >= 100 && number <= 999){
            if(Math.floor(number/100)=== Number(key)){
                if(Number(key) === 1){
                    return convert = 'seratus '+ numberToWords(number % 100)
                }else{
                    return convert = satuan[key] +' ratus '+ numberToWords(number % 100)
                }
            }
        }else if(number >= 1000 && number <= 11999){
            if(Math.floor(number/1000) === Number(key)){
                if(Number(key) === 1){
                    return convert = 'seribu '+ numberToWords(number % 1000)
                }else{
                    return convert = satuan[key]+ ' ribu '+ numberToWords(number % 1000)
                }
            }
        }else if(number >= 12000 && number <= 19999){
            if(Math.floor((number-10000)/1000) === Number(key)){
                return convert = satuan[key]+' belas ribu '+ numberToWords(number % 1000)
            }
        }else if(number >= 20000 && number <= 99999){
            if(Math.floor(number / 10000) === Number(key)){
                return convert = satuan[key]+ ' puluh '+numberToWords(number % 10000)
            }
        }else if(number >= 100000 && number <= 999999){
            if(Math.floor(number / 100000) === Number(key)){
                return convert = satuan[key]+ ' ratus '+numberToWords(number % 100000)
            }
        }else if(number >= 1000000 && number <= 11999999){
            if(Math.floor(number / 1000000) === Number(key)){
                return convert = satuan[key]+ ' juta '+ numberToWords(number % 1000000)
            }
        }else if(number >= 12000000 && number < 20000000){
            if(Math.floor((number-10000000)/1000000) === Number(key)){
                return convert = satuan[key]+ ' belas juta '+ numberToWords(number % 1000000)
            }
        }else if(number >= 20000000 && number < 100000000){
            if(Math.floor(number / 10000000) === Number(key)){
                return convert = satuan[key]+ ' puluh '+ numberToWords(number % 10000000)
            }
        }else if(number >= 100000000 && number <= 999999999){
            if(Math.floor(number / 100000000) === Number(key)){
                if(Number(key) === 1){
                    return convert ='seratus '+ numberToWords(number % 100000000)
                }else {
                    return convert =satuan[key]+ ' ratus '+ numberToWords(number % 100000000)
                }
            }
        }else if(number >= 1000000000 && number <= 11999999999){
            if(Math.floor(number / 1000000000) === Number(key)){
                return convert = `${satuan[key]} milyar ${numberToWords(number % 1000000000)}`
            }
        }else if(number >= 12000000000 && number < 20000000000){
            if(Math.floor((number-10000000000)/1000000000) === Number(key)){
                return convert = satuan[key]+ ' belas milyar '+ numberToWords(number % 1000000000)
            }
        }else if(number >= 20000000000 && number < 100000000000){
            if(Math.floor(number / 10000000000) === Number(key)){
                return convert = `${satuan[key]} puluh ${numberToWords(number % 10000000000)}`
            }
        }
        else if(number >= 100000000000 && number <= 999999999999){
            if(Math.floor(number/100000000000) === Number(key)){
                if(Number(key) === 1){
                    return convert = `seratus ${numberToWords(number % 100000000000)}`
                }else{

                    return convert = `${satuan[key]} ratus ${numberToWords(number % 100000000000)}`
                }
            }
        }else if(number >= 1000000000000 && number <= 1199999999999){
            if(Math.floor(number / 1000000000000) === Number(key)){
                return convert = `${satuan[key]} triliun ${numberToWords(number % 1000000000000)}`
            }
        }
    }
    // if(number === 0){
    //     return ''
    // }else if(number <= 11){
    //     for(var key in satuan){
    //         if(number === Number(key)){
    //             return convert = satuan[key] + numberToWords(number - Number(key))
    //         }
    //     }
    // }else if(number >= 12 && number <= 19 ){
    //     for(var key in satuan){
    //         if(number-10 === Number(key)){
    //             return convert = satuan[key]+' belas' + numberToWords(number - number)
    //         }
    //     }
    // }
    // }else if(number >= 20 && number <= 99){
    //     for(var key in satuan){
    //         if(Math.floor(number / 10) === Number(key)){
    //             return convert = satuan[key]+' puluh ' + numberToWords(number % 10)
    //         }
    //     }
    // }


    
  }
  
  // Driver code
  

  console.log(numberToWords(705));
  console.log(numberToWords(1000000));
  console.log(numberToWords(2011845));
  console.log(numberToWords(99999909999));
  

  
  