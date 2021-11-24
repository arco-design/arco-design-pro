import React, {
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { Progress } from '@arco-design/web-react';

function LoadingBar(_, ref) {
  const loadingTimer = useRef(null);

  const [percent, setPercent] = useState<number>(30);
  const [hide, setHide] = useState<boolean>(true);

  function loading() {
    setHide(false);
    setPercent(30);
    loadingTimer.current = setInterval(() => {
      if (percent <= 98) {
        setPercent(percent > 80 ? percent + 1 : percent + 10);
      }
    }, 1000);
  }

  function success() {
    clearInterval(loadingTimer.current);
    setPercent(100);

    setTimeout(() => {
      setHide(true);
    }, 300);
  }

  useImperativeHandle(ref, () => ({
    loading,
    success,
  }));

  return !hide ? (
    <Progress
      percent={percent}
      showText={false}
      animation
      style={{ position: 'absolute', height: 2, top: -1, zIndex: 9999 }}
    />
  ) : null;
}

export default forwardRef(LoadingBar);
