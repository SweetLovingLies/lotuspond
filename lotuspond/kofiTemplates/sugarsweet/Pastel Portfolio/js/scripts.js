
/* 🌸 ----------------------------------------------------------------------------------
    ~ You can mainly ignore this file (unless you want to try your hand at some fun stuff!), but if you're curious what it does:
    ~ The hoverlinks are the links to your social media, at the bottom! This code is what allows the background  of the social media icon to change when you hover over the button. It's purely cosmetic, but it's fun!

----------------------------------------------------------------------------------- 🌸 */

Fancybox.bind("[data-fancybox]", {}); // Lightbox setup!

const hoverLinks = document.querySelectorAll('.listLink');

hoverLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        const parent = link.closest('li');
        const icon = parent.querySelector('iconify-icon');
        icon.style.backgroundColor = 'var(--blue)';
    });

    link.addEventListener('mouseleave', () => {
        const parent = link.closest('li');
        const icon = parent.querySelector('iconify-icon');
        icon.style.backgroundColor = 'var(--lavender)';
    });
});

