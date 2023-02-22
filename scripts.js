function convertToRoman(num) {
    let checker = num;
    let numeral = '';
    while (checker > 0) {
      //console.log(checker);
      if (checker >= 1000) {
        checker -= 1000;
        numeral = numeral + 'M';
      } else if (1000 > checker && checker >= 900) {
        checker -= 900;
        numeral = numeral + 'CM';
      } else if (900 > checker && checker >= 500) {
        checker -= 500;
        numeral = numeral + 'D';
      } else if (500 > checker && checker >= 400) {
        checker -= 400;
        numeral = numeral + 'CD';
      } else if (400 > checker && checker >= 100) {
        checker -= 100;
        numeral = numeral + 'C';
      } else if (100 > checker && checker >= 90) {
        checker -= 90;
        numeral = numeral + 'XC';
      } else if (90 > checker && checker >= 50) {
        checker -= 50;
        numeral = numeral + 'L';
      } else if (50 > checker && checker >= 40) {
        checker -= 40;
        numeral = numeral + 'XL';
      } else if (40 > checker && checker >= 10) {
        checker -= 10;
        numeral = numeral + 'X';
      } else if (10 > checker && checker >= 9) {
        checker -= 9;
        numeral = numeral + 'IX';
      } else if (9 > checker && checker >= 5) {
        checker -= 5;
        numeral = numeral + 'V';
      } else if (5 > checker && checker >= 4) {
        checker -= 4;
        numeral = numeral + 'IV';
      } else if (4 > checker && checker >= 1) {
        checker -= 1;
        numeral = numeral + 'I'; 
      };
    };
    console.log(numeral);
    return numeral;
  };
  
  convertToRoman(36);
  convertToRoman(45)