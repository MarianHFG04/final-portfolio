const PROJECTS = [
  {
    id: 'hundelieb',
    title: 'Hundelieb',
    description: 'Ein Redesign der App Hundelieb, das Hundebesitzer:innen und Hundefreund:innen klarer, vertrauensvoller und gemeinschaftlicher miteinander vernetzt.',
    image: '../assets/images/Hundelieb/Blue.png',
    href: 'hundelieb.html',
  },
  {
    id: 'drive',
    title: 'Drive',
    description: 'Ein interaktiver Ausstellungsstand, der den Aufbau und die Funktionsweise eines Ottomotors über Projektion, physische Objekte und spielerische Interaktion verständlich vermittelt.',
    image: '../assets/images/Drive/Hero.png',
    href: 'drive.html',
  },
  {
    id: 'salt',
    title: 'Salt.',
    description: 'Ein experimentelles Mechatronik-Projekt, das die Drehbewegung beim Würzen in eine mechanische Interaktion übersetzt und alltägliche Handlung neu interpretiert.',
    image: '../assets/images/Salt/Hero1.png',
    href: 'salt.html',
  },
  {
    id: 'ease',
    title: 'Ease',
    description: 'Ein Assistenzsystem aus Smartwatch und App, das Stress- und Panikzustände früh erkennt und Nutzer:innen in belastenden Momenten unterstützt.',
    image: '../assets/images/Ease/Handy.png',
    href: 'ease.html',
  },
];

class RelatedProjects extends HTMLElement {
  connectedCallback() {
    const currentId = this.getAttribute('current');
    const others = PROJECTS.filter(p => p.id !== currentId);

    this.innerHTML = `
      <section class="related-projects">
        <div class="related-projects-divider"></div>
        <h2 class="related-projects-heading">Weitere Projekte</h2>
        <div class="related-projects-grid">
          ${others.map(p => `
            <a href="${p.href}" class="related-project-card ${p.id === 'hundelieb' ? 'is-hundelieb' : ''} ${p.id === 'salt' ? 'is-salt' : ''} ${p.id === 'ease' ? 'is-ease' : ''}">
              <div class="related-project-media">
                ${p.id === 'ease'
                  ? `<div class="related-project-stack" aria-label="Ease Hero Vorschau">
                       <img class="related-project-img ease-handy" src="../assets/images/Ease/Handy.png" alt="Ease Handy" />
                       <img class="related-project-img ease-watch" src="../assets/images/Ease/Smartwatch.png" alt="Ease Smartwatch" />
                     </div>`
                  : `<img class="related-project-img" src="${p.image}" alt="${p.title}" />`
                }
              </div>
              <div class="related-project-title">${p.title}</div>
              <div class="related-project-desc">${p.description}</div>
            </a>
          `).join('')}
        </div>
      </section>
    `;
  }
}

customElements.define('related-projects', RelatedProjects);
