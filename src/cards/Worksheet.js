const Worksheet = ({ config, renderChildren }) => (
  <div>
    <h1>{config.title}</h1>
    <div className="main" style={{ border: '1px solid black' }}>
      {renderChildren('main')}
    </div>
    <div className="panel" style={{ border: '1px solid black' }}>
      {renderChildren('panel')}
    </div>
  </div>
);

export default Worksheet;
