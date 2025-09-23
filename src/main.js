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
      <button class="btn btn-sm" @click=${this.togglePlay}>
        ${this.isPlaying
          ? html`<svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-stop-circle"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
              />
              <path
                d="M5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5z"
              />
            </svg>`
          : html`<svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-play-circle"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
              />
              <path
                d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"
              />
            </svg>`}
      </button>
    `;
  }
}

customElements.define("pager-element", Pager);
customElements.define("country-list", CountryList);
customElements.define("play-btn", AudioPlayer);
customElements.define("country-view", Country);
customElements.define("country-search", CountrySearch);
customElements.define("wanderling-app", WanderlingApp);
