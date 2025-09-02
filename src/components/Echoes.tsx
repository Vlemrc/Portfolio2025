"use client";
import { useEffect, useState } from "react";

export default function Echoes() {
    const [visible, setVisible] = useState(false);
    const [showTitle, setShowTitle] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const timer1 = setTimeout(() => setShowTitle(true), 300);
        const timer2 = setTimeout(() => setVisible(true), 650);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <>
            <div className="overflow-hidden mt-12 mb-5">
                <h3 className={
                    `uppercase text-[10px] font-bold transition-transform duration-700` +
                    (showTitle ? ' translate-y-0' : ' -translate-y-10')
                }>
                    My echoes
                </h3>
            </div>
            <iframe
                data-testid="embed-iframe"
                style={{
                    borderRadius: '12px',
                    opacity: visible ? 1 : 0,
                    transition: 'opacity 0.6s cubic-bezier(0.4,0,0.2,1)'
                }}
                src="https://open.spotify.com/embed/playlist/1uowCt1nschyYJbujear78?utm_source=generator"
                width={isMobile ? "100%" : "70%"}
                height="200"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            ></iframe>
        </>
    )
}