import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { TestimonialCard } from "@/components/atoms/TestimonialCard";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: string;
  content: string;
  author: {
    name: string;
    position: string;
    company: string;
    avatarUrl?: string;
  };
  date: Date;
}

interface TestimonialsSectionProps {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
  ctaText: string;
  ctaLink: string;
  className?: string;
}

export function TestimonialsSection({ 
  title, 
  subtitle, 
  testimonials,
  ctaText,
  ctaLink,
  className 
}: TestimonialsSectionProps) {
  return (
    <section className={cn("py-20 bg-primary/5", className)}>
      <div className="container mx-auto px-4">
        <SectionTitle title={title} subtitle={subtitle} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard 
              key={testimonial.id}
              content={testimonial.content}
              author={testimonial.author}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href={ctaLink}>{ctaText}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
