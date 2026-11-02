import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { LINKS } from "../config";
import { GitHubIcon, MenuIcon, CloseIcon } from "./Icons";
import { ease } from "./motion";

export default function Nav({ t, onToggleLang }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const github = LINKS.github || "#";

  return (
    <motion.header
      className={`nav ${scrolled ? "nav--scrolled" : ""}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease }}
    >
      <nav className="container nav__inner">
        <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
          <motion.span className="nav__logo" whileHover={{ scale: 1.12, rotate: 72 }} aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M12 2.5l2.9 6 6.6.8-4.9 4.5 1.3 6.5L12 17l-5.9 3.3 1.3-6.5L2.5 9.3l6.6-.8L12 2.5z"
                fill="#212121"
                stroke="#212121"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </motion.span>
          <span className="display">{t.name}</span>
        </a>

        <div className="nav__links">
          {t.nav.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="nav__link">
              {label}
            </a>
          ))}
        </div>

        <div className="nav__actions">
          <motion.button
            type="button"
            className="btn btn--ghost btn--sm"
            onClick={onToggleLang}
            aria-label={t.langAria}
            whileTap={{ scale: 0.92 }}
          >
            {t.langLabel}
          </motion.button>
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--pink btn--sm nav__gh"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <GitHubIcon /> GitHub
          </motion.a>
          <button
            type="button"
            className="nav__burger"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? t.menuClose : t.menuOpen}
            aria-expanded={open}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ clipPath: "circle(0% at 50% 0%)" }}
            animate={{ clipPath: "circle(150% at 50% 0%)" }}
            exit={{ clipPath: "circle(0% at 50% 0%)" }}
            transition={{ duration: 0.5, ease }}
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } } }}
            >
              {t.nav.map(([id, label], i) => (
                <motion.li key={id} variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}>
                  <a href={`#${id}`} onClick={() => setOpen(false)} className="mobile-menu__link display">
                    <span className="mobile-menu__dot" style={{ background: ["#FFD034", "#1F9AFF", "#FF377A", "#FFD034", "#1F9AFF"][i] }} />
                    {label}
                  </a>
                </motion.li>
              ))}
              <motion.li variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}>
                <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn--pink">
                  <GitHubIcon /> GitHub
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
