import { Metadata } from 'next';
import { ContactContent } from './ContactContent';

export const metadata: Metadata = {
  title: 'Contacto - RecommendMe',
  description: 'Contáctanos para cualquier consulta o soporte',
};

export default function ContactPage() {
  return <ContactContent />;
}
