import { html, LitElement } from 'lit-element';
/**
 * @customElement
 */
export class DataTypes extends LitElement {
    static get properties() {
        return {
            name: {
                type: String
            },
            age: {
                type: Number
            },
            isMarried: {
                type: Boolean
            },
            location: {
                type: Object
            },
            skillSet: {
                type: Array
            }
        }
    }
    constructor() {
        super();
        this.name = "Yash";
        this.age = 11;
        this.isMarried = false;
        this.location = { name: "Bangalore" };
        this.skillSet = [{ name: "Angular" }, { name: "React" }, { name: "Polymer" }];
    }
    render() {
        return html`
            <div>
            <u>Data Types</u>
             <p class=${this.name}>Name: ${this.name}</p>
             <p>Age: ${this.age}</p>
             <p>Married: ${this.isMarried ? html`Yes`: html`No`}</p>
             <p>Location: ${this.location.name}</p>
             <p>
                SkillSet: 

                ${this.skillSet.map((skill, i) => html`<div>${i+1}. ${skill.name}</div>`)}
             </p>
            </div>
        `;
    }
}
window.customElements.define('data-types', DataTypes);