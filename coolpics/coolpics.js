const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("hide");

}

function handleResize(){
    const menu = document.querySelector(".menu")
    if (window.innerWidth > 1000){
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
 }
}

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
        </div>`;
  }

function closeViewer(){
    console.log('function working')
    const parent = event.target.closest('div');
    parent.remove();
}

function viewHandler(){
    const imgTarget = event.target;
    const image = imgTarget.src.split('-');
    //I adjusted this because of the site's name has a "-"
    const bigImage = image[0] + image[1] + '-full.jpeg';
    const html = viewerTemplate(bigImage, imgTarget.alt);
    document.body.insertAdjacentHTML("afterbegin", html);
    document.querySelector('.close-viewer').addEventListener('click', closeViewer);
}


handleResize();
menuButton.addEventListener('click', toggleMenu);
window.addEventListener('resize', handleResize);
document.querySelector('.gallery').addEventListener('click', viewHandler);