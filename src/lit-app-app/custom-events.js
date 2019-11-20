import { LitElement, html } from 'lit-element';
import './handle-custom-event';

export class CustomEvents extends LitElement {
    constructor() {
        super();
        this.addEventListener('get-item', this.handleEvent);
    }
    handleEvent(event) {
        console.log(event.type,event.detail);
    }
    getItem(e) {
        const event = new CustomEvent('get-item', {
            detail: { message: 'my-event happened parent element' },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
    }

    // firstUpdated(changedProperties) {
    //     const event = new CustomEvent('get-item', {
    //         detail: { message: 'my-event happened.' },
    //         bubbles: true,
    //         composed: true
    //     });
    //     this.dispatchEvent(event);
    // }

    render() {

        return html`
        <div>Fire Custom Events</div>
        <button  class="ToDoItem-Delete" @click=${this.getItem}>Delete Item</button>
        <handle-custom-event/>
        `
    }
}

window.customElements.define('custom-events', CustomEvents);