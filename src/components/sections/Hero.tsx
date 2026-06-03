import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useI18n } from '../../i18n/I18nProvider';
import { profile } from '../../data/profile';

export function Hero() {
  const { t } = useI18n();
  const roles = t.hero.roles;
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIdx((i) => (i + 1) % roles.length), 2400);
    return () => clearInterval(id);
  }, [roles.length]);

  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-32 left-1/4 size-[28rem] rounded-full bg-brand/25 blur-3xl [animation:var(--animate-blob)]" />
      <div
        className="pointer-events-none absolute -top-20 right-0 size-[24rem] rounded-full bg-brand-2/20 blur-3xl [animation:var(--animate-blob)]"
        style={{ animationDelay: '-4s' }}
      />
      <div
        className="pointer-events-none absolute top-40 left-10 size-[20rem] rounded-full bg-brand-3/15 blur-3xl [animation:var(--animate-blob)]"
        style={{ animationDelay: '-8s' }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-xs text-fg-muted backdrop-blur"
        >
          <span className="relative grid size-2 place-items-center">
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/60" />
            <span className="size-2 rounded-full bg-emerald-400" />
          </span>
          {t.hero.eyebrow}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-balance text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {t.hero.title1}{' '}
          <span className="text-gradient">{t.hero.title2}</span>
          <br />
          {t.hero.title3}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 flex items-center gap-3 font-mono text-sm text-fg-muted"
        >
          <span className="text-brand-2">$</span>
          <span>{profile.name} —</span>
          <motion.span
            key={roleIdx}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-fg"
          >
            {roles[roleIdx]}
          </motion.span>
          <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-brand-2" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-fg-muted"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-br from-brand to-brand-2 px-6 py-3 text-sm font-medium text-white shadow-[0_12px_40px_-12px_var(--color-brand)] transition-transform hover:-translate-y-0.5"
          >
            <span className="shimmer-bg absolute inset-0" />
            <span className="relative">{t.hero.ctaPrimary}</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-medium text-fg backdrop-blur transition-colors hover:border-brand/60"
          >
            {t.hero.ctaSecondary}
          </a>

          <div className="ml-2 flex items-center gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid size-10 place-items-center rounded-full border border-border bg-surface/60 text-fg-muted backdrop-blur transition-colors hover:border-brand/60 hover:text-fg"
            >
              <FaGithub />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid size-10 place-items-center rounded-full border border-border bg-surface/60 text-fg-muted backdrop-blur transition-colors hover:border-brand/60 hover:text-fg"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 inline-flex items-center gap-2 font-mono text-xs text-fg-dim hover:text-fg"
        >
          <span className="[animation:var(--animate-float)]">
            <FaArrowDown />
          </span>
          scroll
        </motion.a>
      </div>
    </section>
  );
}
