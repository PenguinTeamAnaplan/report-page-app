const LayoutBox = (Component) => (props) => {
  const { config, updateProps } = props;
  const layoutStyles = { position: 'absolute', border: '1px solid tomato' };

  return (
    <div style={{ ...config.styles, ...layoutStyles }}>
      <Component {...props} />
      <button
        onClick={() =>
          updateProps(config.id, 'styles.top', config.styles.top + 10)
        }
      >
        Right
      </button>
    </div>
  );
};

export default LayoutBox;
