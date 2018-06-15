import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import * as test from './bip39.js';


/**
 * `polymer-bip39`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class PolymerBip39 extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <template is="dom-if" if="{{debug}}">
      <h4>[[mnemonic]]</h4>
      <small>[[seed]]</small>
      </template>
    `;
  }
  static get properties() {
    return {
      bip39: {
        type: Object,
      },
      debug: {
        type: Boolean,
        value: false,
      },
      mnemonic: {
        type: Array,
        notify: true,
        reflectToAttribute: true,
      },
      seed: {
        type: Array,
        notify: true,
        reflectToAttribute: true,
      },
    };
  }

  generateMnemonic() {
    return new Promise((resolve, reject) => {
      let mnemonic = this.bip39.generateMnemonic();
      this.mnemonic = mnemonic
      this.seed = this.bip39.mnemonicToSeedHex(mnemonic)
      resolve(JSON.stringify([this.mnemonic, this.seed]))
    })
  }

  constructor() {
    super();
    console.log(test)
    // this.bip39 = bip39;
    // this.generateMnemonic()
  }

} window.customElements.define('polymer-bip39', PolymerBip39);
