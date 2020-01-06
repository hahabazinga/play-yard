class Square extends HTMLElement {
  static get observedAttributes() {
    return ['l', 'c'];
  }
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    const div = document.createElement('div');
    const style = document.createElement('style');

    shadow.appendChild(div);
    shadow.appendChild(style);
  }

  connectedCallback() {
    console.log('custom element Square added to page');
    updateStyle(this);
  }
  disconnectedCallback() {
    console.log('Custom square element removed from page.');
  }

  adoptedCallback() {
    console.log('Custom square element moved to new page.');
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    console.log('Custom square element attributes changed.', name, oldValue, newValue);
    updateStyle(this);
  }
}
function updateStyle(elem: Square) {
  const shadow = elem.shadowRoot;
  const style = shadow && shadow.querySelector('style');
  style &&
    (style.textContent = `
  div {
    width: ${elem.getAttribute('l')}px;
    height: ${elem.getAttribute('l')}px;
    background-color: ${elem.getAttribute('c')};
  }
  `);
}
customElements.define('custom-square', Square);

export default Square;
