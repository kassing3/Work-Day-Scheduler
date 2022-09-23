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
    var timeBlockRowEl = $("<section>").addClass("row");
    
    //Create Time Element
    var timeEl = $("<h5>").addClass("col-2 hour").text(hours[i]);
    
    //Create Textarea
    var eventInputEl = $("<textarea>").addClass("col-8 description");
    eventInputEl.attr("id", hours[i])

    if (eventValues[i]){
      eventInputEl.value = eventValues[i];
    }
    
    if (currentTime < hourKeys[i]) {
      eventInputEl.addClass("future")
    } else if ( currentTime > hourKeys[i]){
      eventInputEl.addClass("past")
    } else {
      eventInputEl.addClass("present");
    };

    //Create Save Btn
    var saveBtnEl = $("<button>").addClass("col-2 btn btn-primary saveBtn").text("SAVE");
    
    // Append Elements
    timeBlockRowEl.append(
     timeEl,
     eventInputEl,
     saveBtnEl
    );
    container.append(timeBlockRowEl);

      
  };
};



function showEvent() {
  if (JSON.parse(localStorage.getItem("tasks"))) {
    eventValues = JSON.parse(localStorage.getItem("tasks"));
  }
};



displayEventRows();


saveBtn.on("click", function(){
  var tasks = []
  for (var i=0; i < hourKeys.length; i++) {
    tasks.push(document.getElementsByClassName(".saveBtn")[i].value);
  }

  eventValues = tasks;
  localStorage.setItem("tasks", JSON.stringify(eventValues));
})
