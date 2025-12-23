import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Certifications from '../components/Certifications';
import Projects from '../components/Projects';
import Leadership from '../components/Leadership';
import Contact from '../components/Contact';

export default function Home() {
  useEffect(() => {
    const setupAnimations = async () => {
      try {
        const gsap = (await import('gsap')).default;
        const ScrollTrigger = (await import('gsap/dist/ScrollTrigger')).default;
        
        gsap.registerPlugin(ScrollTrigger);

        // Fade-up on scroll animations
        const fadeElements = document.querySelectorAll('.animate-fade-up');
        fadeElements.forEach((el, index) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              delay: index * 0.05,
              scrollTrigger: {
                trigger: el,
                start: 'top 80%',
                markers: false,
              },
            }
          );
        });

        // Parallax hero effect
        const hero = document.querySelector('#hero');
        if (hero) {
          gsap.to(hero, {
            scrollTrigger: {
              trigger: hero,
              start: 'top top',
              end: 'bottom top',
              scrub: 1,
            },
            y: -100,
          });
        }

        // Smooth scroll anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
              gsap.to(window, {
                duration: 0.8,
                scrollTo: target,
                ease: 'power2.inOut',
              });
            }
          });
        });

        // Navbar background toggle on scroll
        const navbar = document.querySelector('nav');
        if (navbar) {
          ScrollTrigger.create({
            onUpdate: self => {
              if (self.getVelocity() > 0) {
                navbar.style.background = self.getVelocity() > 0 ? 'rgba(15, 14, 30, 0.8)' : 'transparent';
              }
            },
          });

          window.addEventListener('scroll', () => {
            const scrolled = window.scrollY > 50;
            navbar.style.backdropFilter = scrolled ? 'blur(10px)' : 'blur(0px)';
            navbar.style.borderBottomColor = scrolled ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0)';
          });
        }

        // Skill bars animation
        const skillBars = document.querySelectorAll('.skill-bar');
        skillBars.forEach(bar => {
          const width = bar.getAttribute('data-width');
          gsap.fromTo(
            bar,
            { width: 0 },
            {
              width: width,
              duration: 1.5,
              scrollTrigger: {
                trigger: bar,
                start: 'top 80%',
                once: true,
              },
              ease: 'power2.out',
            }
          );
        });
      } catch (error) {
        console.log('GSAP animations not available:', error);
      }
    };

    setupAnimations();

    // Set footer year
    const yearElement = document.getElementById('y');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-semibold text-lg text-slate-100">Dhruv Gohel</div>
          <div className="hidden md:flex gap-8">
            <a href="#work" className="text-slate-300 hover:text-emerald-300 transition-colors text-sm font-medium">
              Work
            </a>
            <a href="#about" className="text-slate-300 hover:text-emerald-300 transition-colors text-sm font-medium">
              About
            </a>
            <a href="#contact" className="text-slate-300 hover:text-emerald-300 transition-colors text-sm font-medium">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main className="relative max-w-5xl mx-auto px-6 pt-20 pb-20">
        <Header />
        <section id="hero" className="min-h-screen flex items-center justify-center py-20">
          <Hero />
        </section>
        <section id="about" className="py-20">
          <About />
        </section>
        <section className="py-20">
          <Certifications />
        </section>
        <section id="work" className="py-20">
          <Projects />
        </section>
        <section className="py-20">
          <Leadership />
        </section>
        <section className="py-20">
          <Contact />
        </section>
      </main>
    </>
  );
}
