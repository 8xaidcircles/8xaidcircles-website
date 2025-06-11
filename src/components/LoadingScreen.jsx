import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo.svg';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [showLoader, setShowLoader] = useState(true);
  const [startBackgroundFade, setStartBackgroundFade] = useState(false);

  useEffect(() => {
    // 2.5秒後に背景のフェードアウトを開始
    const backgroundFadeTimer = setTimeout(() => {
      setStartBackgroundFade(true);
    }, 2500);

    // 4秒後（2.5秒 + 1.5秒のフェードアウト）にローダーを完全に非表示
    const completeTimer = setTimeout(() => {
      setShowLoader(false);
      // フェードアウトアニメーション完了後にコールバック実行
      setTimeout(() => {
        onLoadingComplete();
      }, 100);
    }, 4000);

    return () => {
      clearTimeout(backgroundFadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  if (!showLoader) return null;

  return (
    <div className={`
      fixed w-full h-screen bg-white z-[10] top-0 left-0
      flex justify-center items-center
      ${startBackgroundFade ? 'animate-fadeOut' : ''}
    `}>
      <div className="w-[175px] opacity-0 animate-logoFade">
        <img 
          src={Logo} 
          alt="8X Aid Circles Logo"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default LoadingScreen; 