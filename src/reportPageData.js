const reportPageData = {
  id: 'guid',
  type: 'REPORT',
  version: 1,
  areas: {
    main: [
      {
        id: 'guid',
        type: 'SLIDE',
        size: 'A4',
        orientation: 'portrait',
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
        },
      },
      {
        id: 'guid1',
        type: 'SLIDE',
        size: 'A4',
        orientation: 'portrait',
        areas: {
          main: [
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
      },
    ],
  },
};

export default reportPageData;
