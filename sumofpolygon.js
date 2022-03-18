/* Function to return the sum of internal
   angles of an n-sided polygon
   sum of polygon angles - many angles */
function sumOfInternalAngles(noofsides)     
{
    //A plane figure having a minimum of three sides
    if (noofsides < 3) {
        return 0;
    }
    return ((noofsides - 2) * 180);
}

//varaiable declaration and function calling
let noofsides = 4;
let degrees = sumOfInternalAngles(noofsides);

// Printing the output to screen
console.log("Sum of Internal angles in a Polygon =", degrees + " degrees ");
