import { motion } from 'framer-motion'
import { Droplet, Hammer, Layers, Sparkles, Paintbrush, CheckCircle2 } from 'lucide-react'
import HeaderImg from '../assets/as.png'

export default function TratamentoConcreto() {
    const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
    const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }

    const etapas = [
        { title: 'Limpeza da Superfície', desc: 'O primeiro passo é a limpeza da superfície da estrutura, realizada por meio do hidrojateamento de alta pressão e pelo lixamento grosso utilizando politrizes elétricas.', icon: <Droplet size={28} /> },
        { title: 'Identificação e Reparo', desc: 'Com a lavagem realizada, examina-se a estrutura para identificar anomalias como infiltrações, trincas e corrosão, que são tratadas com técnicas corretas.', icon: <Hammer size={28} /> },
        { title: 'Estucamento da Superfície', desc: 'Aplicação de pasta com Cimento Branco ou Portland Comum, variando a proporção conforme a tonalidade desejada, para cobrir os poros formados na concretagem.', icon: <Layers size={28} /> },
        { title: 'Polimento', desc: 'Realização de polimento manual para retirar o excesso de estuque e garantir uma superfície muito mais regular e de altíssima estética.', icon: <Sparkles size={28} /> },
        { title: 'Pintura e Proteção', desc: 'Camada final (verniz acrílico, poliuretano, antipichação ou impermeabilizante hidrofugante) que protege contra agentes externos e confere a aparência final.', icon: <Paintbrush size={28} /> }
    ]

    return (
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ paddingTop: '120px', paddingBottom: '100px' }}>

            <div className="container" style={{ marginBottom: '6rem' }}>
                <motion.div variants={fadeInUp} style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
                    <span className="section-subtitle">Técnica e Arquitetura</span>
                    <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>O Que é o Concreto Aparente?</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.8 }}>
                        O concreto aparente começou a ganhar destaque na arquitetura e na engenharia civil no início da década de 1960, graças à influência de grandes arquitetos modernistas, como Oscar Niemeyer. O procedimento consiste em deixar visível a estrutura de concreto da edificação, dispensando qualquer tipo de revestimento convencional.
                    </p>
                </motion.div>
            </div>

            <section className="section" style={{ background: 'var(--bg-panel)' }}>
                <div className="container">
                    <motion.div variants={staggerContainer} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <motion.div variants={fadeInUp}>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>A Importância do Tratamento</h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                                Como em todas as construções essenciais, a manutenção preventiva é uma das etapas mais importantes para manter as características estéticas e estruturais intactas, garantindo a segurança e a boa aparência do imóvel.
                                <br /><br />
                                O tratamento de concreto aparente é a técnica exclusiva que, além de proporcionar uma finalização para melhoria estética e reparar anomalias de concretagem, atua ativamente para <strong>proteger a estrutura da ação dos agentes externos agressivos</strong> que causam manchas, infiltrações e o envelhecimento precoce da estrutura.
                            </p>

                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)', marginTop: '3rem' }}>Objetivos e Vantagens</h3>
                            <ul style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', color: 'var(--text-secondary)' }}>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><CheckCircle2 size={20} color="var(--brand-orange)" /> Aumentar a vida útil e garantir a segurança da estrutura</li>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><CheckCircle2 size={20} color="var(--brand-orange)" /> Proteger contra agentes externos e minimizar anomalias complexas</li>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><CheckCircle2 size={20} color="var(--brand-orange)" /> Estética Moderna que agrega altíssimo valor percebido ao imóvel</li>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><CheckCircle2 size={20} color="var(--brand-orange)" /> Técnica econômica a longo prazo, pois dispensa rebocos e argamassas</li>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><CheckCircle2 size={20} color="var(--brand-orange)" /> Versatilidade suprema para ambientes internos e fachadas externas</li>
                            </ul>
                        </motion.div>
                        <motion.div variants={fadeInUp} style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-subtle)', aspectRatio: '4/5' }}>
                            <img src={HeaderImg} alt="Tratamento de Concreto Aparente" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <motion.div variants={fadeInUp} style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <span className="section-subtitle">Procedimento e Metodologia</span>
                        <h2 className="section-title">Etapas do Tratamento</h2>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {etapas.map((etapa, i) => (
                            <motion.div key={i} variants={fadeInUp} style={{
                                background: 'var(--bg-panel)', padding: '2.5rem', borderRadius: '8px', border: '1px solid var(--border-subtle)',
                                transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden'
                            }} className="hover-glass">
                                <div style={{ color: 'var(--brand-orange)', marginBottom: '1.5rem' }}>{etapa.icon}</div>
                                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>{etapa.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{etapa.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    )
}
