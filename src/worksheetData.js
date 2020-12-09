const worksheetData = {
  id: 'worksheet-guid',
  type: 'WORKSHEET',
  version: 1,
  areas: {
    main: [
      {
        type: 'TEXT',
        widgetId: 1,
        styles: {
          left: 20,
          top: 20,
          width: 100,
          height: 200,
        },
      },
      {
        type: 'CHART',
        widgetId: 2,
        styles: {
          left: 140,
          top: 20,
          width: 100,
          height: 200,
        },
      },
    ],
    panel: [
      {
        type: 'TEXT',
        widgetId: 1,
        styles: {
          left: 20,
          top: 100,
          width: 100,
          height: 200,
        },
      },
    ],
  },
};

export default worksheetData;
