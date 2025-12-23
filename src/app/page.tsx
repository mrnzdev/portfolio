import { type Project, ProjectCard } from "@/components/project-card";
import { SectionWrapper } from "@/components/section-wrapper";
import { Badge } from "@/components/ui/badge";

const projects: Project[] = [
  {
    title: "Veltro",
    description:
      "Web platform for managing amateur football teams and tournaments.",
    image: "/image.png",
    technologies: [
      "TypeScript",
      "React",
      "PHP",
      "Laravel",
      "Tailwind CSS",
      "MySQL",
    ],
    url: "https://veltro.uy",
  },
  {
    title: "Cuanto Vamos",
    description: "Web app for keeping track of points while playing Truco.",
    image: "/image.png",
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Motion",
      "Bun",
    ],
    url: "https://cuanto-vamos.vercel.app",
  },
  {
    title: "InfoPaseos",
    description:
      "Web platform that allows people to explore and find all the tours that take place all over Uruguay.",
    image: "/image.png",
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Supabase",
      "Tailwind CSS",
      "Bun",
    ],
  },
];

const skills = {
  Frontend: [
    "React",
    "TypeScript",
    "Next.js",
    "Astro",
    "TanStack",
    "Tailwind CSS",
  ],
  Backend: ["Node.js", "Bun", "Drizzle", "PostgreSQL"],
  Mobile: ["React Native", "Expo"],
  BaaS: ["Supabase", "Convex"],
};

export default function RootPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <SectionWrapper className="h-dvh flex flex-col justify-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            mrtnz
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-balance">
            Software developer building minimal, performant systems. Focused on
            user experience, developer experience, and clean architecture.
          </p>
        </div>
      </SectionWrapper>

      {/* Projects Section */}
      <SectionWrapper id="projects">
        <div className="space-y-12">
          <h2 className="text-2xl font-medium">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Skills Section */}
      <SectionWrapper id="skills">
        <div className="space-y-12">
          <h2 className="text-2xl font-medium">Skills</h2>
          <div className="space-y-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="space-y-3">
                <h3 className="text-sm text-muted-foreground">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper id="contact">
        <div className="space-y-4">
          <h2 className="text-2xl font-medium">Get in Touch</h2>
          <p className="text-muted-foreground">
            Currently open to new opportunities. Feel free to reach out at{" "}
            <a
              href="mailto:fer@mrtnz.dev"
              className="text-foreground hover:underline underline-offset-4"
            >
              fer@mrtnz.dev
            </a>
          </p>
        </div>
      </SectionWrapper>
    </main>
  );
}
