// program to check leap year or not
function checkLeapYear(year) {

/*  Three conditions to find out the leap year
    Return true if year is a multiple
    of 4 and not multiple of 100.
    OR year is multiple of 400.*/
   if((year % 400 == 0) || (year % 100 != 0) && (year % 4 == 0)) {
     return true;
   } else {
     return false;
   }
}

//variable declaration and function calling
let year = 2020;
console.log( checkLeapYear(year));

