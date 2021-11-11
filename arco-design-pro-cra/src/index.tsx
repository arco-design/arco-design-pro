import React, { useEffect } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ConfigProvider } from '@arco-design/web-react';
import zhCN from '@arco-design/web-react/es/locale/zh-CN';
import enUS from '@arco-design/web-react/es/locale/en-US';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import rootReducer from './redux';
import PageLayout from './layout/page-layout';
import Setting from './components/Settings';
import { GlobalContext } from './context';
import './style/index.less';
import './mock';
import Login from './pages/login';
import checkLogin from './utils/checkLogin';

const store = createStore(rootReducer);

function Index() {
  const lang = localStorage.getItem('arco-lang') || 'zh-CN';

  if (!localStorage.getItem('arco-lang')) {
    localStorage.setItem('arco-lang', lang);
  }

  function getArcoLocale() {
    switch (lang) {
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
    if (checkLogin()) {
      fetchUserInfo();
    } else if (window.location.pathname !== '/user/login') {
      window.location.href = '/user/login';
    }
  }, []);

  const contextValue = {
    lang,
  };

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));
