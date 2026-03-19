import { Link } from 'react-router-dom'
import { Instagram, MapPin, Phone, Mail } from 'lucide-react'
import LogoImg from '../assets/ChatGPT Image Mar 19, 2026, 08_38_40 AM.png'

export default function Footer() {
    return (
        <footer style={{
            background: 'var(--bg-panel)',
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '5rem',
            marginTop: 'auto'
        }}>
            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '4rem',
                marginBottom: '4rem'
            }}>
                <div>
                    <div style={{ marginBottom: '1.5rem', outline: 'none', border: 'none', background: 'transparent' }}>
                        <img src={LogoImg} alt="Polly Concreto" style={{ height: '180px', objectFit: 'contain', border: 'none', boxShadow: 'none', outline: 'none', background: 'transparent', clipPath: 'inset(2px)', filter: 'contrast(1.2)' }} />
                    </div>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '300px' }}>
                        Especialistas em tratamento de concreto aparente, lixamento e estucamento para residências e condomínios de alto padrão. 20 anos de tradição.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href="#" style={{ color: 'var(--text-secondary)' }}><Instagram size={24} /></a>
                    </div>
                </div>

                <div>
                    <h4 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Navegação Arquitetônica</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
                        <li><Link to="/">Início</Link></li>
                        <li><Link to="/sobre">Sobre a Empresa</Link></li>
                        <li><Link to="/servicos">Especialidades e Serviços</Link></li>
                        <li><Link to="/projetos">Projetos Executados</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Contato Direto</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
                        <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <Phone size={20} style={{ color: 'var(--accent-silver)' }} />
                            <span>(11) 2366-2985 <br /> (11) 95393-5394</span>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <Mail size={20} style={{ color: 'var(--accent-silver)' }} />
                            <span>Pollyconcreto@gmail.com</span>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <MapPin size={20} style={{ color: 'var(--accent-silver)' }} />
                            <span>Rua Três Marias, Vila Madeirense<br />Guarulhos - SP, 07110-170</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div style={{
                borderTop: '1px solid var(--border-subtle)',
                padding: '2rem 0',
            }}>
                <div className="container" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem',
                    flexWrap: 'wrap',
                    gap: '1rem'
                }}>
                    <p>&copy; 2026 Polly Concreto e Pinturas. Todos os direitos reservados.</p>
                    <p>CNPJ: 42.172.271/0001-74</p>
                </div>
            </div>
        </footer>
    )
}
