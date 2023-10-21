const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');
const menuList = document.getElementById('menu-list');

menuToggle.addEventListener('click', () => {
    menuList.classList.toggle('hidden');
});



window.addEventListener('scroll', () => {
    if(window.document.documentElement.scrollTop > 100) {
        navbar.classList.add('nav-shadow');
    }else{
        navbar.classList.remove('nav-shadow');
    }
});