import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function CarouselCard({ title, subtitle, images = [], fadeInUp, gridSpan }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const hasMultiple = images && images.length > 1;

    const nextImage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    const prevImage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    return (
        <motion.div variants={fadeInUp} style={{
            position: 'relative', height: '100%', minHeight: '400px', borderRadius: '4px', overflow: 'hidden', cursor: 'pointer',
            background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)',
            gridColumn: gridSpan ? `span ${gridSpan}` : 'auto'
        }} className="proj-card hover-glass">

            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
                <AnimatePresence mode="wait">
                    {images && images.length > 0 ? (
                        <motion.img
                            key={currentIndex}
                            src={images[currentIndex]}
                            alt={title}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}
                            className="proj-img"
                        />
                    ) : (
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, #18191c 0%, #24262b 100%)' }} className="proj-img" />
                    )}
                </AnimatePresence>
            </div>

            {hasMultiple && (
                <div className="carousel-controls" style={{ position: 'absolute', top: '50%', left: 0, right: 0, transform: 'translateY(-50%)', display: 'flex', justifyContent: 'space-between', padding: '0 1rem', zIndex: 10, opacity: 0, transition: 'opacity 0.3s ease' }}>
                    <button onClick={prevImage} style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', color: '#fff', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backdropFilter: 'blur(5px)' }}><ChevronLeft size={20} /></button>
                    <button onClick={nextImage} style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', color: '#fff', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backdropFilter: 'blur(5px)' }}><ChevronRight size={20} /></button>
                </div>
            )}

            {hasMultiple && (
                <div style={{ position: 'absolute', bottom: '1.5rem', left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: '0.5rem', zIndex: 10 }}>
                    {images.map((_, idx) => (
                        <div key={idx} style={{
                            width: currentIndex === idx ? '20px' : '6px',
                            height: '6px',
                            borderRadius: '10px',
                            background: currentIndex === idx ? 'var(--text-primary)' : 'rgba(255,255,255,0.3)',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 0 5px rgba(0,0,0,0.5)'
                        }} />
                    ))}
                </div>
            )}

            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '3rem', pointerEvents: 'none', zIndex: 5 }}>
                <h3 style={{ fontSize: gridSpan ? '2rem' : '1.8rem', color: '#fff', marginBottom: '0.2rem' }}>{title}</h3>
                <span style={{ color: 'var(--accent-silver)', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.1em' }}>{subtitle}</span>
            </div>

            <style>{`
                .proj-card:hover .proj-img { transform: scale(1.05); }
                .proj-card:hover .carousel-controls { opacity: 1 !important; }
            `}</style>
        </motion.div>
    )
}
