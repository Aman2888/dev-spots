import { useState, useRef, useEffect } from 'react';

function FlagUK({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 40" style={{ borderRadius: '3px', flexShrink: 0 }}>
      <rect width="60" height="40" fill="#012169" />
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="8" />
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="5" />
      <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="12" />
      <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="7" />
    </svg>
  );
}

function FlagDE({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 40" style={{ borderRadius: '3px', flexShrink: 0 }}>
      <rect width="60" height="40" fill="#000" />
      <rect y="13.3" width="60" height="13.4" fill="#D00" />
      <rect y="26.6" width="60" height="13.4" fill="#FFCE00" />
    </svg>
  );
}

const languages = [
  { code: 'en', label: 'ENGLISH', Flag: FlagUK },
  { code: 'de', label: 'DEUTSCH', Flag: FlagDE },
];

export default function LanguageSelector() {
  const [selected, setSelected] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} style={{ position: 'relative', userSelect: 'none' }}>
      {/* Trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '7px',
          backgroundColor: 'white',
          border: '1.5px solid #e5e7eb',
          borderRadius: '999px',
          padding: '5px 12px 5px 8px',
          cursor: 'pointer',
          boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
          transition: 'box-shadow 0.2s',
          outline: 'none',
          minWidth: '72px',
        }}
      >
        <selected.Flag size={22} />
        <svg
          width="11" height="11" viewBox="0 0 12 12" fill="none"
          style={{
            transition: 'transform 0.2s',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            color: '#6b7280',
          }}
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            right: 0,
            backgroundColor: 'white',
            borderRadius: '14px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
            overflow: 'hidden',
            minWidth: '165px',
            zIndex: 99999,
            border: '1px solid #f0f0f0',
          }}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => { setSelected(lang); setIsOpen(false); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                width: '100%',
                padding: '12px 16px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '700',
                letterSpacing: '0.04em',
                color: '#111',
                transition: 'background 0.15s',
                textAlign: 'left',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#f9fafb'}
              onMouseLeave={e => e.currentTarget.style.background = 'none'}
            >
              <lang.Flag size={26} />
              <span style={{ flex: 1 }}>{lang.label}</span>
              {selected.code === lang.code && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8l3.5 3.5 6.5-7" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}