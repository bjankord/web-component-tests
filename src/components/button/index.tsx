import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'button-component',
})
export class Button {

  // Indicate that name should be a public property on the component
  @Prop() text: string;

  // Slot is similar to children in react
  render() {
    return (
      <button>
        <span>1</span>
        <slot />
        <span>2</span>
        {this.text}
      </button>
    );
  }
}