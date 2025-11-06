// js/components/TeamSection.js

export function renderTeamSection(teamMembers) {
    const teamHTML = teamMembers.map(member => `
        <div class="team-member-card">
            <div class="initials-circle">
                ${member.initials}
            </div>
            <h4>${member.name}</h4>
            <p class="member-role">${member.role}</p>
        </div>
    `).join('');

    return `
        <section class="team-section" id="equipo">
            <div class="container">
                <h2 class="section-title">Conoce a Nuestro <span class="text-accent">Equipo</span></h2>
                <div class="team-grid">
                    ${teamHTML}
                </div>
            </div>
        </section>
    `;
}