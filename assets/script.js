let currentDay = moment().format("dddd MMMM Do YYYY");
$("#currentDay").text(currentDay);
let hourText = [
    "9:00am",
    "10:00am",
    "11:00am",
    "12:00pm",
    "1:00pm",
    "2:00pm",
    "3:00pm",
    "4:00pm",
    "5:00pm"
];

const blockSetup = () => {
    for (let i = 0; i < hourText.length; i++) {
        let timeBlockRow = $("<div>");
        let hourCol = $("<div>");
        let textCol = $("<div>");
        let saveCol = $("<div>");
        let hourBlock = $("<div>");
        let p = $("<p>");
        let textBlock = $("<textarea>");
        let saveBtn = $("<button>");
        let hourValue = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
        
    };
};
