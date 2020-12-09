function Layout({ config, components, updateProps, updateConfig }) {
  return (
    <LayoutComponent
      config={config}
      components={components}
      updateProps={updateProps}
      updateConfig={updateConfig}
    />
  );
}

function LayoutComponent({ config, components, updateProps, updateConfig }) {
  console.log('>>>>>>ReNdErInG');
  const renderChildren = (area) => {
    if (!config.areas || !config.areas[area]) return null;

    return config.areas[area].map((child) => (
      <LayoutComponent
        config={child}
        components={components}
        updateProps={updateProps}
        updateConfig={updateConfig}
        key={child.id}
      />
    ));
  };
  const defaultComponentConfig = components[config.type];
  const Component = defaultComponentConfig.component;
  const props = {
    config,
    renderChildren,
    updateProps,
    updateConfig,
    ...defaultComponentConfig.props,
  };

  return <Component {...props} />;
}

export default Layout;
