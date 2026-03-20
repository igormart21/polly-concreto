import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import HqOfficeImg from '../assets/polly_hq_office.png'

export default function Sobre() {
    const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

    return (
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }} style={{ paddingTop: '120px', paddingBottom: '100px' }}>
            <div className="container">
                <motion.div variants={fadeInUp} style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <span className="section-subtitle">20 Anos de História</span>
                    <h1 className="section-title">A Arte no Concreto.</h1>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <motion.div variants={fadeInUp} style={{ paddingRight: '2rem' }}>
                        <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Nossa Trajetória</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                            A Polly Concreto e Pinturas nasceu com o objetivo de elevar a estética de obras arquitetônicas contemporâneas. Com 20 anos de mercado, nós consolidamos nosso nome como a principal referência na região de São Paulo e Guarulhos quando se trata de acabamento fino em concreto aparente.
                        </p>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: 1.8 }}>
                            Nossos profissionais são artesãos modernos, capazes de transformar texturas brutas em acabamentos aveludados, ripas perfeitamente desenhadas e fachadas que resistem ao tempo.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <div style={{ background: 'var(--bg-elevated)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                                <h4 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>20+</h4>
                                <p style={{ color: 'var(--text-muted)' }}>Anos de Expertise Técnica</p>
                            </div>
                            <div style={{ background: 'var(--bg-elevated)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                                <h4 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>100%</h4>
                                <p style={{ color: 'var(--text-muted)' }}>Foco no Alto Padrão</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeInUp} style={{
                        height: '600px',
                        borderRadius: '8px',
                        border: '1px solid var(--border-strong)',
                        position: 'relative',
                        overflow: 'hidden'
                    }} className="hover-glass">
                        <img src={HqOfficeImg} alt="Sede da Polly Concreto" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', inset: '20px', border: '1px solid rgba(255,255,255,0.1)', pointerEvents: 'none' }} />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}
