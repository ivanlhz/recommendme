import { z } from 'zod';

export const createRecommendationSchema = z.object({
  content: z.string().min(50, {
    message: "La recomendación debe tener al menos 50 caracteres",
  }),
  author: z.object({
    name: z.string().min(1, { message: "El nombre es requerido" }),
    position: z.string().min(1, { message: "El cargo es requerido" }),
    company: z.string().min(1, { message: "La empresa es requerida" }),
    avatarUrl: z.string().optional(),
  }),
  date: z.union([
    z.date(),
    z.string().datetime().transform(str => new Date(str))
  ])
  .transform(date => date instanceof Date ? date : new Date(date))
  .default(() => new Date()),
});

export const recommendationSchema = createRecommendationSchema.extend({
  id: z.string().uuid(),
});

export type Recommendation = z.infer<typeof recommendationSchema>;
export type RecommendationFormValues = z.infer<typeof createRecommendationSchema>;
