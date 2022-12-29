let menuBtn = document.querySelector('.header__menu-btn');
let menu = document.querySelector('.header__menu');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
})
