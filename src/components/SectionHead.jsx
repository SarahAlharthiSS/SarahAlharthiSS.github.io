import { motion } from "motion/react";
import { fadeUp, stagger, inView } from "./motion";

export default function SectionHead({ eyebrow, title, color = "#FF377A", light = false }) {
  return (
    <motion.div className="section-head" variants={stagger(0.1)} {...inView}>
      <motion.span className="eyebrow" variants={fadeUp}>
        <motion.span
          className="eyebrow__bar"
          style={{ background: color }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        {eyebrow}
      </motion.span>
      <motion.h2 className={`h2 display ${light ? "is-light" : ""}`} variants={fadeUp}>
        {title}
      </motion.h2>
    </motion.div>
  );
}
