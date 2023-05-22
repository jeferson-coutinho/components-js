// Definição do componente Header
class HeaderComponent extends HTMLElement {
	constructor() {
		super();

	// Criação do elemento shadow root
	this.attachShadow({ mode: 'open' });

	// Definição do estilo do componente
	this.shadowRoot.innerHTML = `
		<style>
			.header {
				margin: 20px 0;
				display: flex;
				justify-content: center;
				align-items: center;
				height: 80px;
				width: 900px;
				background: linear-gradient(to right, ${this.getAttribute('first-color')}, ${this.getAttribute('second-color')});
			}

			.title {
				color: ${this.getAttribute('color-text')};
				font-size: 24px;
				font-weight: bold;
			}
		</style>

		<div class="header">
			<h1 class="title">${this.getAttribute('title')}</h1>
		</div>
	`;
	}
}

// Registro do componente Header
customElements.define('header-component', HeaderComponent);
