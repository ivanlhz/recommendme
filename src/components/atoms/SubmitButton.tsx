import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SubmitButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export function SubmitButton({ label, onClick, disabled = false, className }: SubmitButtonProps) {
  return (
    <Button 
      onClick={onClick}
      disabled={disabled}
      className={cn("rounded-full", className)}
    >
      {label}
    </Button>
  );
}
