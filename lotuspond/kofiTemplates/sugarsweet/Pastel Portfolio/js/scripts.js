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

