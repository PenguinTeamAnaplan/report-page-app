import REPORT from './Report';
import CHART from './Chart';
import SLIDE from './Slide';
import TEXT from './Text';

const cards = {
  REPORT: { component: REPORT },
  CHART: { component: CHART },
  SLIDE: { component: SLIDE },
  TEXT: { component: TEXT, draggable: true },
};

export default cards;
