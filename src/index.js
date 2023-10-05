import './index.html';
import './index.scss';
import "bootstrap";
import swiper from './js/swiper';
import { changeLanguage } from './js/translation'

document.addEventListener('DOMContentLoaded', () => {
    changeLanguage();
})