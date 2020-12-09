const slideCard = ({ config, renderChildren, updateConfig }) => (
  <div style={{ height: '400px', width: '1000px', background: 'wheat' }}>
    <h1>Slide</h1>
    <div
      className="slides__slide"
      style={{ border: '1px solid purple', position: 'relative' }}
    >
      <button onClick={() => updateConfig('styles.top', 100)}>Top = 100</button>

      {renderChildren('main')}
    </div>
  </div>
);

export default slideCard;
