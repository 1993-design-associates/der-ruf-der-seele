import anime from "animejs";

const breakWordsAndFadeIn = () => {
    document.querySelectorAll('.word-break').forEach(el => {
        console.log(`Processing element:`, el);

        // Break text into words
        const words = el.textContent.split(' ').map(word => word.trim()).filter(word => word !== '');
        el.innerHTML = words
            .map(word => `<span class="word" style="opacity: 0; display: inline-block;">${word}</span>`)
            .join(' ');

        // Create an animation for the words
        const animation = anime({
            targets: el.querySelectorAll('.word'),
            opacity: [0, 1],
            autoplay: false,
            delay: anime.stagger(100, { start: 500 }), // Stagger fade-in for each word
            easing: 'easeOutQuad',
        });

        // Track if animation has been played
        let hasPlayed = false;

        // Get the offset percentage from the data attribute or default to 50%
        const offsetPercentage = parseFloat(el.dataset.offset) || 50;
        const offsetTrigger = window.innerHeight * (offsetPercentage / 100);

        // Add scroll listener for this element
        const onScroll = () => {
            const rect = el.getBoundingClientRect();

            // Check if the element's top is within the trigger range
            if (rect.top <= offsetTrigger && rect.bottom >= 0 && !hasPlayed) {
                animation.play();
                hasPlayed = true;
                window.removeEventListener('scroll', onScroll); // Remove listener after animation starts
            }
        };

        window.addEventListener('scroll', onScroll);
        onScroll(); // Trigger initial check in case the element is already in view
    });
};

export default breakWordsAndFadeIn;
