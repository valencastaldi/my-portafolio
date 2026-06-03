import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight, FaEnvelopeOpenText } from 'react-icons/fa';
import { useI18n } from '../../i18n/I18nProvider';
import { Section } from '../ui/Section';
import { Tag } from '../ui/Tag';
import { projects, type Project, type GalleryShot } from '../../data/projects';

function normalizeShot(item: string | GalleryShot): GalleryShot {
  return typeof item === 'string' ? { src: item } : item;
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const { t, locale } = useI18n();

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-surface/60 backdrop-blur transition-all hover:-translate-y-1 hover:border-brand/50 hover:shadow-[0_30px_60px_-30px_rgba(124,92,255,0.45)]"
    >
      <button type="button" onClick={onOpen} className="relative block aspect-[16/10] overflow-hidden">
        <img
          src={project.cover}
          alt={project.title}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-bg/40 to-transparent" />
        {project.highlight && (
          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-brand-3/40 bg-bg/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-brand-3 backdrop-blur">
            <span className="size-1.5 rounded-full bg-brand-3 shadow-[0_0_8px_var(--color-brand-3)]" />
            {t.projects.featured}
          </span>
        )}
      </button>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-1 text-sm text-fg-muted">{project.tagline[locale]}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 pt-4">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs text-fg-muted transition-colors hover:border-brand/60 hover:text-fg"
            >
              <FaGithub /> {t.projects.viewCode}
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-brand to-brand-2 px-3.5 py-1.5 text-xs font-medium text-white"
            >
              <FaExternalLinkAlt /> {t.projects.viewLive}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const { t, locale } = useI18n();
  const [activeIdx, setActiveIdx] = useState(0);
  const shots: GalleryShot[] = (project.gallery ?? [project.cover]).map(normalizeShot);
  const images = shots;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setActiveIdx((i) => (i + 1) % images.length);
      if (e.key === 'ArrowLeft') setActiveIdx((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [images.length, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] grid place-items-center bg-black/80 p-4 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.96, y: 16 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.96, y: 16 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative grid w-full max-w-5xl gap-0 overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl md:grid-cols-[1.4fr_1fr]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 grid size-9 place-items-center rounded-full border border-border bg-bg/70 text-fg-muted backdrop-blur hover:text-fg"
        >
          <FaTimes />
        </button>

        <div className="relative bg-black">
          <img
            src={shots[activeIdx].src}
            alt={project.title}
            className="aspect-video w-full object-cover md:aspect-auto md:h-full"
          />
          {shots[activeIdx].blur?.map((r, i) => (
            <div
              key={`${activeIdx}-${i}`}
              className="pointer-events-none absolute rounded-sm"
              style={{
                top: r.top,
                left: r.left,
                width: r.width,
                height: r.height,
                backdropFilter: 'blur(16px) saturate(120%)',
                WebkitBackdropFilter: 'blur(16px) saturate(120%)',
                background: 'rgba(15,23,42,0.35)',
                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)',
              }}
            />
          ))}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => setActiveIdx((i) => (i - 1 + images.length) % images.length)}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur transition-all hover:scale-105 hover:border-white/40 hover:bg-black/70"
              >
                <FaChevronLeft className="text-sm" />
              </button>
              <button
                type="button"
                onClick={() => setActiveIdx((i) => (i + 1) % images.length)}
                aria-label="Next image"
                className="absolute right-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur transition-all hover:scale-105 hover:border-white/40 hover:bg-black/70"
              >
                <FaChevronRight className="text-sm" />
              </button>

              <div className="absolute right-3 top-3 rounded-full border border-white/15 bg-black/60 px-2.5 py-1 font-mono text-[11px] text-white/80 backdrop-blur">
                {activeIdx + 1} / {images.length}
              </div>

              <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveIdx(i)}
                    aria-label={`Image ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === activeIdx ? 'w-6 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="flex max-h-[80vh] flex-col overflow-y-auto p-6 sm:p-8">
          <div className="font-mono text-xs uppercase tracking-widest text-brand-2">
            {project.tagline[locale]}
          </div>
          <h3 className="mt-2 text-3xl font-bold tracking-tight">{project.title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-fg-muted">
            {project.description[locale]}
          </p>

          <div className="mt-6">
            <div className="mb-2 font-mono text-xs uppercase tracking-widest text-fg-dim">
              {t.projects.stack}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-fg-muted hover:border-brand/60 hover:text-fg"
              >
                <FaGithub /> {t.projects.viewCode}
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-brand to-brand-2 px-4 py-2 text-sm font-medium text-white"
              >
                <FaExternalLinkAlt /> {t.projects.viewLive}
              </a>
            )}
            {project.learnMore && (
              <a
                href={`mailto:${project.learnMore.email}?subject=${encodeURIComponent(
                  project.learnMore.subject[locale],
                )}&body=${encodeURIComponent(project.learnMore.body[locale])}`}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-brand to-brand-2 px-4 py-2 text-sm font-medium text-white shadow-[0_10px_30px_-10px_var(--color-brand)]"
              >
                <FaEnvelopeOpenText /> {t.projects.learnMore}
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const { t } = useI18n();
  const [active, setActive] = useState<Project | null>(null);

  return (
    <Section id="projects" kicker={t.projects.kicker} title={t.projects.title}>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} onOpen={() => setActive(p)} />
        ))}
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </Section>
  );
}
