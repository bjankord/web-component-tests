import { r as registerInstance, h } from './index-f56d61f5.js';

const Button = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    // Slot is similar to children in react
    render() {
        return (h("button", null, h("span", null, "1"), h("slot", null), h("span", null, "2"), this.text));
    }
};

export { Button as button_component };
