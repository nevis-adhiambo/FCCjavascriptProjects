/*
Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

*/
function rot13(str) {
  // LBH QVQ VG!
  var convertStr = [];
  var str1;
  for(i = 0; i < str.length; i++) {
   
   str1 = str.charCodeAt(i);
    if (str1 >= 65 && str1 <= 77 ) {
      convertStr.push(String.fromCharCode(str1 + 13));
      
    }
    else if (str1 >= 78 && str1 <= 90 ) {
      convertStr.push(String.fromCharCode(str1 - 13));
      
    }
    else  {
      convertStr.push(String.fromCharCode(str1));
      
      
    }
    
  }

  return convertStr.join("");
}