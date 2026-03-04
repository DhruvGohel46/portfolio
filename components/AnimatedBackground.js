export default function AnimatedBackground() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            {/* Radial purple glow top left */}
            <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-purple-900/30 rounded-full blur-[120px] mix-blend-screen mix-blend-lighten"></div>

            {/* Subtle star particles (simplified with css background) */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }}
            ></div>

            {/* Abstract 3D blob bottom center */}
            <div className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-[60%] h-[50%] bg-indigo-900/40 rounded-[100%] blur-[100px] mix-blend-screen"></div>
        </div>
    );
}
