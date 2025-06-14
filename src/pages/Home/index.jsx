import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, useLocation } from 'react-router-dom';
import Layout from '../../components/Layout';
import useIntersectionObserver, { useTextAnimation, useImageFadeUp } from '../../hooks/useIntersectionObserver';
import AnimatedText from '../../components/AnimatedText';
import LoadingScreen from '../../components/LoadingScreen';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const titleRef = useIntersectionObserver();
  const titleRef2 = useIntersectionObserver();
  const subtitleRef = useIntersectionObserver();
  const aboutTitleRef = useIntersectionObserver();
  const aboutSubtitleRef = useIntersectionObserver();
  const philosophyTitleRef = useIntersectionObserver();
  const serviceTitleRef = useIntersectionObserver();
  const technologyRef = useIntersectionObserver();
  const brandRef = useIntersectionObserver();
  const logoRef = useIntersectionObserver();
  const { elementRef: philosophyTextRef, isVisible: philosophyTextVisible } = useTextAnimation();

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <Layout>
      <Helmet>
        <title>8X Aid Circles</title>
        <meta name="description" content="8X Aid Circles - A Circle of Support, A World of Hope" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
      </Helmet>

      <div className="
        bg-[linear-gradient(135deg,#E6E6FA,#FFD1DC,#FFC0CB,#FAFAD2,#B0E0E6,#ADD8E6,white_85%)]
        bg-[length:600%_600%] bg-[position:0%_0%]
        animate-[gradientAnimation_18s_ease-in-out_infinite]
        font-['Open_Sans']
      ">

        {/* <Section 1> */}
        <section className="
          min-h-screen
          flex flex-col justify-center
          w-full px-4
        ">
          <div className="w-full">
            <div className="text-left">
           
              <h1
                className="
                  text-xs
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                  xl:text-8xl
                  font-bold
                  mb-4 md:mb-6
                  text-gray-800
                  leading-tight
                  opacity-0
                "
                ref={titleRef}
              >
                Aid Without Borders,
              </h1>
              <h1
                className="
                  text-xs
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                  xl:text-8xl
                  font-bold
                  mb-8 md:mb-12
                  leading-tight
                  opacity-0
                "
                ref={titleRef2}
              >
              <span className="
                bg-[linear-gradient(to_right,#833ab4,#fd1d1d,#fcb045)]
                bg-[length:200%_100%]
                bg-clip-text text-transparent
                animate-[AnimationTitle_5s_ease_infinite]
              ">
                Hope Without Limits.
              </span>
            </h1>
         
            <p
              ref={subtitleRef}
              className="
                text-xs
                sm:text-base
                md:text-lg
                lg:text-xl
                xl:text-2xl
                2xl:text-3xl
                text-gray-700
                mb-8 md:mb-10 lg:mb-12
                leading-relaxed
                opacity-0
              "
            >
              8X Aid Circles は 「助け合いの輪（Aid Circles）」 を創ります
            </p>
            </div>
          </div>
        </section>

        {/* <Section 2> */}
        <section className="min-h-screen flex flex-col justify-center items-center pt-16 md:pt-20 pb-8 md:pb-10">
          <div className="w-full max-w-4xl mx-auto">
            <div ref={philosophyTextRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-start">
              {/* Left side - Philosophy title */}
              <div className="lg:col-span-1">
          
                <h2
                  className="
                    text-xs
                    sm:text-xl
                    md:text-2xl
                    lg:text-3xl
                    font-bold
                    text-[#1b1b1b] 
                    tracking-wider 
                    opacity-0
                  "
                  ref={philosophyTitleRef}
                >
                  Philosophy
                </h2>
           
              </div>
              
              {/* Right side - Animated text content */}
              <div className="lg:col-span-2">
                <h2 className="text-xs sm:text-base md:text-xl lg:text-2xl xl:text-3xl 
                leading-relaxed 
                text-[#1b1b1b]"
                >
                  <div className="mb-2 whitespace-nowrap">
                    <AnimatedText 
                      text="「命のもとの平等」という理念のもと" 
                      isVisible={philosophyTextVisible}
                      delay={0}
                    />
                  </div>
                  <div className="mb-2 whitespace-nowrap">
                    <AnimatedText 
                      text="「助け合いの輪（Aid Circles）」を創出し" 
                      isVisible={philosophyTextVisible}
                      delay={800}
                    />
                  </div>
                  <div className="mb-2 whitespace-nowrap">
                    <AnimatedText 
                      text="テクノロジーとソーシャルグッドの融合によって" 
                      isVisible={philosophyTextVisible}
                      delay={1600}
                    />
                  </div>
                  <div className="mb-4 whitespace-nowrap">
                    <AnimatedText 
                      text="すべての人々に希望ある未来を届けること" 
                      isVisible={philosophyTextVisible}
                      delay={2400}
                    />
                  </div>
                  <div className="mb-2 whitespace-nowrap">
                    <AnimatedText 
                      text="どんな立場にあっても、未来を切り拓く力は誰にでもある" 
                      isVisible={philosophyTextVisible}
                      delay={3200}
                    />
                  </div>
                  <div className="mb-2 whitespace-nowrap">
                    <AnimatedText 
                      text="どんな状況でも、人生は書き換えることができる——" 
                      isVisible={philosophyTextVisible}
                      delay={4000}
                    />
                  </div>
                  <div className="whitespace-nowrap">
                    <AnimatedText 
                      text="これが8X Aid Circlesの信念であり、目指す社会の姿です" 
                      isVisible={philosophyTextVisible}
                      delay={4800}
                    />
                  </div>
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* <Section 3> */}
        <section className="flex flex-col justify-center items-center pt-8 md:pt-10 pb-32 md:pb-48">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
        
              <h2
                ref={aboutTitleRef}
                className="
                  text-xs
                  sm:text-4xl
                  md:text-5xl
                  lg:text-6xl
                  xl:text-7xl
                  font-bold
                  opacity-0
                  mb-6 md:mb-8 lg:mb-10
                  text-center
                  leading-tight
                "
              >
                <span className="
                  bg-[linear-gradient(to_right,#833ab4,#fd1d1d,#fcb045)]
                  bg-[length:200%_100%]
                  bg-clip-text text-transparent
                  animate-[AnimationTitle_5s_ease_infinite]
                ">
                8X Aid Circles
                </span>
              </h2>
      
              <p
                ref={aboutSubtitleRef}
                className="
                  text-xs
                  sm:text-2xl
                  md:text-3xl
                  lg:text-4xl
                  font-bold
                  text-gray-700
                  mt-4 max-w-4xl mx-auto
                  opacity-0
                  leading-tight
                "
              >
                A Circle of Support, A World of Hope
              </p>
              </div>
            </div>
        </section>

        {/* <Section 4> */}
        <section className="min-h-screen flex flex-col justify-center items-center pt-16 md:pt-20 pb-8 md:pb-10">
          <div className="w-full px-4 sm:px-6 lg:px-8 w-full">
            {/* Servicesタイトルを中央に配置 */}
            <div className="w-full flex justify-center mb-12">
 
                <h2
                  className="
                    text-xs
                    sm:text-xl
                    md:text-2xl
                    lg:text-3xl
                    font-bold
                    text-[#1b1b1b]
                    tracking-wider
                    text-center
                    opacity-0
                  "
                  ref={serviceTitleRef}
                >
                  Services
                </h2>
    
            </div>
            {/* 2カラムで横並びのグラデーションボーダーカード */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full justify-center">
              {/* テクノロジー支援カード */}
              <div className="bg-white rounded-2xl p-8 md:p-10 w-full border-2 opacity-0" style={{borderImage: 'linear-gradient(90deg, #43e97b 0%, #38f9d7 50%, #fa8bff 100%) 1'}} ref={technologyRef}>
                <h2
                  className="
                    text-xs
                    md:text-2xl
                    font-bold
                    text-[#1b1b1b]
                    mb-4
                  "
                >テクノロジー事業</h2>
                <p
                  className="
                    text-xs
                    md:text-lg
                    text-gray-700
                  "
                >
                  最新のデジタルツールを活用し、社会貢献の新しい形を創造します
                </p>
              </div>
              {/* ブランド事業カード */}
              <div className="bg-white rounded-2xl p-8 md:p-10 w-full border-2 opacity-0" style={{borderImage: 'linear-gradient(90deg, #43e97b 0%, #38f9d7 50%, #fa8bff 100%) 1'}} ref={brandRef}>
                <h2
                  className="
                    text-xs
                    md:text-2xl
                    font-bold
                    text-[#1b1b1b]
                    mb-4
                  "
                >ブランド事業</h2>
                <p
                  className="
                    text-xs
                    md:text-lg
                    text-gray-700
                  "
                >
                  社会課題の解決に貢献するソーシャルブランドを展開します
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;