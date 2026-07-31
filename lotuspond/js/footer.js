document.addEventListener('DOMContentLoaded', function () {
    const footer = document.querySelector('.footer-hidden');

    const checkFooterVisibility = function () {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const clientHeight = window.innerHeight;

        if (scrollTop + clientHeight >= scrollHeight - 50) {
            footer.classList.add('footer-visible');
        } else {
            footer.classList.remove('footer-visible');
        }
    };

    window.addEventListener('scroll', checkFooterVisibility);
    window.addEventListener('resize', checkFooterVisibility);

    // ? Re-check whenever the page's rendered height actually changes, for any
    // ? reason (images finishing load, Portfolio's tab switching, fonts
    // ? reflowing, etc.) instead of only on scroll!
    if ('ResizeObserver' in window) {
        new ResizeObserver(checkFooterVisibility).observe(document.body);
    } else {
        window.addEventListener('load', checkFooterVisibility);
    }
});