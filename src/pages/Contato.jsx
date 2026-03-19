import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Instagram } from 'lucide-react'

export default function Contato() {
    const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

    return (
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }} style={{ paddingTop: '120px', paddingBottom: '100px' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '6rem', alignItems: 'flex-start' }}>

                <motion.div variants={fadeInUp}>
                    <span className="section-subtitle">Orçamentos e Projetos</span>
                    <h1 className="section-title">Vamos Falar de Excelência.</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem' }}>
                        A Polly Concreto atende exclusivamente projetos que buscam o mais alto nível estético e técnico. Preencha os dados e entremos em contato.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                            <Phone size={24} style={{ color: 'var(--text-primary)' }} />
                            <div>
                                <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>Ligue para nós</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>(11) 2366-2985 <br /> (11) 95393-5394 (WhatsApp)</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                            <Mail size={24} style={{ color: 'var(--text-primary)' }} />
                            <div>
                                <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>E-mail corporativo</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Pollyconcreto@gmail.com</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                            <MapPin size={24} style={{ color: 'var(--text-primary)' }} />
                            <div>
                                <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>Sede e Atendimento</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Rua Três Marias, Vila Madeirense<br />Guarulhos - SP, CEP 07110-170<br />Atendemos toda região de São Paulo.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={fadeInUp} style={{ background: 'var(--bg-panel)', padding: '3.5rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => { e.preventDefault(); alert("Enviado com sucesso!"); }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Nome ou Empresa</label>
                            <input type="text" style={{ width: '100%', padding: '1rem', background: 'var(--bg-dark)', border: '1px solid var(--border-strong)', color: '#fff', borderRadius: '4px' }} required />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>WhatsApp / Celular</label>
                            <input type="tel" style={{ width: '100%', padding: '1rem', background: 'var(--bg-dark)', border: '1px solid var(--border-strong)', color: '#fff', borderRadius: '4px' }} required />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>E-mail</label>
                            <input type="email" style={{ width: '100%', padding: '1rem', background: 'var(--bg-dark)', border: '1px solid var(--border-strong)', color: '#fff', borderRadius: '4px' }} required />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Descrição do Projeto / Dúvidas</label>
                            <textarea rows="4" style={{ width: '100%', padding: '1rem', background: 'var(--bg-dark)', border: '1px solid var(--border-strong)', color: '#fff', borderRadius: '4px' }} required />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1.2rem', fontSize: '1.1rem', marginTop: '1rem' }}>
                            Enviar Solicitação de Orçamento
                        </button>
                    </form>
                </motion.div>

            </div>
        </motion.div>
    )
}
