document.addEventListener("DOMContentLoaded", function () {
    const quote = document.querySelector('.quote');
    const aboutSection = document.querySelector('#about');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        // Show quote after scrolling a bit
        if (scrollPosition > 200) {
            quote.classList.add('show');
        }

        // Show about section with fade in transition after scrolling more
        if (scrollPosition > (aboutSection.offsetTop - window.innerHeight / 2)) {
            aboutSection.classList.remove('hide');
            aboutSection.classList.add('show');
        }
    });
});
