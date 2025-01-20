import contactTabClick from "/js/contactTabClick.js";
import formTab from "/js/formTab.js";
import preloaderAnime from "/js/preloader.js"
import smoothScroll from '/js/smoothScroll.js';
import btnHover from '/js/btnHover.js';
import titleFadeIn from '/js/titleFadeIn.js';
import articleClick from '/js/articleClick.js';
import gradientHeight from '/js/gradientHeight.js';
import breakLinesAndFadeIn from '/js/breakLinesAndFadeIn.js';



const parceled = true;
const onReady = () => {
    preloaderAnime();
    contactTabClick();
    formTab();
    smoothScroll();
    btnHover();
    titleFadeIn();
    articleClick();
    breakLinesAndFadeIn();
}
const onLoading = () => {
    gradientHeight();

}

if (document.readyState !== 'loading') {
    
    console.log('readystate')
} else {
    console.log('load')
    window.addEventListener('load', onReady)
    document.addEventListener('DOMContentLoaded', onLoading)
}

