function Layout({ config, components, updateProps }) {
  return <LayoutComponent config={config} components={components} updateProps={updateProps} path="" />;
}

function LayoutComponent({ config, components, path, updateProps }) {
  const renderChildren = (area) => {
    if (!config.areas || !config.areas[area]) return null;

    return config.areas[area].map((child, i) => {
      const id = path ? `${path}.areas.${area}.${i}` : `areas.${area}.${i}`;
      return (
      <LayoutComponent config={child} components={components} path={id} updateProps={updateProps} key={id} />
    )}
    );
  };
  const defaultComponentConfig = components[config.type];
  const Component = defaultComponentConfig.component;
  const props = { config, renderChildren, path, updateProps, ...defaultComponentConfig.props };

  return <Component {...props } />;
}


export default Layout;
