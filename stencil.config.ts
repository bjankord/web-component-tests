import { Config } from '@stencil/core';
// import { sass } from '@stencil/sass';

export const config: Config = {
  globalStyle: 'src/styles/app.css',

  // plugins: [
  //   sass()
  // ],

  devServer: {
    openBrowser: false
  }
};