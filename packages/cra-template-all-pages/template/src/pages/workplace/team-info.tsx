import React, { useState } from 'react';
import { Card, List, Avatar, Button } from '@arco-design/web-react';
import { IconEdit, IconDelete, IconLoading, IconDown } from '@arco-design/web-react/icon';
import useLocale from '../../utils/useLocale';
import styles from './style/index.module.less';

const dataSource = new Array(3).fill({
  avatar: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
  title: 'Beijing Bytedance Technology Co., Ltd.',
  description: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
});

const renderListItem = (item, index) => (
  <List.Item
    key={index}
    actions={[
      <Button size="mini" type="text" icon={<IconEdit />} />,
      <Button size="mini" type="text" icon={<IconDelete />} />,
    ]}
  >
    <List.Item.Meta
      avatar={
        <Avatar>
          <img alt="avatar" src={`${item.avatar}`} />
        </Avatar>
      }
      title={item.title}
      description={item.description}
    />
  </List.Item>
);

function TeamInfo() {
  const [loading, setLoading] = useState(false);
  const locale = useLocale();

  const ListFooter = (
    <div
      style={{
        textAlign: 'center',
      }}
      onClick={() => setLoading(!loading)}
    >
      {loading ? (
        <Button icon={<IconLoading />} size="mini" type="text" />
      ) : (
        <Button size="mini" type="text">
          {locale['workplace.loadMore']} <IconDown />
        </Button>
      )}
    </div>
  );

  return (
    <Card title={locale['workplace.team.info']} bordered={false} className={styles.panel}>
      <List
        wrapperStyle={{ margin: -16 }}
        bordered={false}
        dataSource={dataSource}
        render={renderListItem}
        footer={ListFooter}
      />
    </Card>
  );
}

export default TeamInfo;
