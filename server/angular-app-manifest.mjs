
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://rewriteinc.io',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23851, hash: '95a56f2d47d3089c46d5654bf0832fbfa496a6799cce5d8593f7d782f3cbdd2a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17427, hash: '1461c9a85c03fc1419ac7c7bf71bae36411ab0102fea9026e2ce5feb355b0b97', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 30129, hash: '983ca427847b9c3f48dbe6fbd78190732e3137e4b03218d6ce9cab6a6b187654', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
