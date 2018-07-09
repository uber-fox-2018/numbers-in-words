function inWords (num){
    var angka = ['satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas']
    var result = ''
    var awal
    var akhir
    

    if(num < 12){
        result+=angka[num-1]
    }else if(num < 20){
        result+=angka[num-11]+'belas'
    }else if(num < 100){
        awal = Number(num.toString()[0])-1
        akhir = Number(num.toString()[1])-1
        result+=angka[awal] + ' puluh ' + angka[akhir]
    }else if(num < 200){
        return result + 'seratus ' + inWords(num-100)
    }else if(num < 1000){
        awal = Number(num.toString().slice(0,1))-1
        akhir = Number(num.toString().slice(1))
        result+=angka[awal]+' ratus ' + inWords(akhir)
    }else if(num < 2000){
        return result + 'seribu ' + inWords(num-1000)
    }else if(num < 10000){
        awal = Number(num.toString().slice(0,1))-1
        akhir = Number(num.toString().slice(1))
        result+=angka[awal]+' ribu ' +inWords(akhir)
    }else if(num < 20000){
        awal = Number(num.toString().slice(0,1))
        akhir = Number(num.toString().slice(1))
        result+=angka[awal]+' belas ribu ' +inWords(akhir)
    }
    return result
}
console.log(inWords(12000))



