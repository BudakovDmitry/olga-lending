import './index.html';
import './index.scss';
import "bootstrap";
import swiper from './js/swiper';
import { changeLanguage } from './js/translation'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    startEvent: 'DOMContentLoaded',
});


document.addEventListener('DOMContentLoaded', () => {

    changeLanguage();

    //
    // const burgerMenu = document.querySelector('.js--burger_menu')
    //
    // burgerMenu.classList.remove('hided')
    //
    // document.addEventListener("scroll", (event) => {
    //     burgerMenu.classList.add('hided');
    //     console.log('scroll')
    // });
    // document.addEventListener("scrollend", (event) => {
    //     console.log('scrollend')
    //     burgerMenu.classList.remove('hided')
    // });
})