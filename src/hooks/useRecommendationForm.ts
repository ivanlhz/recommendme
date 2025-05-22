import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RecommendationFormValues, recommendationSchema } from '@/schemas/recommendation.schema';

interface UseRecommendationFormOptions {
  defaultValues?: Partial<RecommendationFormValues>;
}

export function useRecommendationForm({ defaultValues }: UseRecommendationFormOptions = {}) {
  const form = useForm<RecommendationFormValues>({
    resolver: zodResolver(recommendationSchema) as any,
    defaultValues: {
      content: defaultValues?.content || '',
      author: {
        name: defaultValues?.author?.name || 'Usuario Actual',
        position: defaultValues?.author?.position || 'Desarrollador',
        company: defaultValues?.author?.company || 'Mi Empresa',
        avatarUrl: defaultValues?.author?.avatarUrl || '/images/avatars/current-user.jpg',
      },
      date: defaultValues?.date ? new Date(defaultValues.date) : new Date(),
  },
  });

  const onSubmit: SubmitHandler<RecommendationFormValues> = async (data) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return data;
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      throw error;
    }
  };

  return {
    form,
    handleSubmit: form.handleSubmit(onSubmit),
    isSubmitting: form.formState.isSubmitting,
    errors: form.formState.errors,
    reset: form.reset,
    setValue: form.setValue,
    getValues: form.getValues,
  };
}
