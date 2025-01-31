import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Router from './utils/Router';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'utils/GlobalStyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Router />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  </BrowserRouter>,
);

reportWebVitals();
