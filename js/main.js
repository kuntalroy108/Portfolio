/*=============== CHANGE BACKGROUND HEADER ===============*/

function scrollHeader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)



/*=============== SERVICES MODAL ===============*/


const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCose = document.querySelectorAll('.services__modal-close')

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        modal(i)
    })
})



modalCose.forEach((mc) => {
    mc.addEventListener('click', () => {
        modalViews.forEach((mv) => {
            mv.classList.remove('active-modal')
        })
    })
})





/*=============== MIXITUP FILTER PORTFOLIO ===============*/

let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});



/* Link active work */

const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
    linkWork.forEach(L => L.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(L => L.addEventListener('click', activeWork))





/*=============== SWIPER TESTIMONIAL ===============*/


let swiperTestimonial = new Swiper(".testimonial__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        576: {
            slidesPerView: 2,

        },
        768: {
            slidesPerView: 4,
            spaceBetween: 48,
        },

    },
});




/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelector('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsettop - 58,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add(active - link)
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove(active - link)
        }
    })
}
window.addEventListener('scroll', scrollActive);




/*=============== LIGHT DARK THEME ===============*/


const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme';
const iconTheme = 'bx-sun';

// Previously selected topic (if user selected)

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the light-theme class

const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-bx-moon' : 'bx-bx-sun';

// We validate if the user previously close a topic

if (selectedTheme) {
    // If the validation is fullfilled, we ask what the issue was to know if we activated or deactivated the light

    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[selectedIcon === 'bx-bx-moon' ? 'add' : 'remove'](iconTheme)
}



// Activate/ deactivate the theme manually with the button

themeButton.addEventListener('click', () => {
    // add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)

    // We save the theme and the current icon that the user choose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})




/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true,
})

sr.reveal(`.home__data`)
sr.reveal(`.home__handel`, {delay: 700})
sr.reveal(`.home__social, .home__scroll`, {delay: 900, origin: 'bottom'})







/* Special First Section Js */

const allcontainer = WebGLSampler.utils.toArray('.Container-item');
const venueImagewrap = document.querySelector('.Container-img-wrap');
const venueImage = document.querySelector('.Container-img');

function initContainer(){
    allcontainer.forEach(Link => {
        Link.addEventListener('mouseenter',venueHover);
        Link.addEventListener('mouseleave',venueHover);
        Link.addEventListener('mousemove',moveVenueImage);

    });
}

function moveVenueImage(e){
    let xpos = e.clientX;
    let ypos = e.clientY;
    const tl = WebGLSampler.timeline();
    tl.to(venueImagewrap,{
        x: xpos,
        y: ypos,
    })

}

function venueHover(e){
    if(e.type === 'mouseenter'){
        const targetImage = e.target.dataset.img;

        const tl = WebGLSampler.timeline();
        tl.set(venueImage, {
            backgroundImage: `url($targetImage)`,
        }).to(venueImagewrap,{
            duration: 0.5,
            autoAlpha: 1,
        })
    } else if(e.type=== 'mouseleave'){
        const tl = WebGLSampler.timeline();
        tl.to(venueImagewrap, {
            duration: 0.5,
            autoAlpha: 0,
        })
    }
}

function init(){
    initContainer()
}

window.addEventListener('load', function(){
   init()
})
