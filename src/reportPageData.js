const reportPageData = {
  id: 'report-1',
  type: 'REPORT',
  version: 1,
  areas: {
    main: [
      {
        id: 'slide-1',
        type: 'SLIDE',
        size: 'A4',
        orientation: 'portrait',
        areas: {
          main: [
            {
              type: 'TEXT',
              id: 'text-1',
              styles: {
                left: 20,
                top: 20,
                width: 100,
                height: 200,
              },
            },
            {
              type: 'CHART',
              id: 'chart-1',
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
        id: 'slide-2',
        type: 'SLIDE',
        size: 'A4',
        orientation: 'portrait',
        areas: {
          main: [
            {
              type: 'TEXT',
              id: 'text-2',
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

// areas.main[1].areas.main[0]