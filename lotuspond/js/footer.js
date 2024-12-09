document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        const footer = document.querySelector('.footer-hidden');
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const clientHeight = window.innerHeight;

        if (scrollTop + clientHeight >= scrollHeight - 50) {
            footer.classList.add('footer-visible');
        } else {
            footer.classList.remove('footer-visible');
        }
    });
});