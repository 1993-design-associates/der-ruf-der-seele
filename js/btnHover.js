import anime from "animejs";

const btnHover = () => {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        const btnRel = button.querySelector('.btn-text-top');
        const btnAbs = button.querySelector('.btn-text-back');

        if (btnRel && btnAbs) {
            // Preprocess: Split text into spans
            const splitText = text => text.split('').map(letter => `<span class="letter">${letter}</span>`).join('');
            btnRel.innerHTML = splitText(btnRel.textContent);
            btnAbs.innerHTML = splitText(btnAbs.textContent);

            const relLetterSpans = btnRel.querySelectorAll('.letter');
            const absLetterSpans = btnAbs.querySelectorAll('.letter');

            // Define hover animations
            const animateLetters = (targets, from, to, delayDir = 'normal') => anime({
                targets,
                translateY: [from, to],
                delay: anime.stagger(50, { direction: delayDir }),
                duration: 400,
                easing: 'easeInOutQuad'
            });

            // On hover (mouseenter), animate the text
            button.addEventListener('mouseenter', () => {
                animateLetters(relLetterSpans, '0%', '-100%');
                animateLetters(absLetterSpans, '0%', '-100%');
            });

            // On hover off (mouseleave), reset positions instantly
            button.addEventListener('mouseleave', () => {
                relLetterSpans.forEach(span => (span.style.transform = 'translateY(0%)'));
                absLetterSpans.forEach(span => (span.style.transform = 'translateY(100%)'));
            });
        }
    });
};

export default btnHover;
