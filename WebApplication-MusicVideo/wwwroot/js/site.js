// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.



const splitElement = document.querySelector('.overlap');
const str = splitElement.innerHTML;

const chars = str.split('');


// Remove the existing text so it can be replaced by the characters in spans
splitElement.innerHTML = '';
// Set up an aria-label so screen readers will still read out the whole string
splitElement.setAttribute('aria-label', str);

chars.forEach(function (item, index) {
    var c = document.createElement('span');
    // and give it some content 
    var letter = document.createTextNode(item);
    // add the text node to the newly created span
    c.appendChild(letter);
    // add the newly created element and its content into the DOM 
    splitElement.append(c);

    // add the letter to a data-content attribute so we can target it with CSS
    c.setAttribute('data-content', c.innerHTML);

    // Add aria-hidden to each character if the aria-label has been applied to the parent
    if (c.parentElement.getAttribute('aria-label')) {
        c.setAttribute('aria-hidden', true);
    }

});