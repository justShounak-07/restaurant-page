console.log("Hello I am creating a project. ");

import loadhome from "./home.js";
// importing the menu - 
import loadmenu from "./menu.js";
// importing the contact- 
import loadcontact from "./contact.js";

// creating a function to clear the content area-
function clearcontent() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // this will clear everything from the content. 
}

// function to set up tab switching- 
function tabswitch() {
    const homebtn = document.getElementById('home');
    const menubtn = document.getElementById('menu');
    const contactbtn = document.getElementById('contact');

    // adding event listeners for all buttons- 
    // home button- 
    homebtn.addEventListener('click', () => {
        clearcontent();
        loadhome();
    });
    // menu button- 
    menubtn.addEventListener('click', () => {
        clearcontent();
        loadmenu();
    });
    // contact button- 
    contactbtn.addEventListener('click', () => {
        clearcontent();
        loadcontact();
    });
}
loadhome(); // when the page loads. 
tabswitch();

