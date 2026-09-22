
// INITIAL VALUES


let taskCount = 6;
let points = 23;



// SELECT HTML ELEMENTS


const taskCountElement =
    document.getElementById("task-count");

const pointsElement =
    document.getElementById("points");

const activityLog =
    document.getElementById("activity-log");

const completeButtons =
    document.querySelectorAll(".complete-btn");



// COMPLETE TASK


completeButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Get the task name
        const taskName =
            button.getAttribute("data-task");


        // Decrease task count
        taskCount--;


        // Increase points
        points++;


        // Update task count
        taskCountElement.textContent =
            taskCount.toString().padStart(2, "0");


        // Update points
        pointsElement.textContent =
            points;


        // Disable the button
        button.disabled = true;


        // Get current time
        const currentTime =
            new Date().toLocaleTimeString();


        // Create activity message
        const message =
            `You have completed the task ${taskName} at ${currentTime}.`;


        // Create a new activity item
        const activityItem =
            document.createElement("div");


        // Add Tailwind classes
        activityItem.className =
            "bg-[#f2f2fa] p-2.5 mb-2.5 rounded-md text-[11px] leading-5";


        // Put message inside activity item
        activityItem.textContent = message;


        // Add activity to Activity Log
        activityLog.prepend(activityItem);


        // Show alert
        alert("Board Updated Successfully");

    });

});



// CLEAR HISTORY


const clearHistory =
    document.getElementById("clear-history");


clearHistory.addEventListener("click", function() {

    activityLog.innerHTML = "";

});



// DISCOVER SOMETHING NEW


const discoverButton =
    document.getElementById("discover-btn");


discoverButton.addEventListener("click", function() {

    window.location.href = "blog.html";

});



// THEME BUTTON


/*const themeButton =
    document.getElementById("theme-btn");


themeButton.addEventListener("click", function() {

    document.body.classList.toggle("bg-[#c5dbff]");

    document.body.classList.toggle("bg-gray-900");

    document.body.classList.toggle("text-white");

});
*/




// BACKGROUND COLOR CHANGE


const themeButton =
    document.getElementById("theme-btn");


// Different background colors
const backgroundColors = [
     "#c5dbff", // Blue
    "#87CEEB", // Sky Blue
    "#d1d5db", // Grey
    "#86efac", // Green
    "#fca5a5", // Red
    "#fde68a", // Yellow
    "#d8b4fe", // Purple
    "#f9a8d4", // Pink
    "#fdba74"  // Orange
];


// Start with first color
let colorIndex = 0;


themeButton.addEventListener("click", function() {

    // Move to next color
    colorIndex++;

    // If we reach the end, start again
    if (colorIndex >= backgroundColors.length) {
        colorIndex = 0;
    }

    // Change background color
    document.body.style.backgroundColor =
        backgroundColors[colorIndex];

});
