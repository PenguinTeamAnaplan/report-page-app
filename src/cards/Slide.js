const slideCard = ({ renderChildren }) => (
  <div style={{height: "400px", width: "1000px", background: "wheat"}}>
    <h1>Slide</h1>
    <div className="slides__slide" style={{ border: '1px solid purple', position: "relative" }}>
      {renderChildren()}
    </div>
  </div>
);

export default slideCard;
