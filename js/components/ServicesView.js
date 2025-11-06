// js/components/ServicesView.js
import { renderServiceCard } from './ServiceCard.js';

/**
 * Renderiza la vista completa de Servicios Comerciales (ServicesView.vue).
 * @param {Array} services - Lista de servicios desde la store (e.g., store.services).
 * @returns {string} Código HTML de la vista de Servicios.
 */
export function renderServicesViewList(services) {
    
    // 1. Generar las tarjetas HTML utilizando la función de ServiceCard.js
    const servicesHTML = services.map(renderServiceCard).join('');

    // 2. Devolver la estructura completa de la sección
    return `
        <div class="services-view-content container">
            <h2 class="section-title">Nuestros <span class="text-accent">Servicios Comerciales</span></h2>
            <p class="section-subtitle">Cada servicio que contratas financia directamente un rescate y el cuidado de mascotas.</p>
            
            <div class="services-grid programs-grid">
                ${servicesHTML}
            </div>
            
            <div class="cta-area">
                <p>¿Interesado en adiestramiento o guardería? ¡Contáctanos ahora!</p>
                <a href="contacto.html" class="cta-button primary-cta">Solicitar Servicio</a>
            </div>
        </div>
    `;
}