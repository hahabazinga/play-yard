import React, { useState } from 'react';
import { Menu, Icon, Layout } from 'antd';
import { Switch, Route, Link, useHistory, useLocation } from 'react-router-dom';

import { routerConfig } from './router';
import './App.css';

const { Content, Header, Sider } = Layout;
const { SubMenu } = Menu;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [logoFontSize, setLogoFontSize] = useState<string>('24px');
  // const history = useHistory();
  const location = useLocation();

  const onCollapsedClick = () => {
    setLogoFontSize(logoFontSize === '24px' ? '12px' : '24px');
    setCollapsed(!collapsed);
  };
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div style={{ color: '#fff', fontSize: logoFontSize, textAlign: 'center', lineHeight: '36px', height: '36px' }}>
          yard
        </div>
        <Menu
          defaultSelectedKeys={['/hooks/useEffectAsync']}
          defaultOpenKeys={['hooks']}
          selectedKeys={[location.pathname]}
          mode="inline"
          theme="dark"
        >
          {routerConfig.map(config => {
            if (config.hasSubMenu === true) {
              return (
                <SubMenu title={<span>{config.name}</span>} key={config.name}>
                  {/* <SpreadRouterConfig configs={config.children} /> */}
                  {config.children.map(item => (
                    <Menu.Item key={item.path}>
                      <Link to={item.path}>{item.name}</Link>
                    </Menu.Item>
                  ))}
                </SubMenu>
              );
            }
            return (
              <Menu.Item key={config.path}>
                <Link to={config.path}>{config.name}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0, height: '64px' }}>
          <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={onCollapsedClick}
            style={{ margin: '0 16px' }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: 'calc(100vh - 112px)',
          }}
        >
          <Switch>
            {routerConfig.map(config => {
              if (config.hasSubMenu === true) {
                return config.children.map(child => <Route path={child.path}>{child.component}</Route>);
              }
              return <Route path={config.path}>{config.component}</Route>;
            })}
            {/* <Route path="/hooks/useEffectAsync">
                <EffectAsyncPage />
              </Route>
              <Route path="/hooks/useRef">
                <RefPage />
              </Route>
              <Route path="/suspense/lazyload">
                <LazyLoadPage />
              </Route>
              <Route path="/webComponents/square">
                <WebComponentsSquare />
              </Route> */}

            <Route path="/">
              <div>home</div>
            </Route>
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;




