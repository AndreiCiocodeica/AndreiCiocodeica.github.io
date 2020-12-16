const menu = document.querySelector('.menu');
const navBar = document.querySelector('.nav');
const navOpen = document.querySelector('.hamburger');
const navClose = document.querySelector('.close');
const navHeight = navBar.getBoundingClientRect().height;
const navLeft = menu.getBoundingClientRect().left;
const links = [...document.querySelectorAll('.scroll-link')];

// add event on hamburger icon
navOpen.addEventListener('click', () => {
    if (navLeft < 0) {
        menu.classList.add('show');
        document.body.classList.add('show');
        navBar.classList.add('show');
    }
});

// add event on close icon
navClose.addEventListener('click', () => {
    if (navLeft < 0) {
        menu.classList.remove('show');
        document.body.classList.remove('show');
        navBar.classList.remove('show');
    }
});

// Fix Nav when start scrolling
window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > navHeight) {
        navBar.classList.add('fix-nav');
    }
    else {
        navBar.classList.remove('fix-nav');
    }
});

// Scroll to (for tablets and phones) - when clicked on any links, remove class 'show' and go to #link
links.map((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = e.target.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        let position = el.offsetTop - navHeight;

        window.scrollTo({
            top: position,
            left: 0
        });

        navBar.classList.remove('show');
        menu.classList.remove('show');
        document.body.classList.remove('show');
    });
});

// typeit animation text1
new TypeIt('#type-1', {
    speed: 120,
    loop: true,
    waitUntilVisible: true
})
    .type('Designer', { delay: 400 })
    .pause(500)
    .delete(9)
    .type('Developer', { delay: 400 })
    .pause(500)
    .delete(9)
    .go();

// typeit animation text2
new TypeIt('#type-2', {
    speed: 120,
    loop: true,
    waitUntilVisible: true
})
    .type('Designer', { delay: 400 })
    .pause(500)
    .delete(9)
    .type('Developer', { delay: 400 })
    .pause(500)
    .delete(9)
    .go();

// GSAP - animations
gsap.from('.logo', { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from('.hamburger', { opacity: 0, duration: 1, delay: 1, y: 20 });
gsap.from('.banner', { opacity: 0, duration: 1, delay: 1.5, y: -200 });
gsap.from('.hero h3', { opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from('.hero h1', { opacity: 0, duration: 1, delay: 2.5, y: -45 });
gsap.from('.hero h4', { opacity: 0, duration: 1, delay: 3, y: -30 });
gsap.from('.hero a', { opacity: 0, duration: 1, delay: 3.5, y: 50 });
gsap.from('.nav-item', { opacity: 0, duration: 1, delay: 1.2, y: 30, stagger: 0.2 });
gsap.from('.icons a', { opacity: 0, duration: 1, delay: 4, x: -30, stagger: 0.2 });

// GlideJS - slider animation
const glide = document.querySelector(".glide");
if (glide)
    new Glide(glide, {
        type: "carousel",
        startAt: 0,
        perView: 3,
        gap: 30,
        hoverpause: true,
        autoplay: 2000,
        animationDuration: 800,
        animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
        breakpoints: {
            996: {
                perView: 2,
            },
            768: {
                perView: 1,
            },
        },
    }).mount();

// AOS - different animations when scrolling
AOS.init();