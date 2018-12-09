class CustomSample extends HTMLElement {
    constructor() {
        super();

        const template = document.querySelector('#sample-template');
        const clone = template.content.cloneNode(true);
        this.attachShadow({ mode: 'open' }).appendChild(clone);

        this._message = this.shadowRoot.querySelector('#hello');
    }

    connectedCallback() {
        if (this.hasAttribute('message')) {
            this.message = this.getAttribute('message');
        }
    }

    get message() {
        return this._message.innerText;
    }

    set message(value) {
        this._message.innerText = value;
    }
}

customElements.define('custom-sample', CustomSample);
