'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { BackButton } from '@/components/atoms/BackButton';
import { ContactForm } from '@/components/molecules/ContactForm';
import { ContactInfo } from '@/components/molecules/ContactInfo';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactContent() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      console.log('Enviando formulario:', data);
      
      // Simular envío a una API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success('¡Mensaje enviado con éxito!', {
        description: 'Nos pondremos en contacto contigo pronto.'
      });
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      toast.error('Error al enviar el mensaje', {
        description: 'Por favor, inténtalo de nuevo más tarde.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <BackButton />
      </div>
      
      <h1 className="text-4xl font-bold mb-12 text-center">Contáctanos</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <ContactInfo />
        
        <div className="bg-card rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6">Envíanos un Mensaje</h2>
          <ContactForm 
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            submitButtonText="Enviar Mensaje"
          />
        </div>
      </div>
    </div>
  );
}
