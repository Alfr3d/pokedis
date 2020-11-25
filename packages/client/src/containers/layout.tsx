import React, {
  useState,
  useLayoutEffect,
  useRef,
  useEffect,
  Fragment
} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Layout as LayoutAntd, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import './_layout.scss';
import logo from '../assets/images/188915-pokemon-go/pokeball.svg';
const { Header, Content, Footer, Sider } = LayoutAntd;
const { SubMenu } = Menu;

interface LayoutProps { }
const Layout = (props: React.PropsWithChildren<LayoutProps>) => {
  const [bCollapsed, onCollapse] = useState(false);

  useEffect(() => {

  }, []);
  useLayoutEffect(() => {
    // after dom rendering
  }, []);

  return (
    <Router>
      <LayoutAntd>
        <Sider collapsible collapsed={bCollapsed} onCollapse={onCollapse}>
          <div className="logo">
            <img src={logo} />
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/search">Search</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/about">About</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <LayoutAntd className="site-layout">
        <Header>POKEdis</Header>
        <Content>
          <Breadcrumb>

          </Breadcrumb>
          <div className="site-layout-background">
            {props.children}
          </div>
        </Content>
        <Footer>
          <div>@frontend-assignment ©2020 Created by Alfred Arcifa</div>
          <div>Icons made by <a href="https://www.flaticon.com/authors/roundicons-freebies" title="Roundicons Freebies">Roundicons Freebies</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </Footer>
        </LayoutAntd>
      </LayoutAntd>
    </Router>
  );
};

export default Layout;
