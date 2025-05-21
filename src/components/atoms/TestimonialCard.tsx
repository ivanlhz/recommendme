import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/atoms/Avatar";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  content: string;
  author: {
    name: string;
    position: string;
    company: string;
    avatarUrl?: string;
  };
  className?: string;
}

export function TestimonialCard({ content, author, className }: TestimonialCardProps) {
  const initials = author.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card className={cn("border-none shadow-md", className)}>
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <Avatar 
            src={author.avatarUrl} 
            fallback={initials} 
            className="h-12 w-12"
          />
          <div>
            <p className="text-sm italic mb-4">"{content}"</p>
            <div>
              <p className="font-medium">{author.name}</p>
              <p className="text-sm text-muted-foreground">{author.position} en {author.company}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
