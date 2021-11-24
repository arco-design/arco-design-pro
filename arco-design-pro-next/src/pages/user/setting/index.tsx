import { Menu, Breadcrumb } from '@arco-design/web-react';
import React, { useState } from 'react';
import useLocale from './locale/useLocale';
import Info from './info';
import styles from './style/index.module.less';
import './mock';

function UserInfo() {
  const t = useLocale();
  const [selectedKeys, setSelectedKeys] = useState(['info']);

  const menuList = [
    {
      key: 'info',
      title: t['userSetting.menu.title.info'],
      component: <Info />,
    },
    {
      key: 'account',
      title: t['userSetting.menu.title.account'],
      component: <Info />,
    },
    {
      key: 'password',
      title: t['userSetting.menu.title.password'],
      component: <Info />,
    },
    {
      key: 'message',
      title: t['userSetting.menu.title.message'],
      component: <Info />,
    },
    {
      key: 'result',
      title: t['userSetting.menu.title.result'],
      component: <Info />,
    },
    {
      key: 'data',
      title: t['userSetting.menu.title.data'],
      component: <Info />,
    },
  ];

  function renderContent() {
    const curSelectedKey = selectedKeys[0];
    const curSelectedMenu = menuList.find(
      (item) => item.key === curSelectedKey
    );
    return curSelectedMenu ? curSelectedMenu.component : null;
  }

  function onClickMenuItem(key) {
    setSelectedKeys([key]);
  }

  return (
    <div className={styles.container}>
      <Breadcrumb style={{ marginBottom: 20 }}>
        <Breadcrumb.Item>{t['menu.user']}</Breadcrumb.Item>
        <Breadcrumb.Item>{t['menu.user.setting']}</Breadcrumb.Item>
      </Breadcrumb>
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <Menu
            mode="vertical"
            selectedKeys={selectedKeys}
            onClickMenuItem={onClickMenuItem}
          >
            {menuList.map((menu) => (
              <Menu.Item key={menu.key}>{menu.title}</Menu.Item>
            ))}
          </Menu>
        </div>
        <div className={styles.content}>{renderContent()}</div>
      </div>
    </div>
  );
}

export default UserInfo;
