import anime from "animejs";

const headingFadeIn = () => {

    const target = document.querySelector('.h2-display');
    const text = target.textContent;
    const letters = text.split('').map(letter => {
        return `<span class="letter" style="display: inline-block; opacity: 0; filter: blur(10px);">${letter}</span>`;
    }).join('');
    target.innerHTML = letters;
}
export default headingFadeIn;