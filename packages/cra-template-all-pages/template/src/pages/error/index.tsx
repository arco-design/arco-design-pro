import React from 'react';
import { Typography, Result, Button, Link, Breadcrumb } from '@arco-design/web-react';
import { IconLink } from '@arco-design/web-react/icon';
import useLocale from '../../utils/useLocale';
import styles from './style/index.module.less';

function Success() {
  const locale = useLocale();

  return (
    <div className={styles.container}>
      <Breadcrumb style={{ marginBottom: 20 }}>
        <Breadcrumb.Item>{locale['menu.result']}</Breadcrumb.Item>
        <Breadcrumb.Item>{locale['menu.result.error']}</Breadcrumb.Item>
      </Breadcrumb>
      <div className={styles.wrapper}>
        <Result
          className={styles.result}
          status="error"
          title={locale['error.result.title']}
          subTitle={locale['error.result.subTitle']}
          extra={[
            <Button key="again" type="secondary" style={{ marginRight: 16 }}>
              {locale['error.result.goBack']}
            </Button>,
            <Button key="back" type="primary">
              {locale['error.result.retry']}
            </Button>,
          ]}
        />
        <div className={styles.detailsWrapper}>
          <Typography.Title heading={6} style={{ marginTop: 0 }}>
            {locale['error.detailTitle']}
          </Typography.Title>
          <Typography.Paragraph style={{ marginBottom: 0 }}>
            <ol>
              <li>
                {locale['error.detailLine.record']}
                <Link>
                  <IconLink />
                  {locale['error.detailLine.record.link']}
                </Link>
              </li>
              <li>{locale['error.detailLine.auth']}</li>
            </ol>
          </Typography.Paragraph>
        </div>
      </div>
    </div>
  );
}

export default Success;
