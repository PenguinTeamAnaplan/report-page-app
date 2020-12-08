const slideCard = ({ renderChildren }) => (
  <div>
    <h1>Slide</h1>
    <div className="slides__slide" style={{ border: '1px solid purple' }}>
      {renderChildren()}
    </div>
  </div>
);

export default slideCard;
