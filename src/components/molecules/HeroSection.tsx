'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  imageSrc: string;
  className?: string;
}

export function HeroSection({ 
  title, 
  subtitle, 
  primaryButtonText, 
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  imageSrc,
  className 
}: HeroSectionProps) {
  return (
    <section className={cn("bg-primary/5 py-20", className)}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              {title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href={primaryButtonLink}>{primaryButtonText}</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href={secondaryButtonLink}>{secondaryButtonText}</Link>
              </Button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-70"></div>
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-70"></div>
            <div className="relative z-10">
              <Image
                width={500}
                height={500}
                src={imageSrc} 
                alt="Red de profesionales conectados" 
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
