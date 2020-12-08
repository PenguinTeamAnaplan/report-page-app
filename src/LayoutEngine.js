import { reportPageData } from './reportPageData';

function LayoutEngine() {
  return (
    <div className="LayoutEngine">
      <header className="LayoutEngine-header">
        <h1>
          Report Page
        </h1>
        <pre>{JSON.stringify(reportPageData, null, 2) }</pre>
      </header>
    </div>
  );
}

export default LayoutEngine;
