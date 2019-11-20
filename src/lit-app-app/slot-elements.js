import { LitElement, html, css } from 'lit-element';

export class SlotElement extends LitElement {
    static get styles() {
        return [css `
            ::slotted(*) {
                color: red
            }
            
        `]
    }
    render() {
        return html`
           
            <slot></slot>            
            <slot name="one"></slot>
            <slot name="meToo"></slot>
        `;

    }
}
window.customElements.define('slot-element', SlotElement);
