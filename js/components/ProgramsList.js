// js/components/ProgramsList.js

import { renderServiceCard } from './ServiceCard.js';

/**
 * Renderiza la sección de Programas (con botón de apadrinamiento)
 * y los Servicios Comerciales (con servicios pagos).
 * No usa Vue: todo se genera con JavaScript plano.
 * 
 * @param {Array} impactPrograms - Lista de programas sociales desde la store.
 * @param {Array} services - Lista de servicios comerciales desde la store.
 * @returns {string} HTML de la sección completa.
 */
export function renderProgramsList(impactPrograms, services) {
    
    // --- Programas de rescate y apoyo social ---
    const impactHTML = impactPrograms.map((program, index) => {
        const colorClass = index % 2 === 0 ? 'primary-blue-bg' : 'secondary-mint-bg';
        const ctaColor = index % 2 === 0 ? 'yellow-cta' : 'blue-cta';
        
        return `
            <div class="info-card ${colorClass}">
                <h3 class="card-title">${program.title}</h3>
                <p class="card-description">${program.description}</p>

                ${program.price ? `
                    <p class="program-price">
                        Valor sugerido: <strong>${program.price}</strong>
                    </p>` : ''
                }

                <a href="#dona" class="cta-button ${ctaColor}">
                    ${program.price ? 'Donar Ahora' : 'Apadrinar'}
                </a>
            </div>
        `;
    }).join('');

    // --- Servicios comerciales ---
    const servicesHTML = services.map(renderServiceCard).join('');

    // --- Sección completa ---
    return `
        <section class="programs-section" id="programas">
            <div class="container">

                <h2 class="section-title">
                    Nuestros <span class="text-accent">Programas y Servicios</span>
                </h2>
                
                <p class="section-description">
                    El ingreso generado por nuestros servicios financia directamente nuestros
                    programas de rescate, rehabilitación y adopción de animales.
                </p>

                <!-- Programas de rescate -->
                <h3 class="subsection-title">Programas de Rescate y Apoyo Social</h3>
                <div class="programs-grid">
                    ${impactHTML}
                </div>

                <!-- Enlace a la sección de donaciones -->
                <div class="donation-link-area">
                    <p>¿Quieres apoyar uno de estos programas?</p>
                    <a href="#dona" class="cta-button yellow-cta">Ver Niveles de Apadrinamiento</a>
                </div>

                <!-- Servicios comerciales -->
                <h3 class="subsection-title">Servicios Comerciales</h3>
                <div class="programs-grid">
                    ${servicesHTML}
                </div>

                <!-- Llamado final -->
                <div class="cta-location-info">
                    <p class="ubicacion">
                        Trabajamos en Cali, Colombia, para transformar vidas caninas.
                    </p>
                    <a href="contacto.html" class="cta-button">
                        ¡Pide un Servicio o Hazte Voluntario!
                    </a>
                </div>

            </div>
        </section>
    `;
}
