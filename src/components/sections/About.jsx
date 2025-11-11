import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = ["React", "JavaScript", "Typescript", "TailwindCSS", "Next.js", "Angular"];
    const backendSkills = ["Node.js", "Django", "MongoDB", "Express.js", "Spring Boot", "FastAPI"];

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
        <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        Passionate developer with expertise in building scalable web applications and creating innovative solutions.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                      "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                      "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong> B.E. in Information Technology </strong> - Vivekanand Education Society's Institute Of Technology (2022 - 2026)
                            </li>
                            <li>
                                Relevant Coursework: Data Structures, Web Developement, Database Management, Cloud Computing, AI/ML
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">
                                    Python/Django Intern @ XIRCLS
                                </h4>
                                <p className="text-sm text-gray-400">(Sep 2024 - Dec 2024)</p>
                                <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                                    <li>Developed RESTful APIs using Django and Python for client-server communication.</li>
                                    <li>Built custom APIs for Meta Leads and integrated Zoho CRM for automation.</li>
                                    <li>Connected Shopify APIs and Webhooks for order management and supply chain efficiency.</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
        </section>
    );
};