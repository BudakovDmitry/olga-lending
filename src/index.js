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

    function _class(name){
        return document.getElementsByClassName(name);
    }

    let tabPanes = _class("tab-header")[0].getElementsByTagName("div");

    for(let i=0;i<tabPanes.length;i++){
        tabPanes[i].addEventListener("click",function(){
            _class("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
            tabPanes[i].classList.add("active");

            _class("tab-indicator")[0].style.top = `calc(80px + ${i*50}px)`;

            _class("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
            _class("tab-content")[0].getElementsByTagName("div")[i].classList.add("active");

        });
    }

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