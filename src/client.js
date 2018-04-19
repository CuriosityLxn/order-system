import React           from 'react';
import { render }      from 'react-dom';
import Client          from 'pages/client';
import { Provider }    from 'react-redux';
import { createStore } from 'redux';
import reducer         from './reducers';
import domready        from 'domready';


const store = createStore(reducer);

domready(() => {
  render(
    <Provider store={store}>
      <Client />
    </Provider>,
    document.getElementById('app')
  );
});
