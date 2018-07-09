


function in_word(num) {
  let result = '';
  let numbers= ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan','sepuluh', 'sebelas'];

  if (num === 0) {
    return '';
  }
  if (num < 12) {
    result += numbers[num];
  }else if (num < 20) {
    result += numbers[num - 10] + ' belas'
  }else if (num < 100) {
    let firstDigit = Math.floor(num / 10);
    result += numbers[firstDigit] + ' puluh ' + numbers[num%10];
  }else if (num < 200) {
    result += 'seratus ' + in_word(num - 100);
  } else if (num <= 1000) {
    if(num<1000){
      let firstDigit = Math.floor(num / 100);
      result += numbers[firstDigit] + ' ratus ' + in_word(num % 100);
    }else if(num===1000){
      result += 'seribu ' + in_word(num - 1000);
    }
  }else if (num < 10000) {
    let firstDigit = Math.floor(num / 1000);
    result += numbers[firstDigit] + ' ribu ' + in_word(num % 1000);
  }else if (num < 100000) {
    let firstDigit = Math.floor(num / 10000);
    result += numbers[firstDigit] + ' puluh ' + in_word(num % 10000);
  }else if (num <= 1000000) {
    if(num<1000000){
      let firstDigit = Math.floor(num / 100000);
      result += numbers[firstDigit] + ' ratus ' + in_word(num % 100000);
    } else if(num===1000000){
       result += 'sejuta ' + in_word(num - 1000000);
    }
  }else if (num <= 100000000) {
    if(num<1000000){
      let firstDigit = Math.floor(num / 1000000);
      result += numbers[firstDigit] + ' juta ' + in_word(num % 1000000);
    } else if(num===100000000){
       result += 'seratus juta' + in_word(num - 100000000);
    }
  }
  return result;
}
console.log(in_word(4))//"empat"
console.log(in_word(9))//"sembilan"
console.log(in_word(10))//sepuluh
console.log(in_word(13))//"tiga belas"
console.log(in_word(20))//"dua puluh"
console.log(in_word(27))//"dua puluh tujuh"
console.log(in_word(100))//"seratus"
console.log(in_word(102))//"seratus dua"
console.log(in_word(120))//"seratus dua puluh "
console.log(in_word(1000))//"seribu"
console.log(in_word(155))// "seratus lima puluh lima "
console.log(in_word(999))//"sembilan ratus sembilan puluh sembilan"
console.log(in_word(38079))//"tiga puluh delapan ribu tujuh puluh sembilan"
console.log(in_word(1000000))//"sejuta"
console.log(in_word(100000000))//"seratus juta"

//Solution 2
/* function in_word(num){
let decimals=[1000000, 100000, 10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000,900,800,700,600,500,400,300,200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11,10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let words=["sejuta ","seratus ribu ", "sepuluh ribu ", "sembilan ribu ", "delapan ribu ", "tujuh ribu ", "enam ribu ", "lima ribu ", "empat ribu ", "tiga ribu ", "dua ribu ", "seribu ", "sembilan ratus ","delapan ratus ", "tujuh ratus ","enam ratus ","lima ratus ","empat ratus ","tiga ratus ","dua ratus ","seratus ", "sembilan puluh ", "delapan puluh ", "tujuh puluh ", "enam puluh ", "lima puluh ", "empat puluh ", "tiga puluh ","dua puluh ", "sembilan belas ","delapan belas ", "tujuh belas ", "enam belas ","lima belas ", "empat belas ", "tiga belas ","dua belas ", "sebelas ", "sepuluh ", "sembilan ", "delapan ", "tujuh ", "enam ", "lima ", "empat ", "tiga ", "dua ", "satu "];

let result="";

if(num===0){
  return "";
}
for(let i=0; i<decimals.length; i++){
  let strNum = String(num);
  let front = strNum[0];
  let next = strNum[1];
  let combine = Number(front+next);
  let indexFront= decimals.indexOf(Number(front));
  let indexNext= decimals.indexOf(Number(next));
  if(num<=10000){
    if(num>=decimals[i]){
      result+= words[i];
      num -= decimals[i];
    }
  }else if(num>10000 && num<100000){
    result += words[indexFront] + "puluh "+ words[indexNext] + "ribu "; 
    num-= combine*1000;
  }else if(num>100000 && num <1000000){
    let pair = Number(front+"00");
    let index= decimals.indexOf(pair);
     result += words[index]; 
     num-= combine*10000;
  }else if(num>=1000000){
    if(num===1000000){
      result+= words[i];
      num -= decimals[i];
    }else{
      result += words[indexFront] + "puluh "+ words[indexNext] + "juta "; 
      num-= combine*1000000;
    }
  }
}
return result;
}
*/
