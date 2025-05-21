import Link from 'next/link';
import { cn } from "@/lib/utils";

interface FooterProps {
  companyName: string;
  tagline: string;
  links: {
    label: string;
    href: string;
  }[];
  className?: string;
}

export function Footer({ companyName, tagline, links, className }: FooterProps) {
  return (
    <footer className={cn("py-12 border-t", className)}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">{companyName}</h2>
            <p className="text-muted-foreground">{tagline}</p>
          </div>
          <div className="flex gap-8">
            {links.map((link, index) => (
              <Link 
                key={index}
                href={link.href} 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {companyName}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
