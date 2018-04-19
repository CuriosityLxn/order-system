import React           from 'react';
import { render }      from 'react-dom';
import Business        from 'pages/business';
import { Provider }    from 'react-redux';
import { createStore } from 'redux';
import reducer         from './reducers';
import domready        from 'domready';


const store = createStore(reducer);

domready(() => {
  render(
    <Provider store={store}>
      <Business />
    </Provider>,
    document.getElementById('app')
  );
});
