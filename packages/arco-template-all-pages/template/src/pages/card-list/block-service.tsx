import React, { CSSProperties } from 'react';
import {
  Card,
  Typography,
  Space,
  Avatar,
  Link,
  Dropdown,
  Menu,
  List,
} from '@arco-design/web-react';
import { IconCode, IconEdit, IconUser, IconDown } from '@arco-design/web-react/icon';

import useLocale from '../../utils/useLocale';

interface PropsType {
  title: string;
  data: {
    title: string;
    description: string;
    icon: string;
    enable: boolean;
  }[];
  style?: CSSProperties;
}

export default (props: PropsType) => {
  const locale = useLocale();
  const { title, data, style } = props;
  return (
    <div style={style}>
      <Typography.Title style={{ marginTop: 0, marginBottom: 12, fontSize: 14 }} heading={6}>
        {title}
      </Typography.Title>
      <List
        grid={{
          gutter: 16,
          xs: 24,
          sm: 24,
          md: 24,
          lg: 12,
          xl: 12,
          xxl: 8,
        }}
        bordered={false}
        style={{ marginBottom: -16 }}
      >
        {data.map((item, index) => {
          const { title, description, icon, enable } = item;
          return (
            <List.Item key={`${index}`} style={{ padding: 0, marginBottom: 16 }}>
              <Card
                actions={[
                  <Link>{locale['cardList.detail']}</Link>,
                  <Dropdown.Button
                    type="secondary"
                    droplist={
                      <Menu>
                        <Menu.Item key="action">{locale['cardList.action']}</Menu.Item>
                      </Menu>
                    }
                    icon={<IconDown />}
                  >
                    {enable ? locale['cardList.disable'] : locale['cardList.enable']}
                  </Dropdown.Button>,
                ]}
              >
                <Space align="start">
                  <Avatar size={36} style={{ marginRight: 8, backgroundColor: '#0FC6C2' }}>
                    {icon === 'code' && <IconCode />}
                    {icon === 'edit' && <IconEdit />}
                    {icon === 'user' && <IconUser />}
                  </Avatar>
                  <Card.Meta title={title} description={description} />
                </Space>
              </Card>
            </List.Item>
          );
        })}
      </List>
    </div>
  );
};
