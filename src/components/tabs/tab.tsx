import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'g-tab'
})
export class Tab {
  @Prop() label: string;

  @Prop() active: boolean;

  @Prop({ reflectToAttr: true }) disabled: boolean;
}