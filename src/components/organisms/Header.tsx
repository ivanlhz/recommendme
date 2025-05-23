'use client';

import { Logo } from '@/components/atoms/Logo';
import { Navigation } from '@/components/molecules/Navigation';
import { Avatar } from '@/components/atoms/Avatar';
import { NotificationBell } from '@/components/atoms/NotificationBell';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  userAvatarUrl?: string;
  userName?: string;
  notificationCount?: number;
  className?: string;
}

export function Header({
  userAvatarUrl,
  userName = 'Usuario',
  notificationCount = 0,
  className,
}: HeaderProps) {
  const { user, logout, loading } = useAuth();
  const router = useRouter();
  const initials = (user?.name || userName)
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  const handleLogout = async () => {
    await logout();
    router.push('/login');
  };

  return (
    <header className={cn('border-b bg-background', className)}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Logo />
          <Navigation />
        </div>
        <div className="flex items-center space-x-4">
          {!loading && user && (
            <>
              <NotificationBell count={notificationCount} />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <span className="cursor-pointer">
                    <Avatar
                      src={user.avatarUrl || userAvatarUrl}
                      fallback={initials}
                      alt={user.name || userName}
                      className="h-8 w-8"
                    />
                  </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>{user.name || userName}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="text-red-600 cursor-pointer"
                  >
                    Cerrar sesión
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
          {!loading && !user && (
            <a
              href="/login"
              className="ml-2 px-4 py-2 rounded text-primary font-semibold border border-primary hover:bg-primary hover:text-white transition"
            >
              Iniciar sesión
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
