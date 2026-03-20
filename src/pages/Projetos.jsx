import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

import Proj1Img from '../assets/Obras /WhatsApp Image 2026-03-16 at 14.22.47 (1).jpeg'
import TerrasCapa from '../assets/Obras /PHOTO-2026-03-19-16-17-34.jpg'
import Terras2 from '../assets/Obras /PHOTO-2026-03-19-16-18-47.jpg'
import Terras3 from '../assets/Obras /PHOTO-2026-03-19-16-21-26.jpg'
import Celta1 from '../assets/Obras /WhatsApp Image 2026-03-16 at 14.26.34.jpeg'
import Celta2 from '../assets/Obras /WhatsApp Image 2026-03-16 at 14.27.12 (1).jpeg'
import Celta3 from '../assets/Obras /WhatsApp Image 2026-03-16 at 14.27.12 (2).jpeg'
import Celta4 from '../assets/Obras /WhatsApp Image 2026-03-16 at 14.27.12.jpeg'
import Morada1 from '../assets/Obras /WhatsApp Image 2026-03-16 at 14.28.29.jpeg'
import Morada2 from '../assets/Obras /WhatsApp Image 2026-03-16 at 14.28.50 (1).jpeg'
import Morada3 from '../assets/Obras /WhatsApp Image 2026-03-16 at 14.28.50.jpeg'
import Morada4 from '../assets/Obras /WhatsApp Image 2026-03-16 at 14.28.51 (1).jpeg'
import Morada5 from '../assets/Obras /WhatsApp Image 2026-03-16 at 14.28.51.jpeg'
import Serrazul1 from '../assets/Obras /WhatsApp Image 2026-03-16 at 14.30.28 (1).jpeg'
import Serrazul2 from '../assets/Obras /WhatsApp Image 2026-03-16 at 14.30.28 (2).jpeg'
import Serrazul3 from '../assets/Obras /WhatsApp Image 2026-03-16 at 14.30.28.jpeg'
import Serrazul4 from '../assets/Obras /WhatsApp Image 2026-03-16 at 14.30.29 (1).jpeg'
import Serrazul5 from '../assets/Obras /WhatsApp Image 2026-03-16 at 14.30.29.jpeg'
import Serrazul6 from '../assets/Obras /PHOTO-2026-03-16-14-30-01.jpg'
import SerrazulB1 from '../assets/Obras /PHOTO-2026-03-16-14-32-23.jpg'
import SerrazulB2 from '../assets/Obras /WhatsApp Image 2026-03-16 at 14.32.49.jpeg'
import SerrazulB3 from '../assets/Obras /WhatsApp Image 2026-03-16 at 14.32.48.jpeg'
import SerrazulB4 from '../assets/Obras /WhatsApp Image 2026-03-16 at 14.32.48 (3).jpeg'
import SerrazulB5 from '../assets/Obras /WhatsApp Image 2026-03-16 at 14.32.48 (2).jpeg'
import SerrazulB6 from '../assets/Obras /WhatsApp Image 2026-03-16 at 14.32.48 (1).jpeg'
import SerrazulBVideo from '../assets/Obras /WhatsApp Video 2026-03-16 at 14.32.49.mp4'
import Palmeiras1 from '../assets/Obras /PHOTO-2026-03-16-14-49-45.jpg'
import Palmeiras2 from '../assets/Obras /WhatsApp Image 2026-03-16 at 14.50.01 (1).jpeg'
import Palmeiras3 from '../assets/Obras /WhatsApp Image 2026-03-16 at 14.50.01 (2).jpeg'
import Palmeiras4 from '../assets/Obras /WhatsApp Image 2026-03-16 at 14.50.01.jpeg'
import Palmeiras5 from '../assets/Obras /WhatsApp Image 2026-03-16 at 14.50.02.jpeg'
import VilaNova1 from '../assets/Obras /PHOTO-2026-03-16-14-51-25.jpg'
import VilaNova2 from '../assets/Obras /WhatsApp Image 2026-03-16 at 14.51.43.jpeg'
import VilaNova3 from '../assets/Obras /WhatsApp Image 2026-03-16 at 14.51.44 (1).jpeg'
import VilaNova4 from '../assets/Obras /WhatsApp Image 2026-03-16 at 14.51.44 (2).jpeg'
import VilaNova5 from '../assets/Obras /WhatsApp Image 2026-03-16 at 14.51.44 (3).jpeg'
import VilaNova6 from '../assets/Obras /WhatsApp Image 2026-03-16 at 14.51.44.jpeg'
import VilaNova7 from '../assets/Obras /WhatsApp Image 2026-03-16 at 14.51.45.jpeg'

