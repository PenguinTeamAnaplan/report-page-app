const reportCard = ({ config, renderChildren }) => (
  <div>
    <h1>{ config.title }</h1>
    <div className="slides" style={{ border: '1px solid black' }}>
      {renderChildren()}
    </div>
  </div>
);

export default reportCard;
