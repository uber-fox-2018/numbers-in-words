function in_words(number) {
    let angka = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan','sepuluh', 'sebelas'];
    let output = '';

    if (number === undefined) {
		return 'Entri nomor';
    }
  
    if (number < 12) {
      output += angka[number];
    }
    
    else if (number < 20) {
		output += angka[number - 10] + ' belas'
    }
  
    else if (number < 100) {
		let digitAwal = Math.floor(number / 10);
		let digitSisa = number % 10;
		output += angka[digitAwal] + ' puluh ' + angka[digitSisa];
    }
    
    else if (number < 200) {
		output += 'seratus ' + in_words(number - 100);
    }
    
    else if (number < 1000) {
		let digitAwal = Math.floor(number / 100);
    	output += angka[digitAwal] + ' ratus ' + in_words(number % 100);
	}
	
	else if (number < 10000) {
		let digitAwal = Math.floor(number / 1000);
    	output += angka[digitAwal] + ' ribu ' + in_words(number % 1000);
	}
	
	else if (number < 100000) {
		let digitAwal = Math.floor(number / 10000);
    	output += angka[digitAwal] + ' puluh ' + in_words(number % 10000);
	}
	
	else if (number < 1000000) {
		let digitAwal = Math.floor(number / 100000);
    	output += angka[digitAwal] + ' ratus ' + in_words(number % 100000);
    }
    
    return output
  }
  
  // Driver code
  console.log(in_words(12));
  console.log(in_words(182));
  console.log(in_words(450087));