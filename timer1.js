/*
Alarm clock / timer which will beep after a specified amount of time has passed. 
The user can specify an unlimited number of alarms using command line arguments
Example:
  node timer1.js 10 3 5 15 9 
  beeps at 3 seconds, 5 seconds, 9 seconds, 10 seconds, 15 seconds


  No numbers are provided: not beep at all, end immediately
  An input is a negative number: Ignore/skip
  An input is not a number: Ignore/skip

  I also added a print out of the numer that is being counted, as I find that useful
*/

//  get input values and splice removes unuseful data
const time = process.argv.splice(2);

//  loop throught timer values
for (let i = 0; i < time.length; i++) {
  //  check if value is a positive number
  if (time[i] > 0 && !isNaN(time[i])) {
    setTimeout(() => {
      //  timer beep output
      process.stdout.write('\x07');
      //  current timer ouput
      process.stdout.write(`\r${Number(time[i])}   `);
  
    }, time[i] * 1000);
  }
  
}
/*  Notes:
          - !isNaN() to check if number (done)
          - using Number(time[i]) to force number at write (done)
          - could make the entire if statement contents into a function and call that
          - should refactor the for loop into for-each
*/
