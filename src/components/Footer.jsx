import { motion } from "motion/react";
import { ArrowUpIcon } from "./Icons";

const bars = ["#FFD034", "#1F9AFF", "#FF377A", "#FFFFFF"];

export default function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="display footer__name">{t.name}</span>
        <div className="footer__bars" aria-hidden="true">
          {bars.map((c, i) => (
            <motion.span
              key={c}
              style={{ background: c }}
              animate={{ scaleX: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
            />
          ))}
        </div>
        <div className="footer__end">
          <span>{t.footer}</span>
          <motion.a href="#top" className="footer__top" aria-label={t.backTop} whileHover={{ y: -4 }}>
            <ArrowUpIcon />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
