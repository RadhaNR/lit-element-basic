import { LitElement, html } from 'lit-element';

export class DataBinding extends LitElement {
    static get properties() {
        return {
            name: {
                type: String
            },
            className: {
                type: String
            },
            isDisabled: {
                type: Boolean
            }
        }
    }
    constructor() {
        super();
        this.name = "Radha";
        this.className = "test";
        this.isDisabled = true;
    }
    handleClick() {
        this.isDisabled = !this.isDisabled;
    }
    handleMouseEvent(event) {
        console.log(event.type)
    }
    render() {
        return html`
        <div>content/text Binding</div>
        <p>Name: ${this.name}</p>
        <div>Attribute binding</div>
        <p name=${this.className} class=${this.className} id=${this.className}></p>
        <div>Boolean Attribute </div>
        <input type="text" ?disabled="${this.isDisabled}"/>
        <div>Property binding</div>
        <input .value=${this.name} ?disabled="${!this.isDisabled}"/>
        <div>Event Handler</div>
        <button @click=${this.handleClick} @mouseenter=${this.handleMouseEvent} @mouseleave=${this.handleMouseEvent} >Click</button>
        `
    }
}

window.customElements.define('data-binding', DataBinding);