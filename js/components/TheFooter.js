// js/components/TheFooter.js
// Se asume el uso de Font Awesome (cargado en el HTML)

export function renderFooter() {
    // Uso de los íconos 'fab' (Font Awesome Brands)
    const instagramIcon = `<i class="fab fa-instagram"></i>`;
    const facebookIcon = `<i class="fab fa-facebook-f"></i>`;
    const whatsappIcon = `<i class="fab fa-whatsapp"></i>`; 

    return `
        <footer class="main-footer">
            <div class="footer-container container">
                
                <div class="footer-info">
                    <h3 class="footer-title">Terra Angels</h3>
                    <p>Rescatando, rehabilitando y promoviendo la adopción responsable de animales en Cali.</p>
                    <p class="location">
                        Fundación sin ánimo de lucro - Cali, Valle del Cauca, Colombia
                    </p>
                </div>

                <div class="footer-links">
                    <h4 class="links-title">Enlaces Rápidos</h4>
                    <ul>
                        <li><a href="index.html#acerca">Nuestra Misión</a></li>
                        <li><a href="servicios.html">Programas y Servicios</a></li>
                        <li><a href="index.html#dona">Apadrina / Dona</a></li>
                        <li><a href="https://fundacionrunningpaws.org/" target="_blank">Mascotas en Adopción (Enlace Externo)</a></li> 
                        <li><a href="#">Política de Privacidad</a></li>
                    </ul>
                </div>

                <div class="footer-social">
                    <h4 class="links-title">Conéctate</h4>
                    <div class="social-icons">
                        <a href="URL_TU_INSTAGRAM" target="_blank" aria-label="Instagram">
                            ${instagramIcon} 
                        </a>
                        <a href="URL_TU_FACEBOOK" target="_blank" aria-label="Facebook">
                            ${facebookIcon} 
                        </a>
                        <a href="URL_TU_WHATSAPP" target="_blank" aria-label="Whatsapp">
                            ${whatsappIcon}
                        </a>
                    </div>
                    <p class="contact-email">contacto@terraangels.org</p>
                    <p class="contact-text">¡Tu apoyo transforma vidas caninas!</p>
                </div>
            </div>

            <div class="copyright">
                <p>&copy; ${new Date().getFullYear()} Terra Angels. Todos los derechos reservados.</p>
            </div>
        </footer>
    `;
}