import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import LogoImg from '../assets/ChatGPT Image Mar 19, 2026, 08_38_40 AM.png'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false)
    }, [location.pathname])

    return (
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`} style={{
            position: 'fixed',
            width: '100%',
            top: 0,
            zIndex: 50,
            transition: 'all 0.3s ease',
            padding: scrolled ? '1rem 0' : '1.5rem 0',
            background: scrolled ? 'rgba(24, 25, 28, 0.7)' : 'transparent',
            backdropFilter: scrolled ? 'blur(16px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', outline: 'none', border: 'none', background: 'transparent' }}>
                    <img src={LogoImg} alt="Polly Concreto" style={{ height: '140px', objectFit: 'contain', border: 'none', boxShadow: 'none', outline: 'none', background: 'transparent', clipPath: 'inset(2px)', filter: 'contrast(1.2)' }} />
                </Link>

                {/* Desktop Nav */}
                <nav style={{ display: 'none' }} className="desktop-nav">
                    <ul style={{ display: 'flex', gap: '2rem' }}>
                        <li><Link to="/">Início</Link></li>
                        <li><Link to="/sobre">Sobre a Empresa</Link></li>
                        <li><Link to="/servicos">Serviços</Link></li>
                        <li><Link to="/projetos">Portfólio</Link></li>
                    </ul>
                </nav>

                <div style={{ display: 'none', gap: '1rem' }} className="desktop-actions">
                    <Link to="/contato" className="btn btn-primary">Fale Conosco</Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex' }}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Basic Mobile Menu Implementation */}
            {mobileMenuOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '100%',
                    background: 'var(--bg-panel)',
                    padding: '2rem',
                    borderBottom: '1px solid var(--border-strong)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem'
                }}>
                    <Link to="/">Início</Link>
                    <Link to="/sobre">Sobre a Empresa</Link>
                    <Link to="/servicos">Serviços</Link>
                    <Link to="/projetos">Portfólio</Link>
                    <Link to="/contato" className="btn btn-primary mt-4">Fale Conosco</Link>
                </div>
            )}

            {/* Vanilla CSS Fix for Layout (Could also use standard CSS classes but inline handles structural logic nicely) */}
            <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: block !important; }
          .desktop-actions { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        .desktop-nav a {
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.3s ease;
        }
        .desktop-nav a:hover {
          color: var(--text-primary);
        }
      `}</style>
        </header>
    )
}
