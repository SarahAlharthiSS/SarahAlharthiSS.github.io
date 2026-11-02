import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import SectionHead from "./SectionHead";
import { fadeUp, stagger, inView } from "./motion";

export default function Experience({ t }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="section section--blue">
      <div className="container">
        <SectionHead eyebrow={t.expEyebrow} title={t.expTitle} color="#212121" />
        <div className="timeline" ref={ref}>
          <motion.span className="timeline__line" style={{ scaleY: lineScale }} aria-hidden="true" />
          {t.jobs.map((job) => (
            <motion.article
              key={job.role}
              className="job"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <motion.span
                className="job__dot"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.2 }}
                aria-hidden="true"
              />
              <div className="job__meta">
                <div className="job__pills">
                  <span className="pill pill--ink">{job.date}</span>
                  {job.program && <span className="pill pill--pink">{job.program}</span>}
                </div>
                <h3 className="job__role">{job.role}</h3>
                <span className="job__org">{job.org}</span>
              </div>
              <motion.ul className="job__points" variants={stagger(0.1, 0.2)} {...inView}>
                {job.points.map((p) => (
                  <motion.li key={p} variants={fadeUp}>
                    {p}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
