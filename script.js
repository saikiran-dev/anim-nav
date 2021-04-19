const burger = document.querySelector('.menu-button')
const icons = document.querySelectorAll('.material-icons')
const texts = document.querySelectorAll('.menu-item-text')
const ul = document.getElementsByTagName("ul");
burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    icons.forEach((icon) => {
        icon.classList.toggle('link')
    })
    texts.forEach((icon) => {
        icon.classList.toggle('link')
    })
    if(burger.classList['value'].includes('active')) {
        ul[0].style.height = '255px'
    }else{
        ul[0].style.height = '50px'
    }
})
