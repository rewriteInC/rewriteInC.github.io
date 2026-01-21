
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
    'index.csr.html': {size: 23806, hash: '1906bd4ffa5884b30d09b8ec491d8716f3e304e9d05bfe76f148b3c701872cb9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17427, hash: 'a471aa1941733b4f342ad6d7ca19d43a387246ba8b51c788024109c7446ddfef', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 30083, hash: 'b2e59cd58c2f8fb53096cdb2df7f8d141aaae8002ea70a8f490b2b777aa5ee32', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-Z5UYKNDX.css': {size: 6934, hash: 'VxIyzD7LHG8', text: () => import('./assets-chunks/styles-Z5UYKNDX_css.mjs').then(m => m.default)}
  },
};
