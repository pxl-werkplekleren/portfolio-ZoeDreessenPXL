document.addEventListener("DOMContentLoaded", () => {
    const headings = document.querySelectorAll("article h2");

    headings.forEach(h2 => {
        h2.addEventListener("click", () => {
            const content = h2.nextElementSibling;
            content.classList.toggle("hideElement");
        });
    });
});