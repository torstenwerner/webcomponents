class CustomSample extends HTMLElement {
    constructor() {
        super();
        const template = document.querySelector('#sample-template');
        const clone = template.content.cloneNode(true);
        this.attachShadow({ mode: 'open' }).appendChild(clone);
        this._greeting = this.shadowRoot.querySelector('#hello');
    }

    get greeting() {
        return this._greeting.innerText;
    }

    set greeting(value) {
        this._greeting.innerText = value;
    }
}

customElements.define('custom-sample', CustomSample);
