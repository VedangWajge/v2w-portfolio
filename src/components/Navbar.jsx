import { useEffect } from "react"

export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen])

    return (
        <nav className="fixed top-0 w-full z-40 bg-[#0a0a0acc] backdrop-blur-lg border-b border-gray-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-bold font-mono text-white text-xl"> 
                        v2w<span className="text-blue-500">.tech</span>
                    </a>

                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev)=>!prev)}>
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                            Home
                        </a>

                        <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                            About
                        </a>

                        <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                            Projects
                        </a>

                        <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                            Contact
                        </a>

                        <a
                            href="/resume.pdf"
                            download="Vedang_Wajge_Resume.pdf"
                            className="bg-blue-500 text-white px-4 py-2 rounded font-medium transition hover:bg-blue-600 hover:shadow-lg"
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}