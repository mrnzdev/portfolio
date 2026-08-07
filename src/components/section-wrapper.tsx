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
        "mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28",
        className,
      )}
    >
      {children}
    </section>
  );
}
