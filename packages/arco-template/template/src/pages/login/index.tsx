import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import LoginForm from './form';
import LoginBanner from './banner';
import Logo from '../../assets/logo.svg';

import styles from './style/index.module.less';

export default () => {
  useEffect(() => {
    document.body.setAttribute('arco-theme', 'light');
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo />
        <div className={styles['logo-text']}>Arco Design Pro</div>
      </div>
      <div className={styles.banner}>
        <div className={styles['banner-inner']}>
          <LoginBanner />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles['content-inner']}>
          <LoginForm />
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
};
