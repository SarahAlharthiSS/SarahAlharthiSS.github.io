import { motion } from "motion/react";
import SectionHead from "./SectionHead";
import { fadeUp, stagger, inView } from "./motion";
import { GradCapIcon, PinIcon, GlobeIcon } from "./Icons";

const colors = ["#FFD034", "#1F9AFF", "#FF377A"];
const icons = [GradCapIcon, PinIcon, GlobeIcon];

export default function About({ t }) {
  return (
    <section id="about" className="section">
      <div className="container about">
        <div className="about__text">
          <SectionHead eyebrow={t.aboutEyebrow} title={t.aboutTitle} />
          <motion.p className="lead" variants={fadeUp} {...inView}>
            {t.aboutText}
          </motion.p>
        </div>
        <motion.div className="about__facts" variants={stagger(0.12)} {...inView}>
          {t.facts.map(([label, value, sub], i) => {
            const Icon = icons[i];
            return (
            <motion.div key={label} className="fact" variants={fadeUp} whileHover={{ x: t.dir === "rtl" ? -6 : 6 }}>
              <motion.span
                className="fact__swatch"
                style={{ background: colors[i] }}
                whileHover={{ rotate: [0, -12, 12, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                aria-hidden="true"
              >
                <Icon />
              </motion.span>
              <div>
                <span className="fact__label">{label}</span>
                <span className="fact__value">{value}</span>
                {sub && <span className="fact__sub">{sub}</span>}
              </div>
            </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
