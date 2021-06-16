function decToBin(dec) {
    let bin = 0;
    let rem ,i = 1 ,step =1;
    while (dec != 0) {
        rem = dec % 2;
        console.log ( `Step ${step++}: ${dec}/2, Remainder = ${rem}, Quotient = ${parseInt(dec/2)}`);              
        dec = parseInt(dec / 2);
        bin = bin + rem * i;
        i = i * 10 ;
    }
console.log(`Binary: ${bin}`);
    }

let number = 9;
decToBin(number);
