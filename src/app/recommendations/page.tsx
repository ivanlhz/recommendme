'use client';

import { RecommendationForm } from "@/components/molecules/RecommendationForm";
import { RecommendationItem } from "@/components/molecules/RecommendationItem";
import { UserProfile } from "@/components/molecules/UserProfile";
import { mockTargetUser, mockExistingRecommendations } from "@/mocks/recommendation.mock";

export default function RecommendationsPage() {
  // En una aplicación real, estos datos vendrían de una API o base de datos
  const handleSubmitRecommendation = (recommendation: string) => {
    console.log("Nueva recomendación:", recommendation);
    // Aquí se enviaría la recomendación a la API
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
      <RecommendationForm className="border rounded-lg p-6" onSubmit={handleSubmitRecommendation} />
      
      {mockExistingRecommendations.length > 0 && (
        <div className="space-y-4">
            {mockExistingRecommendations.map((recommendation) => (
              <RecommendationItem
                key={recommendation.id}
                author={recommendation.author}
                content={recommendation.content}
                date={recommendation.date}
              />
            ))}
        </div>
      )}
    </div>
  </div>
  );
}
