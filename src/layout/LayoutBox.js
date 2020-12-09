const LayoutBox = (Component) => (props) => {
  const { config } = props;

  return (
    <div style={config.styles}>
      <Component {...props} />
    </div>
  );
};

export default LayoutBox;
