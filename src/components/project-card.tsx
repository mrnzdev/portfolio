import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  url?: string;
  github?: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-full transition-all hover:ring-foreground/20">
      <Image
        src={project.image}
        alt={project.title}
        width={1024}
        height={1024}
        className="aspect-video w-full object-cover grayscale brightness-60 transition-all hover:brightness-75"
      />
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <CardDescription>{project.description}</CardDescription>
        <div className="flex flex-wrap gap-1">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex items-center gap-2">
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ size: "sm" })}
          >
            View Project
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "ghost", size: "sm" })}
          >
            GitHub
          </a>
        )}
      </CardFooter>
    </Card>
  );
}
