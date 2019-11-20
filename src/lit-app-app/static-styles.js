import { LitElement, css, html, unsafeCSS } from 'lit-element';
import { sharedStyles } from './shared-styles';

//This restriction exists to protect applications from security vulnerabilities whereby malicious styles, or even malicious code, can be injected from untrusted sources such as URL parameters or database values.
const h1Color = css`red`;
const divBgColor = css`green`;
const pBgColor = 'yellow';


export class StaticStyles extends LitElement {

    //static styles
    static get styles() {
        // return css `div {color: red}`; //styling style
        return [
            sharedStyles, // shared styles
            css`div {color: red; background-color: ${divBgColor}}
                p { color: black; background-color: ${unsafeCSS(pBgColor)}}`, ///Only use the unsafeCSS tag with trusted input. If you must use an expression in a css literal that is not itself a css literal, and you are confident that the expression is from a fully trusted source such as a constant defined in your own code, then you can wrap the expression with the unsafeCSS function: 
            css`h1 { font-size: 50px; color: ${h1Color};} `,// expression in  static styles
            ]
    }
    render() {
        return html`
        <link rel="stylesheet" href="./app-styles.css">
      <button>a button</button>
      <div>a div</div>
            <div>Static Styles</div>
            <p>Another style</p>
            <h1>Heading 111</h1>
            <h2>Heading 222222 </h2>
            
        `;
    }
}

window.customElements.define('static-styles', StaticStyles);
