import contactTabClick from "/js/contactTabClick.js";
import formTab from "/js/formTab.js";
import preloaderAnime from "/js/preloader.js"

const parceled = true
const onReady = () => {
    contactTabClick();
    formTab();
    
}
const onLoading = () => {
    preloaderAnime();

}

if (document.readyState !== 'loading') {
   
    console.log('readystate')
} else {
    console.log('load')
    window.addEventListener('load', onReady)
    document.addEventListener('DOMContentLoaded', onLoading)
}

