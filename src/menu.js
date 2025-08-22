function loadmenu() {
    const content = document.getElementById('content');
    content.innerHTML = ''; //this will clear previous content. 

    const heading = document.createElement('h2')
    heading.textContent = 'This is our Menu';
    content.appendChild(heading);
}
export default loadmenu; 