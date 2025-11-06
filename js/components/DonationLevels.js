// js/components/DonationLevels.js
// Recibe los datos de la store
export function renderDonationLevels(donationLevels) {
    
    // Convertir el array de niveles de donación en una cadena HTML
    const donationCardsHTML = donationLevels.map((level, index) => {
        // Lógica de color condicional de Vue (v-bind:class) migrada a JS
        const colorClass = index % 2 === 0 ? 'primary-blue-bg' : 'secondary-mint-bg';
        const ctaColor = index % 2 === 0 ? 'yellow-cta' : 'blue-cta';

        return `
            <div 
                class="donation-card info-card ${colorClass}"
            >
                <h3 class="card-title">${level.level}</h3>
                
                <p class="price-cop">${level.cop}</p>
                <p class="price-usd">${level.usd}</p>
                
                <p class="description">${level.description}</p> 
                
                <a href="contacto.html" class="donate-cta ${ctaColor}">Donar Ahora</a>
            </div>
        `;
    }).join('');

    return `
        <section class="donation-section" id="dona">
            <h2 class="section-title">¡Sé un Héroe! <span class="text-accent">Niveles de Apadrinamiento</span></h2>
            <p class="subtitle">Tu aporte se convierte en rescate, alimento y salud para mascotas de Cali.</p>
            <div class="container">
                <div class="donation-grid">
                    ${donationCardsHTML}
                </div>
                
                <div class="disclaimer">
                    <p> Todos los fondos son destinados directamente a la atención veterinaria, alimentación y logística de adopción.</p>
                    <p> Terra Angels es una fundación sin fines de lucro. ¡Tu apoyo hace la diferencia!</p>
                </div>
            </div>
        </section>
    `;
}