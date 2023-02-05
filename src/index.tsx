import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './store/store';
import reportWebVitals from './reportWebVitals';

import Main from './components/main';

import './static/styles/index.scss';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </StrictMode>
);

reportWebVitals();