const ProjectCard = ({ proj, fadeInUp, onOpenLightbox }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const hasMultiple = proj.images && proj.images.length > 1;

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % proj.images.length)
    }

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + proj.images.length) % proj.images.length)
    }

    return (
        <motion.div variants={fadeInUp} style={{
            position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden', cursor: 'pointer',
            background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)'
        }} className="proj-card" onClick={() => onOpenLightbox(proj, currentIndex)}>
            {/* Image Layer */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
                <AnimatePresence mode="wait">
                    {proj.images && proj.images.length > 0 ? (
                        proj.images[currentIndex].endsWith('.mp4') ? (
                            <motion.video
                                key={currentIndex}
                                src={proj.images[currentIndex]}
                                autoPlay loop muted playsInline
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}
                                className="proj-img"
                            />
                        ) : (
                            <motion.img
                                key={currentIndex}
                                src={proj.images[currentIndex]}
                                alt={proj.title}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}
                                className="proj-img"
                            />
                        )
                    ) : (
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, #18191c 0%, #24262b 100%)' }} className="proj-img" />
                    )}
                </AnimatePresence>
            </div>

            {/* Carousel Controls (Only show if multiple images) */}
            {hasMultiple && (
                <div className="carousel-controls" style={{ position: 'absolute', top: '50%', left: 0, right: 0, transform: 'translateY(-50%)', display: 'flex', justifyContent: 'space-between', padding: '0 1rem', zIndex: 10, opacity: 0, transition: 'opacity 0.3s ease' }}>
                    <button onClick={prevImage} style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', color: '#fff', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backdropFilter: 'blur(5px)' }}><ChevronLeft size={20} /></button>
                    <button onClick={nextImage} style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', color: '#fff', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backdropFilter: 'blur(5px)' }}><ChevronRight size={20} /></button>
                </div>
            )}

            {/* Carousel Indicators */}
            {hasMultiple && (
                <div style={{ position: 'absolute', bottom: '1.5rem', left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: '0.5rem', zIndex: 10 }}>
                    {proj.images.map((_, idx) => (
                        <div key={idx} style={{
                            width: currentIndex === idx ? '20px' : '6px',
                            height: '6px',
                            borderRadius: '10px',
                            background: currentIndex === idx ? 'var(--text-primary)' : 'rgba(255,255,255,0.3)',
                            transition: 'all 0.3s ease'
                        }} />
                    ))}
                </div>
            )}

            {/* Overlay Layer */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 80%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '2.5rem', pointerEvents: 'none', zIndex: 5 }}>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{proj.title}</h3>
                <p style={{ color: 'var(--accent-silver)', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em' }}>{proj.subtitle}</p>
            </div>
        </motion.div>
    )
}

const Lightbox = ({ data, onClose }) => {
    const { proj, index } = data;
    const [currentIndex, setCurrentIndex] = useState(index);
    const hasMultiple = proj.images && proj.images.length > 1;

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % proj.images.length)
    }

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + proj.images.length) % proj.images.length)
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={onClose}
        >
            <button onClick={onClose} style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', zIndex: 10001 }}>
                <X size={36} />
            </button>

            <div style={{ position: 'relative', width: '90%', maxWidth: '1200px', height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={e => e.stopPropagation()}>
                <AnimatePresence mode="wait">
                    {proj.images[currentIndex].endsWith('.mp4') ? (
                        <motion.video
                            key={currentIndex}
                            src={proj.images[currentIndex]}
                            autoPlay loop playsInline controls
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', borderRadius: '4px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}
                        />
                    ) : (
                        <motion.img
                            key={currentIndex}
                            src={proj.images[currentIndex]}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', borderRadius: '4px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}
                        />
                    )}
                </AnimatePresence>

                {hasMultiple && (
                    <>
                        <button onClick={prevImage} style={{ position: 'absolute', left: '-2rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', color: '#fff', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backdropFilter: 'blur(5px)' }}><ChevronLeft size={28} /></button>
                        <button onClick={nextImage} style={{ position: 'absolute', right: '-2rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', color: '#fff', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backdropFilter: 'blur(5px)' }}><ChevronRight size={28} /></button>
                    </>
                )}
            </div>

            <div style={{ position: 'absolute', bottom: '2rem', textAlign: 'center', color: '#fff' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>{proj.title}</h3>
                <p style={{ color: 'var(--accent-silver)' }}>{currentIndex + 1} / {proj.images.length}</p>
            </div>
        </motion.div>
    )
}

export default function Projetos() {
    const [lightboxData, setLightboxData] = useState(null)
    const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

    const projetos = [
        { title: 'Cond. Terras de São José', subtitle: 'Itu - SP', images: [TerrasCapa, Terras2, Terras3, Proj1Img] },
        { title: 'Residência Ibirapuera', subtitle: 'Rua Celta - SP', images: [Celta1, Celta2, Celta3, Celta4] },
        { title: 'Morada dos Lagos', subtitle: 'Aldeia da Serra - SP', images: [Morada1, Morada2, Morada3, Morada4, Morada5] },
        { title: 'Cond. Fazenda Serrazul', subtitle: 'Itupeva - SP', images: [Serrazul1, Serrazul2, Serrazul3, Serrazul4, Serrazul5, Serrazul6] },
        { title: 'Fazenda Serrazul II', subtitle: 'Projeto Expandido', images: [SerrazulBVideo, SerrazulB1, SerrazulB2, SerrazulB3, SerrazulB4, SerrazulB5, SerrazulB6] },
        { title: 'Cond. Palmeiras Imperiais', subtitle: 'Salto - SP', images: [Palmeiras1, Palmeiras2, Palmeiras3, Palmeiras4, Palmeiras5] },
        { title: 'Obra Predial', subtitle: 'Vila Nova Conceição - SP', images: [VilaNova1, VilaNova2, VilaNova3, VilaNova4, VilaNova5, VilaNova6, VilaNova7] },
    ]

    return (
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }} style={{ paddingTop: '120px', paddingBottom: '100px' }}>
            <div className="container">
                <motion.div variants={fadeInUp} style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <span className="section-subtitle">Portfólio</span>
                    <h1 className="section-title">Obras Que Exalam Arquitetura.</h1>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {projetos.map((proj, i) => (
                        <ProjectCard key={i} proj={proj} fadeInUp={fadeInUp} onOpenLightbox={(p, idx) => setLightboxData({ proj: p, index: idx })} />
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {lightboxData && (
                    <Lightbox data={lightboxData} onClose={() => setLightboxData(null)} />
                )}
            </AnimatePresence>

            <style>{`
                .proj-card:hover .proj-img {
                    transform: scale(1.05);
                }
                .proj-card:hover .carousel-controls {
                    opacity: 1 !important;
                }
            `}</style>
        </motion.div>
    )
}
