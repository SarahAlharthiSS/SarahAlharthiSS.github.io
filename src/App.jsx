import { useEffect, useState } from "react";
import { MotionConfig, AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { content } from "./content";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function getInitialLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "ar" || saved === "en") return saved;
  } catch {}
  return "en";
}

export default function App() {
  const [lang, setLang] = useState(getInitialLang);
  const t = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
    document.body.classList.toggle("is-ar", lang === "ar");
    try {
      localStorage.setItem("lang", lang);
    } catch {}
  }, [lang, t.dir]);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <MotionConfig reducedMotion="user">
      <motion.div className="progress" style={{ scaleX: progress }} aria-hidden="true" />
      <Nav t={t} onToggleLang={() => setLang(lang === "ar" ? "en" : "ar")} />
      <AnimatePresence mode="wait">
        <motion.main
          key={lang}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <Hero t={t} />
          <About t={t} />
          <Experience t={t} />
          <Projects t={t} />
          <Skills t={t} />
          <Contact t={t} />
        </motion.main>
      </AnimatePresence>
      <Footer t={t} />
    </MotionConfig>
  );
}
