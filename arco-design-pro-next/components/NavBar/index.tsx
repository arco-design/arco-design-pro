import React from "react";
import {
  Tooltip,
  Button,
  Avatar,
  Select,
  Typography,
  Dropdown,
  Menu,
  Space,
} from "@arco-design/web-react";
import { IconSunFill, IconMoonFill } from "@arco-design/web-react/icon";
import { useSelector, useDispatch } from "react-redux";
import { GlobalState } from "@/store";
import useLocale from "@/utils/useLocale";
import Logo from "@/assets/logo.svg";
import MessageBox from "@/components/MessageBox";
import storage from "@/utils/storage";
import styles from "./style/index.module.less";

function Navbar() {
  const t = useLocale();
  const theme = useSelector((state: GlobalState) => state.theme);
  const userInfo = useSelector((state: GlobalState) => state.userInfo);
  const dispatch = useDispatch();

  function logout() {
    storage.setItem("userStatus", "logout");
    window.location.href = "/login";
  }

  function onMenuItemClick(key) {
    if (key === "logout") {
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
          <a>{t["navbar.docs"]}</a>
        </li>
        <li>
          <Select
            options={[
              { label: "中文", value: "zh-CN" },
              { label: "English", value: "en-US" },
            ]}
            value={storage.getItem("arco-lang")}
            bordered={false}
            triggerProps={{
              autoAlignPopupWidth: false,
              autoAlignPopupMinWidth: true,
              position: "bl",
            }}
            onChange={(value) => {
              storage.setItem("arco-lang", value);
              window.location.reload();
            }}
          />
        </li>
        <li>
          <Tooltip
            content={
              theme === "light"
                ? t["settings.navbar.theme.toDark"]
                : t["settings.navbar.theme.toLight"]
            }
          >
            <Button
              type="text"
              icon={theme === "light" ? <IconMoonFill /> : <IconSunFill />}
              onClick={() =>
                dispatch({
                  type: "toggle-theme",
                  payload: { theme: theme === "light" ? "dark" : "light" },
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
              <Typography.Text className={styles.username}>
                {userInfo.name}
              </Typography.Text>
            </Dropdown>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
