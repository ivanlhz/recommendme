import { Mail, MapPin, Phone } from 'lucide-react';

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const ContactInfoItem = ({ icon, title, children, className = '' }: ContactInfoItemProps) => (
  <div className={`flex items-start ${className}`}>
    <div className="bg-primary/10 p-3 rounded-full mr-4">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <div className="text-muted-foreground">
        {children}
      </div>
    </div>
  </div>
);

export function ContactInfo() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Información de Contacto</h2>
      <p className="text-muted-foreground mb-8">
        ¿Tienes alguna pregunta o comentario? No dudes en ponerte en contacto con nosotros. 
        Nuestro equipo estará encantado de ayudarte.
      </p>
      
      <div className="space-y-6">
        <ContactInfoItem 
          icon={<MapPin className="h-6 w-6 text-primary" />} 
          title="Ubicación"
        >
          Calle Falsa 123, Piso 4<br />
          Santa Cruz de Tenerife, España
        </ContactInfoItem>
        
        <ContactInfoItem 
          icon={<Mail className="h-6 w-6 text-primary" />} 
          title="Correo Electrónico"
        >
          info@recommendme.com<br />
          soporte@recommendme.com
        </ContactInfoItem>
        
        <ContactInfoItem 
          icon={<Phone className="h-6 w-6 text-primary" />} 
          title="Teléfono"
        >
          +54 11 1234-5678<br />
          Lun-Vie: 9:00 - 18:00
        </ContactInfoItem>
      </div>
    </div>
  );
}
