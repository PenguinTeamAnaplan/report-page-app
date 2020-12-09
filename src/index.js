import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from './layout';
import data from './reportPageData';
// import data from './worksheetData';

import cards from './cards';

ReactDOM.render(
  <React.StrictMode>
    <Layout config={data} components={cards} />
  </React.StrictMode>,
  document.getElementById('root'),
);
