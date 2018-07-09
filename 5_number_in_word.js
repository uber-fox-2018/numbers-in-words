function number_word(number) {
    // Your code here
    const words = ['','satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh','delapan','sembilan', 'sepuluh', 'sebelas' ];
    let index = 0
   
    if(number >= 0 && number <= 11){
      return `${words[number]}` ;
    }
  
    if(number>11 && number<20){
       index = number-10;
      return `${words[index]}belas`;
    }
    
    if(number >= 20 && number < 100){
       index = Math.floor(number%10) ;
      return `${words[index]} puluh ${number_word(number%10)}` ;
    }
    
    if(number >= 100 && number < 200){
       index = Math.floor(number-100);
      return `seratus ${number_word(index)}`;
    }
   
    if(number >= 200 && number < 1000){
       index = Math.floor(number/100);
      return `${words[index]} ratus ${number_word(number%100)}`
    }
    
    if(number >= 1000 && number < 2000){
       index = Math.floor(number-1000);
      return `seribu ${number_word(index)}`;
    }
    
    if(number >= 2000 && number < 1000000){
       index = Math.floor(number/1000);
      return `${number_word(index)} ribu ${number_word(number%1000)}`
    }
    
    if(number >= 1000000 && number < 1000000000){
       index = Math.floor(number/1000000);
      return `${number_word(index)} juta ${number_word(number%1000000)}`
    }
    
    if(number >= 1000000000 && number < 1000000000000){
       index = Math.floor(number/1000000000);
      return `${number_word(index)} miliyar ${number_word(number%1000000000)}`
    }
    
    if(number >= 1000000000000 && number < 1000000000000000){
       index = Math.floor(number/1000000000000);
      return `${number_word(index)} triliun  ${number_word(number%1000000000000)}`
    }
    
  }
  
  // Driver code
  console.log(number_word(4));
  console.log(number_word(705));
  console.log(number_word(27));
  console.log(number_word(2011845));
  console.log(number_word(999999999999999))
  console.log(number_word(111111111111111))