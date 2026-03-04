export default function Footer() {
    return (
        <footer className="py-8 border-t border-white/10 relative z-10 mt-12 backdrop-blur-md bg-[#0B0F19]/50">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-xl font-bold tracking-tight text-gray-300 flex items-center">
                    Dhruv Gohel<span className="text-indigo-500">.</span>
                </div>
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Dhruv Gohel. All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                    <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-medium">LinkedIn</a>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-medium">GitHub</a>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-medium">Twitter</a>
                </div>
            </div>
        </footer>
    );
}
