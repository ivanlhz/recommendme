import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("font-bold text-xl text-primary", className)}>
      ProNet
    </Link>
  );
}
