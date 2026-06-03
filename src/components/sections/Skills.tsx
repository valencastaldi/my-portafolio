import { motion } from 'framer-motion';
import { useI18n } from '../../i18n/I18nProvider';
import { Section } from '../ui/Section';
import { hardSkills, softSkills, type HardSkill } from '../../data/skills';
import { cn } from '../../lib/cn';

const categories: { key: HardSkill['category']; labelEs: string; labelEn: string }[] = [
  { key: 'backend', labelEs: 'Backend', labelEn: 'Backend' },
  { key: 'frontend', labelEs: 'Frontend', labelEn: 'Frontend' },
  { key: 'data', labelEs: 'Datos', labelEn: 'Data' },
  { key: 'tooling', labelEs: 'Tooling', labelEn: 'Tooling' },
];

function SkillBar({ skill, delay }: { skill: HardSkill; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
      className="rounded-2xl border border-border bg-surface/60 p-4 backdrop-blur transition-colors hover:border-brand/50"
    >
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="text-lg text-brand-2">{skill.icon}</span>
          <span className="text-sm font-medium">{skill.name}</span>
        </div>
        <span className="font-mono text-xs text-fg-dim">{skill.level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-bg/80">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1, delay: delay + 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-brand via-brand-2 to-brand-3"
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  const { t, locale } = useI18n();

  return (
    <Section id="skills" kicker={t.skills.kicker} title={t.skills.title}>
      <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-fg-dim">
        {t.skills.hard}
      </h3>

      <div className="space-y-8">
        {categories.map((cat) => {
          const items = hardSkills.filter((s) => s.category === cat.key);
          if (!items.length) return null;
          return (
            <div key={cat.key}>
              <div className="mb-3 flex items-center gap-2">
                <span className={cn('size-1.5 rounded-full bg-brand-2')} />
                <span className="text-sm font-semibold text-fg">
                  {locale === 'es' ? cat.labelEs : cat.labelEn}
                </span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((s, i) => (
                  <SkillBar key={s.name} skill={s} delay={i * 0.05} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <h3 className="mt-12 mb-4 font-mono text-xs uppercase tracking-widest text-fg-dim">
        {t.skills.soft}
      </h3>

      <div className="flex flex-wrap gap-2">
        {softSkills.map((s, i) => (
          <motion.span
            key={s.label.en}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 text-sm text-fg-muted backdrop-blur hover:text-fg"
          >
            <span className="size-1 rounded-full bg-brand-2" />
            <span>{s.label[locale]}</span>
          </motion.span>
        ))}
      </div>
    </Section>
  );
}
