function Layout({ config, components }) {
  return <LayoutComponent config={config} components={components} />;
}

function LayoutComponent({ config, components }) {
  const renderChildren = () => {
    if (!config.children) return null;

    return config.children.map((child, i) => (
      <LayoutComponent config={child} components={components} key={i} />
    ));
  };
  const defaultComponentConfig = components[config.type];
  const Component = defaultComponentConfig.component;
  const props = { config, renderChildren, ...defaultComponentConfig.props };

  return <Component {...props} />;
}

export default Layout;
