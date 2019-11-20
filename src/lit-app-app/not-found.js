import {LitElement, html} from 'lit-element';

class NotFound extends LitElement {
    render() {
        return html `
            <div>Not Found</div>
        `;
    }
}

window.customElements.define('not-found', NotFound);