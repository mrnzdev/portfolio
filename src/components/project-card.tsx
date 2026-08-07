import { ArrowUpRight, LockKeyhole } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  url?: string;
  github?: string;
  eyebrow?: string;
  confidential?: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="project-row group grid gap-6 border-t border-border py-8 md:grid-cols-[4rem_1fr_1.2fr] md:gap-8 md:py-10">
      <p className="font-mono text-xs text-muted-foreground">
        {String(index + 1).padStart(2, "0")}
      </p>

      <div className="space-y-3">
        {project.eyebrow && (
          <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
            {project.eyebrow}
          </p>
        )}
        <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-opacity hover:opacity-60"
            >
              {project.title}
              <ArrowUpRight
                className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </a>
          ) : (
            project.title
          )}
        </h3>
        {project.confidential && (
          <p className="flex items-center gap-2 text-xs text-muted-foreground">
            <LockKeyhole
              className="size-3.5"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            Private internal application
          </p>
        )}
      </div>

      <div className="space-y-6">
        <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
          {project.description}
        </p>
        <ul
          className="flex flex-wrap gap-x-4 gap-y-2"
          aria-label="Technologies"
        >
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="font-mono text-[11px] text-foreground/65"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
