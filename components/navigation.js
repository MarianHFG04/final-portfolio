class AppNavigation extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const isNestedPage = window.location.pathname.includes('/projects/') || window.location.pathname.includes('/footer/');
    const homeHref = isNestedPage ? '../index.html' : 'index.html';
    const projectsHref = `${homeHref}#projekte`;
    const aboutHref = `${homeHref}#about-me`;
    const contactHref = `${homeHref}#contact`;

    this.innerHTML = `
      <header class="header">
        <a href="${homeHref}" class="nav-brand" aria-label="Zur Startseite">MR</a>
        <nav class="nav">
          <a href="${projectsHref}" class="nav-link">Projekte</a>
          <a href="${aboutHref}" class="nav-link">Über mich</a>
          <a href="${contactHref}" class="nav-link">Kontakt</a>
        </nav>
      </header>
    `;
  }
}

customElements.define('app-navigation', AppNavigation);
