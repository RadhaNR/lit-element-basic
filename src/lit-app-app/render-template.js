import { LitElement, html } from 'lit-element';
import { ContentTemplate } from './content-template';
export class RenderTemplate extends LitElement {
    //export class RenderTemplate extends ContentTemplate {
    render() {
        return html`
        ${this.headerTemplate}
        ${this.footerTemplate}
        ${this.content}
        `;
    }

    get headerTemplate() {
        return html`<p>This is Header template</p>`
    }

    get footerTemplate() {
        return html`<p>This is footer template</p>`
    }
}

window.customElements.define('render-template', RenderTemplate);