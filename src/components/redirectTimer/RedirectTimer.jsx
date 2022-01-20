import React, { useState, useEffect, useRef } from 'react';

const RedirectTimer = ({ getRedirect }) => {
  const [timer, setTimer] = useState(5);
  const intervalId = useRef(null);

  useEffect(() => {
    if (timer) return;
    clearInterval(intervalId.current);
    getRedirect(true);
  }, [getRedirect, timer]);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTimer(timer => timer - 1);
    }, 1000);
    return () => {
      clearInterval(intervalId.current);
    };
  }, []);

  return timer ? (
    <div>You will automatically redirected after {timer} seconds</div>
  ) : (
    <div>Redirecting...</div>
  );
};

export default RedirectTimer;
