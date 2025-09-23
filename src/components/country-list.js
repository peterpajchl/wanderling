import { LitElement, html } from "lit";
import { fetchCountries } from "../services/api.js";

class CountryList extends LitElement {
  static properties = {
    data: { type: Array },
    pagination: { type: Object },
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
      let { data, pagination } = d;
      this.pagination = pagination;
      this.data = data;
    });
  }

  prev = () => {
    fetchCountries({ page: this.pagination.page - 1 }).then((d) => {
      let { data, pagination } = d;
      this.pagination = pagination;
      this.data = data;
    });
  };

  next = () => {
    fetchCountries({ page: this.pagination.page + 1 }).then((d) => {
      let { data, pagination } = d;
      this.pagination = pagination;
      this.data = data;
    });
  };

  searchCountries = (query) => {
    fetchCountries({ country: query }).then((d) => {
      let { data, pagination } = d;
      this.pagination = pagination;
      this.data = data;
    });
  };

  render() {
    return html`
      <country-search
        .delegateDidSearch=${this.searchCountries}
      ></country-search>
      <ul class="list-unstyled">
        ${this.data.map(
          (item) => html`
            <li class="mb-3">
              <div class="card">
                <img
                  class="card-img-top"
                  src="/static/flags/w320-webp/${item.country_code.toLowerCase()}.webp"
                />
                <div class="card-body">
                  <h5 class="card-title">
                    <play-btn
                      .src="/static/audio/${item.country_audio_filename}"
                    />
                    ${item.country}
                  </h5>
                  <p class="mb-0">
                    <play-btn
                      .src="/static/audio/${item.capital_audio_filename}"
                    />
                    ${item.capital}
                  </p>
                </div>
              </div>
            </li>
          `,
        )}
      </ul>
      <pager-element
        .pagination=${this.pagination}
        .prev=${this.prev}
        .next=${this.next}
      />
    `;
  }
}

export default CountryList;
