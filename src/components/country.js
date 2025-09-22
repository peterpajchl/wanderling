import { LitElement, html } from "lit";

class Country extends LitElement {
  static properties = {
    countryObj: { type: Object },
  };

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <div>${this.countryObj.name} <audio-player /></div>
      <div>
        <img
          src="/static/flags/w320-webp/${this.countryObj.countryCode}.webp"
        />
      </div>
      <div>${this.countryObj.capital} <audio-player /></div>
    `;
  }
}

export default Country;
