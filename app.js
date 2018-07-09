function in_words(number) {
    return recursive(number, []);
}

function recursive(number, str) {

    let d = [
        { name: 'puluh', value: 10 },
        { name: 'ratus', value: 100 },
        { name: 'ribu', value: 1000 }
    ];

    if (number === 0) {
        return str.join(' ');
    }
    else if (number >= 10) {
        for (let i = d.length - 2; i >= 0; i--) {
            if (number < d[i + 1].value && number >= d[i].value) {
                let m = Math.floor(number / d[i].value);
                str.push(digitWord(m, number));
                str.push(d[i].name);
                return recursive(number - (m * d[i].value), str);
            }
        }
    }
    else {
        str.push(digitWord(number));
        return recursive(number - number, str);
    }
}

function digitWord(n, m) {
    switch (n) {
        case 1: {
            if(m > 1) {
                return 'se'
            }
            return 'satu';
        }
        case 2: return 'dua';
        case 3: return 'tiga';
        case 4: return 'empat';
        case 5: return 'lima';
        case 6: return 'enam';
        case 7: return 'tujuh';
        case 8: return 'delapan';
        case 9: return 'sembilan';
    }
}