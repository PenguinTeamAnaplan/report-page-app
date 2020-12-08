var reportPageData = { 
	id: "guid",
	type: "REPORT",
	version: 1,
	children: [{
		id: "guid",
		type: "SLIDE",
		size: "A4",
		orientation: "portrait",
		children: [{
			type: "TEXT",
			widgetId: 1,
			left: 0,
        top: 0,
        width: 0,
        height: 0
		}, {
			type: "CHART",
			widgetId: 2
		}]
	}]
};

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
