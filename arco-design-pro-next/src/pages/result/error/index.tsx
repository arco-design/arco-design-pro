import React from 'react';
import {
  Typography,
  Result,
  Button,
  Link,
  Breadcrumb,
} from '@arco-design/web-react';
import { IconLink } from '@arco-design/web-react/icon';
import useLocale from '@/utils/useLocale';
import locale from './locale';
import styles from './style/index.module.less';

function Success() {
  const t = useLocale(locale);

  return (
    <div className={styles.container}>
      <Breadcrumb style={{ marginBottom: 20 }}>
        <Breadcrumb.Item>{t['menu.result']}</Breadcrumb.Item>
        <Breadcrumb.Item>{t['menu.result.error']}</Breadcrumb.Item>
      </Breadcrumb>
      <div className={styles.wrapper}>
        <Result
          className={styles.result}
          status="error"
          title={t['error.result.title']}
          subTitle={t['error.result.subTitle']}
          extra={[
            <Button key="again" type="secondary" style={{ marginRight: 16 }}>
              {t['error.result.goBack']}
            </Button>,
            <Button key="back" type="primary">
              {t['error.result.retry']}
            </Button>,
          ]}
        />
        <div className={styles.detailsWrapper}>
          <Typography.Title heading={6} style={{ marginTop: 0 }}>
            {t['error.detailTitle']}
          </Typography.Title>
          <Typography.Paragraph style={{ marginBottom: 0 }}>
            <ol>
              <li>
                {t['error.detailLine.record']}
                <Link>
                  <IconLink />
                  {t['error.detailLine.record.link']}
                </Link>
              </li>
              <li>
                {t['error.detailLine.auth']}
                <Link>{t['error.detailLine.auth.link']}</Link>
              </li>
            </ol>
          </Typography.Paragraph>
        </div>
      </div>
    </div>
  );
}

export default Success;
