/*

Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/
function convertToRoman(num) {
    num = num.toString();
    
    var ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    var tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    var hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    var thousands = "M";

    // Creates a var for each decimal place
    var x = num[num.length - 1];
    var xx = num[num.length - 2];
    var xxx = num[num.length - 3];
    var xxxx = num.slice(0, -3);

    // Creates the roman for each decimal place
    var num1 = ones[x];
    var num2 = tens[xx];
    var num3 = hundreds[xxx];
    var num4 = thousands.repeat(Number(xxxx));

    switch (num.length) {
        case 1:
            num = num1;
            break;
        case 2:
            num = num2 + num1;
            break;
        case 3:
            num = num3 + num2 + num1;
            break;
        default:
            num = num4 + num3 + num2 + num1;
            break;
    }
    return num;
}

convertToRoman(494);