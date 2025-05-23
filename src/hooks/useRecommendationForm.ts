import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RecommendationFormValues, recommendationSchema } from '@/schemas/recommendation.schema';

export interface UseRecommendationFormOptions {
  defaultValues?: Partial<RecommendationFormValues>;
  onSubmit?: (data: RecommendationFormValues) => Promise<any>;
  onSuccess?: (data: any) => void;
  onError?: (error: unknown) => void;
}

export function useRecommendationForm({ 
  defaultValues,
  onSubmit,
  onSuccess,
  onError,
 }: UseRecommendationFormOptions = {}) {
  const form = useForm<RecommendationFormValues>({
    resolver: zodResolver(recommendationSchema) as any,
    defaultValues: {
      content: defaultValues?.content || '',
      author: {
        name: defaultValues?.author?.name || 'Usuario Actual',
        position: defaultValues?.author?.position || 'Desarrollador',
        company: defaultValues?.author?.company || 'Mi Empresa',
        avatarUrl: defaultValues?.author?.avatarUrl || '/images/avatars/default.webp',
      },
      date: defaultValues?.date ? new Date(defaultValues.date) : new Date(),
  },
  });

  const defaultSubmit = async (data: RecommendationFormValues) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return data;
  };

 const handleSubmit = form.handleSubmit(async (data) => {
    try {
      const submitFunction = onSubmit || defaultSubmit;
      const result = await submitFunction(data);
      
      if (onSuccess) {
        onSuccess(result);
      }
      return result;
    } catch (error) {
      if (onError) {
        onError(error);
      } else {
        console.error('Error al enviar el formulario:', error);
      }
      throw error;
    }
  });

  return {
    form,
    handleSubmit,
    isSubmitting: form.formState.isSubmitting,
    errors: form.formState.errors,
    reset: form.reset,
    setValue: form.setValue,
    getValues: form.getValues,
    clearErrors: form.clearErrors,
    trigger: form.trigger,
    watch: form.watch,
  };
}
