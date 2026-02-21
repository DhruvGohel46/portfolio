/* ===================================================
   Dhruv Gohel Portfolio — Script
   Animations: GSAP + IntersectionObserver
   =================================================== */

gsap.registerPlugin(ScrollTrigger);

/* ---- 1. Navbar: transparent → frosted on scroll ---- */
window.addEventListener('scroll', () => {
    document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ---- 2. Hero reveal ---- */
const heroTL = gsap.timeline({ delay: 0.2 });

heroTL
    .to('.hero-title .reveal-text', {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.18,
        ease: 'power3.out',
    })
    .to('.hero-subtitle', { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, '-=0.4')
    .to('.hero-badges', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3')
    .to('.hero-ctas', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3');

/* ---- 3. Smooth scroll for nav links ---- */
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        const target = document.querySelector(link.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

/* ---- 4. Skill bars — fill on scroll enter ---- */
const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    const io = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();

        // Reveal skill category cards
        gsap.to('.skill-category', {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
        });

        // Animate progress bars
        document.querySelectorAll('.skill-progress').forEach(bar => {
            const target = bar.getAttribute('data-width') + '%';
            gsap.to(bar, { width: target, duration: 1.4, delay: 0.3, ease: 'power2.out' });
        });

        // Update percentage text live (optional bonus)
        document.querySelectorAll('.skill-item').forEach(item => {
            const pct = item.querySelector('.skill-progress')?.getAttribute('data-width');
            const pctEl = item.querySelector('.skill-pct');
            if (pct && pctEl) pctEl.textContent = pct + '%';
        });

    }, { threshold: 0.2 });
    io.observe(skillsSection);
}

/* ---- 5. Project cards — stagger fade-up ---- */
const projectCards = document.querySelectorAll('.project-card');
if (projectCards.length) {
    const io = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        gsap.to('.project-card', {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power2.out',
        });
    }, { threshold: 0.1 });
    io.observe(document.querySelector('.projects'));
}

/* ---- 6. About section ---- */
const aboutSection = document.querySelector('.about');
if (aboutSection) {
    const io = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        gsap.to('.about-inner > *', {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.2,
            ease: 'power2.out',
        });
        gsap.set('.about-inner > *', { opacity: 0, y: 30 });
        gsap.to('.about-inner > *', {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.18,
            ease: 'power2.out',
        });
        gsap.to('.timeline-item', {
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: 0.3,
            ease: 'power2.out',
        });
    }, { threshold: 0.15 });
    io.observe(aboutSection);
}

/* ---- 7. Achievements timeline ---- */
const achievementsSection = document.querySelector('.achievements');
if (achievementsSection) {
    const io = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        gsap.to('.achievements .timeline-item', {
            opacity: 1,
            x: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power2.out',
        });
    }, { threshold: 0.15 });
    io.observe(achievementsSection);
}

/* ---- 8. Contact items ---- */
const contactSection = document.querySelector('.contact');
if (contactSection) {
    const io = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        gsap.to('.contact-item', {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
        });
    }, { threshold: 0.2 });
    io.observe(contactSection);
}

/* ---- 9. Section titles batch reveal ---- */
ScrollTrigger.batch('.section-title', {
    onEnter: els => gsap.from(els, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
    }),
});

/* ---- 10. Hero scroll parallax ---- */
ScrollTrigger.create({
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: 1.2,
    onUpdate: self => {
        gsap.set('.hero-content', {
            y: self.progress * 120,
            opacity: 1 - self.progress * 0.6,
        });
    },
});

/* ---- 11. Responsive refresh ---- */
window.addEventListener('resize', () => ScrollTrigger.refresh(), { passive: true });
