//This is my first JavaScript event listener attached to a button that listens for a click on the "Try It" button so that when it hears the event the listener gives you the exact time of day.

document.getElementById('myButton').addEventListener('click', displayDate);

function displayDate() {
    document.getElementById('demo').innerHTML = Date();
}

var img = document.getElementById('robot');

//This is my second JavaScript event listener that listens for a mouseover the single image on my page. When the listener hears the event, the image changes to another of that of a unicorn gif.

img.addEventListener('mouseover', function () {
    if (img.src !== 'img/unicorn-loop.gif') {
        img.src = 'img/unicorn-loop.gif';
    }
});

//This is my third JavaScript event listener that listens for a click on the page. When the listener hears the event, the background color of the container changes.

document.addEventListener('click', function () {
    document.body.style.backgroundColor = '#228B22';
});
