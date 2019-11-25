import { LitElement, html } from 'lit-element';

export class SubPropsChange extends LitElement {
    static get properties() {
        return {
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
        this.location = { name: 'Bangalore', code: 121432 };
        this.skillSet = [{
            name: 'ReactJS',
            code: 1
        }, {
            name: 'Angular',
            code: 2
        }, {
            name: 'LitElement',
            code: 3
        }]
    }

    deleteSkillSet() {
        //delete from bottom
        this.skillSet.pop(skill);
        this.requestUpdate();
    }
    deleteSkill(index) {
        console.log(this.skillSet[index])
        //delete specific item based on index
        this.skillSet.splice(index, 1);
        this.requestUpdate();
    }
    addSkill() {
        // Add new item to array 
        this.skillSet.push({name: 'Polymer'+ (Math.random() * 10) , code: Math.random()});
        this.requestUpdate();
    }

    updateSkill(index) {
        //update specific skill based on index
        this.skillSet[index] = {name:'Testing', code: Math.random()};
        this.requestUpdate();
        
    }
    changeLoc() {
        this.location.name = 'Mandya' + Math.random();
        this.requestUpdate();
    }
    render() {
        return html`<div>
            <p>Location: ${this.location.name}, Code: ${this.location.code}</p>
            <button @click=${this.changeLoc}>Change Location </button>
            <p>
                ${this.skillSet.map((skill, index) => {
            return html`<div>${index + 1}. ${skill.name} - ${skill.code} <button @click=${()=>this.deleteSkill(index)}>X</button><button @click=${()=>this.updateSkill(index)}>/</button></div>`;
        })}
            </p>
            <button @click=${this.addSkill}>Add Skill</button>

           
        </div>`;
    }
}

window.customElements.define('sub-props-change', SubPropsChange);