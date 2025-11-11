import React from 'react'
import {RevealOnScroll} from '../RevealOnScroll'

export const Home = () => {
    return (
        <section id="home" className='min-h-screen flex items-center justify-center relative'>
            <RevealOnScroll>
            <div className='text-center z-10 px-4'>
                <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight'>
                    Hi, I am Vedang Wajge
                </h1>

                <p className='text-gray-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed'>
                    I'm a software and web developer who enjoys building clean, scalable applications that combine solid engineering with intuitive design. My aim is to deliver high-performance solutions that users love.
                </p>

                <div className='flex justify-center gap-4 flex-wrap'>
                    <a href="#projects" className='bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden
                             hover:-translate-y-0.5 hover:shadow-[0_0_15px_#3b82f666]'>
                        View Projects
                    </a>
                    <a href="#contact" className='border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition all duration-200
                             hover:-translate-y-0.5 hover:shadow-[0_0_15px_#3b82f633] hover:bg-blue-500/10'>
                        Contact Me
                    </a>
                    <a
                        href="/resume.pdf"
                        download="Vedang_Wajge_Resume.pdf"
                        className='border border-cyan-500/50 text-cyan-400 py-3 px-6 rounded font-medium transition all duration-200
                             hover:-translate-y-0.5 hover:shadow-[0_0_15px_#06b6d433] hover:bg-cyan-500/10 flex items-center gap-2'>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download Resume
                    </a>
                </div>
            </div>
        </RevealOnScroll>
        </section>
    )
}
