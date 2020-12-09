const LayoutBox = (Component) => (props) => {
  const { config } = props;
  const layoutStyles = { position: 'absolute', border: '1px solid tomato' };

  return (
    <div style={{ ...config.styles, ...layoutStyles }}>
      <Component {...props} />
    </div>
  );
};

export default LayoutBox;
