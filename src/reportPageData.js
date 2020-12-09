const reportPageData = {
  id: 'guid',
  type: 'REPORT',
  version: 1,
  children: [
    {
      id: 'guid',
      type: 'SLIDE',
      size: 'A4',
      orientation: 'portrait',
      children: [
        {
          type: 'TEXT',
          widgetId: 1,
          styles: {
            left: 20,
            top: 20,
            width: 100,
            height: 200,
            position: 'absolute',
            border: '1px solid tomato',
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
            position: 'absolute',
            border: '1px solid tomato',
          },
        },
      ],
    },
    {
      id: 'guid1',
      type: 'SLIDE',
      size: 'A4',
      orientation: 'portrait',
      children: [
        {
          type: 'TEXT',
          widgetId: 1,
          styles: {
            left: 20,
            top: 100,
            width: 100,
            height: 200,
            position: 'absolute',
            border: '1px solid tomato',
          },
        },
      ],
    },
  ],
};

export default reportPageData;
