import React, { useState, useEffect } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ConfigProvider } from '@arco-design/web-react';
import zhCN from '@arco-design/web-react/es/locale/zh-CN';
import enUS from '@arco-design/web-react/es/locale/en-US';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import rootReducer from './redux';
import history from './history';
import PageLayout from './layout/page-layout';
import Setting from './components/Settings';
import { GlobalContext } from './context';
import './style/index.less';
import './mock';
import Login from './pages/login';
import checkLogin from './utils/checkLogin';

const store = createStore(rootReducer);

function Index() {
  const localeName = localStorage.getItem('arco-lang') || 'zh-CN';

  if (!localStorage.getItem('arco-lang')) {
    localStorage.setItem('arco-lang', localeName);
  }

  const [locale, setLocale] = useState();

  async function fetchLocale(ln?: string) {
    const locale = (await import(`./locale/${ln || localeName}`)).default;
    setLocale(locale);
  }

  function getArcoLocale() {
    switch (localeName) {
      case 'zh-CN':
        return zhCN;
      case 'en-US':
        return enUS;
      default:
        return zhCN;
    }
  }

  function fetchUserInfo() {
    axios.get('/api/user/userInfo').then((res) => {
      store.dispatch({
        type: 'update-userInfo',
        payload: { userInfo: res.data },
      });
    });
  }

  useEffect(() => {
    fetchLocale();
  }, []);

  useEffect(() => {
    if (checkLogin()) {
      fetchUserInfo();
    } else {
      history.push('/user/login');
    }
  }, []);

  const contextValue = {
    locale,
  };

  return locale ? (
    <Router history={history}>
      <ConfigProvider locale={getArcoLocale()}>
        <Provider store={store}>
          <GlobalContext.Provider value={contextValue}>
            <Switch>
              <Route path="/user/login" component={Login} />
              <Route path="/" component={PageLayout} />
            </Switch>
            <Setting />
          </GlobalContext.Provider>
        </Provider>
      </ConfigProvider>
    </Router>
  ) : null;
}

ReactDOM.render(<Index />, document.getElementById('root'));
