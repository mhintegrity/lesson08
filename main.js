// Main JavaScript file used by index.html file //

// querySelector finds the first element that meets the CSS selector rule.
let getButton = document.querySelector('#hide');
// add a function to the click event on the selected button;
getButton.addEventListener('click', hideImage.bind());

// functions are blocks of code that are not run till they are called
function hideImage(event) {
    if (document.getElementById('hide').innerText === 'Hide the DOM image')
    {
        // Print a message inside the developer console.
        console.log("test Hide Image")
        // Like CSS we want to apply the display: none to our Image.
        document.getElementById('DOM').style.display = 'none';
        document.getElementById('hide').innerText = 'Show the DOM image'
    }
    else
    {
        document.getElementById('DOM').style.display = 'block';
        document.getElementById('hide').innerText = 'Hide the DOM image'
    }
}
