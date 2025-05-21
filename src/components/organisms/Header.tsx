import { Logo } from "@/components/atoms/Logo";
import { Navigation } from "@/components/molecules/Navigation";
import { Avatar } from "@/components/atoms/Avatar";
import { NotificationBell } from "@/components/atoms/NotificationBell";
import { cn } from "@/lib/utils";

interface HeaderProps {
  userAvatarUrl?: string;
  userName?: string;
  notificationCount?: number;
  className?: string;
}

export function Header({ 
  userAvatarUrl, 
  userName = "Usuario", 
  notificationCount = 0,
  className 
}: HeaderProps) {
  const initials = userName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <header className={cn("border-b bg-background", className)}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Logo />
          <Navigation />
        </div>
        <div className="flex items-center space-x-4">
          <NotificationBell count={notificationCount} />
          <Avatar 
            src={userAvatarUrl} 
            fallback={initials} 
            alt={userName}
            className="h-8 w-8"
          />
        </div>
      </div>
    </header>
  );
}
