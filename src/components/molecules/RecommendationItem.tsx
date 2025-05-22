import { Avatar } from "@/components/atoms/Avatar";
import { cn } from "@/lib/utils";
import { formatDate } from "@/lib/formatDate";

interface RecommendationItemProps {
  author: {
    name: string;
    position: string;
    company: string;
    avatarUrl?: string;
  };
  content: string;
  date: Date;
  className?: string;
}

export function RecommendationItem({ author, content, date, className }: RecommendationItemProps) {
  const initials = author.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className={cn("flex space-x-4 p-4 border rounded-lg", className)} data-testid="recommendation-item">
      <Avatar 
        src={author.avatarUrl} 
        fallback={initials} 
        className="h-10 w-10 flex-shrink-0"
      />
      <div className="space-y-2">
        <div className="flex justify-between">
          <div>
            <h3 className="font-medium">{author.name}</h3>
            <p className="text-sm text-muted-foreground">{author.position} en {author.company}</p>
          </div>
          <time className="text-sm text-muted-foreground">{formatDate(date)}</time>
        </div>
        <p className="text-sm">{content}</p>
      </div>
    </div>
  );
}
