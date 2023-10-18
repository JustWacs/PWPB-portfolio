const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if(window.document.documentElement.scrollTop > 100) {
        navbar.classList.add('nav-shadow');
    }else{
        navbar.classList.remove('nav-shadow');
    }
});