import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { LINKS, FORMSPREE_ID } from "../config";
import { GitHubIcon, LinkedInIcon, SendIcon } from "./Icons";
import { fadeUp, stagger, inView } from "./motion";

export default function Contact({ t }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error | invalid

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("invalid");
      return;
    }

    // No Formspree ID → open the visitor's email app with everything filled in
    if (!FORMSPREE_ID) {
      const subject = `${t.dir === "rtl" ? "رسالة من البورتفوليو" : "Portfolio message"} — ${form.name}`;
      const body = `${form.message}\n\n— ${form.name} (${form.email})`;
      window.location.href = `mailto:${LINKS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        // "email" is used by Formspree as the reply-to address; "_subject" sets the email subject
        body: JSON.stringify({ ...form, _subject: `New portfolio message from ${form.name}` }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const message = { sent: t.fSent, error: t.fError, invalid: t.fRequired }[status];

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          className="contact"
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div className="contact__text" variants={stagger(0.1, 0.2)} {...inView}>
            <motion.h2 className="h2 display" variants={fadeUp}>
              {t.contactTitle}
            </motion.h2>
            <motion.p className="lead" variants={fadeUp}>
              {t.contactText}
            </motion.p>
            <motion.div className="contact__links" variants={fadeUp}>
              <motion.a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn--ink" whileHover={{ y: -3 }}>
                <LinkedInIcon /> LinkedIn
              </motion.a>
              <motion.a href={LINKS.github || "#"} target="_blank" rel="noopener noreferrer" className="btn btn--ink" whileHover={{ y: -3 }}>
                <GitHubIcon /> GitHub
              </motion.a>
            </motion.div>
          </motion.div>

          <form className="form" onSubmit={onSubmit} noValidate>
            <div className="field">
              <label htmlFor="c-name">{t.fName}</label>
              <input id="c-name" type="text" autoComplete="name" value={form.name} onChange={update("name")} />
            </div>
            <div className="field">
              <label htmlFor="c-email">{t.fEmail}</label>
              <input id="c-email" type="email" dir="ltr" autoComplete="email" value={form.email} onChange={update("email")} />
            </div>
            <div className="field">
              <label htmlFor="c-msg">{t.fMsg}</label>
              <textarea id="c-msg" rows={5} value={form.message} onChange={update("message")} />
            </div>
            <motion.button
              type="submit"
              className="btn btn--pink btn--lg form__submit"
              disabled={status === "sending"}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {status === "sending" ? t.fSending : t.fSend}
              <motion.span
                style={{ display: "inline-flex", transform: t.dir === "rtl" ? "scaleX(-1)" : "none" }}
                animate={status === "sending" ? { x: [0, 6, 0] } : {}}
                transition={{ repeat: Infinity, duration: 0.8 }}
              >
                <SendIcon />
              </motion.span>
            </motion.button>
            <AnimatePresence mode="wait">
              {message && (
                <motion.p
                  key={status}
                  className={`form__status form__status--${status}`}
                  role="status"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  {message}
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
