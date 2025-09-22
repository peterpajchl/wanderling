import { LitElement, html } from "lit";

class Pager extends LitElement {
  static properties = {
    pagination: { type: Object },
    prev: { type: Function },
    next: { type: Function },
  };

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return this.pagination ? this.renderPager() : html``;
  }

  calculateTotalPages() {
    return Math.ceil(
      this.pagination.total_items / this.pagination.items_per_page,
    );
  }

  renderPager() {
    return html`
      <button class="btn" @click=${this.prev}>Prev</button>
      <span>${this.pagination.page + 1} / ${this.calculateTotalPages()}</span>
      <button class="btn" @click=${this.next}>Next</button>
    `;
  }
}

export default Pager;
