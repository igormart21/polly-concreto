import { motion } from 'framer-motion'
import { Layers, Maximize, AlignJustify, Wind, Brush, Gem } from 'lucide-react'

export default function Servicos() {
    const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

    const servicosData = [
        { icon: <Layers size={32} />, title: 'Tratamento de Concreto Aparente', desc: 'Revitalização, proteção hidro-repelente e uniformização visual de fachadas, garantindo uma estética de concreto impecável e resistente.' },
        { icon: <Maximize size={32} />, title: 'Concreto Liso', desc: 'Acabamento extremamente refinado e minimalista para superfícies de concreto liso, proporcionando um toque arquitetônico moderno.' },
        { icon: <AlignJustify size={32} />, title: 'Concreto Ripado', desc: 'Técnicas especializadas para realçar os veios, as formas e os veios da madeira nas fôrmas do ripado natural.' },
        { icon: <Wind size={32} />, title: 'Lixamento Técnico', desc: 'Remoção cirúrgica de imperfeições, rebarbas de desforma e contaminações, preparando a superfície para alta performance visual.' },
        { icon: <Brush size={32} />, title: 'Estucamento Especializado', desc: 'Preenchimento de brocas (ninhos) e fissuras com massas técnicas exclusivas produzidas na exata tonalidade do concreto local.' },
        { icon: <Gem size={32} />, title: 'Acabamento em Alto Padrão', desc: 'Práticas dedicadas a entregar luxo silencioso. Foco em residências e condomínios que demandam excelência visual inquestionável.' },
    ]

    return (
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }} style={{ paddingTop: '120px', paddingBottom: '100px' }}>
            <div className="container">
                <motion.div variants={fadeInUp} style={{ textAlign: 'center', marginBottom: '5rem', maxWidth: '800px', margin: '0 auto 5rem' }}>
                    <span className="section-subtitle">O Que Fazemos</span>
                    <h1 className="section-title">Soluções Visuais Absolutas.</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>Entregamos melhoria estética, valorização do imóvel, durabilidade extrema e acabamento final perfeito para seus projetos de alto padrão.</p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {servicosData.map((srv, i) => (
                        <motion.div key={i} variants={fadeInUp} style={{
                            background: 'var(--bg-panel)', padding: '3rem', borderRadius: '8px',
                            border: '1px solid var(--border-subtle)', position: 'relative', overflow: 'hidden',
                            transition: 'all 0.3s ease'
                        }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-silver)'; e.currentTarget.style.transform = 'translateY(-5px)' }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.transform = 'none' }}
                        >
                            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--bg-elevated)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                                {srv.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{srv.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{srv.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
