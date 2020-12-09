import REPORT from './Report';
import CHART from './Chart';
import SLIDE from './Slide';
import TEXT from './Text';

import { LayoutBox } from '../layout';

const cards = {
  REPORT: { component: REPORT },
  CHART: { component: LayoutBox(CHART), props: { minWidth: 600 } },
  SLIDE: { component: SLIDE },
  TEXT: { component: LayoutBox(TEXT) },
};

export default cards;
