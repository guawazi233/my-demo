import React from "react";
import { Layout, Menu, } from "antd";
import { BrowserRouter as Router, Link,} from "react-router-dom";
import './App.css';
import ContentPage from './components/page/content/ContentPage';

const { Header, } = Layout;
function App() {
  return (
    <Router>
      <Layout>
        <Header className="header">
          <Menu mode="horizontal" defaultSelectedKeys={["1"]} className="menu">
            <Menu.Item key="1">
              <Link to="/">欢迎</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/router">React-Router</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/uploadBigFile">大文件上传</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/eventTrack">监控埋点</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <ContentPage />
      </Layout>
    </Router>
  );
}

export default App;