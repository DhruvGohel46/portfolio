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
        <title>Dhruv Gohel | SEC & SWE Portfolio</title>
        <meta name="description" content="Dhruv Gohel's portfolio - Cybersecurity, Data Science, Full Stack Development" />
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
