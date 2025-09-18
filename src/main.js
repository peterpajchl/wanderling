console.log("Wonderling is running...");

import { LitElement, html } from "lit";

async function fetchCountries() {
  try {
    let res = await fetch("http://localhost:4123/api/countries?page=0");
    let data = await res.json();
    console.log("Data", data);
    return data;
  } catch (e) {
    console.log("Error with request", e);
  }
}

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

class CountryList extends LitElement {
  static properties = {
    data: { type: Array },
  };

  constructor() {
    super();
    this.data = [];
  }

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    fetchCountries().then((d) => {
      this.data = d;
    });
  }

  render() {
    console.log(this.data);
    return html`
      <ul>
        ${this.data.map(
          (item) => html`
            <li>
              <div>${item.country}</div>
              <div>${item.capital}</div>
              <div>
                <img
                  src="/static/flags/w320-webp/${item.country_code.toLowerCase()}.webp"
                />
              </div>
            </li>
          `,
        )}
      </ul>
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

customElements.define("country-list", CountryList);
customElements.define("audio-player", AudioPlayer);
customElements.define("country-view", Country);
customElements.define("wanderling-app", WanderlingApp);
