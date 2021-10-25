import { Menu, Breadcrumb } from '@arco-design/web-react';
import React, { useState } from 'react';
import useLocale from '../../utils/useLocale';
import Info from './info';
import styles from './style/index.module.less';

function UserInfo() {
  const locale = useLocale();
  const [selectedKeys, setSelectedKeys] = useState(['info']);

  const menuList = [
    {
      key: 'info',
      title: locale['userSetting.menu.title.info'],
      component: <Info />,
    },
    {
      key: 'account',
      title: locale['userSetting.menu.title.account'],
      component: <Info />,
    },
    {
      key: 'password',
      title: locale['userSetting.menu.title.password'],
      component: <Info />,
    },
    {
      key: 'message',
      title: locale['userSetting.menu.title.message'],
      component: <Info />,
    },
    {
      key: 'result',
      title: locale['userSetting.menu.title.result'],
      component: <Info />,
    },
    {
      key: 'data',
      title: locale['userSetting.menu.title.data'],
      component: <Info />,
    },
  ];

  function renderContent() {
    const curSelectedKey = selectedKeys[0];
    const curSelectedMenu = menuList.find((item) => item.key === curSelectedKey);
    return curSelectedMenu ? curSelectedMenu.component : null;
  }

  function onClickMenuItem(key) {
    setSelectedKeys([key]);
  }

  return (
    <div className={styles.container}>
      <Breadcrumb style={{ marginBottom: 20 }}>
        <Breadcrumb.Item>{locale['menu.user']}</Breadcrumb.Item>
        <Breadcrumb.Item>{locale['menu.user.setting']}</Breadcrumb.Item>
      </Breadcrumb>
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <Menu mode="vertical" selectedKeys={selectedKeys} onClickMenuItem={onClickMenuItem}>
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
