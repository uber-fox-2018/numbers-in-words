function toRoman(input) {
  if(input < 1 || input > 3000) {
    return 'Silakan masukan angka antara 1 sampai 3000, thanks!';
  }

  let roman = [
    {symbol: 'I', num: 1},
    {symbol: 'IV', num: 4},
    {symbol: 'V', num: 5},
    {symbol: 'IX', num: 9},
    {symbol: 'X', num: 10},
    {symbol: 'CD', num: 400},
    {symbol: 'XL', num: 40},
    {symbol: 'L', num: 50},
    {symbol: 'C', num: 100},
    {symbol: 'D', num: 500},
    {symbol: 'M', num: 1000},
  ];

  for(let i = 0; i < roman.length-1; i++) {
    if(roman[i+1].num > roman[i].num) {
      let temp = roman[i];
      roman[i] = roman[i+1];
      roman[i+1] = temp;
      i = -1;
    }
  }

  let output = '';
  for(let i = 0; i < roman.length; i++) {
    let j = 0;
    while(input >= roman[i].num) {
      output += roman[i].symbol;
      input -= roman[i].num;
      j++;
    }
  }

  return output;

}

console.log(toRoman(4));
console.log(toRoman(9));
console.log(toRoman(23));
console.log(toRoman(1453));
console.log(toRoman(1646));