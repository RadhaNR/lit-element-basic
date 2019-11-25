import { html, LitElement, css } from 'lit-element';
import { routerMixin } from 'lit-element-router';

import './data-types';
import './render-template';
import './slot-elements';
import './test-route';
import './data-binding';
import './app-link';
import './app-main';
import './static-styles';
import './inherit-styles';
import './dynamic-style-class';
import './properties-ex';
import './event-ex';
import './custom-events';
import './handle-custom-events';
import './subprops-update';
import './not-found';

/**
 * @customElement
 * @polymer
 */
class LitAppApp extends routerMixin(LitElement) {
  // static get styles() {
  //   return [css `inherit-styles {color: pink}`]
  // }
  static get routes() {
    console.log("in router method")
    return [{
      name: 'data',
      pattern: ''
    }, {
      name: 'data',
      pattern: 'data'
    }, {
      name: 'render',
      pattern: 'render'
    }, {
      name: 'slots',
      pattern: 'slots'
    },
    {
      name: 'binding',
      pattern: 'binding'
    },
    {
      name: 'test',
      pattern: 'test'
    }, {
      name: 'static-styles',
      pattern: 'static-styles'
    },
    {
      name: 'inherit-style',
      pattern: 'inherit-style'
    }, {
      name: 'dynamic-style-class',
      pattern: 'dynamic-style-class'
    },{
      name: 'props-ex',
      pattern: 'props-ex'
    },
    {
      name:'event-ex',
      pattern: 'event-ex'
    },{
      name: 'custom-events',
      pattern: 'custom-events'
    },{
      name: 'handle-custom-events',
      pattern: 'handle-custom-events'
    },{
      name: 'sub-props-change',
      pattern: 'sub-props-change'
    },
    {
      name: 'not-found',
      pattern: '*'
    }];
  }
  constructor() {
    super();
    this.route = '';
  }
  onRoute(route, params, query, data) {
    console.log(route, params, query, data)
    this.route = route;
  }

  static get styles() {
    return [css``]
  }
  render() {
    return html`
    <style>
      html {
        --themeBgColor:  #123456;
      }
      static-styles{font-size: 50px}
    </style>
    <div>
      <app-link href="/">Data Types | </app-link>
      <app-link href="/data">Data Types | </app-link>
      <app-link href="/render">Render Template | </app-link>
      <app-link href="/slots">Slot Elements | </app-link>
      <app-link href="/binding">Data Binding | </app-link>
      <app-link href="/static-styles">Static styles | </app-link>
      <app-link href="/inherit-style">Inherit Style | </app-link>
      <app-link href="/dynamic-style-class">Dynamic Styles & Class | </app-link>
      <app-link href="/props-ex">Props Ex | </app-link>
      <app-link href="/event-ex">Events |</app-link>
      <app-link href="/custom-events">Fire Custom Events | </app-link>
      <app-link href="/handle-custom-events">Lit Element Custom event</app-link>
      <app-link href="/sub-props-change">SubPropsChange</app-link>
      
     <!-- <a href="test" @click=${this.navigateRoute} >Testing Route | </a>-->
      <app-link href="/user/14">Not Found</app-link>

      <app-main current-route=${this.route}>
        <div route="data"><data-types /></div>
        <div route="render"><render-template /></div>
        <div route="slots">
          <slot-element>
            <div><p>Default slot</p></div>
            <p name="one">render me -- slot one</p>
            <h1><div name="meToo">render me too -- slot meToo</div></h1>
          </slot-element>
        </div>
      <!--<div route="test"><test-route /></div>-->
      <div route="not-found"><not-found /></div>
      <div route="binding"><data-binding /></div>
      <div route="static-styles"><static-styles /></div>
      <div route="inherit-style"><inherit-styles /></div>
      <div route="dynamic-style-class"><dynamic-style-class /></div>
      <div route="props-ex"><props-ex /></div>
      <div route="event-ex"><event-ex /></div>
      <div route="custom-events"><custom-events /></div>
      <div route="handle-custom-events"><handle-custom-events /></div>
      <div route="sub-props-change"><sub-props-change /></div>
      </app-main>

    </div>
    `;
  }
}

window.customElements.define('lit-app-app', LitAppApp);
