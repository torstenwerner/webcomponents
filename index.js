// html templates

const template = document.querySelector('#sample-template');
const clone = template.content.cloneNode(true);

const container = document.querySelector('#container');
container.appendChild(clone);



// shadow dom

// container.attachShadow({ mode: 'open' }).appendChild(clone);

// document.querySelector('#hello').innerText = 'Guten Morgen!';
// container.shadowRoot.querySelector('#hello').innerText = 'Auf Wiedersehen!';
