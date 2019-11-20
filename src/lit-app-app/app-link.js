import { LitElement, html } from 'lit-element';
import { routerLinkMixin } from 'lit-element-router';
 
export class AppLink extends routerLinkMixin(LitElement) {
    constructor() {
        super()
        this.href = ''
    }
    static get properties() {
        return {
            href: { type: String }
        }
    }
    render() {
        return html`
            <a href='${this.href}' @click='${this.linkClick}'><slot></slot></a>
        `
    }
    linkClick(event) {
        event.preventDefault();
        this.navigate(this.href);
    }
}
 
customElements.define('app-link', AppLink);