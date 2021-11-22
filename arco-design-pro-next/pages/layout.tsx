import React, { useState, useRef } from "react";
import { Layout, Menu } from "@arco-design/web-react";
import {
  IconDashboard,
  IconList,
  IconSettings,
  IconFile,
  IconApps,
  IconCheckCircle,
  IconExclamationCircle,
  IconUser,
  IconMenuFold,
  IconMenuUnfold,
} from "@arco-design/web-react/icon";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import qs from "query-string";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import LoadingBar from "../components/LoadingBar";
import { routes, defaultRoute } from "@/routes";
import { isArray } from "@/utils/is";
import useLocale from "@/utils/useLocale";
import { GlobalState } from "@/store";
import getUrlParams from "@/utils/getUrlParams";
import styles from "@/style/layout.module.less";

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

const Sider = Layout.Sider;
const Content = Layout.Content;

function getIconFromKey(key) {
  switch (key) {
    case "dashboard":
      return <IconDashboard />;
    case "list":
      return <IconList />;
    case "form":
      return <IconSettings />;
    case "profile":
      return <IconFile />;
    case "visualization":
      return <IconApps />;
    case "result":
      return <IconCheckCircle />;
    case "exception":
      return <IconExclamationCircle />;
    case "user":
      return <IconUser />;
  }
}

function renderRoutes(locale) {
  const nodes = [];
  function travel(_routes, level) {
    return _routes.map((route) => {
      const titleDom = (
        <>
          {getIconFromKey(route.key)} {locale[route.name] || route.name}
        </>
      );
      if (
        route.key &&
        (!isArray(route.children) ||
          (isArray(route.children) && !route.children.length))
      ) {
        if (level > 1) {
          return (
            <MenuItem key={route.key}>
              <Link href={`/${route.key}`}>
                <a>{titleDom}</a>
              </Link>
            </MenuItem>
          );
        }
        nodes.push(
          <MenuItem key={route.key}>
            <Link href={`/${route.key}`}>
              <a>{titleDom}</a>
            </Link>
          </MenuItem>
        );
      }
      if (isArray(route.children) && route.children.length) {
        if (level > 1) {
          return (
            <SubMenu key={route.key} title={titleDom}>
              {travel(route.children, level + 1)}
            </SubMenu>
          );
        }
        nodes.push(
          <SubMenu key={route.key} title={titleDom}>
            {travel(route.children, level + 1)}
          </SubMenu>
        );
      }
    });
  }
  travel(routes, 1);
  return nodes;
}

function PageLayout({ children }) {
  const urlParams = getUrlParams();
  const router = useRouter();
  const pathname = router.pathname;
  const currentComponent = qs.parseUrl(pathname).url.slice(1);
  const defaultSelectedKeys = [currentComponent || defaultRoute];

  const locale = useLocale();
  const settings = useSelector((state: GlobalState) => state.settings);

  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [selectedKeys, setSelectedKeys] =
    useState<string[]>(defaultSelectedKeys);
  const loadingBarRef = useRef(null);

  const navbarHeight = 60;
  const menuWidth = collapsed ? 48 : settings?.menuWidth;

  const showNavbar = settings?.navbar && urlParams.navbar !== false;
  const showMenu = settings?.menu && urlParams.menu !== false;
  const showFooter = settings?.footer && urlParams.footer !== false;

  function onClickMenuItem(key) {
    setSelectedKeys([key]);
  }

  function toggleCollapse() {
    setCollapsed((collapsed) => !collapsed);
  }

  const paddingLeft = showMenu ? { paddingLeft: menuWidth } : {};
  const paddingTop = showNavbar ? { paddingTop: navbarHeight } : {};
  const paddingStyle = { ...paddingLeft, ...paddingTop };

  return (
    <Layout className={styles.layout}>
      <LoadingBar ref={loadingBarRef} />
      {showNavbar && (
        <div className={styles.layoutNavbar}>
          <Navbar />
        </div>
      )}
      <Layout>
        {showMenu && (
          <Sider
            className={styles.layoutSider}
            width={menuWidth}
            collapsed={collapsed}
            onCollapse={setCollapsed}
            trigger={null}
            collapsible
            breakpoint="xl"
            style={paddingTop}
          >
            <div className={styles.menuWrapper}>
              <Menu
                collapse={collapsed}
                onClickMenuItem={onClickMenuItem}
                selectedKeys={selectedKeys}
                autoOpen
              >
                {renderRoutes(locale)}
              </Menu>
            </div>
            <div className={styles.collapseBtn} onClick={toggleCollapse}>
              {collapsed ? <IconMenuUnfold /> : <IconMenuFold />}
            </div>
          </Sider>
        )}
        <Layout className={styles.layoutContent} style={paddingStyle}>
          <Content>{children}</Content>
          {showFooter && <Footer />}
        </Layout>
      </Layout>
    </Layout>
  );
}

export default PageLayout;
