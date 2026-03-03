import React, { useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import Statement from '../components/Statement';
import About from '../components/About';
import Features from '../components/Features';
import SalarySystem from '../components/SalarySystem';
import ChallengeSupport from '../components/ChallengeSupport';
import SalonList from '../components/SalonList';
import BlogNews from '../components/BlogNews';
import FAQ from '../components/FAQ';

const HomePage: React.FC = () => {
    const revealRefs = useRef<HTMLElement[]>([]);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active');
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll('.reveal');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Hero />
            <Ticker />

            <div className="reveal">
                <Statement />
            </div>

            <div className="reveal">
                <About />
            </div>

            <div className="reveal">
                <Features />
            </div>

            <div className="reveal">
                <SalarySystem />
            </div>

            <div className="reveal">
                <ChallengeSupport />
            </div>

            <div className="reveal flex justify-center py-24 bg-white">
                <div className="text-[12vw] font-montserrat font-bold tracking-tighter text-[#3a533d] opacity-[0.03] leading-none select-none">
                    SALON SIFT
                </div>
            </div>

            <div className="reveal">
                <SalonList />
            </div>

            <div className="reveal">
                <BlogNews />
            </div>

            <div className="reveal">
                <FAQ />
            </div>
        </>
    );
};

export default HomePage;
