import { Avatar } from "@/components/atoms/Avatar";
import { cn } from "@/lib/utils";
import { ButtonWithIcon } from "../atoms/ButtonWithIcon";
import { Mail, UserPlus } from "lucide-react";

interface UserProfileProps {
  name: string;
  position: string;
  company: string;
  avatarUrl?: string;
  className?: string;
}

export function UserProfile({ name, position, company, avatarUrl, className }: UserProfileProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className={cn("flex flex-col items-center text-center", className)} data-testid="user-profile">
      <Avatar 
        src={avatarUrl} 
        fallback={initials} 
        className="h-24 w-24 mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-sm text-muted-foreground">{position}</p>
      <p className="text-sm text-primary">{company}</p>
      <div className="flex gap-2 mt-4">
        <ButtonWithIcon
          label="Conectar"
          onClick={() => {}}
          icon={<UserPlus />}
        />
        <ButtonWithIcon
          variant="outline"
          label="Enviar mensaje"
          onClick={() => {}}
          icon={<Mail />}
        />
      </div>
    </div>
  );
}
