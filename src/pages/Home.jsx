import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle2, Award, Shield, ChevronRight, ArrowRight, Eye, Medal, Star } from 'lucide-react'
import HeroImg1 from '../assets/3.png'
import HeroImg2 from '../assets/as.png'
import HeroImg3 from '../assets/Unknown.png'
import EssenciaImg from '../assets/04.png'
import RipadoImg from '../assets/Screen Shot 2026-03-19 at 1.31.37 PM.png'
import LisoImg from '../assets/old-cement-wall-texture.jpg'
import Proj1Img from '../assets/Obras /WhatsApp Image 2026-03-16 at 14.22.47 (1).jpeg'
import Celta1 from '../assets/Obras /WhatsApp Image 2026-03-16 at 14.26.34.jpeg'
import Celta2 from '../assets/Obras /WhatsApp Image 2026-03-16 at 14.27.12 (1).jpeg'
import Celta3 from '../assets/Obras /WhatsApp Image 2026-03-16 at 14.27.12 (2).jpeg'
import Celta4 from '../assets/Obras /WhatsApp Image 2026-03-16 at 14.27.12.jpeg'
import CarouselCard from '../components/CarouselCard'

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

export default function Home() {
    const heroImages = [HeroImg1, HeroImg2, HeroImg3];
    const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            {/* 1. HERO SECTION PREMIUM */}
            <section style={{
                position: 'relative',
                height: '100vh',
                minHeight: '600px',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden'
            }}>
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentHeroIndex}
                        src={heroImages[currentHeroIndex]}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
                    />
                </AnimatePresence>

                {/* Protection for transparent header */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '150px', background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 100%)', pointerEvents: 'none', zIndex: 1 }} />

                {/* Blend gradient into next section */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '30vh', background: 'linear-gradient(to top, var(--bg-dark) 0%, transparent 100%)', pointerEvents: 'none', zIndex: 1 }} />
            </section>

            {/* 2. AUTORIDADE / CONFIANÇA INTRO */}
            <section style={{ background: 'var(--bg-dark)', borderBottom: '1px solid var(--border-subtle)', padding: '4rem 0' }}>
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem'
                    }}>
                        <motion.div variants={fadeInUp} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
                            <h2 style={{ fontSize: '3.5rem', fontWeight: '700', color: 'var(--text-primary)' }}>20+</h2>
                            <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', maxWidth: '100px' }}>Anos de Tradição</span>
                        </motion.div>
                        <motion.div variants={fadeInUp} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
                            <Medal size={48} strokeWidth={1} color="var(--text-primary)" />
                            <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', maxWidth: '120px' }}>Especialistas em Alto Padrão</span>
                        </motion.div>
                        <motion.div variants={fadeInUp} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
                            <Star size={48} strokeWidth={1} color="var(--text-primary)" />
                            <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', maxWidth: '150px' }}>Atuação Premium em SP/Guarulhos</span>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 3. A ESSÊNCIA (SOBRE) */}
            <section className="section" style={{ background: 'var(--bg-panel)' }}>
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={staggerContainer} style={{
                        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '6rem', alignItems: 'center'
                    }}>
                        <motion.div variants={fadeInUp} style={{
                            position: 'relative', aspectRatio: '4/5', background: 'var(--bg-elevated)', borderRadius: '4px',
                            border: '1px solid var(--border-strong)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden'
                        }}>
                            <img
                                src={EssenciaImg}
                                alt="Polly Concreto Essência"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
                            />
                            <div style={{ position: 'absolute', inset: '1rem', border: '1px solid rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
                        </motion.div>

                        <motion.div variants={fadeInUp}>
                            <span className="section-subtitle">Nossa Essência</span>
                            <h2 className="section-title">Onde a Técnica Encontra a Estética.</h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '2rem', lineHeight: 1.8 }}>
                                O concreto não é apenas um material estrutural; na arquitetura moderna exuberante, ele é a alma da fachada. A Polly Concreto trata cada cimento liso ou parede ripada como tela de arte.
                            </p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '2.5rem', lineHeight: 1.8 }}>
                                Trabalhamos silenciosamente dentro dos condomínios mais luxuosos do país, removendo imperfeições, nivelando tons e protegendo a superfície sem tirar a sua natureza mineral.
                            </p>

                            <Link to="/sobre" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)', fontWeight: 500, fontSize: '1.1rem', borderBottom: '1px solid var(--text-primary)', paddingBottom: '0.4rem' }}>
                                Conheça a Polly Concreto <ArrowRight size={20} />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* TIPOS DE ACABAMENTO */}
            <section className="section" style={{ background: 'var(--bg-elevated)', borderTop: '1px solid var(--border-subtle)' }}>
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <span className="section-subtitle">Padrões de Execução</span>
                        <h2 className="section-title">A Textura e Volume Ideais.</h2>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>

                        {/* RIPADO */}
                        <motion.div variants={fadeInUp} style={{ background: 'var(--bg-panel)', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-subtle)', transition: 'all 0.3s ease' }} className="hover-glass">
                            <div style={{ position: 'relative', height: '350px', overflow: 'hidden' }} className="proj-card">
                                <img src={RipadoImg} alt="Concreto Ripado" style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="proj-img" />
                            </div>
                            <div style={{ padding: '2.5rem' }}>
                                <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: 700 }}>Concreto Ripado</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>Realça de forma marcante as linhas, os veios e as texturas originais das fôrmas de madeira, trazendo um apelo brutalista sofisticado e volumétrico.</p>
                            </div>
                        </motion.div>

                        {/* LISO */}
                        <motion.div variants={fadeInUp} style={{ background: 'var(--bg-panel)', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-subtle)', transition: 'all 0.3s ease' }} className="hover-glass">
                            <div style={{ position: 'relative', height: '350px', overflow: 'hidden' }} className="proj-card">
                                <img src={LisoImg} alt="Concreto Liso" style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="proj-img" />
                            </div>
                            <div style={{ padding: '2.5rem' }}>
                                <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: 700 }}>Concreto Liso</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>Oferece um toque acetinado e perfeitamente uniforme. Ideal para ambientes e fachadas amplas que buscam extremo requinte minimalista em tons de concreto.</p>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </section>

            {/* 4. SERVIÇOS PREMIUM */}
            <section className="section" style={{ background: 'var(--bg-dark)' }}>
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ marginBottom: '5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
                        <div>
                            <span className="section-subtitle">Nossas Especialidades</span>
                            <h2 className="section-title" style={{ marginBottom: 0 }}>Domínio Total da Matéria.</h2>
                        </div>
                        <Link to="/servicos" className="btn btn-outline">Ver todos os serviços</Link>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{
                        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem'
                    }}>
                        {[
                            { t: 'Tratamento de Concreto Aparente', d: 'Uniformização visual e hidro-repelência de altíssima longevidade.' },
                            { t: 'Estucamento Cirúrgico', d: 'Massas técnicas desenvolvidas na exata cor do concreto da sua obra.' },
                            { t: 'Lixamento e Concreto Liso', d: 'Superfícies perfeitamente planas, toque acetinado e aspecto uníssono.' }
                        ].map((srv, idx) => (
                            <motion.div key={idx} variants={fadeInUp} style={{
                                padding: '3.5rem 2.5rem', background: 'var(--bg-panel)', borderRadius: '4px', border: '1px solid var(--border-subtle)',
                                transition: 'all 0.4s ease', cursor: 'pointer', display: 'flex', flexDirection: 'column'
                            }}
                                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-15px)'; e.currentTarget.style.borderColor = 'var(--accent-silver)'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.25rem', color: 'var(--text-primary)', fontWeight: 600 }}>{srv.t}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2.5rem', flexGrow: 1 }}>{srv.d}</p>
                                <div style={{ color: 'var(--accent-silver)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: 'auto' }}>
                                    Explorar <ChevronRight size={16} />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 5. DIFERENCIAIS COMPETITIVOS (NOVA SEÇÃO) */}
            <section className="section" style={{ background: 'var(--bg-panel)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{
                        display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '6rem'
                    }} className="grid-mobile-stack">
                        <motion.div variants={fadeInUp}>
                            <span className="section-subtitle">Por que nós?</span>
                            <h2 className="section-title">O Padrão <br /> Polly de Qualidade.</h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem' }}>A diferença entre um serviço comum e o resultado Polly está na obsessão milimétrica pelos detalhes da composição estrutural.</p>
                        </motion.div>

                        <motion.div variants={staggerContainer} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {[
                                { title: 'Exclusividade para o Alto Padrão', text: 'Não operamos em larga escala comercial bruta. Atendemos uma seleta carteira de condomínios luxuosos, garantindo entrega VIP.' },
                                { title: 'Precisão e Detalhismo', text: 'Cada bolha, broca ou fissura no concreto é mapeada e tratada individualmente para manter a textura natural da arquitetura bruta.' },
                                { title: 'Equipe de Mestres Artesãos', text: 'Nossos aplicadores possuem formação dedicada ao comportamento do cimento e resinas ao longo dos anos.' }
                            ].map((diff, i) => (
                                <motion.div key={i} variants={fadeInUp} style={{
                                    padding: '2.5rem', background: 'var(--bg-dark)', borderLeft: '2px solid var(--text-primary)', borderRadius: '0 4px 4px 0'
                                }}>
                                    <h4 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>{diff.title}</h4>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>{diff.text}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 6. GALERIA DE DESTAQUES (NOVA SEÇÃO) */}
            <section className="section" style={{ background: 'var(--bg-dark)' }}>
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <span className="section-subtitle">Acervo</span>
                        <h2 className="section-title">Nossa Assinatura nas Obras.</h2>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{
                        display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2rem', height: '600px'
                    }} className="grid-mobile-stack">
                        <CarouselCard
                            title="Cond. Terras de São José"
                            subtitle="Itu - SP"
                            images={[Proj1Img]}
                            fadeInUp={fadeInUp}
                            gridSpan="7"
                        />
                        <CarouselCard
                            title="Residência Ibirapuera"
                            subtitle="Rua Celta - SP"
                            images={[Celta1, Celta2, Celta3, Celta4]}
                            fadeInUp={fadeInUp}
                            gridSpan="5"
                        />
                    </motion.div>

                    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <Link to="/projetos" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Eye size={20} /> Abrir Acervo Completo
                        </Link>
                    </div>
                </div>
            </section>

            {/* 7. PREMIUM CTA */}
            <section className="section" style={{
                background: 'linear-gradient(180deg, var(--bg-panel) 0%, var(--bg-dark) 100%)',
                borderTop: '1px solid var(--border-subtle)',
                textAlign: 'center'
            }}>
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ maxWidth: '850px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, marginBottom: '2rem', color: 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                            Sua obra-prima arquitetônica merece um toque final impecável.
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', marginBottom: '4rem', fontWeight: 300, lineHeight: 1.6 }}>
                            Entre em contato conosco e receba uma consultoria especializada sobre como nossos mestres artesãos podem elevar o nível do seu projeto residencial.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/contato" className="btn btn-primary" style={{ padding: '1.25rem 3.5rem', fontSize: '1.1rem' }}>
                                Solicitar Orçamento
                            </Link>
                            <a href="https://wa.me/5511953935394" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '1.25rem 3.5rem', fontSize: '1.1rem' }}>
                                Atendimento via WhatsApp
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <style>{`
        .hover-glass { cursor: pointer; transition: transform 0.4s ease; }
        .hover-glass:hover { transform: scale(1.02); z-index: 10; boxShadow: 0 30px 60px rgba(0,0,0,0.5); border: 1px solid var(--border-strong); }
      `}</style>
        </>
    )
}
