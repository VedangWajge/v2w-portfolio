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

                <div className='flex justify-center space-x-4'>
                    <a href="#projects" className='bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
                             hover:-translate-y-0.5 hover:shadow-[0_0_15px_#3b82f666]'>
                        View Projects
                    </a>
                    <a href="#contact" className='border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition all duration-200
                             hover:-translate-y-0.5 hover:shadow-[0_0_15px_#3b82f633] hover:bg-blue-500/10'>
                        Contact Me
                    </a>
                </div>
            </div>
        </RevealOnScroll>
        </section>
    )
}
