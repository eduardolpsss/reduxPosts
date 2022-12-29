import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware, Store } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import reducer from './store/reducer';

const store: Store<PostState, PostAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk));

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
