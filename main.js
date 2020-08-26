// 엄격모드
'use strict';

// navbar의 엘리멘트 요소를 받아옴
const navbar = document.querySelector('#navbar');
// 브라우저에서 실제로 보여지는 navbar의 높이를 받아옴
const navbarHeight = navbar.getBoundingClientRect().height;


// Make navbar transport when it is on the top
document.addEventListener('scroll', () => {
    // scrollY 작동 확인
    // console.log(window.scrollY);
    // navbarHeight 작동 확인
    // console.log(`navbarHight: ${navbarHeight}`);


    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});