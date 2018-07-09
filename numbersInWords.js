const inWords = (number) => {
  const converter = [
    '',
    'satu',
    'dua',
    'tiga',
    'empat',
    'lima',
    'enam',
    'tujuh',
    'delapan',
    'sembilan',
    'sepuluh',
    'sebelas',
  ];

  let str = '';
  if (number < 12) {
    str += converter[number];
  } else if (number < 20){
    let digit = number % 10;
    str += `${converter[digit]} belas`;
  } else if (number < 100) {
    let denominator = Math.floor(number / 10);
    let digit = number % 10;
    str += `${converter[denominator]} puluh ${converter[digit]}`;
  } else if (number < 200) {
    str += `seratus ${inWords(number - 100)}`;
  } else if (number < 1000) {
    let denominator = Math.floor(number / 100);
    str += `${converter[denominator]} ratus ${inWords(number % 100)}`;
  } else if (number < 2000) {
    str += `seribu ${inWords(number % 1000)}`;
  } else if (number < 1000000){
    let denominator = Math.floor(number / 1000);
    str += `${inWords(denominator)} ribu ${inWords(number % 1000)}`;
  } else if (number < 1000000000){
    let denominator = Math.floor(number / 1000000);
    str += `${inWords(denominator)} juta ${inWords(number % 1000000)}`;
  } else if (number < 1000000000000){
    let denominator = Math.floor(number / 1000000000);
    str += `${inWords(denominator)} milyar ${inWords(number % 1000000000)}`;
  } else if (number < 1000000000000000){
    let denominator = Math.floor(number / 1000000000000);
    str += `${inWords(denominator)} trilyun ${inWords(number % 1000000000000)}`;
  }

  return str;
}

// inWords(4)
console.log(inWords(24))
console.log(inWords(999999999999999));
// inWords(4123)
// inWords(12344)
// inWords(48499248)