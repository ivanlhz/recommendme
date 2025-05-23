"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'El nombre debe tener al menos 2 caracteres.',
  }),
  email: z.string().email({
    message: 'Por favor ingresa un correo electrónico válido.',
  }),
  subject: z.string().min(5, {
    message: 'El asunto debe tener al menos 5 caracteres.',
  }),
  message: z.string().min(10, {
    message: 'El mensaje debe tener al menos 10 caracteres.',
  }),
});

type ContactFormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  onSubmit: (values: ContactFormValues) => void;
  isSubmitting?: boolean;
  submitButtonText?: string;
  className?: string;
}

export function ContactForm({
  onSubmit,
  isSubmitting: externalIsSubmitting = false,
  submitButtonText = 'Enviar Mensaje',
  className = '',
}: ContactFormProps) {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    mode: 'onChange',
  });

  const { formState: { isSubmitting: formIsSubmitting } } = form;
  const isFormSubmitting = externalIsSubmitting || formIsSubmitting;

  return (
    <div className={className}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre Completo</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Tu nombre" 
                      disabled={isFormSubmitting}
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo Electrónico</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="tu@email.com" 
                      disabled={isFormSubmitting}
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Asunto</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="¿Cómo podemos ayudarte?" 
                    disabled={isFormSubmitting}
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensaje</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Escribe tu mensaje aquí..." 
                    className="min-h-[120px]" 
                    disabled={isFormSubmitting}
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          
          <div className="flex items-center pt-2">
            <Button 
              type="submit" 
              disabled={isFormSubmitting}
              className="w-full sm:w-auto"
            >
              {isFormSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                submitButtonText
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
