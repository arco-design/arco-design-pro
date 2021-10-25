import React from 'react';
import {
  Tooltip,
  Button,
  Avatar,
  Select,
  Typography,
  Dropdown,
  Menu,
  Space,
} from '@arco-design/web-react';
import { IconSunFill, IconMoonFill } from '@arco-design/web-react/icon';
import { useSelector, useDispatch } from 'react-redux';
import { ReducerState } from '../../redux';
import useLocale from '../../utils/useLocale';
import Logo from '../../assets/logo.svg';
import history from '../../history';

import MessageBox from '../MessageBox';

import styles from './style/index.module.less';

function Navbar() {
  const locale = useLocale();
  const theme = useSelector((state: ReducerState) => state.global.theme);
  const userInfo = useSelector((state: ReducerState) => state.global.userInfo);
  const dispatch = useDispatch();

  function logout() {
    localStorage.setItem('userStatus', 'logout');
    history.push('/user/login');
  }

  function onMenuItemClick(key) {
    if (key === 'logout') {
      logout();
    }
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <Space size={8}>
          <Logo />
          <Typography.Title style={{ margin: 0, fontSize: 18 }} heading={5}>
            Arco Design Pro
          </Typography.Title>
        </Space>
      </div>
      <ul className={styles.right}>
        <li>
          <MessageBox />
        </li>
        <li>
          <a>{locale['navbar.docs']}</a>
        </li>
        <li>
          <Select
            options={[
              { label: '中文', value: 'zh-CN' },
              { label: 'English', value: 'en-US' },
            ]}
            value={localStorage.getItem('arco-lang')}
            bordered={false}
            triggerProps={{
              autoAlignPopupWidth: false,
              autoAlignPopupMinWidth: true,
              position: 'bl',
            }}
            onChange={(value) => {
              localStorage.setItem('arco-lang', value);
              window.location.reload();
            }}
          />
        </li>
        <li>
          <Tooltip
            content={
              theme === 'light'
                ? locale['settings.navbar.theme.toDark']
                : locale['settings.navbar.theme.toLight']
            }
          >
            <Button
              type="text"
              icon={theme === 'light' ? <IconMoonFill /> : <IconSunFill />}
              onClick={() =>
                dispatch({
                  type: 'toggle-theme',
                  payload: { theme: theme === 'light' ? 'dark' : 'light' },
                })
              }
              style={{ fontSize: 20 }}
            />
          </Tooltip>
        </li>
        {userInfo && (
          <li>
            <Avatar size={24} style={{ marginRight: 8 }}>
              <img alt="avatar" src={userInfo.avatar} />
            </Avatar>
            <Dropdown
              trigger="click"
              droplist={
                <Menu onClickMenuItem={onMenuItemClick}>
                  <Menu.Item key="logout">登出</Menu.Item>
                </Menu>
              }
            >
              <Typography.Text className={styles.username}>{userInfo.name}</Typography.Text>
            </Dropdown>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
