console.log("Wonderling is running...");

import { LitElement, html } from "lit";

class WanderlingApp extends LitElement {
  createRenderRoot() {
    return this; // Disable shadow DOM
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    const countryObj = {
      name: "Czechia",
      countryCode: "cz",
      capital: "Prague",
    };
    return html`
      <h1>Wanderling</h1>
      <country-view .countryObj=${countryObj} />
    `;
  }
}

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

class AudioPlayer extends LitElement {
  static properties = {
    src: { type: String },
    isPlaying: { type: Boolean },
  };

  createRenderRoot() {
    return this; // Disable shadow DOM
  }

  connectedCallback() {
    super.connectedCallback();
  }

  togglePlay() {
    const audioElm = this.querySelector("audio");
    if (audioElm) {
      if (this.isPlaying) {
        audioElm.pause();
        audioElm.currentTime = 0;
      } else {
        audioElm.play();
      }
    }
    this.isPlaying = !this.isPlaying;
  }

  render() {
    return html`
      <audio
        ?autoplay=${this.isPlaying}
        @ended=${() => (this.isPlaying = false)}
      >
        <source .src=${this.src} type="audio/mpeg" />
        <p>Your browser does not support the audio element.</p>
      </audio>
      <button @click=${this.togglePlay}>
        ${this.isPlaying ? "Pause" : "Play"}
      </button>
    `;
  }
}

customElements.define("audio-player", AudioPlayer);
customElements.define("country-view", Country);
customElements.define("wanderling-app", WanderlingApp);
