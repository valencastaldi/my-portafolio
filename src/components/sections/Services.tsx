import { motion } from 'framer-motion';
import { FaServer, FaLaptopCode, FaDatabase, FaBolt } from 'react-icons/fa';
import { useI18n } from '../../i18n/I18nProvider';
import { Section } from '../ui/Section';

const icons = [<FaServer />, <FaLaptopCode />, <FaDatabase />, <FaBolt />];

export function Services() {
  const { t } = useI18n();

  return (
    <Section
      id="services"
      kicker={t.services.kicker}
      title={t.services.title}
      subtitle={t.services.subtitle}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.services.items.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-surface/60 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-brand/50"
          >
            <div className="absolute -right-12 -top-12 size-32 rounded-full bg-brand/10 blur-2xl transition-all group-hover:bg-brand/20" />
            <div className="relative">
              <div className="grid size-11 place-items-center rounded-xl border border-border bg-bg/60 text-lg text-brand-2 transition-colors group-hover:border-brand/40 group-hover:text-brand">
                {icons[i % icons.length]}
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
