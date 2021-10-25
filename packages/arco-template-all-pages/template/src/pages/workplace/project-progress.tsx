import React from 'react';
import { Card, Typography, Progress, Avatar } from '@arco-design/web-react';
import useLocale from '../../utils/useLocale';
import styles from './style/index.module.less';

const { Paragraph } = Typography;
const AvatarGroup = Avatar.Group;

function ProjectProgress() {
  const locale = useLocale();

  return (
    <Card title={locale['workplace.projectProgress']} bordered={false} className={styles.panel}>
      <Paragraph bold>Arco Design System</Paragraph>
      <Progress percent={70} showText={false} />
      <AvatarGroup size={32} style={{ marginTop: 10 }}>
        <Avatar style={{ backgroundColor: '#FFC72E' }}>A</Avatar>
        <Avatar style={{ backgroundColor: '#7BC616' }}>P</Avatar>
        <Avatar style={{ backgroundColor: '#14C9C9' }}>Y</Avatar>
        <Avatar style={{ backgroundColor: '#168CFF' }}>Z</Avatar>
        <Avatar style={{ backgroundColor: '#FF7D00' }}>D</Avatar>
        <Avatar style={{ backgroundColor: '#14C9C9' }}>KK</Avatar>
      </AvatarGroup>
    </Card>
  );
}

export default ProjectProgress;
