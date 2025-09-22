import { LitElement, html } from "lit";
import { fetchCountries } from "../services/api.js";

class CountrySearch extends LitElement {
  static properties = {
    query: { type: String },
  };

  constructor() {
    super();
  }

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    this.query = "";
  }

  render() {
    return html`
      <form class="form">
        <input
          type="text"
          class="form-control"
          placeholder="Search country..."
          .value=${this.query}
          @input=${(e) => {
            this.query = e.target.value;
          }}
        />
      </form>
    `;
  }
}

export default CountrySearch;
