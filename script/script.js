
const header = document.querySelector(".navbar")

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

// Muutetaan navbarin avautumisliike
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.getElementById('navmenu');

navbarToggler.addEventListener('click', () => {
    navbarCollapse.classList.toggle('show');
});