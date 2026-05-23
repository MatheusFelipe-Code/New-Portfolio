
const skillBars = document.querySelectorAll('.skill-progress');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const finalWidth = entry.target.parentElement.previousElementSibling.lastElementChild.innerText;
            entry.target.style.width= finalWidth;
        } else {
            entry.target.style.width = '0';
        }
    });
}, {threshold: 0.5});

skillBars.forEach(bar => {
    observer.observe(bar);
});

document.querySelectorAll('a[hrefhref^="#"').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});