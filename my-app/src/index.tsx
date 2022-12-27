import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore, applyMiddleware, Store } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import reducer from './store/reducer';

// Criando store
const store: Store<PostState, PostAction> & {
  dispatch: DispatchType;
} = configureStore({
  reducer,
  middleware: [thunk],
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.Fragment>
      <Provider store={store}>
      <App />
    </Provider>
  </React.Fragment>
);
