import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-ink">
      <div className="noise"></div>
      <Component {...pageProps} />
    </div>
  );
}

// Add Tailwind CSS and custom config
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    @import url('https://cdn.tailwindcss.com');
    
    * {
      @apply transition-colors;
    }
    
    @keyframes gradient-move {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    @keyframes float-slow {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    
    @keyframes fade-up {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .animate-fade-up {
      animation: fade-up 0.7s ease-out forwards;
      opacity: 0;
    }
    
    .animate-float-slow {
      animation: float-slow 6s ease-in-out infinite;
    }
    
    .bg-ink {
      background: linear-gradient(135deg, #0f0e1e 0%, #1a1933 50%, #0f0e1e 100%);
      background-size: 200% 200%;
      animation: gradient-move 16s ease infinite;
      position: relative;
      min-height: 100vh;
    }
    
    .noise {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect fill="rgba(255,255,255,0.02)" width="100" height="100"/></svg>');
      z-index: -1;
    }
    
    .clip-hex {
      clip-path: polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%);
    }
    
    html {
      scroll-behavior: smooth;
    }
    
    ::-webkit-scrollbar {
      width: 10px;
    }
    
    ::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.05);
    }
    
    ::-webkit-scrollbar-thumb {
      background: rgba(16, 185, 129, 0.3);
      border-radius: 5px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(16, 185, 129, 0.6);
    }
  `;
  document.head.appendChild(style);
}
