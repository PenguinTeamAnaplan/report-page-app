

function LayoutEngine({config, components}) {
  const Component = components[config.type];

  return (
    <div className="LayoutEngine">
      <header className="LayoutEngine-header">
        <Component/>
        <pre>{JSON.stringify(config, null, 2) }</pre>
      </header>
    </div>
  );
}

export default LayoutEngine;
