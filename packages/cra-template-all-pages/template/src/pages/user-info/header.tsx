import { Avatar, Space, Button } from '@arco-design/web-react';
import { IconCamera, IconLocation, IconUser, IconHome } from '@arco-design/web-react/icon';
import React from 'react';
import useLocale from '../../utils/useLocale';
import history from '../../history';
import styles from './style/index.module.less';

interface HeaderProps {
  userInfo?: {
    name?: string;
    avatar?: string;
    jobName?: string;
    organizationName?: string;
    locationName?: string;
  };
}

function UserInfoHeader(props: HeaderProps) {
  const locale = useLocale();
  const { userInfo } = props;
  if (!userInfo) return null;
  return (
    <div className={styles.header}>
      <Space size={8} direction="vertical" align="center">
        <Avatar size={64} triggerIcon={<IconCamera />}>
          <img src={userInfo.avatar} />
        </Avatar>
        <div className={styles.username}>{userInfo.name}</div>
        <div className={styles['user-msg']}>
          <Space size={18}>
            <div>
              <IconUser />
              <span className={styles['user-msg-text']}>{userInfo.jobName}</span>
            </div>
            <div>
              <IconHome />
              <span className={styles['user-msg-text']}>{userInfo.organizationName}</span>
            </div>
            <div>
              <IconLocation />
              <span className={styles['user-msg-text']}>{userInfo.locationName}</span>
            </div>
          </Space>
        </div>
        <Button
          type="primary"
          className={styles['user-edit-btn']}
          onClick={() => {
            history.push('/user/setting');
          }}
        >
          {locale['userInfo.editUserInfo']}
        </Button>
      </Space>
    </div>
  );
}

export default UserInfoHeader;
