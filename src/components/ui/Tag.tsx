import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface TagProps {
  children: ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-surface/60 px-2.5 py-1 font-mono text-[11px] text-fg-muted transition-colors hover:border-brand/50 hover:text-fg',
        className,
      )}
    >
      {children}
    </span>
  );
}
