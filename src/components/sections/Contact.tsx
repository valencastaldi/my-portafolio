import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaRegCopy, FaCheck } from 'react-icons/fa';
import { useI18n } from '../../i18n/I18nProvider';
import { Section } from '../ui/Section';
import { profile } from '../../data/profile';

export function Contact() {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* ignore */
    }
  };

  return (
    <Section
      id="contact"
      kicker={t.contact.kicker}
      title={t.contact.title}
      subtitle={t.contact.subtitle}
    >
      <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/60 p-8 backdrop-blur sm:p-12">
        <div className="pointer-events-none absolute -left-20 -top-20 size-64 rounded-full bg-brand/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 -bottom-16 size-72 rounded-full bg-brand-2/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-fg-dim">email</div>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="text-2xl font-semibold tracking-tight text-fg hover:text-brand-2 sm:text-3xl"
              >
                {profile.email}
              </a>
              <button
                type="button"
                onClick={copy}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-bg/60 px-3 py-1.5 text-xs text-fg-muted backdrop-blur hover:border-brand/60 hover:text-fg"
              >
                {copied ? (
                  <>
                    <FaCheck className="text-emerald-400" /> {t.contact.copied}
                  </>
                ) : (
                  <>
                    <FaRegCopy /> {t.contact.copyEmail}
                  </>
                )}
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <motion.a
                whileHover={{ y: -2 }}
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-brand to-brand-2 px-5 py-2.5 text-sm font-medium text-white shadow-[0_12px_36px_-12px_var(--color-brand)]"
              >
                <FaEnvelope /> {t.contact.sendEmail}
              </motion.a>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-1">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-border bg-bg/40 p-4 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-brand/50"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-surface text-lg text-fg">
                  <FaGithub />
                </span>
                <div>
                  <div className="text-sm font-semibold">GitHub</div>
                  <div className="font-mono text-xs text-fg-dim">{profile.handle}</div>
                </div>
              </div>
              <span className="text-fg-dim transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-border bg-bg/40 p-4 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-brand/50"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-surface text-lg text-fg">
                  <FaLinkedin />
                </span>
                <div>
                  <div className="text-sm font-semibold">LinkedIn</div>
                  <div className="font-mono text-xs text-fg-dim">/in/valentinocastaldi</div>
                </div>
              </div>
              <span className="text-fg-dim transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
