"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GithubIcon } from "@/components/ui/SocialIcons";
import type { ProjectItem } from "@/lib/types/content";
import { fadeInUp, staggerContainer } from "@/lib/animations/variants";
import { useInViewAnimation } from "@/lib/hooks/useInViewAnimation";
import { getProjectItems } from "@/lib/i18n/content";
import { cn } from "@/lib/utils/cn";
import { getLenis } from "@/components/providers/SmoothScrollProvider";
import { useProjectCarousel, useProjectModal } from "./hooks";
import { projectsStyles } from "./styles";

function ProjectCard({
  project,
  onClick,
  viewLabel,
}: {
  project: ProjectItem;
  onClick: () => void;
  viewLabel: string;
}) {
  return (
    <motion.button
      type="button"
      className={projectsStyles.cardButton}
      onClick={onClick}
      aria-label={viewLabel}
    >
      <Card className={projectsStyles.card}>
        <div className={projectsStyles.cardMedia}>
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 86vw, 360px"
              className={projectsStyles.cardImage}
            />
          ) : null}
          <div
            className={cn(
              projectsStyles.cardGradient,
              `bg-gradient-to-br ${project.gradient}`,
            )}
          />
        </div>

        <div className={projectsStyles.cardContent}>
          <p className={projectsStyles.cardSubtitle}>{project.subtitle}</p>
          <h3 className={projectsStyles.cardTitle}>{project.title}</h3>
          <p className={projectsStyles.cardDescription}>{project.description}</p>

          <div className={projectsStyles.cardTags}>
            {project.technologies.slice(0, 4).map((tech) => (
              <span key={tech} className={projectsStyles.cardTag}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </motion.button>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectItem;
  onClose: () => void;
}) {
  const t = useTranslations("projects");

  useEffect(() => {
    const lenis = getLenis();
    lenis?.stop();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      lenis?.start();
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className={projectsStyles.modalOverlay} />
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={projectsStyles.modalShell}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={t("viewDetails", { title: project.title })}
      >
        <button
          onClick={onClose}
          className={projectsStyles.modalClose}
          aria-label={t("closeModal")}
        >
          <X size={20} />
        </button>

        <div
          className={projectsStyles.modalScroll}
          data-lenis-prevent
          data-lenis-prevent-wheel
          data-lenis-prevent-touch
        >
          {project.image ? (
            <div className="relative -mx-8 -mt-8 md:-mx-12 md:-mt-12 mb-8 h-48 md:h-56 overflow-hidden rounded-t-3xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>
          ) : null}

          <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            {project.title}
          </h3>
          <p className={projectsStyles.modalSubtitle}>{project.subtitle}</p>
          <p className={projectsStyles.modalBody}>{project.longDescription}</p>

          {project.gallery && project.gallery.length > 0 ? (
            <div className="mt-8">
              <h4 className={projectsStyles.modalSectionTitle}>
                {t("appScreens")}
              </h4>
              <div className="mt-4 flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {project.gallery.map((src) => (
                  <div
                    key={src}
                    className="relative h-72 w-36 shrink-0 overflow-hidden rounded-2xl border border-border bg-black/20"
                  >
                    <Image
                      src={src}
                      alt={`${project.title} app`}
                      fill
                      sizes="144px"
                      className="object-cover object-top"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {project.links && project.links.length > 0 ? (
            <div className="mt-8">
              <h4 className={projectsStyles.modalSectionTitle}>{t("websites")}</h4>
              <ul className="mt-3 space-y-2">
                {project.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={projectsStyles.modalLink}
                    >
                      {link.label}
                      <ExternalLink size={12} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {project.technologies.length > 0 ? (
            <div className="mt-8">
              <h4 className={projectsStyles.modalSectionTitle}>
                {t("technologies")}
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className={projectsStyles.modalBadge}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div>
              <h4 className={projectsStyles.modalSectionTitle}>
                {t("responsibilities")}
              </h4>
              <ul className="mt-3 space-y-2">
                {project.responsibilities.map((item) => (
                  <li key={item} className={projectsStyles.modalListItem}>
                    <Check size={14} className="text-accent mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className={projectsStyles.modalSectionTitle}>{t("results")}</h4>
              <ul className="mt-3 space-y-2">
                {project.results.map((item) => (
                  <li key={item} className={projectsStyles.modalListItem}>
                    <Check size={14} className="text-accent mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            {project.github && (
              <Button href={project.github} variant="secondary" size="sm">
                <GithubIcon size={16} /> {t("github")}
              </Button>
            )}
            {project.live && (
              <Button href={project.live} variant="secondary" size="sm">
                <ExternalLink size={16} /> {t("liveDemo")}
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ModalPortal({
  project,
  onClose,
}: {
  project: ProjectItem | null;
  onClose: () => void;
}) {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {project && <ProjectModal project={project} onClose={onClose} />}
    </AnimatePresence>,
    document.body,
  );
}

export function Projects() {
  const t = useTranslations();
  const { ref, inView } = useInViewAnimation();
  const { selectedProject, open, close } = useProjectModal();
  const { trackRef, canPrev, canNext, scrollByCard } = useProjectCarousel();
  const projects = getProjectItems(t, (key) => t.raw(key));

  return (
    <section
      id="projects"
      className={projectsStyles.section}
      aria-label={t("projects.ariaLabel")}
    >
      <div className={projectsStyles.inner}>
        <SectionTitle
          label={t("projects.label")}
          title={t("projects.title")}
          description={t("projects.description")}
          align="center"
        />

        <div ref={ref} className={projectsStyles.carouselShell}>
          <button
            type="button"
            className={projectsStyles.arrowPrev}
            onClick={() => scrollByCard(-1)}
            disabled={!canPrev}
            aria-label={t("projects.previous")}
          >
            <ChevronLeft size={20} />
          </button>

          <motion.div
            ref={trackRef}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
            className={projectsStyles.carousel}
            data-lenis-prevent
            data-lenis-prevent-wheel
            data-lenis-prevent-touch
            onWheel={(event) => {
              const el = trackRef.current;
              if (!el || Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
              el.scrollLeft += event.deltaY;
            }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                data-carousel-item
                className={projectsStyles.carouselItem}
              >
                <ProjectCard
                  project={project}
                  onClick={() => open(project)}
                  viewLabel={t("projects.viewDetails", { title: project.title })}
                />
              </motion.div>
            ))}
          </motion.div>

          <button
            type="button"
            className={projectsStyles.arrowNext}
            onClick={() => scrollByCard(1)}
            disabled={!canNext}
            aria-label={t("projects.next")}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <p className={projectsStyles.moreNote}>{t("projects.moreNote")}</p>
      </div>

      <ModalPortal project={selectedProject} onClose={close} />
    </section>
  );
}
