document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        console.log('Scrolling detected'); 
        const footer = document.querySelector('.footer-hidden');
        const scrollHeight = document.documentElement.scrollHeight; 
        const scrollTop = window.scrollY;
        const clientHeight = window.innerHeight;

        if (scrollTop + clientHeight >= scrollHeight - 50) {
            footer.classList.add('footer-visible');
            console.log('Footer visible'); 
        } else {
            footer.classList.remove('footer-visible');
            console.log('Footer hidden'); 
        }
    });
});