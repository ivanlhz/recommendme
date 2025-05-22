'use client';

import { Avatar } from "@/components/atoms/Avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { formatDate } from "@/lib/formatDate";
import { useRecommendations } from "@/contexts/RecommendationContext";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface RecommendationItemProps {
  id: string;
  author: {
    name: string;
    position: string;
    company: string;
    avatarUrl?: string;
  };
  content: string;
  date: Date;
  className?: string;
  isCurrentUser?: boolean;
}

export function RecommendationItem({ 
  id, 
  author, 
  content, 
  date, 
  className, 
  isCurrentUser = false 
}: RecommendationItemProps) {
  const { deleteRecommendation, setIsEditing } = useRecommendations();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const initials = author.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const handleEdit = () => {
    setIsEditing(id);
    document.getElementById('recommendation-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await deleteRecommendation(id);
    } finally {
      setIsDeleting(false);
      setShowDeleteDialog(false);
    }
  };

  return (
    <>
      <div 
        className={cn("flex space-x-4 p-4 border rounded-lg group relative", className)} 
        data-testid="recommendation-item"
      >
        <Avatar 
          src={author.avatarUrl} 
          fallback={initials} 
          className="h-10 w-10 flex-shrink-0"
        />
        <div className="space-y-2 flex-1 min-w-0">
          <div className="flex justify-between">
            <div className="min-w-0">
              <h3 className="font-medium truncate">{author.name}</h3>
              <p className="text-sm text-muted-foreground truncate">
                {author.position} en {author.company}
              </p>
            </div>
            <div className="flex items-start space-x-2">
              <time className="text-sm text-muted-foreground whitespace-nowrap">
                {formatDate(date)}
              </time>
              {isCurrentUser && (
                <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-6 w-6"
                    onClick={handleEdit}
                    aria-label="Editar recomendación"
                  >
                    <Pencil className="h-3.5 w-3.5" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-6 w-6 text-destructive hover:text-destructive"
                    onClick={() => setShowDeleteDialog(true)}
                    aria-label="Eliminar recomendación"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              )}
            </div>
          </div>
          <p className="text-sm whitespace-pre-line break-words">{content}</p>
        </div>
      </div>

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción no se puede deshacer. La recomendación se eliminará permanentemente.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>Cancelar</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleDelete} 
              disabled={isDeleting}
              className="bg-destructive text-white hover:bg-destructive/70"
            >
              {isDeleting ? 'Eliminando...' : 'Eliminar'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
