function Layout({ config, components }) {
  const renderChildren = () => {
    if (!config.children) return null;

    return config.children.map((child, i) => (
      <Layout config={child} components={components} key={i} />
    ));
  };

  return (
    <LayoutComponent
      config={config}
      components={components}
      renderChildren={renderChildren}
    />
  );
}

export default Layout;

function LayoutComponent({ config, components, renderChildren }) {
  const defaultComponentConfig = components[config.type];
  const Component = defaultComponentConfig.component;

  return <Component config={config} renderChildren={renderChildren} />;
}
