import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ['About', 'Skills', 'Internship', 'Hackathons', 'Projects', 'Contact'];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-[#0B0F19]/80 border-b border-white/10 py-4 shadow-lg' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <div className="text-xl font-bold tracking-tight text-white flex items-center gap-1 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                    Dhruv Gohel<span className="text-indigo-400">.</span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
                            {link}
                        </a>
                    ))}
                </div>

                {/* Right CTA */}
                <div className="hidden md:flex">
                    <a href="#contact" className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]">
                        Hire Me
                    </a>
                </div>

                {/* Mobile menu toggle */}
                <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[#0B0F19]/95 backdrop-blur-xl border-b border-white/10 flex flex-col items-center py-8 space-y-6 shadow-2xl">
                    {navLinks.map((link) => (
                        <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-300 hover:text-white transition-colors">
                            {link}
                        </a>
                    ))}
                    <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-white text-black px-8 py-3 rounded-full text-base font-semibold mt-4">
                        Hire Me
                    </a>
                </div>
            )}
        </nav>
    );
}
