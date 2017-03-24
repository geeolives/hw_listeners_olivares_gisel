var topHeading = document.getElementByID('topHeading');

topHeading.addEventListener('click', function () {
    var p = document.createElement('p');
    p.innnerHTML = 'This is click number ' + i++;
    document.body.appendChild(p);
});
