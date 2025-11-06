// js/components/TheHeader.js

export function renderHeader() {
    return `
        <header class="main-header">
            <div class="header-container container">
                <a href="index.html" class="logo-area">
                    <img src="assets/images/logo-terra-angels-02.png" alt="Logo Terra Angels" class="logo-image">
                    <span class="site-title">Terra Angels</span>
                </a>
                <nav class="main-nav">
                    <ul>
                        <li><a href="index.html#inicio">Inicio</a></li>
                        <li><a href="index.html#acerca">Nosotros</a></li>
                        <li><a href="index.html#programas">Programas</a></li>
                        <li><a href="index.html#dona">Dona</a></li>
                    </ul>
                </nav>
                <a href="contacto.html" class="cta-button nav-cta">¡Involúcrate!</a>
            </div>
        </header>
    `;
}