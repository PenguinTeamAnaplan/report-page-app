function Layout({ config, components }) {
  return <LayoutComponent config={config} components={components} />;
}

function LayoutComponent({ config, components }) {
  const renderChildren = (area) => {
    if (!config.areas || !config.areas[area]) return null;

    return config.areas[area].map((child, i) => (
      <LayoutComponent config={child} components={components} key={i} />
    ));
  };
  const defaultComponentConfig = components[config.type];
  const Component = defaultComponentConfig.component;
  const props = { config, renderChildren, ...defaultComponentConfig.props };

  return <Component {...props} />;
}

export default Layout;
