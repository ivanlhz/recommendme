import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ButtonWithIconProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  variant?: "default" | "outline" | "link" | "destructive" | "secondary" | "ghost";
  icon?: React.ReactNode;
}

export function ButtonWithIcon({
  label,
  onClick,
  disabled = false,
  className,
  variant = "default",
  icon,
}: ButtonWithIconProps) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={cn('rounded-full flex items-center gap-2 hover:cursor-pointer', className)}
      variant={variant}
    >
      {icon}
      {label}
    </Button>
  );
}
