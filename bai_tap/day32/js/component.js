const F8 = {
  create: function (componentName, options = { data: () => {}, template: "" }) {
    class Component extends HTMLElement {
      constructor() {
        super();
        this.state = options.data();
        this.nodeTexts = [];
        this.computedHTML = options.template;
        this.templateNode = document.createElement("template");
      }

      handleReRender(code) {
        Object.keys(this.state).forEach((key) => {
          const elementState = "element-" + code;
          if (elementState.startsWith("element-" + key)) {
            const positionKey = elementState.indexOf(key) + key.length;
            const dataNodeElements = elementState.slice(0, positionKey);
            this.nodeTexts[dataNodeElements].forEach((element) => {
              element.textContent = this.state[key];
            });
          }
        });
      }

      handleChange(element, event, code) {
        const codes = code.split(";");
        element.addEventListener(event, () => {
          codes.forEach((code) => {
            code = code.trim();
            const newCode = `this.state.${code};`;
            eval(newCode);
            this.handleReRender(code);
          });
        });
      }

      addElementEvent() {
        Array.from(this.templateNode.children).forEach((child) => {
          [...child.attributes].forEach((attribute) => {
            if (attribute.name.startsWith("v-on")) {
              const regex = /v-on:(\w+)="(\w+.*?)"/;
              const nodeAttr = `${attribute?.nodeName}="${attribute?.nodeValue}"`;
              const match = nodeAttr.match(regex);
              if (match) {
                this.handleChange(child, match[1], match[2]);
              }
            }
          });
        });
      }

      initialGetValue(value) {
        const regex = new RegExp(`{{${value}}}`, "gi");
        const match = this.computedHTML.match(regex);

        match?.forEach((cutRegex) => {
          Array.from(this.templateNode.children).forEach((child) => {
            if (child.innerHTML.includes(cutRegex)) {
              const parts = child.innerHTML.split(cutRegex);
              const fragment = document.createDocumentFragment();

              parts.forEach((text, index) => {
                fragment.appendChild(document.createTextNode(text));
                if (index < parts.length - 1) {
                  const variableNode = document.createTextNode(
                    this.state[value]
                  );
                  if (!this.nodeTexts["element-" + value]) {
                    this.nodeTexts["element-" + value] = [variableNode];
                  } else {
                    this.nodeTexts["element-" + value].push(variableNode);
                  }
                  fragment.appendChild(variableNode);
                }
              });
              child.innerHTML = "";
              child.appendChild(fragment);
            }
          });
        });
      }

      connectedCallback() {
        this.templateNode.innerHTML = this.computedHTML;
        this.templateNode = this.templateNode.content.cloneNode(true);
        Object.keys(this.state).forEach((key) => this.initialGetValue(key));
        this.render();
      }

      render() {
        this.addElementEvent();
        this.appendChild(this.templateNode);
      }
    }

    customElements.define(componentName, Component);
  },
};
