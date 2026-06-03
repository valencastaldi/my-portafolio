import { motion } from 'framer-motion';
import { useI18n } from '../../i18n/I18nProvider';
import { cn } from '../../lib/cn';

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useI18n();
  const isEs = locale === 'es';

  return (
    <div
      role="group"
      aria-label="Language switcher"
      className={cn(
        'relative inline-flex items-center gap-1 rounded-full border border-border bg-surface/70 p-1 font-mono text-xs backdrop-blur',
        className,
      )}
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 38 }}
        className="absolute inset-y-1 w-[calc(50%-0.25rem)] rounded-full bg-gradient-to-br from-brand/80 to-brand-2/80 shadow-[0_4px_18px_-4px_var(--color-brand)]"
        style={{ left: isEs ? '0.25rem' : 'calc(50% + 0rem)' }}
      />
      <button
        type="button"
        onClick={() => setLocale('es')}
        className={cn(
          'relative z-10 rounded-full px-3 py-1 transition-colors',
          isEs ? 'text-white' : 'text-fg-muted hover:text-fg',
        )}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLocale('en')}
        className={cn(
          'relative z-10 rounded-full px-3 py-1 transition-colors',
          !isEs ? 'text-white' : 'text-fg-muted hover:text-fg',
        )}
      >
        EN
      </button>
    </div>
  );
}
