import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Layout } from './layout';
import data from './reportPageData';

// import dotProp from 'dot-prop-immutable';
import jsonpath from 'jsonpath';

// import data from './worksheetData';

import cards from './cards';

const Page = () => {
  const [config, setConfig] = useState(data);

  const updateConfig = (propName, newValue) => {
    jsonpath.apply(config, `$..${propName}`, () => {
      return newValue;
    });

    setConfig({ ...config });
  };

  const updateProps = (id, propName, newValue) => {
    jsonpath.apply(config, `$..[?(@.id=="${id}")].${propName}`, () => {
      return newValue;
    });

    setConfig({ ...config });
  };

  return (
    <Layout
      config={config}
      components={cards}
      updateProps={updateProps}
      updateConfig={updateConfig}
    />
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
  document.getElementById('root'),
);
