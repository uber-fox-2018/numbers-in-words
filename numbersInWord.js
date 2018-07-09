// 

function numberInWords(num){
	var word = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas']
	var result = ''
	// console.log(num)
	if (num >= 0 && num <= 11){
		return result += word[num]
	}

	if (num >= 12 && num <= 19){
		var i = num - 10
		return word[i] + ' belas ' 
	}

	if (num >= 20 && num <= 99){
		var i = Math.floor(num / 10)
		num %= 10
		return result += word[i] +' puluh' + numberInWords(num)
	}

	if (num >= 100 && num <= 111){		//	ratus
		var i = Math.floor(num / 100)
		num %= 100
		return result += ' seratus ' + numberInWords(num)
	}


	// if (num > 111 && num < 112){
	// 	var ratus = Math.floor(num / 100)
	// 	num %= 100
	// 	return result += ' seratus ' + numberInWords(num)
	// }

	if (num >= 112 && num < 200){
		var ratus = Math.floor(num / 100)
		num -= 100
		return result += word[ratus]+ ' ratus ' + numberInWords(num)
	}

	if (num >= 200 && num < 1000){
		var duaratus = Math.floor(num / 100)
		num %= 100
		return result += word[duaratus]+ ' ratus ' + numberInWords(num)	
	}

	if (num >= 1000 && num < 2000){
		var duaratus = Math.floor(num / 100)
		num %= 1000
		return result += word[duaratus]+ ' ribu ' + numberInWords(num)	
	}

	if (num >= 2000 && num < 11000){
		var seribu = Math.floor(num / 1000)
		num -= 1000
		return result += 'seribu '+ numberInWords(num)
	}

	if (num >= 11000 && num < 12000){
		var duaribu = Math.floor(num / 1000)
		num %= 10000
		return result + numberInWords(num)
	}

	if (num >= 12000 && num < 20000){
		var sepuluhR = Math.floor(num / 10000)
		num -= 10000
		return result += word[sepuluhR]+' ribu '+ numberInWords(num)
	}

	if (num >= 20000 && num < 100000){
		// var sepuluhR = Math.floor(num / 10000)
		num -= 10000
		return result += ' ribu '+ numberInWords(num)
	}

	if (num >= 100000 && num < 111000){
		var sepuluhR = Math.floor(num / 10000)
		num %= 100000
		return result += word[sepuluhR]+' puluh ribu '+ numberInWords(num)
	}

	if (num >= 111000 && num < 120000){
		// var seratusR = Math.floor(num / 100000)
		num -= 100000
		return result += ' seratus '+ numberInWords(num)
	}

	if (num >= 120000 && num < 200000){
		var duaratusR = Math.floor(num / 100000)
		num %= 100000
		return result +=word[duaratusR] + ' ratus '+ numberInWords(num)
	}

	if (num >= 200000 && num < 100000){
		var duaratusR = Math.floor(num / 1000000)
		num %= 100000
		return result +=word[duaratusR] + ' juta '+ numberInWords(num)
	}

	if (num >= 100000 && num < 110000){
		var duaratusR = Math.floor(num / 1000000)
		num %= 100000
		return result +=word[duaratusR] + ' juta '+ numberInWords(num)
	}

	if (num >= 110000 && num < 120000){
		var duaratusR = Math.floor(num / 1000000)
		num %= 100000
		return result +=word[duaratusR] + ' juta '+ numberInWords(num)
	}

	if (num >= 120000 && num < 200000){
		var duaratusR = Math.floor(num / 100000)
		num %= 100000
		return result +=word[duaratusR] + ' juta '+ numberInWords(num)
	}

	if (num >= 200000 && num < 1000000){
		var duaratusR = Math.floor(num / 1000000)
		num %= 100000
		return result +=word[duaratusR] + ' juta '+ numberInWords(num)
	}

	if (num >= 1000000 && num <= 999999999){
		var duaratusR = Math.floor(num / 1000000)
		num %= 1000000
		return result +=word[duaratusR] + ' juta '+ numberInWords(num)
	}

	if (num >= 1000000000 && num <= 999999999999){
		var duaratusR = Math.floor(num / 1000000000)
		num %= 1000000000
		return result +=word[duaratusR] + ' juta '+ numberInWords(num)
	}

	if (num >= 1000000000000 && num <= 999999999999999){
		var duaratusR = Math.floor(num / 1000000000000)
		num %= 1000000000000
		return result +=word[duaratusR] + ' juta '+ numberInWords(num)
	}



}

// console.log(numberInWords(121))
console.log(numberInWords(19))
// console.log(numberInWords(1111111))
console.log(numberInWords(102))
