import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CtaSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  className?: string;
}

export function CtaSection({ 
  title, 
  subtitle, 
  buttonText, 
  buttonLink, 
  className 
}: CtaSectionProps) {
  return (
    <section className={cn("py-20 bg-primary text-primary-foreground", className)}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          {subtitle}
        </p>
        <Button size="lg" variant="secondary" asChild>
          <Link href={buttonLink}>{buttonText}</Link>
        </Button>
      </div>
    </section>
  );
}
