/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr=ScrollReveal({
    distance:"60px",
    duration:2000,
    delay:100
});

sr.reveal(`.contact-headline,.projects-headline`,{delay:500,});
sr.reveal(`.nav,.footer-home,.footer-social,.skills-item,.projects-item`,{origin:"top",interval:100});
sr.reveal(`.contact-description,.contact-form`,{origin:"left",interval:100});
sr.reveal(`.hero-image`,{origin:"top"});
sr.reveal(`.hero-text`);

