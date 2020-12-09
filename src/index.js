import React from 'react';
import ReactDOM from 'react-dom';

import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import { selectLayout } from './redux/layoutSlice';

import { Layout } from './layout';

import cards from './cards';

const Page = () => {
  const config = useSelector(selectLayout);

  return <Layout config={config} components={cards} />;
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Page />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
