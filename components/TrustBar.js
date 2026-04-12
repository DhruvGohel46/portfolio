const TRUST_ITEMS = [
    { emoji: '🛡️', label: 'Security Researcher' },
    { emoji: '🕵️', label: 'Pentesting Research' },
    { emoji: '🔒', label: 'OS Hardening' },
    { emoji: '💼', label: 'Security Consultant' },
    { emoji: '🏆', label: 'Hackathon Winner' },
    { emoji: '🎓', label: 'NPTEL Elite · Top 5%' },
    { emoji: '🏅', label: 'SIH 2025 Participant' },
    { emoji: '☁️', label: 'Oracle Cloud Certified' },
];

// Duplicate to create seamless loop
const ALL = [...TRUST_ITEMS, ...TRUST_ITEMS];

export default function TrustBar() {
    return (
        <div style={{
            borderTop: '1px solid var(--border)',
            borderBottom: '1px solid var(--border)',
            background: 'var(--bg-surface)',
            overflow: 'hidden',
            padding: '0.9rem 0',
        }}>
            <div className="trust-scroll-track">
                {ALL.map((item, i) => (
                    <div
                        key={i}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0 2rem',
                            whiteSpace: 'nowrap',
                            fontSize: '0.82rem',
                            fontWeight: 500,
                            color: 'var(--text-2)',
                            borderRight: '1px solid var(--border)',
                        }}
                    >
                        <span style={{ fontSize: '1rem' }}>{item.emoji}</span>
                        {item.label}
                    </div>
                ))}
            </div>
        </div>
    );
}
