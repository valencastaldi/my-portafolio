import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useI18n } from '../../i18n/I18nProvider';
import { useActiveSection } from '../../hooks/useActiveSection';
import { LanguageToggle } from './LanguageToggle';
import { cn } from '../../lib/cn';

const SECTIONS = ['about', 'experience', 'projects', 'skills', 'services', 'contact'] as const;

export function Navbar() {
  const { t } = useI18n();
  const active = useActiveSection([...SECTIONS]);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = SECTIONS.map((id) => ({ id, label: t.nav[id] }));

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'py-2' : 'py-4',
      )}
    >
      <div
        className={cn(
          'mx-auto flex w-[min(1100px,calc(100%-1.5rem))] items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-300',
          scrolled
            ? 'border-border bg-bg/70 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.5)] backdrop-blur-xl'
            : 'border-transparent bg-transparent',
        )}
      >
        <a href="#top" className="group flex items-center gap-2 font-mono text-sm font-semibold">
          <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand-2 text-white shadow-[0_6px_20px_-6px_var(--color-brand)] transition-transform group-hover:rotate-6">
            VC
          </span>
          <span className="hidden text-fg sm:inline">valentino<span className="text-fg-muted">.dev</span></span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={cn(
                'relative rounded-lg px-3 py-1.5 text-sm transition-colors',
                active === l.id ? 'text-fg' : 'text-fg-muted hover:text-fg',
              )}
            >
              {active === l.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 -z-10 rounded-lg bg-surface-hi"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{l.label}</span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-to-br from-brand to-brand-2 px-4 py-1.5 text-sm font-medium text-white shadow-[0_8px_24px_-8px_var(--color-brand)] transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            {t.nav.cta}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid size-9 place-items-center rounded-lg border border-border bg-surface/60 text-fg md:hidden"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 w-[min(1100px,calc(100%-1.5rem))] rounded-2xl border border-border bg-bg/90 p-3 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'rounded-lg px-3 py-2.5 text-sm transition-colors',
                    active === l.id
                      ? 'bg-surface-hi text-fg'
                      : 'text-fg-muted hover:bg-surface/60 hover:text-fg',
                  )}
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
