'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { RecommendationFormValues, createRecommendationSchema } from '@/schemas/recommendation.schema';
import { useRecommendations } from '@/contexts/RecommendationContext';

interface RecommendationFormProps {
  className?: string;
  onSuccess?: () => void;
}

export function RecommendationForm({ className, onSuccess }: RecommendationFormProps) {
  const { 
    addRecommendation, 
    updateRecommendation, 
    isEditing, 
    getRecommendation,
    setIsEditing 
  } = useRecommendations();
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<RecommendationFormValues>({
    resolver: zodResolver(createRecommendationSchema) as any, // Usamos 'as any' temporalmente para evitar problemas de tipos
    defaultValues: {
      content: '',
      author: {
        name: 'Usuario Actual',
        position: 'Desarrollador',
        company: 'Mi Empresa',
        avatarUrl: '/images/avatars/current-user.jpg',
      },
      date: new Date(),
    },
  });

  useEffect(() => {
    if (isEditing) {
      const recommendation = getRecommendation(isEditing);
      if (recommendation) {
        const { id, ...formData } = recommendation;
        setValue('content', formData.content);
        setValue('author', {
          name: formData.author.name,
          position: formData.author.position,
          company: formData.author.company,
          avatarUrl: formData.author.avatarUrl || '/images/avatars/current-user.jpg',
        });
        setValue('date', formData.date instanceof Date ? formData.date : new Date(formData.date));
      }
    } else {
      reset({
        content: '',
        author: {
          name: 'Usuario Actual',
          position: 'Desarrollador',
          company: 'Mi Empresa',
          avatarUrl: '/images/avatars/current-user.jpg',
        },
        date: new Date(),
      });
    }
  }, [isEditing, getRecommendation, setValue, reset]);

  const onSubmit = async (data: RecommendationFormValues) => {
    try {
      if (isEditing) {
        updateRecommendation(isEditing, data);
      } else {
        addRecommendation(data);
      }
      reset();
      onSuccess?.();
    } catch (error) {
      console.error('Error al guardar la recomendación:', error);
    }
  };

  const handleCancel = () => {
    setIsEditing(null);
    reset();
  };

  return (
    <div className={cn('space-y-4', className)}>
      <h2 className="text-xl font-semibold">
        {isEditing ? 'Editar Recomendación' : 'Nueva Recomendación'}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Textarea
            placeholder="Escribe tu recomendación profesional (mínimo 50 caracteres)..."
            className={cn('min-h-[150px]', errors.content && 'border-red-500')}
            {...register('content')}
          />
          {errors.content && (
            <p className="mt-2 text-sm text-red-500">
              {errors.content.message}
            </p>
          )}
        </div>
        
        <div className="flex justify-end space-x-2">
          {isEditing && (
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              disabled={isSubmitting}
            >
              Cancelar
            </Button>
          )}
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting 
              ? 'Guardando...' 
              : isEditing 
                ? 'Actualizar Recomendación' 
                : 'Enviar Recomendación'}
          </Button>
        </div>
      </form>
    </div>
  );
}
