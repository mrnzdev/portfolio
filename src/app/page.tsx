import { ArrowDown } from "lucide-react";
import { type Project, ProjectCard } from "@/components/project-card";
import { SectionWrapper } from "@/components/section-wrapper";

const projects: Project[] = [
  {
    title: "Aegis",
    eyebrow: "Cybersecurity intelligence",
    description:
      "A full-stack platform for cybersecurity KPI governance, executive reporting, historical measurement, and secure role-based access. Designed and developed end to end—from the interface and data model to authentication, business rules, and automated tests.",
    technologies: [
      "React 19",
      "TypeScript",
      "TanStack Start",
      "PostgreSQL",
      "Better Auth",
      "Recharts",
      "Vitest",
      "Bun",
    ],
    confidential: true,
  },
  {
    title: "Atlas",
    eyebrow: "IT service management",
    description:
      "An internal operations platform connecting support tickets, clients, SLAs, licenses, contracts, and reporting. Built around traceable workflows, clear operational dashboards, and an architecture designed for long-term growth.",
    technologies: [
      "React 19",
      "TypeScript",
      "TanStack Start",
      "PostgreSQL",
      "Drizzle ORM",
      "Cloudflare Workers",
      "Playwright",
      "GitHub Actions",
    ],
    confidential: true,
  },
  {
    title: "Veltro",
    eyebrow: "Sports management",
    description:
      "A web platform that makes it easier to organize amateur football teams and tournaments.",
    technologies: ["TypeScript", "React", "Laravel", "Tailwind CSS", "MySQL"],
    url: "https://veltro.uy",
  },
  {
    title: "InfoPaseos",
    eyebrow: "Tour discovery",
    description:
      "A discovery platform for exploring tours and experiences taking place throughout Uruguay.",
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Supabase",
      "Tailwind CSS",
      "Bun",
    ],
    url: "https://infopaseos.com",
  },
];

const capabilities = [
  {
    label: "Product engineering",
    items: "React, TypeScript, Next.js, TanStack, Astro",
  },
  {
    label: "Backend & data",
    items: "Node.js, Bun, PostgreSQL, Drizzle, Convex, Supabase",
  },
  {
    label: "Interface & quality",
    items: "Tailwind CSS, responsive UI, accessibility, testing, performance",
  },
  {
    label: "Mobile",
    items: "React Native, Expo",
  },
];

export default function RootPage() {
  return (
    <main>
      <header className="sticky top-0 z-50 border-b border-transparent bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/65">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a
            href="#top"
            className="text-sm font-medium tracking-tight"
            aria-label="Go to top"
          >
            mrtnz<span className="text-muted-foreground">.</span>
          </a>
          <nav
            className="flex items-center gap-5 text-xs text-muted-foreground sm:gap-7"
            aria-label="Main navigation"
          >
            <a
              className="nav-link transition-colors hover:text-foreground"
              href="#work"
            >
              Work
            </a>
            <a
              className="nav-link transition-colors hover:text-foreground"
              href="#about"
            >
              About
            </a>
            <a
              className="nav-link transition-colors hover:text-foreground"
              href="#contact"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <SectionWrapper
        id="top"
        className="flex min-h-[calc(100svh-4rem)] flex-col py-10 md:py-12"
      >
        <div className="flex flex-1 items-center py-16">
          <div className="max-w-5xl">
            <p className="mb-6 text-sm text-muted-foreground">
              Software Developer · Montevideo, Uruguay
            </p>
            <h1 className="text-balance text-5xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-7xl md:text-[6.5rem]">
              I build digital products that feel simple and work fast.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
              Focused on user experience, interface design, and performance—from
              the first interaction to the underlying system.
            </p>
          </div>
        </div>

        <a
          href="#work"
          className="flex w-fit items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          Selected work
          <ArrowDown
            className="size-3.5"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </a>
      </SectionWrapper>

      <SectionWrapper id="work">
        <div className="mb-12 flex items-end justify-between md:mb-16">
          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              01 / Work
            </p>
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
              Selected projects
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-xs leading-5 text-muted-foreground md:block">
            Product design and engineering across internal platforms and
            independent projects.
          </p>
        </div>
        <div className="border-b border-border">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="about">
        <div className="grid gap-12 border-t border-border pt-12 md:grid-cols-[1fr_1.6fr] md:gap-20 md:pt-16">
          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              02 / About
            </p>
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
              How I work
            </h2>
          </div>
          <div>
            <p className="max-w-2xl text-xl leading-8 tracking-tight text-foreground/90 md:text-2xl md:leading-9">
              I turn complex requirements into clear, dependable software. My
              work spans product thinking, interface design, and full-stack
              engineering—with care for every detail users can see and every
              decision they cannot.
            </p>
            <dl className="mt-14 grid gap-8 sm:grid-cols-2">
              {capabilities.map((capability) => (
                <div
                  key={capability.label}
                  className="border-t border-border pt-4"
                >
                  <dt className="text-sm text-foreground">
                    {capability.label}
                  </dt>
                  <dd className="mt-2 text-sm leading-6 text-muted-foreground">
                    {capability.items}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </SectionWrapper>

      <footer id="contact" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 pb-8 pt-16 sm:px-8 md:pb-10 md:pt-20">
          <div className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-20">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              03 / Contact
            </p>
            <div>
              <h2 className="max-w-xl text-3xl font-medium leading-tight tracking-tight md:text-4xl">
                Have a project in mind or want to connect?
              </h2>
              <div className="mt-8 border-t border-border pt-5">
                <p className="mb-2 text-xs text-muted-foreground">Email</p>
                <p className="font-mono text-sm tracking-tight text-foreground sm:text-base">
                  fer [at] mrtnz [dot] dev
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex items-center justify-between border-t border-border pt-5 font-mono text-[11px] text-muted-foreground md:mt-20">
            <p>Montevideo, Uruguay</p>
            <p className="font-mono sm:text-right">mrtnz</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
