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

function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
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

let user = document.getElementById("Name");
let email = document.getElementById("Email");
let age = document.getElementById("Message");

function check() {   
  if (user.value !="" && email.value !="" && age.value !="") {

    alert("Kita akan Email balik dalam 2-6 Hari kerja terimakasih!")
      
  } else{
    alert("isikan semuanya");
  }
}