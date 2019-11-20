import {LitElement, html, css} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {styleMap} from 'lit-html/directives/style-map';


export class DynamicStyleClass extends LitElement {
    static get styles() {
        return [css`
            .on{background-color: green} 
            .off{background-color: red}
            
        `]
    }
    constructor() {
        super();
        this.classes= {on: true, off: false};
    }
    switchAction() {
        console.log(this.classes)
        this.classes={on: !this.classes.on, off: !this.classes.off}
    }
    render() {
        return html `
            <div class=${classMap(this.classes)}>this is div</div>
            <button @click=${this.switchAction} style=${styleMap({color:"red", width: "500px"})}>Switch</button>
        `;
    }
}

window.customElements.define('dynamic-style-class', DynamicStyleClass);