'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Recommendation, createRecommendationSchema, recommendationSchema } from '@/schemas/recommendation.schema';
import { z } from 'zod';

interface RecommendationContextType {
  recommendations: Recommendation[];
  addRecommendation: (recommendation: z.infer<typeof createRecommendationSchema>) => void;
  updateRecommendation: (id: string, recommendation: Partial<z.infer<typeof createRecommendationSchema>>) => void;
  deleteRecommendation: (id: string) => void;
  getRecommendation: (id: string) => Recommendation | undefined;
  isEditing: string | null;
  setIsEditing: (id: string | null) => void;
}

const RecommendationContext = createContext<RecommendationContextType | undefined>(undefined);

interface RecommendationProviderProps {
  children: ReactNode;
  initialRecommendations?: Recommendation[];
}

export function RecommendationProvider({ 
  children, 
  initialRecommendations = [] 
}: RecommendationProviderProps) {
  const [recommendations, setRecommendations] = useState<Recommendation[]>(initialRecommendations);
  const [isEditing, setIsEditing] = useState<string | null>(null);

  const addRecommendation = (recommendation: z.infer<typeof createRecommendationSchema>) => {
    const result = recommendationSchema.safeParse({
      ...recommendation,
    });

    if (!result.success) {
      console.error('Error al validar la recomendación:', result.error);
      return;
    }

    setRecommendations(prev => [...prev, result.data]);
  };

  const updateRecommendation = (id: string, updates: Partial<z.infer<typeof createRecommendationSchema>>) => {
    setRecommendations(prev => 
      prev.map(rec => {
        if (rec.id !== id) return rec;
        
        const result = recommendationSchema.safeParse({
          ...rec,
          ...updates,
          id,
        });

        if (!result.success) {
          console.error('Error al validar la actualización:', result.error);
          return rec;
        }


        return result.data;
      })
    );
    setIsEditing(null);
  };

  const deleteRecommendation = (id: string) => {
    setRecommendations(prev => prev.filter(rec => rec.id !== id));
  };

  const getRecommendation = (id: string) => {
    return recommendations.find(rec => rec.id === id);
  };

  return (
    <RecommendationContext.Provider 
      value={{
        recommendations,
        addRecommendation,
        updateRecommendation,
        deleteRecommendation,
        getRecommendation,
        isEditing,
        setIsEditing,
      }}
    >
      {children}
    </RecommendationContext.Provider>
  );
}

export const useRecommendations = () => {
  const context = useContext(RecommendationContext);
  if (context === undefined) {
    throw new Error('useRecommendations debe ser usado dentro de un RecommendationProvider');
  }
  return context;
};
