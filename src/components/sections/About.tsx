import { motion } from 'framer-motion';
import { useI18n } from '../../i18n/I18nProvider';
import { Section } from '../ui/Section';
import perfilImg from '../../assets/img/perfil.jpg';

export function About() {
  const { t } = useI18n();

  return (
    <Section id="about" kicker={t.about.kicker} title={t.about.title}>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-brand via-brand-2 to-brand-3 opacity-60 blur-xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface">
            <img
              src={perfilImg}
              alt={t.about.title}
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-white/10 bg-bg/70 px-4 py-3 backdrop-blur">
              <div>
                <div className="font-semibold">Valentino Castaldi</div>
                <div className="font-mono text-xs text-fg-muted">@valencastaldi</div>
              </div>
              <div className="size-2.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
            </div>
          </div>
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-pretty text-lg leading-relaxed text-fg-muted"
          >
            {t.about.p1}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-pretty text-lg leading-relaxed text-fg-muted"
          >
            {t.about.p2}
          </motion.p>

          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2"
          >
            {t.about.facts.map((f) => (
              <div key={f.k} className="bg-surface/80 p-4">
                <dt className="font-mono text-xs uppercase tracking-wider text-fg-dim">{f.k}</dt>
                <dd className="mt-1 text-sm font-medium text-fg">{f.v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </Section>
  );
}
