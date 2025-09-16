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
    return html`
      <h1>Welcome to Wanderling</h1>
      <p>Your adventure starts here!</p>
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
    this.isPlaying = !this.isPlaying;
  }

  render() {
    return html`
      <audio
        ?autoplay=${this.isPlaying}
        @ended=${() => (this.isPlaying = false)}
      >
        <source .src=${this.src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button @click=${this.togglePlay}>
        ${this.isPlaying ? "Pause" : "Play"}
      </button>
    `;
  }
}

customElements.define("audio-player", AudioPlayer);
customElements.define("wanderling-app", WanderlingApp);
