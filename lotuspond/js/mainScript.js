// ! Adds a page delay for the fade-in animation

document.addEventListener("DOMContentLoaded", function () {
    const allLinks = document.querySelectorAll("a");

    allLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {

            if (link.hasAttribute("data-fancybox")) {
                return;
            }

            const url = link.getAttribute("href");

            if (!url || url.startsWith("#")) {
                return;
            }

            event.preventDefault();

            document.body.classList.add("fade-in");

            setTimeout(function () {
                window.location.href = url;
            }, 1000);
        });
    });
});
