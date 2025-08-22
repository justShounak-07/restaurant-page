function loadhome() {
    const content = document.getElementById('content');
    // creating heading of the webpage. 
    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to Restaurant!';

    // adding image to the webpage by js- 
    const rest_image = document.createElement('img');
    rest_image.src = 'https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D';

    // styling the image- 
    rest_image.style.width = '600px';
    rest_image.style.height = 'auto';


    // appending the element to the container. 
    content.appendChild(heading);
    content.appendChild(rest_image);




}
export default loadhome; 