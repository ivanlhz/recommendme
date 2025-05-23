import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BackButtonProps {
  href?: string;
  className?: string;
  children?: React.ReactNode;
  variant?: 'link' | 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost';
}

export function BackButton({ 
  href = '/', 
  className = '',
  variant = 'link',
  children = 'Volver al inicio' 
}: BackButtonProps) {
  return (
    <Button 
      asChild 
      variant={variant} 
      className={`${variant === 'link' ? 'px-0' : ''} ${className}`}
    >
      <Link href={href}>
        <ArrowLeft className="h-4 w-4 mr-2" />
        {children}
      </Link>
    </Button>
  );
}
