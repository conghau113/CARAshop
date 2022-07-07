const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const closeMenu = document.getElementById('close-menu')
const overlay = document.getElementById('overlay')

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
        overlay.classList.add('show')
    })
}

if(closeMenu){
    closeMenu.addEventListener('click', ()=>{
        nav.classList.remove('active')
        overlay.classList.remove('show')
    })
}
if(overlay){
    overlay.addEventListener('click', ()=>{
        overlay.classList.remove('show')
        nav.classList.remove('active');

    })
}

// change image single product

const mainImage = document.getElementById("MainImg")
const smallImage = document.getElementsByClassName("small-img")
smallImage[0].onclick = () => {
    mainImage.src = smallImage[0].src
}
smallImage[1].onclick = () => {
    mainImage.src = smallImage[1].src
}
smallImage[2].onclick = () => {
    mainImage.src = smallImage[2].src
}
smallImage[3].onclick = () => {
    mainImage.src = smallImage[3].src
}
