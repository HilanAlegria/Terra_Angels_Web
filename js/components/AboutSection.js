// js/components/AboutSection.js

// Datos de misión, visión y equipo
const mission = {
  title: "Nuestra Misión",
  text: "Rescatamos, rehabilitamos y reubicamos mascotas en situación de abandono o maltrato en Cali. Nuestro objetivo es ser un puente de amor y esperanza, transformando vidas caninas y felinas y promoviendo la tenencia responsable."
};

const vision = {
  title: "Nuestra Visión",
  text: "Ser la fundación líder en el Valle del Cauca, reconocida por su impacto social y gestión integral, logrando una sociedad donde todos los animales sean tratados con dignidad y respeto."
};

const team = [
  {
    name: "Rosa V.",
    role: "Fundadora & Directora",
    image: "assets/images/team/rosa.jpg"
  },
  {
    name: "David C.",
    role: "Coordinador de Adopciones",
    image: "assets/images/team/david.jpeg"
  },
  {
    name: "Valeria S.",
    role: "Jefa de Recaudación",
    image: "assets/images/team/Valeria.jpg"
  }
];

// Función principal para renderizar la sección “Acerca de”
export function renderAboutSection() {
  const teamMembersHTML = team.map(member => `
    <div class="team-member-card">
      <img 
        src="${member.image}" 
        alt="Foto de ${member.name}" 
        class="member-photo"
      />
      <h4 class="member-name">${member.name}</h4>
      <p class="member-role">${member.role}</p>
    </div>
  `).join('');

  return `
    <section class="about-section" id="acerca">
      <h2 class="section-title">
        Nuestra <span class="text-accent">Misión y Compromiso</span>
      </h2>
      <div class="container">
        <div class="mission-vision-grid">
          <div class="info-card primary-blue-bg">
            <h3 class="card-title">${mission.title}</h3>
            <p>${mission.text}</p>
          </div>
          <div class="info-card secondary-mint-bg">
            <h3 class="card-title">${vision.title}</h3>
            <p>${vision.text}</p>
          </div>
        </div>

        <h3 class="section-subtitle">Conoce a los Pilares de la Fundación</h3>
        <div class="team-grid">
          ${teamMembersHTML}
        </div>

        <div class="cute-dog-image">
          <p>Conoce el rostro detrás de cada rescate y adopción.</p>
        </div>
      </div>
    </section>
  `;
}
