let menuToggle = document.querySelector('.menuToggle')
let nav = document.querySelector('.nav-list')

menuToggle.onclick = function() {
    menuToggle.classList.toggle('active')
    nav.classList.toggle('active')
}

function myFunction() {
    nav.classList.remove('active')
    menuToggle.classList.toggle('active')
}