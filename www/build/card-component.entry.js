import { r as registerInstance, h } from './index-f56d61f5.js';

const Card = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("p", null, "My name is ", this.name));
    }
};

export { Card as card_component };
