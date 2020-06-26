import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'web-app',
  globalStyle: 'src/styles/app.scss',

  plugins: [
    sass()
  ],

  devServer: {
    openBrowser: false
  }
};