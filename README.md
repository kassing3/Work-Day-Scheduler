# Work Day Scheduler

## Description

The purpose of this work day scheduler is to help busy employee better manage their time by having a daily planner where they can add and save events.

The biggest challenges I faced was formulating the most efficient code and methods to create elements for the page, as well as storing and retrieving the multiple events saved. For this daily planner, I used HTML, CSS, JavaScript, and third party APIs such as Bootstrap and jQuery to dynamically create the layout of the page, and save events to the local storage based on the following acceptance criteria.

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```
## Usage

Here is the [Deployed Application](https://kassing3.github.io/Work-Day-Scheduler/) to test out. In the textarea type an event(s), and hit the save button. When you refresh, your previously saved even(s) will load.


![Mock Up of App](./assets/images/Work%20Day%20Scheduler%20Mock%20Up.png)
    

