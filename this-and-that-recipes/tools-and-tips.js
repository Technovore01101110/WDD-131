function tabhandler(){
    console.log('it works')
    this.classList.toggle('slide_active')
    let slide = this.nextElementSibling
   slide.classList.toggle('hidden');
}

function init(){
    console.log('it works')
    const tabs = document.querySelectorAll('.slide');
    tabs.forEach(button => {
        let slide = button.nextElementSibling;
        slide.classList.add('hidden');
        button.addEventListener('click', tabhandler)
    })
 
}

init();
