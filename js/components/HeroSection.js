// js/components/HeroSection.js
export function renderHeroSection() {
    return `
        <section class="hero-section" id="inicio">
            
            <div class="hero-content">
                <h1 class="hero-title">
                    Rescate, Esperanza y <br><span class="text-accent">Una Nueva Vida</span> para mascotas en Cali
                </h1>
                <p class="hero-subtitle">
                    Somos una fundación que rescata, rehabilita y encuentra hogares. Financiamos nuestra misión a través de servicios de adiestramiento y cuidado de mascotas.
                </p>
                
                <div class="hero-actions">
                    <a href="#dona" class="cta-button primary-cta">
                        Conoce el Impacto / Dona
                    </a>
                    
                    <a href="#programas" class="cta-button secondary-cta">
                        Ver Programas y Servicios
                    </a>
                </div>
            </div>

            <div class="hero-right-content">
                <img 
                    src="assets/images/terra-angels-logo-06.jpg" 
                    alt="Logo Terra Angels" 
                    class="hero-logo-large"
                />
            </div>
            
        </section>
    `;
}
