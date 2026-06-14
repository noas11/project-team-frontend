import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import  createCache  from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import rtlPlugin from 'stylis-plugin-rtl';
import App from './App';
import { theme } from './theme/index.ts';

// RTL cache for MUI
const cacheRtl = createCache({
  key: 'muirtl',

  stylisPlugins: [rtlPlugin],
});
document.documentElement.dir = 'rtl';
document.body.dir = 'rtl';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </CacheProvider>
  </React.StrictMode>
);
