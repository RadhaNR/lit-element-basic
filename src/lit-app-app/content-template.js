import {LitElement, html} from 'lit-element';

export class ContentTemplate extends LitElement {
    render() {
        return html ``;
    }

    get content() {
        return html `content from content template file`;
    }
}

window.customElements.define('content-template', ContentTemplate);