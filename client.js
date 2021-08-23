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