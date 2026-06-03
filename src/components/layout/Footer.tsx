import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useI18n } from '../../i18n/I18nProvider';
import { profile } from '../../data/profile';

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-fg-muted">
          © {year} {profile.name}. {t.footer.rights}
        </p>
        <p className="font-mono text-xs text-fg-dim">{t.footer.built}</p>
        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid size-9 place-items-center rounded-lg border border-border bg-surface/60 text-fg-muted transition-colors hover:border-brand/60 hover:text-fg"
          >
            <FaGithub />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid size-9 place-items-center rounded-lg border border-border bg-surface/60 text-fg-muted transition-colors hover:border-brand/60 hover:text-fg"
          >
            <FaLinkedin />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="grid size-9 place-items-center rounded-lg border border-border bg-surface/60 text-fg-muted transition-colors hover:border-brand/60 hover:text-fg"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
