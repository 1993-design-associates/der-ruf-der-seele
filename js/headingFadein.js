import anime from "animejs";

const headingFadeIn = () => {
    //console.log("Initializing headingFadeIn...");

    // Process each .h2-display independently
    document.querySelectorAll('.h2-display').forEach(el => {
        console.log(`Processing element:`, el);

        // Break text into spans
        el.innerHTML = [...el.textContent]
            .map(char => `<span${char === ' ' ? ' class="space"' : ''} style="opacity: 0;">${char}</span>`)
            .join('');

        // Create an animation for the spans
        const animation = anime({
            targets: el.querySelectorAll('span'),
            opacity: [0, 1],
            easing: 'easeInOutCubic',
            autoplay: false,
            duration: 2000,
        });

        // Add scroll listener for this element
        const onScroll = () => {
            const rect = el.getBoundingClientRect();
            const scrollPercent = Math.min(Math.max((window.innerHeight - rect.top) / rect.height, 0), 1);
            animation.seek(scrollPercent * animation.duration);
        };

        window.addEventListener('scroll', onScroll);
        onScroll(); // Trigger initial check in case the element is already in view
    });
};

export default headingFadeIn;
