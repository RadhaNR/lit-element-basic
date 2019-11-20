import { LitElement, html } from 'lit-element';
import './custom-events';
export class HandleCustomEvents extends LitElement {
   
    getItem(e) {
        console.log(e)
        const event = new CustomEvent('get-item', {
            detail: { message: 'my-event happened from lit element event' },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
    }

    render() {
        return html`
            <button @click=${this.getItem}>Lit Custom Event</button>
        `
    }
}
window.customElements.define('handle-custom-events', HandleCustomEvents);