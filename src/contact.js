function loadcontact() {
    const content = document.getElementById('content');

    // content.innerHTML = ''; //this will clear previous content. 

    const heading = document.createElement('h2')
    heading.textContent = 'Kindly reach out to us- ';
    content.appendChild(heading);
}

export default loadcontact; 