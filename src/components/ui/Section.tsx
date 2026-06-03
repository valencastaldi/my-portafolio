import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface SectionProps {
  id: string;
  kicker?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, kicker, title, subtitle, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('relative scroll-mt-24 py-24 sm:py-32', className)}>
      <div className="mx-auto w-full max-w-6xl px-6">
        {(kicker || title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 max-w-2xl"
          >
            {kicker && (
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-xs uppercase tracking-widest text-fg-muted">
                <span className="size-1.5 rounded-full bg-brand-2 shadow-[0_0_10px_var(--color-brand-2)]" />
                {kicker}
              </div>
            )}
            {title && (
              <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-pretty text-base text-fg-muted sm:text-lg">{subtitle}</p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
