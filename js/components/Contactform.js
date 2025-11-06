// js/components/ContactForm.js

/**
 * Renderiza el contenido completo de la sección de contacto,
 * incluyendo el formulario y los detalles de contacto con el logo a la derecha.
 * @returns {string} Código HTML completo de la vista de contacto.
 */
export function renderContactContent() {
    // 1. HTML del formulario (que ya tenías)
    const formHTML = `
        <form id="terra-angels-contact-form" class="contact-form secondary-mint-bg">
            <h3 class="form-header">Envíanos un Mensaje</h3>
            
            <div class="form-group">
                <label for="name">Nombre Completo <span class="required">*</span></label>
                <input type="text" id="name" name="name" required>
            </div>
            
            <div class="form-group">
                <label for="email">Correo Electrónico <span class="required">*</span></label>
                <input type="email" id="email" name="email" required>
            </div>

            <div class="form-group">
                <label for="phone">Teléfono de Contacto</label>
                <input type="tel" id="phone" name="phone">
            </div>

            <div class="form-group">
                <label for="motive">Motivo de Contacto <span class="required">*</span></label>
                <select id="motive" name="motive" required>
                    <option value="" disabled selected>Selecciona un motivo</option>
                    <option value="adopcion">Estoy interesado en Adopción</option>
                    <option value="voluntario">Quiero ser Voluntario/a</option>
                    <option value="donacion">Consulta sobre Apadrinamiento o Donación</option>
                    <option value="rescate">Necesito reportar un Rescate</option>
                    <option value="general">Consulta General</option>
                </select>
            </div>

            <div class="form-group">
                <label for="message">Mensaje o Consulta <span class="required">*</span></label>
                <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            
            <button type="submit" class="cta-button primary-cta">Enviar Mensaje</button>
            
            <p id="form-success-message" style="display: none; color: var(--color-primary-blue); margin-top: 15px; font-weight: bold;">
                ¡Gracias! Tu mensaje ha sido recibido. Procesaremos tu solicitud pronto.
            </p>
        </form>
    `;

    // 2. HTML de los detalles de contacto con el logo a la derecha
    const detailsHTML = `
        <div class="contact-details-wrapper">
            <div class="contact-details">
                <h3>Información Directa y Legal</h3>
                <p>Teléfono: +57 300 555 1234 (Voluntariado)</p>
                <p>fundaterraangels@gmail.com</p>
                <p>Horario de Oficina: Lunes a Viernes, 9:00 AM - 5:00 PM</p>
                <p class="legal-note">Para reportar un caso de rescate, por favor llame al teléfono de emergencia.</p>
            </div>
            
            <div class="contact-logo-area">
                <img 
                    src="assets/images/logo.png" 
                    alt="Logo Terra Angels" 
                    class="contact-logo-image"
                />
            </div>
        </div>
    `;

    // 3. Devolver la concatenación de ambos
    return formHTML + detailsHTML;
}