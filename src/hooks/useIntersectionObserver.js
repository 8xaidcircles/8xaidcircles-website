import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (options = {}) => {
  const elementRef = useRef(null);
  const { delay = 0 } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }, delay);
      }
    }, {
      threshold: 0.5,
      ...options
    });

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options, delay]);

  return elementRef;
};

// 文字アニメーション用のカスタムフック
export const useTextAnimation = (options = {}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
const observer = new IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1,
      ...options
    });

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
  }
    };
  }, [options]);

  return { elementRef, isVisible };
};

// 画像フェードアップアニメーション用のカスタムフック
export const useImageFadeUp = (options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        console.log('Section 4 画像が表示範囲に入りました');
        // 子要素（画像）にvisibleクラスを同時に適用
        const imageElements = entry.target.children;
        console.log('画像要素数:', imageElements.length);
        
        Array.from(imageElements).forEach((element, index) => {
          console.log(`画像${index + 1}にvisibleクラスを追加中...`);
          element.classList.add('visible');
          console.log(`画像${index + 1}のクラス:`, element.className);
        });
        
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1,
      ...options
    });

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
      console.log('Section 4の画像観察を開始しました');
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return elementRef;
};

export default useIntersectionObserver; 