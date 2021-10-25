import { Descriptions, Typography } from '@arco-design/web-react';
import React, { CSSProperties } from 'react';

import useLocale from '../../utils/useLocale';
import styles from './style/index.module.less';

interface ProfileItemProps {
  title: string;
  data: any;
  style?: CSSProperties;
}

function ProfileItem(props: ProfileItemProps) {
  const locale = useLocale();
  const { title, data, style } = props;
  const blockDataList: {
    title: string;
    data: {
      label: string;
      value: string;
    }[];
  }[] = [];

  blockDataList.push({
    title: locale['basicProfile.title.video'],
    data: [
      {
        label: locale['basicProfile.label.video.mode'],
        value: data?.video?.mode || '-',
      },
      {
        label: locale['basicProfile.label.video.acquisition.resolution'],
        value: data?.video?.acquisition.resolution || '-',
      },
      {
        label: locale['basicProfile.label.video.acquisition.frameRate'],
        value: `${data?.video?.acquisition.frameRate || '-'} fps`,
      },
      {
        label: locale['basicProfile.label.video.encoding.resolution'],
        value: data?.video?.encoding.resolution || '-',
      },
      {
        label: locale['basicProfile.label.video.encoding.rate.min'],
        value: `${data?.video?.encoding.rate.min || '-'} bps`,
      },
      {
        label: locale['basicProfile.label.video.encoding.rate.max'],
        value: `${data?.video?.encoding.rate.max || '-'} bps`,
      },
      {
        label: locale['basicProfile.label.video.encoding.rate.default'],
        value: `${data?.video?.encoding.rate.default || '-'} bps`,
      },
      {
        label: locale['basicProfile.label.video.encoding.frameRate'],
        value: `${data?.video?.encoding.frameRate || '-'} fpx`,
      },
      {
        label: locale['basicProfile.label.video.encoding.profile'],
        value: data?.video?.encoding.profile || '-',
      },
    ],
  });

  blockDataList.push({
    title: locale['basicProfile.title.audio'],
    data: [
      {
        label: locale['basicProfile.label.audio.mode'],
        value: data?.audio?.mode || '-',
      },
      {
        label: locale['basicProfile.label.audio.acquisition.channels'],
        value: `${data?.audio?.acquisition.channels || '-'} ${
          locale['basicProfile.unit.audio.channels']
        }`,
      },
      {
        label: locale['basicProfile.label.audio.encoding.channels'],
        value: `${data?.audio?.encoding.channels || '-'} ${
          locale['basicProfile.unit.audio.channels']
        }`,
      },
      {
        label: locale['basicProfile.label.audio.encoding.rate'],
        value: `${data?.audio?.encoding.rate || '-'} kbps`,
      },
      {
        label: locale['basicProfile.label.audio.encoding.profile'],
        value: data?.audio?.encoding.profile || '-',
      },
    ],
  });

  return (
    <div style={style}>
      <Typography.Title heading={6} style={{ marginTop: 0, marginBottom: 16 }}>
        {title}
      </Typography.Title>
      <div className={styles.itemContainer}>
        {blockDataList.map(({ title: blockTitle, data: blockData }, index) => (
          <Descriptions
            key={`${index}`}
            colon=":"
            labelStyle={{ textAlign: 'right', width: 200, paddingRight: 10 }}
            valueStyle={{ width: 400 }}
            title={blockTitle}
            data={blockData}
          />
        ))}
      </div>
    </div>
  );
}

export default ProfileItem;
