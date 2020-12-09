import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Layout } from './layout';
import data from './reportPageData';

import dotProp from "dot-prop-immutable";
// import data from './worksheetData';

import cards from './cards';

const Page = () => {
  const [config, setConfig] = useState(data);

  const updateProps = (path, propName, value) => {
    const newConfig = dotProp.set(config, `${path}.${propName}`, value);

    console.log('jimi ', newConfig);

    setConfig(newConfig);
    
  }

  return <Layout config={config} components={cards} updateProps={updateProps} />;
};

ReactDOM.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
  document.getElementById('root'),
);
