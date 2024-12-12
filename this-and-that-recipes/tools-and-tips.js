function tabhandler(){
    console.log('it works')
    this.classList.toggle('.slide_active')
   let slide = this.nextElementSibling;
   slide.classList.toggle('hidden');
}

function init(){
    const tabs = document.getElementsByClassName('.slide');
    for (let i = 0; i < tabs.length; i++){
        let tab = tabs[i].nextElementSibling.classList;
        tab.classList.add('hidden')
        tabs[i].addEventListener('click', tabhandler)
    }
 
}

init();
