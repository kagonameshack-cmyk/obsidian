// REVEAL ANIMATION

const reveals =
document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {

    reveals.forEach(reveal => {

        const windowHeight =
        window.innerHeight;

        const revealTop =
        reveal.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            reveal.classList.add('active');

        }

    });

});


// PARALLAX EFFECT

const parallaxItems =
document.querySelectorAll('.parallax');

window.addEventListener('scroll', () => {

    let scrollY = window.scrollY;

    parallaxItems.forEach(item => {

        const speed = 0.08;

        item.style.transform =
        `translateY(${scrollY * speed}px)`;

    });

});


// IMAGE SCALE ON SCROLL

const cinematicImages =
document.querySelectorAll('.hero-image');

window.addEventListener('scroll', () => {

    let scroll =
    window.scrollY;

    cinematicImages.forEach(image => {

        image.style.transform =
        `scale(${1 + scroll * 0.00015})`;

    });

});
