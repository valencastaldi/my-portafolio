import { motion } from 'framer-motion';
import { useI18n } from '../../i18n/I18nProvider';
import { Section } from '../ui/Section';
import { timeline } from '../../data/timeline';

export function Experience() {
  const { t, locale } = useI18n();

  return (
    <Section
      id="experience"
      kicker={t.experience.kicker}
      title={t.experience.title}
      subtitle={t.experience.subtitle}
    >
      <div className="relative">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-brand/60 via-border to-transparent md:left-1/2 md:-translate-x-1/2" />

        <ol className="space-y-6 md:space-y-10">
          {timeline.map((item, idx) => {
            const isRight = idx % 2 === 0;
            return (
              <motion.li
                key={`${item.year}-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className={`relative grid items-start gap-4 pl-12 md:grid-cols-2 md:gap-8 md:pl-0`}
              >
                <span className="absolute left-0 top-2 grid size-8 place-items-center rounded-full border border-border bg-surface font-mono text-[10px] text-fg-muted shadow-[0_0_24px_-8px_rgba(124,92,255,0.6)] md:left-1/2 md:-translate-x-1/2">
                  <span className="size-2 rounded-full bg-gradient-to-br from-brand to-brand-2" />
                </span>

                <div
                  className={
                    isRight
                      ? 'md:col-start-1 md:pr-12 md:text-right'
                      : 'md:col-start-2 md:pl-12'
                  }
                >
                  <div className="group relative inline-block w-full rounded-2xl border border-border bg-surface/60 p-5 backdrop-blur transition-colors hover:border-brand/50">
                    <div
                      className={`mb-1 flex items-center gap-2 font-mono text-xs text-brand-2 ${
                        isRight ? 'md:justify-end' : 'md:justify-start'
                      }`}
                    >
                      <span>{item.year}</span>
                      <span className="text-fg-dim">/</span>
                      <span className="text-fg-dim">{item.tag}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-fg">{item.title[locale]}</h3>
                    <p className="mt-1 text-sm text-fg-muted">{item.detail[locale]}</p>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
