import "./App.css";
import Hero from "./components/Hero";
import RecentProjects from "./components/RecentProjects";
import Footer from "./components/Footer";
import { TracingBeam } from "./components/ui/tracing-beam";
import Grid from "./components/Grid";
import { CanvasRevealEffectDemo } from "./components/CanvasReveal";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import { LoadingProvider } from "./context/LoadingContext";
import Loader from "./components/ui/Loader";
import { AnimatePresence } from "framer-motion";
import { useLoading } from "./context/LoadingContext";
import { FloatingNav } from "./components/ui/FloatingNavbar";
import { FaHome, FaCode, FaBriefcase, FaUser } from "react-icons/fa";
import AboutMe from "./components/AboutMe";
import Certifications from "./components/Certificates";

// Navigation items
const navItems = [
  {
    name: "Home",
    link: "#",
    icon: <FaHome />,
  },
  {
    name: "About",
    link: "#about",
    icon: <FaHome />,
  },
  {
    name: "Skills",
    link: "#skills",
    icon: <FaCode />,
  },
  {
    name: "Resume",
    link: "#resume",
    icon: <FaUser />,
  },
  {
    name: "Achievements",
    link: "#achievements",
    icon: <FaUser />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <FaBriefcase />,
  },
];

function AppContent() {
  const { isLoading } = useLoading();

  return (
    <>
      <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>
      <FloatingNav navItems={navItems} />
      <main
        className={`dark:bg-black bg-gray-50 min-h-screen flex items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ${
          isLoading ? "pointer-events-none" : ""
        }`}
      >
        <div>
          <TracingBeam className="px-6 h-full">
            <div className="max-w-7xl w-full mx-auto">
              <Hero />
              <AboutMe id="about"/>
              <Grid />
              <Skills id="skills" />
              <Resume id="resume" />
              <Certifications id="achievements"/>
              <RecentProjects id="projects" />
              <CanvasRevealEffectDemo />
              <Footer />
            </div>
          </TracingBeam>
        </div>
      </main>
    </>
  );
}

function App() {
  return (
    <LoadingProvider>
      <AppContent />
    </LoadingProvider>
  );
}

export default App;
