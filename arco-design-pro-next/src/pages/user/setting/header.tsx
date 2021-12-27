import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Button,
  Avatar,
  Upload,
  Descriptions,
  Tag,
} from '@arco-design/web-react';
import { IconCamera, IconPlus } from '@arco-design/web-react/icon';
import useLocale from '@/utils/useLocale';
import locale from './locale';
import styles from './style/header.module.less';

export default function Info() {
  const t = useLocale(locale);
  const userInfo = useSelector((state: any) => {
    return state.userInfo || {};
  });

  const [avatar, setAvatar] = useState('');

  function onAvatarChange(_, file) {
    setAvatar(file.originFile ? URL.createObjectURL(file.originFile) : '');
  }

  useEffect(() => {
    setAvatar(userInfo.avatar);
  }, [userInfo]);

  return (
    <div className={styles['info-wrapper']}>
      <Upload showUploadList={false} onChange={onAvatarChange}>
        <Avatar
          size={100}
          triggerIcon={<IconCamera />}
          className={styles['info-avatar']}
        >
          {avatar ? <img src={avatar} /> : <IconPlus />}
        </Avatar>
      </Upload>
      <Descriptions
        className={styles['info-content']}
        column={2}
        colon="："
        data={[
          {
            label: t['userSetting.label.name'],
            value: userInfo.name,
          },
          {
            label: t['userSetting.label.verified'],
            value: (
              <span>
                {userInfo.verified ? (
                  <Tag color="green">{t['userSetting.value.verified']}</Tag>
                ) : (
                  <Tag color="red">{t['userSetting.value.notVerified']}</Tag>
                )}
                <Button type="text">{t['userSetting.btn.edit']}</Button>
              </span>
            ),
          },
          {
            label: t['userSetting.label.accountId'],
            value: userInfo.accountId,
          },
          {
            label: t['userSetting.label.phoneNumber'],
            value: (
              <span>
                {userInfo.phoneNumber}
                <Button type="text">{t['userSetting.btn.edit']}</Button>
              </span>
            ),
          },
          {
            label: t['userSetting.label.registrationTime'],
            value: userInfo.registrationTime,
          },
        ]}
      ></Descriptions>
    </div>
  );
}
