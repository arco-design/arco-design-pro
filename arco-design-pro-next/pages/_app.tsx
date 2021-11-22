import "../style/global.less";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import type { AppProps } from "next/app";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { ConfigProvider } from "@arco-design/web-react";
import zhCN from "@arco-design/web-react/es/locale/zh-CN";
import enUS from "@arco-design/web-react/es/locale/en-US";
import axios from "axios";
import rootReducer from "../store";
import Setting from "../components/Settings";
import { GlobalContext } from "../context";
import checkLogin from "@/utils/checkLogin";
import storage from "@/utils/storage";
import Layout from "./layout";
import "../mock";

const store = createStore(rootReducer);

function getLang() {
  const lang = storage.getItem("arco-lang") || "en-US";

  if (!storage.getItem("arco-lang")) {
    storage.setItem("arco-lang", lang);
  }

  return lang;
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const lang = getLang();

  function getArcoLocale() {
    switch (lang) {
      case "zh-CN":
        return zhCN;
      case "en-US":
        return enUS;
      default:
        return zhCN;
    }
  }

  function fetchUserInfo() {
    axios.get("/api/user/userInfo").then((res) => {
      store.dispatch({
        type: "update-userInfo",
        payload: { userInfo: res.data },
      });
    });
  }

  useEffect(() => {
    if (checkLogin()) {
      fetchUserInfo();
    } else if (window.location.pathname !== "/login") {
      window.location.href = "/login";
    }
  }, []);

  const contextValue = {
    lang,
  };

  return (
    <ConfigProvider locale={getArcoLocale()}>
      <Provider store={store}>
        <GlobalContext.Provider value={contextValue}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Setting />
        </GlobalContext.Provider>
      </Provider>
    </ConfigProvider>
  );
}
