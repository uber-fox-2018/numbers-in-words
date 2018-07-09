function in_Words(angka) {
  const kata = [ '', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas' ];
  
  if(angka >= 0 && angka <= 11) {
    return kata[angka];
  } else {
    let output = '';
    let sisa = '';

    // jutaan
    if(angka >= 1000000 && angka < 10000000) {
      let jutaan = Math.floor(angka / 1000000);
      sisa = angka % 1000000;
      output += `${kata[jutaan]} juta ${in_Words(sisa)}`;
    } else {
      // ratusan ribu
      if(angka >= 100000 && angka < 200000) {
        let ratusanRibu = Math.floor(angka / 100000);
        sisa = angka % 100000;
        output += `seratus ribu ${in_Words(sisa)}`;
      } else if(angka ){
        // ribuan;
        if(angka >= 1000 && angka < 2000) {
          sisa = angka % 1000;
          output += `seribu ${in_Words(sisa)}`;
        } else if(angka >= 2000 && angka < 1000000) {
          let ribuan = Math.floor(angka / 1000);
          sisa = angka % 1000;
          output += `${kata[ribuan]} ribu ${in_Words(sisa)}`;
        } else 
        // ratusan
        if(angka >= 100 && angka < 200) {
          sisa = angka % 100;
          output += `seratus ${in_Words(sisa)}`;
        } else if(angka >= 200 && angka < 1000 ) {
          let ratusan = Math.floor(angka / 100);
          sisa = angka % 100;
          output += `${kata[ratusan]} ratus ${in_Words(sisa)}`;
        } 
        // puluhan
        if(angka >= 20 && angka <= 100) {
          let puluhan = Math.floor(angka / 10);
          sisa = angka % 10;
          output += `${kata[puluhan]} puluh ${in_Words(sisa)}`;
        }
        // belasan
        if(angka > 11 && angka < 20) {
          sisa = angka - 10;
          output += `${in_Words(sisa)} belas`;
        } 

      }     

    }

    return output;

  }

}
console.log(in_Words(12345));
console.log(in_Words(1131312));
console.log(in_Words(2424));
console.log(in_Words(535));
console.log(in_Words(646));
console.log(in_Words(757));
console.log(in_Words(868));
console.log(in_Words(979));
console.log(in_Words(128));
console.log(in_Words(100000));
console.log(in_Words(101));
console.log(in_Words(11));


console.log(in_Words(27));
// console.log(in_Words(102));
// console.log(in_Words(38079));
// console.log(in_Words(82102713));