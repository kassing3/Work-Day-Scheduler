// save reference to important DOM elements
var currentDayEl = $("#currentDay");



// handle displaying the time
var currentDay = moment().format('MMMM DD, YYYY [at] hh:mm A');
currentDayEl.text(currentDay);
  
