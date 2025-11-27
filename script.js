// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Hero text reveal animation
const tl = gsap.timeline();

tl.to('.reveal-text', {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.3,
    ease: 'power2.out'
});

// Skills animation
gsap.set('.skill-item', { opacity: 0, x: -50 });

ScrollTrigger.create({
    trigger: '.skills',
    start: 'top 70%',
    onEnter: () => {
        gsap.to('.skill-item', {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out'
        });
        
        // Animate skill bars
        document.querySelectorAll('.skill-progress').forEach((bar) => {
            const width = bar.getAttribute('data-width');
            gsap.to(bar, {
                width: width + '%',
                duration: 1.5,
                delay: 0.5,
                ease: 'power2.out'
            });
        });
    }
});

// Projects stacking animation
const projectCards = document.querySelectorAll('.project-card');
let currentProject = 0;

// Initialize first project as active
if (projectCards.length > 0) {
    projectCards[0].classList.add('active');
}

ScrollTrigger.create({
    trigger: '.projects',
    start: 'top 50%',
    end: 'bottom 20%',
    scrub: 1,
    onUpdate: (self) => {
        const progress = self.progress;
        const newProject = Math.floor(progress * (projectCards.length - 1));
        
        if (newProject !== currentProject && newProject < projectCards.length) {
            // Remove active class from all cards
            projectCards.forEach(card => card.classList.remove('active'));
            
            // Add active class to current card
            projectCards[newProject].classList.add('active');
            
            // Stack previous cards
            for (let i = 0; i <= newProject; i++) {
                gsap.set(projectCards[i], {
                    y: i * 20,
                    scale: 1 - (i * 0.05),
                    zIndex: projectCards.length - i
                });
            }
            
            currentProject = newProject;
        }
    }
});

// Timeline animation
gsap.set('.timeline-item', { opacity: 0, x: -50 });

ScrollTrigger.create({
    trigger: '.timeline',
    start: 'top 70%',
    onEnter: () => {
        gsap.to('.timeline-item', {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out'
        });
    }
});

// About section animation
gsap.set('.about-content > *', { opacity: 0, y: 50 });

ScrollTrigger.create({
    trigger: '.about',
    start: 'top 70%',
    onEnter: () => {
        gsap.to('.about-content > *', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out'
        });
    }
});

// Contact section animation
gsap.set('.contact-item', { opacity: 0, y: 50 });

ScrollTrigger.create({
    trigger: '.contact',
    start: 'top 70%',
    onEnter: () => {
        gsap.to('.contact-item', {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out'
        });
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 1,
                scrollTo: { y: target, offsetY: 80 },
                ease: 'power2.inOut'
            });
        }
    });
});

// Navbar background on scroll
ScrollTrigger.create({
    start: 'top -80',
    end: 99999,
    toggleClass: { className: 'scrolled', targets: '.navbar' }
});

// Add CSS for scrolled navbar
const style = document.createElement('style');
style.textContent = `
    .navbar.scrolled {
        background: rgba(255, 255, 255, 0.98);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }
`;
document.head.appendChild(style);

// Parallax effect for hero section
ScrollTrigger.create({
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: 1,
    onUpdate: (self) => {
        const progress = self.progress;
        gsap.set('.hero-content', {
            y: progress * 200,
            opacity: 1 - progress * 0.5
        });
    }
});

// Add scroll-triggered class animations
ScrollTrigger.batch('.section-title', {
    onEnter: (elements) => {
        gsap.from(elements, {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.1,
            ease: 'power2.out'
        });
    }
});

// Refresh ScrollTrigger on window resize
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});
