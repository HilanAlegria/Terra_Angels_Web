// js/components/GallerySection.js
import { store } from '../store.js';

export function renderGallerySection() {
    const { images, videos } = store.gallery;

    // Generar el HTML de las imágenes
    const galleryItemsHTML = images.map(image => `
        <div class="gallery-item">
            <img src="${image.url}" alt="${image.alt}" class="gallery-photo">
        </div>
    `).join('');

    // Generar el HTML de los videos con diseño tipo tarjeta
    const videosHTML = videos.map(video => `
        <div class="video-card">
            <div class="video-wrapper">
                <video controls autoplay muted loop>
                    <source src="${video.src}" type="video/mp4">
                    Tu navegador no soporta el tag de video.
                </video>
            </div>
            <h4 class="video-title">${video.title}</h4>
        </div>
    `).join('');

    // Estructura HTML completa
    return `
        <section class="gallery-section" id="galeria">
            <div class="container">
                <h2 class="section-title">Momentos Felices de <span class="text-accent">Terra Angels</span></h2>
                <p class="section-subtitle">
                    Una muestra del impacto de nuestros programas: Historias de rescate, rehabilitación y adopciones exitosas.
                </p>
                
                <div class="gallery-grid">
                    ${galleryItemsHTML}
                </div>
                
                <div class="video-area">
                    <h3 class="video-section-title">Videos Destacados</h3>
                    <div class="video-grid">
                        ${videosHTML}
                    </div>
                </div>
            </div>
        </section>
    `;
}
