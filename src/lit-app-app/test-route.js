import {LitElement, html} from 'lit-element';

export class TestRoute extends LitElement {
    render() {
        return html `
            Test ROuter
        `;
    }
}

window.customElements.define('test-route', TestRoute);