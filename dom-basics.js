const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute('src','https://picsum.photos/200');
newImage.setAttribute('alt', 'random 200 pixel image');
document.body.appendChild(newImage);
//This puts a section, h2, and paragraph into the html.
const newSection = document.createElement('section');
const newHeading = document.createElement('h2');
newHeading.innerText = 'DOM Basics';
newSection.appendChild(newHeading);
const newP = document.createElement('p');
newP.innerText = 'This was added through Javascript';
newSection.appendChild(newP);
document.body.appendChild(newSection);
