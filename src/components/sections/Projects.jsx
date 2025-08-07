import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          
          {/* 1st project */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_#3B82F633] transition-all">
              <h3 className="text-xl font-bold text-white mb-2">Job Portal</h3>
              <p className="text-gray-300 mb-4">
                A responsive job portal built to streamline hiring by connecting job seekers and employers with intuitive search, filters, and application features.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "MongoDB", "Express.js", "TailwindCSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_#3B82F633] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 my-4">
                <a
                  href="https://jobportal-8kqh.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-blue-500 text-blue-400 px-4 py-2 rounded hover:bg-blue-900/20 transition-colors"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/VedangWajge/JobPortal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-blue-500 text-blue-400 px-4 py-2 rounded hover:bg-blue-900/20 transition-colors"
                >
                  GitHub
                </a>
              </div>

            </div>

            {/* 2nd project */}
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_#3B82F633] transition-all">
              <h3 className="text-xl font-bold text-white mb-2">E-Yojana</h3>
              <p className="text-gray-300 mb-4">
                Built a Python scraper for government schemes and integrated it with a job portal UI to assist rural job seekers. Data is fetched, stored, and searchable via a custom-built REST API.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "MongoDB", "Express.js", "TailwindCSS", "Python Scraping"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_#3B82F633] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 my-4">
                <a
                  href="https://eyojanagov-1.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-blue-500 text-blue-400 px-4 py-2 rounded hover:bg-blue-900/20 transition-colors"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/VedangWajge/EYojanagov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-blue-500 text-blue-400 px-4 py-2 rounded hover:bg-blue-900/20 transition-colors"
                >
                  GitHub
                </a>
              </div>

            </div>

            {/* 3rd project */}
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_#3B82F633] transition-all">
              <h3 className="text-xl font-bold text-white mb-2">Sentiment Analysis</h3>
              <p className="text-gray-300 mb-4">
                Developed a Flask app to analyze user reviews using HuggingFace’s Roberta and Vader NLP models. Displays real-time sentiment scores with visual dashboards.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "TailwindCSS", "Python", "Flask", "Vader", "Hf-Roberta"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_#3B82F633] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 my-4">
                <a
                  href="https://sentimentanalysis-ex0w.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-blue-500 text-blue-400 px-4 py-2 rounded hover:bg-blue-900/20 transition-colors"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/VedangWajge/SentimentAnalysis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-blue-500 text-blue-400 px-4 py-2 rounded hover:bg-blue-900/20 transition-colors"
                >
                  GitHub
                </a>
              </div>

            </div>

            {/* 4th project */}
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_#3B82F633] transition-all">
              <h3 className="text-xl font-bold text-white mb-2">Personal Portfolio</h3>
              <p className="text-gray-300 mb-4">
                A responsive personal portfolio to hire a good software developer.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "MongoDB", "Express.js", "TailwindCSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_#3B82F633] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
      
              <div className="flex gap-4 my-4">
                <a
                  href="https://v2w-portfolio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-blue-500 text-blue-400 px-4 py-2 rounded hover:bg-blue-900/20 transition-colors"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/VedangWajge/v2w-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-blue-500 text-blue-400 px-4 py-2 rounded hover:bg-blue-900/20 transition-colors"
                >
                  GitHub
                </a>
              </div>



            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
