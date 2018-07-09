function words (function words (param){

  var cek = String(param)
  
  var digit = ['se','puluh','ratus','ribu','juta','belas']
  var angka = [[1,'satu'],[2,'dua'],[3,'tiga'],[4,'empat'],[5,'lima'],[6,'enam'],[7,'tujuh'],[8,'delapan'],[9,'sembilan'],[11,'sebelas'],[12,'sepuluh\\'],[10,'sepuluh'],[10,'sepuluh'],[10,'sepuluh'],[10,'sepuluh'],[10,'sepuluh'],]

 for (var i=0 ; i < angka.length ; i++){
   if (cek.length ==0 ){
     return ''
   }
    if (cek <20 && cek > 10 && cek[1] == angka[i][0]){
      
     if (cek[1] == 1 && cek[0] == 1){
       return 'se' + digit[5]
     }
     else {
       return angka[i][1]  +' '+ digit[5]
     }     
    }
//satuan
    if (cek.length == 1 && cek[0]== angka[i][0]){
      return angka[i][1] 
    }
   //puluhan
    if (cek.length == 2 && cek[0]== angka[i][0] && cek > 19){
      if (cek[1] == 0 && cek[0] == 1){
        return 'se' + digit[1]
      }
      else if (cek[1] == 0){
        return angka[i][1] +' ' + digit[1]
      }
      return angka[i][1] + ' ' + digit[1] + ' '+ words(cek.slice(1))
    }
//ratusan
    if (cek.length == 3 && cek[0]== angka[i][0]){
      if (cek[0] == 1){
        if (cek[1] == 0){
          return 'se' + digit[2] + ' '+ words(cek.slice(2))  
        }
        else {
          return 'se' + digit[2] + ' '+ words(cek.slice(1))  
        }
      }
      if (cek[1] == 0){
          return angka[i][1] + digit[2] + ' '+ words(cek.slice(2))  
        }
      return angka[i][1] + ' ' + digit[2] + ' '+ words(cek.slice(1))
    }
  //ribuan
    if (cek.length == 4 && cek[0]== angka[i][0]){
      if (cek[0] == 1){
      return 'se' + digit[3] + ' '+ words(cek.slice(1))  
      }
      return angka[i][1] + ' ' + digit[3] + ' '+ words(cek.slice(1))
    }
  //puluhan ribu
   if (cek.length == 5 && cek[0]== angka[i][0]){
      if (cek[0] == 1){
      return 'se' + digit[1] + ' '+ words(cek.slice(1))  
      }
      return angka[i][1] + ' ' + digit[1] + ' '+ words(cek.slice(1))
    }
 } 
}


console.log(words(19919)))