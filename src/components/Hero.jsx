import { motion } from "motion/react";
import { LINKS } from "../config";
import { LinkedInIcon } from "./Icons";
import { ease, fadeUp, stagger } from "./motion";

export default function Hero({ t }) {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <motion.div className="hero__text" initial="hidden" animate="show" variants={stagger(0.12, 0.25)}>
          <h1 className="hero__title display">
            <motion.span className="line" variants={fadeUp}>
              {t.h1a}
            </motion.span>
            <motion.span className="line" variants={fadeUp}>
              {t.h1b}{" "}
              <span className="hero__hl">
                {t.h1hl}
                <motion.span
                  className="hero__underline"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1, ease }}
                  aria-hidden="true"
                />
              </span>{" "}
              {t.h1c}
            </motion.span>
          </h1>

          <motion.p className="hero__desc" variants={fadeUp}>
            {t.heroDesc}
          </motion.p>

          <motion.div className="hero__ctas" variants={fadeUp}>
            <motion.a href="#projects" className="btn btn--yellow btn--lg" whileHover={{ y: -3 }} whileTap={{ scale: 0.96 }}>
              {t.ctaProjects}
            </motion.a>
            <motion.a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline btn--lg"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.96 }}
            >
              <LinkedInIcon size={20} /> LinkedIn
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <span>{t.scroll}</span>
        <motion.span
          className="hero__mouse"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          aria-hidden="true"
        />
      </motion.a>
    </section>
  );
}
