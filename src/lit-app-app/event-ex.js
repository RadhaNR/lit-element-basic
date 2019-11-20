import { LitElement, html } from 'lit-element';

export class EventEx extends LitElement {
    static get properties() {
        return {
            name: {
                type: String
            }
        }
    }
    constructor() {
        super();
        this.name = "HCL";

    }

    firstUpdated(changedProperties) {
        console.log("in firstUpdated", changedProperties)
        var btn = this.shadowRoot.querySelector("#btn");
        btn.addEventListener('mouseenter', this.handleClick);
        btn.addEventListener('mouseleave', this.handleClick);
    }
    //If your component adds an event listener to anything except itself or its children–for example, to Window, Document, or some element in the main DOM–you should add the listener in connectedCallback and remove it in disconnectedCallback.
    // connectedCallback() {
    //     super.connectedCallback();
    //     document.addEventListener('readystatechange', this.handleChange);
    // }
    // disconnectedCallback() {
    //     document.removeEventListener('readystatechange', this.handleChange);
    //     super.disconnectedCallback();
    // }

    handleClick(e) {
        console.log(this);
        this.name = Math.random();
    }
    render() {
        return html`
            ${this.name}    
            <button @click=${this.handleClick}>Event binding in Template</button>
            <button id="btn">Event binding in AddEventListner</button>
        `;
    }
}

window.customElements.define('event-ex', EventEx);