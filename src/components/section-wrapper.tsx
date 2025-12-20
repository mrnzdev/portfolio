import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({
  children,
  className,
  id,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-24 md:py-32 px-6 md:px-8 max-w-3xl mx-auto w-full",
        className
      )}
    >
      {children}
    </section>
  );
}

