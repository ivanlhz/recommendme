'use client';

import { useEffect, useState } from 'react';
import { RecommendationForm } from '@/components/molecules/RecommendationForm';
import { RecommendationItem } from '@/components/molecules/RecommendationItem';
import { UserProfile } from '@/components/molecules/UserProfile';
import { mockTargetUser, mockExistingRecommendations } from '@/mocks/recommendation.mock';
import { RecommendationProvider, useRecommendations } from '@/contexts/RecommendationContext';
import { Recommendation } from '@/schemas/recommendation.schema';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

function RecommendationsContent() {
  const { recommendations, isEditing, setIsEditing } = useRecommendations();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (isEditing) {
      setShowForm(true);
    }
  }, [isEditing]);

  const handleSuccess = () => {
    setShowForm(false);
  };

  const handleAddRecommendation = () => {
    setIsEditing(null);
    setShowForm(true);
    setTimeout(() => {
      document.getElementById('recommendation-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-1">
        <UserProfile
          name={mockTargetUser.name}
          position={mockTargetUser.position}
          company={mockTargetUser.company}
          avatarUrl={mockTargetUser.avatarUrl}
          className="border rounded-lg p-6"
        />
      </div>
      <div className="md:col-span-2 space-y-6">
        {/* Botón para agregar nueva recomendación */}
        {!showForm && !isEditing && (
          <div className="flex justify-end">
            <Button onClick={handleAddRecommendation}>
              <Plus className="mr-2 h-4 w-4" />
              Agregar Recomendación
            </Button>
          </div>
        )}

        {/* Formulario de recomendación */}
        {(showForm || isEditing) && (
          <div id="recommendation-form" className="border rounded-lg p-6">
            <RecommendationForm onSuccess={handleSuccess} />
          </div>
        )}
        
        {/* Lista de recomendaciones */}
        {recommendations.length > 0 ? (
          <div className="space-y-4">
            {recommendations.map((recommendation) => (
              <RecommendationItem
                key={recommendation.id}
                id={recommendation.id!}
                author={recommendation.author}
                content={recommendation.content}
                date={new Date(recommendation.date)}
                isCurrentUser={recommendation.author.name === 'Usuario Actual'}
              />
            ))}
          </div>
        ) : (
          <div className="text-center p-8 border rounded-lg">
            <p className="text-muted-foreground">No hay recomendaciones aún. ¡Sé el primero en recomendar!</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={handleAddRecommendation}
            >
              <Plus className="mr-2 h-4 w-4" />
              Agregar Recomendación
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

// Componente principal que envuelve el contenido con el Provider
export default function RecommendationsPage() {
  // Transformar los mocks al tipo Recommendation
  const initialRecommendations: Recommendation[] = mockExistingRecommendations.map(rec => ({
    ...rec,
    id: rec.id || Date.now().toString(),
    date: rec.date instanceof Date ? rec.date : new Date(rec.date)
  }));

  return (
    <RecommendationProvider initialRecommendations={initialRecommendations}>
      <RecommendationsContent />
    </RecommendationProvider>
  );
}
