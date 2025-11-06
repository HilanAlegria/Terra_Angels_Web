// js/components/ServiceCard.js
/**
 * Renderiza una tarjeta de servicio o programa.
 * Reemplaza a ServiceCard.vue.
 * @param {Object} service - Objeto que contiene id, title y description.
 * @returns {string} Código HTML de la tarjeta.
 */
export function renderServiceCard(service) {
    // Lógica de color de ServiceCard.vue: primary-blue-bg si es impar, secondary-mint-bg si es par
    // Asumimos que los IDs son secuenciales o están definidos en la store.
    const colorClass = service.id % 2 !== 0 ? 'primary-blue-bg' : 'secondary-mint-bg';
    
    return `
        <div 
            class="service-card info-card ${colorClass}"
        >
            <div class="service-content">
                <h3 class="card-title">${service.title}</h3>
                <p>${service.description}</p>
            </div>
            
            <div class="dog-image-placeholder">
                
            </div>
        </div>
    `;
}