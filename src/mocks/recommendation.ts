// Datos de ejemplo para la demostración
export const mockCurrentUser = {
    name: "Usuario Actual",
    avatarUrl: "/images/avatars/current-user.jpg"
  };
  
export const mockTargetUser = {
    name: "Alex Mitchell",
    position: "Senior Frontend Developer",
    company: "TechCorp Solutions",
    avatarUrl: "/images/avatars/alex-mitchell.jpg"
  };
  
export const mockExistingRecommendations = [
    {
      id: "1",
      author: {
        name: "Sarah Johnson",
        position: "Product Manager",
        company: "InnovateTech",
        avatarUrl: "/images/avatars/sarah-johnson.jpg"
      },
      content: "Alex es un excepcional frontend developer que constantemente entrega trabajo de alta calidad. Su atención al detalle y habilidades para resolver problemas son notables. También es excelente colaborando con miembros del equipo y siempre está dispuesto a ayudar a otros.",
      date: new Date("2025-03-15")
    },
    {
      id: "2",
      author: {
        name: "Michael Chen",
        position: "Tech Lead",
        company: "WebFlow Solutions",
        avatarUrl: "/images/avatars/michael-chen.jpg"
      },
      content: "Tuve el placer de trabajar con Alex en varios proyectos. Su experiencia técnica y compromiso con la escritura de código limpio y mantenible son impresionantes. También es excelente mentorando a desarrolladores junior y contribuyendo al éxito del equipo.",
      date: new Date("2025-03-10")
    }
  ];