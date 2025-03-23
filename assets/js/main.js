/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact__message');

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q7as85a', 'template_f0c8pnu', '#contact-form', 'uX0Pd2II95kVQtUUO')
    .then(() => {
        contactMessage.textContent = 'Message sent successfully ✅';

        setTimeout(() => {
            contactMessage.textContent = '';
        }, 5000);

        contactForm.reset();
    }).catch((error) => {
        console.error('Email sending error:', error);
        contactMessage.textContent = 'Failed to send message ❌';
    });
};

contactForm.addEventListener('submit', sendEmail);



/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    if (window.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
};
window.addEventListener('scroll', scrollUp);


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector('.nav__list a[href*="' + sectionId + '"]');

        if (sectionsClass) { // Pastikan elemen ditemukan sebelum menambahkan atau menghapus class
            if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link');
            } else {
                sectionsClass.classList.remove('active-link');
            }
        }
    });
};
window.addEventListener('scroll', scrollActive);


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
});

// Pastikan elemen dengan kelas ini ada di HTML agar animasi dapat berjalan
sr.reveal('.perfil, .contact__form');
sr.reveal('.info', { origin: 'left', delay: 800 });
sr.reveal('.skills', { origin: 'left', delay: 1000 });
sr.reveal('.about', { origin: 'right', delay: 1200 });
sr.reveal('.projects__card, .services__card, .experience__card', { interval: 100 });
