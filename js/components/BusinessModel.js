// js/components/BusinessModel.js

export function renderBusinessModel(businessData) {
    
    const generateList = (items) => items.map(item => `<li>${item}</li>`).join('');

    const partnersList = generateList(businessData.partners);
    const activitiesList = generateList(businessData.activities);
    const channelsList = generateList(businessData.channels);
    const relationshipsList = generateList(businessData.relationships);

    return `
        <section class="business-section" id="negocio">
            <h2 class="section-title">Nuestra Estructura <span class="text-accent">Clave</span></h2>
            <div class="container">
                <div class="business-grid">
                    
                    <div class="business-card secondary-mint-bg">
                        <h3 class="card-title">Socios Clave</h3>
                        <ul>${partnersList}</ul>
                    </div>

                    <div class="business-card secondary-mint-bg">
                        <h3 class="card-title">Actividades Clave</h3>
                        <ul>${activitiesList}</ul>
                    </div>

                    <div class="business-card primary-blue-bg">
                        <h3 class="card-title text-yellow-override">Canales o Redes Sociales</h3>
                        <ul>${channelsList}</ul>
                    </div>

                    <div class="business-card primary-blue-bg">
                        <h3 class="card-title text-yellow-override">Relación y Seguimiento</h3>
                        <ul>${relationshipsList}</ul>
                    </div>

                </div>
            </div>
        </section>
    `;
}
