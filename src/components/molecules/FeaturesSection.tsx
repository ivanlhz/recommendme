import { SectionTitle } from "@/components/atoms/SectionTitle";
import { FeatureCard } from "@/components/atoms/FeatureCard";
import { cn } from "@/lib/utils";

interface Feature {
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  title: string;
  subtitle: string;
  features: Feature[];
  className?: string;
}

export function FeaturesSection({ title, subtitle, features, className }: FeaturesSectionProps) {
  return (
    <section className={cn("py-20", className)}>
      <div className="container mx-auto px-4">
        <SectionTitle title={title} subtitle={subtitle} />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
