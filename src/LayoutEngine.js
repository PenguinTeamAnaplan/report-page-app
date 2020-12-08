var data = { a: 1, b: 2 };

function LayoutEngine() {
  return (
    <div className="LayoutEngine">
      <header className="LayoutEngine-header">
        <h1>
          Report Page
        </h1>
        <pre>{JSON.stringify(data, null, 2) }</pre>
      </header>
    </div>
  );
}

export default LayoutEngine;
