class AppFooter extends HTMLElement {
	connectedCallback() {
		const isNestedPage = window.location.pathname.includes('/projects/') || window.location.pathname.includes('/footer/');
		const basePath = isNestedPage ? '../' : '';
		const impressumHref = `${basePath}footer/impressum.html`;
		const datenschutzHref = `${basePath}footer/datenschutz.html`;

		this.innerHTML = `
			<footer class="site-footer">
				<div class="site-footer__divider"></div>
				<div class="site-footer__bar">
					<a href="${impressumHref}" class="site-footer__link">Impressum</a>
					<a href="${datenschutzHref}" class="site-footer__link">Datenschutz</a>
					<span class="site-footer__copy">© 2026 Marian Roth</span>
				</div>
			</footer>
		`;
	}
}

customElements.define('app-footer', AppFooter);
