import { LitElement, html } from 'https://unpkg.com/@polymer/lit-element@0.6.4/lit-element.js?module';

class CustomSample extends LitElement {
    render() {
        return html`
            <slot></slot>
            <p id="hello" @click="${event => this.louder()}">${this.message}</p>

            <style>
                #hello {
                    color: darkred;
                    background-color: azure;
                }
            </style>
        `;
    }

    static get properties() {
        return {
            message: { type: String }
        };
    }

    constructor() {
        super();

        this.message = 'Good bye!';
    }

    louder() {
        this.message = this.message.toUpperCase();
    }
}

customElements.define('custom-sample', CustomSample);
