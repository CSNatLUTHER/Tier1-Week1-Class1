// vars/const review

//declare and initialize

const monthsPerYear = 12;
let daysInThisMonth = 31;
let currentDay = 23;
let currentMonth = 8;
let months = [ 'Jan','Feb','Mar','Apr','May','Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

console.log( 'This month is', months[currentMonth-1] );


// loop and conditionals review

// loop through the end of this month
for (let i=currentDay; i<= daysInThisMonth+1; i++){
    // start with currentDay & loop to the end of month
      // if past end of month, 
    if ( i > daysInThisMonth){
        //move to next month
        currentMonth++;
        // console log new month
        console.log( 'New month is:', months[currentMonth-1] );
    } // end if
    else{       // console.log out each day
      console.log( 'day:', i );
    }; // end else
}; // end of for loop


// functions and objects

// function next Month
function nextMonth(){
    //move to next month
    currentMonth++;
    //cycle back to Jan when moving beyond Dec
    if(currentMonth > months.length)
    currentMonth = 1;
    console.log( 'New month is:', months[currentMonth-1] );
} //end nextMonth

// run function
let i=0;
while( i < 8){
nextMonth();
i++;
}; // end while loop

function addTwoNumbers( num0, num1 ){
    return num0 + num1;
} // end addTwoNumber

console.log(addTwoNumbers( 3, 5 )); // should be 8

console.log(addTwoNumbers( '3', 5 )); // should be 35

console.log(addTwoNumbers( '3', true )); // should be '3true'

/*******************************
 * Notes technique!!!
 
 num0   num1    answer
  3      5       8
 '3'     5       35
 '3'    true    '3true'
 *************************/

function showAll( array ){
    // loop through array
    for (let i=0; i<array.length; i++ ){
        console.log( array[i]);
    } // end for
} // end showAll Function

showAll( months );

let matrix = {
    title: 'The Matrix',
    year: 1999,
    genres: [ 'sciFi', 'action', 'drama'],
    stars: [ 'Keanu Reeves', 'Lawrence Fishburne', 'Carrie-Anne Moss', 'Special Effects']
}

let starWars = {
    title: 'Star Wars',
    year: 1977,
    genres: [ 'sciFi', 'action', 'drama'],
    stars: [ 'Carrie Fischer', 'Harrison Ford', 'Mark Hammil', 'Special Effects']
}

function showMovieStars( movie ){
    // loop through this movie's stars array
    for(let i=0; i<movie.stars.length; i++){
        // console log out each star
        console.log( movie.stars[ i ]);
    }
} /// end showMovieStars
showMovieStars( matrix );
showMovieStars( starWars );
