// Javascript program to find area
// and perimeter of rectangle
 
/* function declaration
   In rectangle sides opposite to each other are equal in length
   length of opposite sides  */

function findPerimeter(length, width) {
    let perimeter = 2* (length + width);
    return perimeter;
}

//variable Declarations and Initializations
let length=2;
let width=3;

//function calling
let Result = findPerimeter( length, width );
console.log(" Perimeter of the Rectangle = ", Result);


