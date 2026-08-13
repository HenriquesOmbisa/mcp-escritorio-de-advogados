import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          {align === "center" && (
            <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
          )}
          {eyebrow}
          <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
        </p>
      )}
      <Tag className="font-heading text-3xl font-bold leading-tight text-forest sm:text-4xl">
        {title}
      </Tag>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}