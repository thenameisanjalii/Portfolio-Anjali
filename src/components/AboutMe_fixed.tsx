import home_assets from "@/assets/home_assets";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Shield,
} from "lucide-react";

interface AboutProps {
  id?: string;
}

const AboutMe: React.FC<AboutProps> = ({ id }) => {
  return (
    <section id={id}>
      <div className="min-h-screen">
        <div className="mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-theme-neutral-200 dark:bg-theme-neutral-800 border border-theme-neutral-300 dark:border-theme-neutral-700 text-sm font-medium mb-2">
                Full Stack Developer
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="block">Hi, I'm</span>
                    <span className="block bg-gradient-to-r from-theme-primary-500 to-theme-primary-700 bg-clip-text text-transparent">
                      Anjali Chourasia
                    </span>
                  </h1>
                </div>

                <div className="flex-shrink-0">
                  <div className="relative w-28 h-28 md:w-28 md:h-28 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-theme-primary-500/50 ring-4 ring-theme-primary-500/20">
                    <img
                      src={home_assets.myself}
                      alt="Anjali Chourasia"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>

              <p className="text-lg md:text-xl text-theme-neutral-700 dark:text-theme-neutral-300 leading-relaxed">
                A passionate full-stack developer driven by a love for crafting
                seamless digital experiences. I specialize in MERN stack and
                Next.js, and I'm constantly exploring new technologies to bring
                ideas to life through clean, efficient code.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:anjalichourasia636@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="gap-2">
                    <Mail size={18} />
                    Contact Me
                  </Button>
                </a>
                <a
                  href="https://github.com/thenameisanjalii"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="gap-2">
                    <Github size={18} />
                    GitHub
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/thenameisanjalii/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="gap-2">
                    <Linkedin size={18} />
                    LinkedIn
                  </Button>
                </a>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="relative p-6 rounded-2xl bg-theme-neutral-100 dark:bg-theme-neutral-800/30 border border-theme-neutral-300 dark:border-theme-neutral-700 backdrop-blur-sm transition-colors duration-300">
                <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-theme-primary-100 dark:bg-theme-primary-500/20 backdrop-blur-md border border-theme-primary-200 dark:border-theme-primary-500/30 flex items-center justify-center">
                  <Code className="w-8 h-8 text-theme-primary-600 dark:text-theme-primary-400" />
                </div>
                <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full bg-theme-primary-100 dark:bg-theme-primary-400/20 backdrop-blur-md border border-theme-primary-200 dark:border-theme-primary-400/30 flex items-center justify-center">
                  <Database className="w-8 h-8 text-theme-primary-500 dark:text-theme-primary-300" />
                </div>
                <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-theme-primary-200 dark:bg-theme-primary-600/20 backdrop-blur-md border border-theme-primary-300 dark:border-theme-primary-600/30 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-theme-primary-500 dark:text-theme-primary-400" />
                </div>

                <h2 className="text-xl font-semibold mb-3">About Me</h2>
                <p className="text-theme-neutral-700 dark:text-theme-neutral-300 mb-4">
                  I'm currently pursuing MCA at NIT Raipur, with a strong focus
                  on full-stack development using MERN and Next.js. I enjoy
                  building efficient, user-friendly web applications and turning
                  ideas into reality through code.
                </p>
                <p className="text-theme-neutral-700 dark:text-theme-neutral-300 mb-4">
                  I'm passionate about continuous learning, open-source
                  contributions, and building impactful tech projects. I love
                  exploring new tools, growing through collaboration, and beyond
                  coding, I have a strong interest in SEO and digital growth.
                </p>
                <p className="text-theme-primary-600 dark:text-theme-primary-400 font-medium">
                  Let's build something great together!
                </p>

                <div className="mt-4 pt-4 border-t border-theme-neutral-300 dark:border-theme-neutral-700">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 text-sm font-medium text-theme-primary-600 dark:text-theme-primary-400 hover:text-theme-primary-500 dark:hover:text-theme-primary-300 transition-colors"
                  >
                    View my projects
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
