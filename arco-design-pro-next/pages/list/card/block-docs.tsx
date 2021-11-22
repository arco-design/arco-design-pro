import React, { CSSProperties } from 'react';
import { Card, Typography, Space, List } from '@arco-design/web-react';
import { IconFile } from '@arco-design/web-react/icon';

interface PropsType {
  title: string;
  data: {
    title: string;
    description: string;
  }[];
  style?: CSSProperties;
}

export default (props: PropsType) => {
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
          const { title, description } = item;
          return (
            <List.Item key={`${index}`} style={{ padding: 0, marginBottom: 16 }}>
              <Card>
                <Space align="start">
                  <IconFile />
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
