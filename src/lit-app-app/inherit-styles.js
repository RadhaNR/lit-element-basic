import { html, css } from 'lit-element';

import { StaticStyles } from './static-styles'; //import parent component
import { sharedStyles } from './shared-styles';

export class InheritStyles extends StaticStyles {
    static get styles() {
        return [
            super.styles, // inherit styles from parent component
            sharedStyles,
            css`
            /* styling host element*/
            :host{background-color: red; border: 20px solid pink; font-size: 30px; font-family: aria;} 
            h1{color: gray}`
        ]

    }
    render() {
        return html`
            <div>This is DIV tag</div>
            <p>This is paragraph</p>
            <h1>hahahaha</h1>
        `;

    }
}

window.customElements.define('inherit-styles', InheritStyles);