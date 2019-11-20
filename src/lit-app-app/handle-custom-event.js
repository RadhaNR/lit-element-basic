import { LitElement, html } from 'lit-element';

export class HandleCustomEvent extends LitElement {
    deleteItem(e) {
        console.log("in child element", e)
        
    }
    getItem(e) {
        const event = new CustomEvent('get-item', {
            detail: { message: 'my-event happened from Child event' },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
    }

    render() {
        return html`
            <button @click=${this.getItem}>Handle Custom Event</button>
        `
    }
}
window.customElements.define('handle-custom-event', HandleCustomEvent);