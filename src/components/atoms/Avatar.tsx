import { Avatar as ShadcnAvatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface AvatarProps {
  src?: string;
  alt?: string;
  fallback: string;
  className?: string;
}

export function Avatar({ src, alt, fallback, className }: AvatarProps) {
  return (
    <ShadcnAvatar className={className}>
      <AvatarImage src={src} alt={alt || fallback} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </ShadcnAvatar>
  );
}
