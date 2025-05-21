import { Header } from "@/components/organisms/Header";
import { cn } from "@/lib/utils";

interface RecommendationPageTemplateProps {
  currentUser: {
    name: string;
    avatarUrl?: string;
  };
  targetUser: {
    name: string;
    position: string;
    company: string;
    avatarUrl?: string;
  };
  notificationCount?: number;
  existingRecommendations?: Array<{
    id: string;
    author: {
      name: string;
      position: string;
      company: string;
      avatarUrl?: string;
    };
    content: string;
    date: Date;
  }>;
  onSubmitRecommendation?: (recommendation: string) => void;
  children: React.ReactNode;
  className?: string;
}

export default function RecommendationPageLayout({
  children,
  className
}: RecommendationPageTemplateProps) {
  return (
    <div className={cn("min-h-screen flex flex-col", className)}>
      <Header 
        userName="Usuario"
        userAvatarUrl=""
        notificationCount={0}
      />
      <main className="flex-1 container mx-auto px-4 py-8">
       {children}
      </main>
    </div>
  );
}
