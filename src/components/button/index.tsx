import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'g-button',
  styleUrl: 'index.scss',
})
export class Button {

  // Indicate that name should be a public property on the component
  @Prop() text: string;
  @Prop({ reflectToAttr: true }) disabled: boolean;

  // Slot is similar to children in react
  render() {
    return (
      <button
        disabled={this.disabled}
      >
        <span>1</span>
        <slot />
        <span>2</span>
        {this.text}
      </button>
    );
  }
}