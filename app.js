import contactTabClick from "/js/contactTabClick.js";
import formTab from "/js/formTab.js";
import preloaderAnime from "/js/preloader.js"
import smoothScroll from '/js/smoothScroll.js';
import btnHover from '/js/btnHover.js';


const parceled = true
const onReady = () => {
    preloaderAnime();
    contactTabClick();
    formTab();
    smoothScroll();
    btnHover();
}
const onLoading = () => {

}

if (document.readyState !== 'loading') {
   
    console.log('readystate')
} else {
    console.log('load')
    window.addEventListener('load', onReady)
    document.addEventListener('DOMContentLoaded', onLoading)
}

