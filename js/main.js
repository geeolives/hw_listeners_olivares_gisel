//This is my first JavaScript event listener attached to a button that listens for a click on the "Try It" button so that when it hears the event the listener gives you the exact time of day.//

document.getElementById('myButton').addEventListener('click', displayDate);

function displayDate() {
    document.getElementById('demo').innerHTML = Date();
}
