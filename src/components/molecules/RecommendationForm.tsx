'use client';

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { SubmitButton } from "@/components/atoms/SubmitButton";
import { cn } from "@/lib/utils";

interface RecommendationFormProps {
  onSubmit?: (recommendation: string) => void;
  className?: string;
}

export function RecommendationForm({ onSubmit, className }: RecommendationFormProps) {
  const [recommendation, setRecommendation] = useState("");
  const minChars = 50;
  const isValid = recommendation.length >= minChars;

  const handleSubmit = () => {
    if (isValid && onSubmit) {
      onSubmit(recommendation);
      setRecommendation("");
    }
  };

  return (
    <div className={cn("space-y-4", className)}>
      <h2 className="text-xl font-semibold">Recomendaciones</h2>
      <Textarea 
        placeholder="Escribe tu recomendación profesional (mínimo 50 caracteres)..."
        value={recommendation}
        onChange={(e) => setRecommendation(e.target.value)}
        className="min-h-[150px]"
      />
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          Mínimo {minChars} caracteres requeridos
        </p>
        <SubmitButton 
          label="Enviar Recomendación" 
          onClick={handleSubmit}
          disabled={!isValid}
        />
      </div>
      
    </div>
  );
}
