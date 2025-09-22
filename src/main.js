console.log("Wonderling is running...");

import { LitElement, html } from "lit";
import Pager from "./components/pagination.js";
import CountryList from "./components/country-list.js";
import Country from "./components/country.js";
import CountrySearch from "./components/country-search.js";

class WanderlingApp extends LitElement {
  createRenderRoot() {
    return this; // Disable shadow DOM
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`Learn 197 countries and its capital city...`;
  }
}

class AudioPlayer extends LitElement {
  static properties = {
    src: { type: String },
    isPlaying: { type: Boolean },
  };

  createRenderRoot() {
    return this;
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

customElements.define("pager-element", Pager);
customElements.define("country-list", CountryList);
customElements.define("audio-player", AudioPlayer);
customElements.define("country-view", Country);
customElements.define("country-search", CountrySearch);
customElements.define("wanderling-app", WanderlingApp);
