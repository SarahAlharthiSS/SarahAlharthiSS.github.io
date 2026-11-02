import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import SectionHead from "./SectionHead";
import { shared } from "../content";
import { stagger, inView } from "./motion";
import { PlayIcon, CodeIcon, ExternalIcon, GitHubIcon } from "./Icons";

function TiltCard({ children, color, fg }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });

  const onMove = (e) => {
    if (e.pointerType !== "mouse") return; // no tilt on touch screens
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.article
      className={`project ${fg === "#FFFFFF" ? "project--dark" : ""}`}
      style={{ rotateX: rx, rotateY: ry, "--accent": color, "--accent-fg": fg }}
      onPointerMove={onMove}
      onPointerLeave={reset}
      variants={{
        hidden: { opacity: 0, y: 60, scale: 0.96 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
      }}
      whileHover={{ y: -8 }}
    >
      {children}
    </motion.article>
  );
}

export default function Projects({ t }) {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  // Mobile: cards scroll sideways — track which one is in view for the dots
  const onScroll = () => {
    const el = trackRef.current;
    if (!el || !el.firstElementChild) return;
    const step = el.firstElementChild.getBoundingClientRect().width + 16;
    setActive(Math.min(t.projects.length - 1, Math.round(Math.abs(el.scrollLeft) / step)));
  };

  const goTo = (i) => {
    const el = trackRef.current;
    if (!el || !el.firstElementChild) return;
    const step = el.firstElementChild.getBoundingClientRect().width + 16;
    const sign = t.dir === "rtl" ? -1 : 1; // RTL scrolls toward negative values
    el.scrollTo({ left: sign * i * step, behavior: "smooth" });
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHead eyebrow={t.projEyebrow} title={t.projTitle} color="#FFD034" />
        <motion.div className="projects" ref={trackRef} onScroll={onScroll} variants={stagger(0.15)} {...inView}>
          {t.projects.map((p, i) => (
            <TiltCard key={shared.projectTitles[i]} color={shared.projectColors[i]} fg={shared.projectFg[i]}>
              <div className="project__top">
                <span className="project__num" aria-hidden="true">
                  0{i + 1}
                </span>
                <span className="project__kind">{p.kind}</span>
                <h3 className="project__title" dir="ltr">
                  {shared.projectTitles[i]}
                </h3>
              </div>
              <div className="project__body">
                <p>{p.desc}</p>
                <ul>
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <div className="tags">
                  {shared.projectTags[i].map((tag) => (
                    <span key={tag} className="tag" dir="ltr">
                      {tag}
                    </span>
                  ))}
                </div>
                {shared.projectLinks[i] && (
                  <motion.a
                    href={shared.projectLinks[i][0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project__link"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    {{ linkDemo: <PlayIcon />, linkNotebook: <CodeIcon />, linkGithub: <GitHubIcon /> }[shared.projectLinks[i][1]]}
                    {t[shared.projectLinks[i][1]]}
                    <span className="project__arrow" aria-hidden="true">
                      <ExternalIcon />
                    </span>
                  </motion.a>
                )}
              </div>
            </TiltCard>
          ))}
        </motion.div>
        <div className="projects__dots" role="tablist" aria-label={t.projTitle}>
          {t.projects.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={active === i}
              aria-label={`${i + 1} / ${t.projects.length}`}
              className={`projects__dot ${active === i ? "is-active" : ""}`}
              style={{ "--accent": shared.projectColors[i] }}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
