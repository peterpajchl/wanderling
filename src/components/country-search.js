import { LitElement, html } from "lit";
import { fetchCountries } from "../services/api.js";

class CountrySearch extends LitElement {
  static properties = {
    query: { type: String },
    delegateDidSearch: { type: Function },
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
      <form class="form mb-3">
        <input
          name="country-search"
          type="text"
          class="form-control"
          placeholder="Search country..."
          .value=${this.query}
          @input=${(e) => {
            this.query = e.target.value;
            this.delegateDidSearch(this.query);
          }}
        />
      </form>
    `;
  }
}

export default CountrySearch;
