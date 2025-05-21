import { NavItem } from "@/components/atoms/NavItem";
import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  return (
    <nav className={cn("flex items-center space-x-4", className)}>
      <NavItem href="/" label="Home" />
      <NavItem href="/network" label="Network" />
      <NavItem href="/jobs" label="Jobs" />
      <NavItem href="/recommendations" label="Messages" active />
    </nav>
  );
}
