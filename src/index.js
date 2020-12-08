import React from 'react';
import ReactDOM from 'react-dom';
import LayoutEngine from './LayoutEngine';
import { ReportPageData } from './ReportPageData';
import TEXT from './cards/Text';
import REPORT from './cards/Report';
import SLIDE from './cards/Slide';
import CHART from './cards/Chart';

const cards = { TEXT, REPORT, SLIDE, CHART};

ReactDOM.render(
  <React.StrictMode>
    <LayoutEngine config={ReportPageData} components={cards}/>
  </React.StrictMode>,
  document.getElementById('root')
);

