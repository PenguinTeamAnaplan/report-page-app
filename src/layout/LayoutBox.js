const LayoutBox = (Component) => (props) => {
  const { config, updateProps, path } = props;
  const layoutStyles = { position: 'absolute', border: '1px solid tomato' };

  return (
    <div style={{ ...config.styles, ...layoutStyles }}>
      <Component {...props} />
      <button onClick={() => updateProps(path, 'styles.top', config.styles.top + 10)}>Right</button>
    </div>
  );
};

export default LayoutBox;
