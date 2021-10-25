import React from 'react';
import { Typography, Result, Button, Steps, Breadcrumb } from '@arco-design/web-react';
import useLocale from '../../utils/useLocale';
import styles from './style/index.module.less';

const Step = Steps.Step;

function Success() {
  const locale = useLocale();

  return (
    <div className={styles.container}>
      <Breadcrumb style={{ marginBottom: 20 }}>
        <Breadcrumb.Item>{locale['menu.result']}</Breadcrumb.Item>
        <Breadcrumb.Item>{locale['menu.result.success']}</Breadcrumb.Item>
      </Breadcrumb>
      <div className={styles.wrapper}>
        <Result
          className={styles.result}
          status="success"
          title={locale['success.result.title']}
          subTitle={locale['success.result.subTitle']}
          extra={[
            <Button key="again" type="secondary" style={{ marginRight: 16 }}>
              {locale['success.result.printResult']}
            </Button>,
            <Button key="back" type="primary">
              {locale['success.result.projectList']}
            </Button>,
          ]}
        />
        <div className={styles.stepsWrapper}>
          <Typography.Paragraph bold>{locale['success.result.progress']}</Typography.Paragraph>
          <Steps type="dot" current={2}>
            <Step title={locale['success.submitApplication']} description="2020/10/10 14:00:39" />
            <Step
              title={locale['success.leaderReview']}
              description={locale['success.processing']}
            />
            <Step
              title={locale['success.purchaseCertificate']}
              description={locale['success.waiting']}
            />
            <Step title={locale['success.safetyTest']} description={locale['success.waiting']} />
            <Step title={locale['success.launched']} description={locale['success.waiting']} />
          </Steps>
        </div>
      </div>
    </div>
  );
}

export default Success;
