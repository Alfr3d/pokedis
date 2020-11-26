import React, {
  useState
} from 'react';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
import { Layout as LayoutAntd, Menu, Breadcrumb } from 'antd';
import {
  HomeOutlined,
  SearchOutlined,
  CoffeeOutlined
} from '@ant-design/icons';
import './_layout.scss';
import logo from '../assets/images/188915-pokemon-go/pokeball.svg';
import hearth from '../assets/images/188915-pokemon-go/heart.svg';
const { Header, Content, Footer, Sider } = LayoutAntd;
const { SubMenu } = Menu;

interface LayoutProps { }
const Layout = (props: React.PropsWithChildren<LayoutProps>) => {
  const [bCollapsed, onCollapse] = useState(false);

  return (
    <Router>
      <LayoutAntd>
        <Sider collapsible collapsed={bCollapsed} onCollapse={onCollapse}>
          <div className="logo">
            <img src={logo} />
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<SearchOutlined />} title="Search">
              <Menu.Item key="2"><Link to="/search/name">by name</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/search/type">by type</Link></Menu.Item>
            </SubMenu>
            <Menu.Item key="4" icon={<CoffeeOutlined />}>
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
          <div className="logo">@frontend-assignment ©2020 Implemented with <img src={hearth} /> by <a href="https://github.com/Alfr3d" target="_blank">Alfred Arcifa</a></div>
          <div><em>Icons made by <a href="https://www.flaticon.com/authors/roundicons-freebies" title="Roundicons Freebies">Roundicons Freebies</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></em></div>
        </Footer>
        </LayoutAntd>
      </LayoutAntd>
    </Router>
  );
};

export default Layout;
