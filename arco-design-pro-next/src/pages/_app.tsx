import '../style/global.less';
import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ConfigProvider } from '@arco-design/web-react';
import zhCN from '@arco-design/web-react/es/locale/zh-CN';
import enUS from '@arco-design/web-react/es/locale/en-US';
import axios from 'axios';
import NProgress from 'nprogress';
import rootReducer from '../store';
import Setting from '../components/Settings';
import storage from '@/utils/storage';
import { GlobalContext } from '../context';
import checkLogin from '@/utils/checkLogin';
import Layout from './layout';
import '../mock';

const store = createStore(rootReducer);

function getLang() {
  const lang = storage.getItem('arco-lang') || 'en-US';

  if (!storage.getItem('arco-lang')) {
    storage.setItem('arco-lang', lang);
  }

  return lang;
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [lang, setLang] = useState(getLang());

  const locale = useMemo(() => {
    switch (lang) {
      case 'zh-CN':
        return zhCN;
      case 'en-US':
        return enUS;
      default:
        return enUS;
    }
  }, [lang]);

  function fetchUserInfo() {
    axios.get('/api/user/userInfo').then((res) => {
      store.dispatch({
        type: 'update-userInfo',
        payload: { userInfo: res.data },
      });
    });
  }

  useEffect(() => {
    if (checkLogin()) {
      fetchUserInfo();
    } else if (window.location.pathname !== '/login') {
      window.location.href = '/login';
    }
  }, []);

  useEffect(() => {
    const handleStart = () => {
      NProgress.set(0.4);
      NProgress.start();
    };

    const handleStop = () => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  const contextValue = {
    lang,
    setLang,
  };

  return (
    <ConfigProvider locale={locale}>
      <Provider store={store}>
        <GlobalContext.Provider value={contextValue}>
          {Component.displayName === 'LoginPage' ? (
            <Component {...pageProps} />
          ) : (
            <>
              <Layout>
                <Component {...pageProps} />
              </Layout>
              <Setting />
            </>
          )}
        </GlobalContext.Provider>
      </Provider>
    </ConfigProvider>
  );
}
