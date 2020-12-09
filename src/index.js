import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from './layout';
import reportPageData from './reportPageData';

import cards from './cards';

ReactDOM.render(
  <React.StrictMode>
    <Layout config={reportPageData} components={cards} />
  </React.StrictMode>,
  document.getElementById('root'),
);
