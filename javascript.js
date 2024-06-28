window.onload = function() {
  navstick();
};
window.onscroll = function() {
  navstick();
};

let navbar = document.getElementById("navbar");

let sticky = navbar.offsetTop;

function navstick() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const lazyLoadBg = () => {
        const element = document.getElementById('bigimg');
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const bgImage = element.getAttribute('data-src');
            element.style.backgroundImage = `url(${bgImage})`;
            window.removeEventListener('scroll', lazyLoadBg);
            window.removeEventListener('resize', lazyLoadBg);
        }
    };

    window.addEventListener('scroll', lazyLoadBg);
    window.addEventListener('resize', lazyLoadBg);
    lazyLoadBg();
});

function navigateToPage(url) {
    window.location.href = url;
}