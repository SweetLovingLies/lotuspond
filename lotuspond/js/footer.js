document.addEventListener('DOMContentLoaded', function () {
    const footer = document.querySelector('.footer-hidden');
    
    function toggleFooter() {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;
        const clientHeight = window.innerHeight;

        if (scrollHeight <= clientHeight || scrollTop + clientHeight >= scrollHeight - 50) {
            footer.classList.add('footer-visible');
        } else {
            footer.classList.remove('footer-visible');
        }
    }

    toggleFooter();

    window.addEventListener('scroll', toggleFooter);

    window.addEventListener('resize', toggleFooter);
});