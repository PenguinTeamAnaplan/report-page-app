import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from './layout';
import { ReportPageData } from './reportPageData';

import cards from './cards';

ReactDOM.render(
  <React.StrictMode>
    <Layout config={ReportPageData} components={cards} />
  </React.StrictMode>,
  document.getElementById('root'),
);
