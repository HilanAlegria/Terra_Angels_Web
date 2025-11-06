// js/store.js

// Importamos la data más completa desde mainStore.js y los componentes .vue
export const store = {
    // --- Datos de BusinessModel.vue / mainStore.js ---
    businessModel: {
      partners: [
        "Clínicas Veterinarias Aliadas: Para cirugías y atención especializada de rescates.",
        "Refugios y Hogares de Paso: Red de apoyo para albergar temporalmente a los caninos.",
        "Empresas Donantes: Patrocinio de eventos, campañas o insumos fijos.",
        "Voluntarios y Padrinos: Base fundamental para la operación y sostenibilidad."
      ],
      activities: [
        "Rescate y Rehabilitación: Logística médica, conductual y emocional de caninos abandonados.",
        "Gestión de Adopciones: Proceso riguroso de selección de familias y seguimiento post-adopción.",
        "Recaudación de Fondos y Eventos: Campañas para asegurar el sustento médico y alimenticio.",
        "Educación y Sensibilización: Charlas sobre tenencia responsable y bienestar animal."
      ],
      channels: [
        "Instagram y Facebook: Historias de rescate, perros en adopción y campañas de donación.",
        "Página Web (Actual): Centro de información, formularios de adopción/voluntariado y donaciones.",
        "WhatsApp Business: Coordinación rápida con adoptantes y voluntarios.",
        "Eventos de Adopción y Ferias: Participación en la comunidad para encontrar hogares."
      ],
      relationships: [
        "Proceso de Adopción: Seguimiento post-adopción y visitas de control.",
        "Comunicación Constante: Reportes de impacto a donantes y padrinos.",
        "Newsletter y Blog: Información de interés y novedades de la fundación.",
        "Reuniones de Voluntarios: Feedback y fortalecimiento del equipo."
      ],
    },
    
    // --- Datos de AboutSection.vue ---
    mission: {
        title: 'Nuestra Misión',
        text: 'Rescatamos, rehabilitamos y reubicamos caninos en situación de abandono o maltrato en Cali. Nuestro objetivo es ser un puente de amor y esperanza, transformando vidas caninas y promoviendo la tenencia responsable.',
    },
    vision: {
        title: 'Nuestra Visión',
        text: 'Ser la fundación líder en el Valle del Cauca, reconocida por nuestro impacto social y nuestra gestión integral, logrando una sociedad donde todos los animales sean tratados con dignidad y respeto.',
    },
    team: [
        // Se asumen rutas de imágenes estándar para la migración
        { name: 'Rosa V.', role: 'Fundadora & Directora', bio: 'Veterinaria con 10 años de experiencia.', image: 'assets/images/rosa.jpg' },
        { name: 'David C.', role: 'Coordinador de Adopciones', bio: 'Experto en comportamiento canino.', image: 'assets/images/david.jpeg' },
        { name: 'Valeria S.', role: 'Jefa de Recaudación', bio: 'Apoya la sostenibilidad financiera.', image: 'assets/images/valeria.jpg' },
    ],

    // --- Datos de ProgramsList.vue y ServicesView.vue ---
    impactPrograms: [
        { id: 1, title: 'Rescate y Rehabilitación', description: 'Recuperamos perros de la calle, les brindamos atención médica completa y terapia de comportamiento.' },
        { id: 2, title: 'Programa de Adopción', description: 'Conectamos a nuestros caninos rehabilitados con familias amorosas, garantizando un proceso seguro y responsable.' },
        { id: 3, title: 'Apadrinamiento Canino', description: 'Permite a personas contribuir mensualmente al cuidado de un perro específico que espera un hogar.' }
    ],
    services: [
        { 
            id: 4, 
            title: 'Adiestramiento Básico', 
            description: 'Clases de obediencia para perros de la comunidad, impartidas por expertos.'
        },
        { 
            id: 5, 
            title: 'Guardería Solidaria', 
            description: 'Cuidado diario para tu mascota mientras trabajas. Todo lo recaudado va a nuestros rescates.'
        },
        { 
            id: 6, 
            title: "Paseos Caninos Seguros y Educativos", 
            description: "Paseos enfocados en la estimulación física y mental. Rutas seguras y tiempo de calidad. Contratando este servicio financias la esterilización de un perro en la comunidad cada mes.",
        },
    ],

    // --- Datos de DonationLevels.vue / mainStore.js ---
    donationLevels: [
      {
        level: "Patita de Plata",
        cop: "$75.000 COP",
        usd: "~ $19 USD",
        description: "Cubre el alimento de un canino por 15 días. Contribución vital y constante."
      },
      {
        level: "Corazón de Oro",
        cop: "$150.000 COP",
        usd: "~ $38 USD",
        description: "Cubre vacunas esenciales y desparasitación de un canino rescatado, preparándolo para la adopción."
      },
      {
        level: "Angel Guardián",
        cop: "$300.000 COP",
        usd: "~ $75 USD",
        description: "Cubre los costos iniciales de rescate, transporte y hospitalización básica de un canino en estado crítico."
      },
      {
        level: "Donación Libre",
        cop: "Cualquier Monto",
        usd: "¡Es bienvenida!",
        description: "Permite cubrir gastos operativos, mantenimiento de refugio o terapias especializadas."
      },
    ],
    
// --- Datos de CanineGallery.vue ---
gallery: {
    images: [
        // Rutas ajustadas de @/assets/ a assets/
        { url: 'assets/images/gallery/amistad-perros.jpg', alt: 'Perros jugando en el pasto, símbolo de amistad.' }, 
        { url: 'assets/images/gallery/Trabajo-con-perros.jpg', alt: 'Voluntario celebrando el momento de una adopción exitosa.' },
        { url: 'assets/images/gallery/entrenamiento-perros.jpg', alt: 'Voluntarios de la fundación trabajando en equipo.' }, 
        { url: 'assets/images/gallery/niño-con-perro.jpg', alt: 'Perro feliz en su nuevo hogar.' }, 
    ],
    videos: [
        { src: 'assets/videos/recopilacion_ayuda_perros_niños.mp4', title: 'Historias felices 1: Rescate y amor' },
        { src: 'assets/videos/perros-con-adultos.mp4', title: 'Historias felices 2: Adopciones exitosas' }
    ]
}

};