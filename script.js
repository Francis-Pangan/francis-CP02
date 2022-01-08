
//Francis: Note to Dev Academy facilitators- code is taken from self study completed in my own time.
//------------------------FOR LOOP-----------------------
const log = console.log;

//new array
const francis = [
    `Francis`,
    `Pangan`,
     2021-1985,
    `membership advisor`,
    [`painting miniatures`, `reading fiction books`, `watching movies`],
    true
 ];
 
 //second, empty array created
 const types=[];
 

//using a FOR LOOP to go through each of francis array's properties.
 // i initialises at 0; i loops for as long as it is less than the length of francis ; add 1 every time the loop ends.
 for (let i=0; i < francis.length; i++) { 
   log (francis[i], typeof francis[i]);   //loop console.logs each iterator of the francis array, and prints out the typeof each array's value.
   types[i] = typeof francis[i];          // types.push(typeof francis [i]);
 }
 log (types);
 
//---------------LOOP 2nd example-----------
log (`\n new example`)

//  second situation  - reusing Array code to loop through years Array, calculate the ages and store into a new ages Array
 const years = [1991, 2007, 1969, 1986, 2018];
 const ages = [];
 
 for (let i=0; i < years.length; i++) {
   ages.push (2021 - years[i]);  //PUSH the outcome into the ages array
 }
 
 log (`The ages of people born in ${years} is \n ${ages}`);