// save reference to important DOM elements
var currentDayEl = $("#currentDay")
var currentTimeEl = $("#currentTime")
var timeBlock = $(".time-block")
var textArea = $(".description")
var saveBtn = $(".saveBtn")
var container = $(".container")

// save current time
var currentDay = moment().format("MMMM DD, YYYY [at] hh:mm A")
var currentTime = moment().format("HH")


var hours = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM"
]

var hourKeys = [
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17"
]

var eventValues = []


//Adding Current Date to DOM
currentDayEl.text(currentDay);


// Dynamically create time-blocks

function displayEventRows() {

  showEvent();

  for ( var i = 0; i < hours.length; i++) {
      //Create Time-block Row
    var timeBlockRowEl = $("<section>").addClass("row time-block");
    
    //Create Time Element
    var timeEl = $("<h5>").addClass("col-2 hour").text(hours[i]);
    
    //Create Textarea
    var eventInputEl = $("<textarea>").addClass("col-8 description");
    eventInputEl.attr("id", hourKeys.indexOf(hourKeys[i]));

   //Pull from array as a value if there's an event tied to the index

    if (eventValues[i]){
      eventInputEl.val(eventValues[i]);
    };
    
     
   //Change color of time-blocks based on time
    if (currentTime < hourKeys[i]) {
      eventInputEl.addClass("future")
    } else if ( currentTime > hourKeys[i]){
      eventInputEl.addClass("past")
    } else {
      eventInputEl.addClass("present");
    };

    //Create Save Btn
    var saveBtnEl = $("<button>").addClass("col-2 btn btn-primary saveBtn").text("SAVE");
    saveBtnEl.attr("type", "button");
    
    // Append Elements
    timeBlockRowEl.append(
     timeEl,
     eventInputEl,
     saveBtnEl
    );
    container.append(timeBlockRowEl);

      
  };
};

//Dynamically display page
displayEventRows();

//Save button function

$("button").click(function(){

  var event = [];
  for (var i = 0; i < hourKeys.length; i++){
    event.push(document.getElementsByTagName("textarea")[i].value);
  }
  eventValues = event;
  localStorage.setItem("event", JSON.stringify(eventValues));  

  alert("Event Saved!");  
});

//Pull from local storage to show saved events if events are stored

function showEvent() {
  if(JSON.parse(localStorage.getItem("event"))){
    eventValues = JSON.parse(localStorage.getItem("event")); 
  };
    

};