import Head from 'next/head';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import About from '../components/About';
import CurrentlyBuilding from '../components/CurrentlyBuilding';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Achievements from '../components/Achievements';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const [ctaDismissed, setCtaDismissed] = useState(false);

  // Scroll-reveal for all .section-reveal elements
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.section-reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Dhruv Gohel</title>
        <meta name="description" content="Computer Engineering student from Ahmedabad building real-world web applications. Open to internships, freelance, and collaboration." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Dhruv Gohel" />
        <meta property="og:description" content="I build web apps that solve real business problems. View my work →" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Background decorative orbs */}
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />

      <Header />

      <main>
        <Hero />
        <TrustBar />
        <About />
        <CurrentlyBuilding />
        <Projects />
        <Skills />
        <Achievements />
        <Services />
        <Contact />
      </main>

      <Footer />

      {/* Mobile sticky CTA — only on mobile, dismissible */}
      {!ctaDismissed && (
        <div className="mobile-cta" role="complementary" aria-label="Contact CTA">
          <div>
            <p style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--text-1)', margin: '0 0 0.1rem 0' }}>
              Let's work together
            </p>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-3)', margin: 0 }}>
              Open for internships &amp; freelance
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <a
              href="https://wa.me/919924885705?text=Hi%20Dhruv%2C%20I%20saw%20your%20portfolio."
              target="_blank" rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '0.55rem 1rem', fontSize: '0.8rem' }}
            >
              WhatsApp →
            </a>
            <button
              onClick={() => setCtaDismissed(true)}
              aria-label="Dismiss"
              style={{
                background: 'none', border: 'none', color: 'var(--text-3)',
                cursor: 'pointer', padding: '0.4rem', fontSize: '1.1rem', lineHeight: 1,
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
