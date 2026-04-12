import Head from 'next/head';
import AnimatedBackground from '../components/AnimatedBackground';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import InternshipSection from '../components/InternshipSection';
import Hackathons from '../components/Hackathons';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dhruv Gohel</title>
        <meta name="description" content="Dhruv Gohel — Security Researcher specializing in OS Security, Penetration Testing, and Digital Forensics." />
        <meta name="application-name" content="Dhruv Gohel" />
        <meta property="og:title" content="Dhruv Gohel" />
        <meta property="og:site_name" content="Dhruv Gohel" />
        <meta property="og:description" content="Security Researcher specializing in OS Security, Penetration Testing, and Digital Forensics." />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Dhruv Gohel",
              "url": "https://dhruv-gohel.netlify.app"
            })
          }}
        />
      </Head>

      <AnimatedBackground />
      <Navbar />

      <main className="w-full relative z-10 overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <InternshipSection />
        <Hackathons />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
