import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavItemProps {
  href: string;
  label: string;
  active?: boolean;
  className?: string;
}

export function NavItem({ href, label, active = false, className }: NavItemProps) {
  return (
    <Link 
      href={href} 
      className={cn(
        "px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
        active ? "text-primary" : "text-muted-foreground",
        className
      )}
    >
      {label}
    </Link>
  );
}
