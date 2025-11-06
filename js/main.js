// js/main.js
// Lógica de Enrutamiento y Montaje

import { store } from './store.js';
import { renderHeader } from './components/TheHeader.js';
import { renderFooter } from './components/TheFooter.js';

// Importación de Componentes de Vista
import { renderHeroSection } from './components/HeroSection.js';
import { renderAboutSection } from './components/AboutSection.js';
import { renderProgramsList } from './components/ProgramsList.js';
import { renderDonationLevels } from './components/DonationLevels.js';
import { renderGallerySection } from './components/GallerySection.js';
import { renderBusinessModel } from './components/BusinessModel.js';
import { renderContactContent } from './components/Contactform.js'; 
import { renderServicesViewList } from './components/ServicesView.js';

// Función Principal de Montaje (equivalente al router view)
function initializeApp() {
    // 1. Montar Header y Footer
    document.getElementById('header-container').innerHTML = renderHeader();
    document.getElementById('footer-container').innerHTML = renderFooter();

    const body = document.body;
    const path = window.location.pathname;

    // 2. Gestionar la Vista Actual (Equivalente a las rutas del Vue Router)
    
    // Ruta: / o /index.html (HomeView)
    if (body.classList.contains('view-home') || path === '/' || path.endsWith('/index.html')) {
        // Montaje de secciones de HomeView.vue
        document.getElementById('hero-section').innerHTML = renderHeroSection();
        document.getElementById('acerca').innerHTML = renderAboutSection(store.mission, store.vision, store.team);
        // ProgramsList renderiza tanto impactPrograms como services en Home
        document.getElementById('programas').innerHTML = renderProgramsList(store.impactPrograms, store.services); 
        document.getElementById('dona').innerHTML = renderDonationLevels(store.donationLevels);
        document.getElementById('galeria').innerHTML = renderGallerySection();
        document.getElementById('negocio').innerHTML = renderBusinessModel(store.businessModel);
    }
    
    // Ruta: /contacto.html (ContactView)
    else if (body.classList.contains('view-contact') || path.endsWith('/contacto.html')) {
        // Montaje de ContactView.vue
        document.getElementById('contact-content').innerHTML = renderContactContent();
    }
    
    // Ruta: /servicios.html (ServicesView)
    else if (body.classList.contains('view-services') || path.endsWith('/servicios.html')) {
        // Montaje de ServicesView.vue
        document.getElementById('services-list-view').innerHTML = renderServicesViewList(store.services);
    }
    
    // 3. Lógica Global: Menú de Navegación y Formularios
    
    // Toggle para menú de hamburguesa
    const hamburgerBtn = document.querySelector('.hamburger-button');
    const mainNav = document.querySelector('.main-nav');
    if (hamburgerBtn && mainNav) {
        hamburgerBtn.addEventListener('click', () => {
            mainNav.classList.toggle('is-open');
            hamburgerBtn.classList.toggle('is-open');
        });
        
        // Cerrar menú al hacer clic en un enlace (móvil)
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('is-open')) {
                    mainNav.classList.remove('is-open');
                    hamburgerBtn.classList.remove('is-open');
                }
            });
        });
    }

    // Manejo de envío de formulario de contacto (asume el ID del ContactForm.js)
    const contactForm = document.getElementById('terra-angels-contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Lógica de envío de formulario: Aquí iría la llamada a un API o fetch.
            console.log('Formulario enviado:', Object.fromEntries(new FormData(e.target)));
            
            // Mostrar mensaje de éxito
            const successMsg = document.getElementById('form-success-message');
            if (successMsg) {
                successMsg.style.display = 'block';
                e.target.reset(); // Limpiar formulario
                setTimeout(() => { successMsg.style.display = 'none'; }, 5000);
            }
        });
    }
}

// Iniciar la aplicación al cargar el DOM
document.addEventListener('DOMContentLoaded', initializeApp);