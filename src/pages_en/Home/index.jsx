import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, useLocation } from 'react-router-dom';
import Layout from '../../components_en/Layout';
import useIntersectionObserver, { useTextAnimation, useImageFadeUp } from '../../hooks/useIntersectionObserver';
import AnimatedText from '../../components_en/AnimatedText';
import LoadingScreen from '../../components_en/LoadingScreen';

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
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
      </Helmet>

      <div className="font-sans">

        {/* <Section 1> */}
        <section className="
          min-h-screen
          flex flex-col justify-center
          w-full px-4 3xl:px-8 4xl:px-12 5xl:px-16
        ">
          <div className="w-full max-w-12xl mx-auto">
            <div className="text-left">
           
              <h1
                className="
                  text-3xl
                  sm:text-3xl
                  md:text-5xl
                  lg:text-6xl
                  xl:text-7xl
                  2xl:text-8xl
                  3xl:text-9xl
                  4xl:text-10xl
                  5xl:text-11xl
                  font-bold
                  mb-4 md:mb-6 lg:mb-7 xl:mb-8 2xl:mb-10 3xl:mb-8 4xl:mb-12
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
                  text-3xl
                  sm:text-3xl
                  md:text-5xl
                  lg:text-6xl
                  xl:text-7xl
                  2xl:text-8xl
                  3xl:text-9xl
                  4xl:text-10xl
                  5xl:text-11xl
                  font-bold
                  mb-8 md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-16 3xl:mb-16 4xl:mb-20
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
                text-base
                sm:text-lg
                md:text-xl
                lg:text-xl
                xl:text-2xl
                2xl:text-3xl
                3xl:text-4xl
                4xl:text-5xl
                5xl:text-6xl
                text-gray-700
                mb-8 md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-16 3xl:mb-16 4xl:mb-20
                leading-relaxed
                opacity-0
              "
            >
              8X Aid Circles creates 'Circles of Support (Aid Circles)'
            </p>
            </div>
          </div>
        </section>

        {/* <Section 2> */}
        <section className="
        min-h-screen flex flex-col justify-center w-full px-4 3xl:px-8 4xl:px-12 5xl:px-16 pt-16 md:pt-20 3xl:pt-24 4xl:pt-32 pb-8 md:pb-10 3xl:pb-12 4xl:pb-16
        ">
          <div className="w-full max-w-12xl mx-auto">
            <div ref={philosophyTextRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 3xl:gap-20 4xl:gap-24 items-center lg:items-start">
              {/* Left side - Philosophy title */}
              <div className="lg:col-span-1 flex flex-col justify-center items-center lg:items-start lg:justify-center lg:text-left text-center">
          
                <h2
                  className="
                    text-2xl
                    sm:text-3xl
                    md:text-4xl
                    lg:text-5xl
                    3xl:text-6xl
                    4xl:text-7xl
                    5xl:text-8xl
                    font-bold
                    text-[#1b1b1b] 
                    tracking-wider 
                    opacity-0
                    lg:ml-20
                    md:ml-12
                    ml-6
                    lg:self-start
                    self-center
                  "
                  ref={philosophyTitleRef}
                >
                  Philosophy
                </h2>
           
              </div>
              
              {/* Right side - Animated text content */}
              <div className="lg:col-span-2">
                <h2 className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl
                leading-relaxed 
                text-[#1b1b1b]"
                >
                  <div className="mb-2">
                    <AnimatedText 
                      text="One Health — Contributing to All Life" 
                      isVisible={philosophyTextVisible}
                      delay={0}
                    />
                  </div>
                  <div className="mb-2">
                    <AnimatedText 
                      text="We view humans, animals, and nature as interconnected life systems." 
                      isVisible={philosophyTextVisible}
                      delay={800}
                    />
                  </div>
                  <div className="mb-2">
                    <AnimatedText 
                      text="Through science, technology, and empathy," 
                      isVisible={philosophyTextVisible}
                      delay={1600}
                    />
                  </div>
                  <div className="mb-2">
                    <AnimatedText 
                      text="we bring a hopeful future to every form of life." 
                      isVisible={philosophyTextVisible}
                      delay={2600}
                    />
                  </div>
                  <div className="mb-2">
                    <AnimatedText 
                      text="Regardless of one's circumstances," 
                      isVisible={philosophyTextVisible}
                      delay={4000}
                    />
                  </div>
                  <div className="mb-2">
                    <AnimatedText 
                      text="everyone has the power to shape their future." 
                      isVisible={philosophyTextVisible}
                      delay={4400}
                    />
                  </div>
                  <div className="mb-2">
                    <AnimatedText 
                      text="No matter the situation, a life can be rewritten—" 
                      isVisible={philosophyTextVisible}
                      delay={5100}
                    />
                  </div>
                  <div className="mb-2">
                    <AnimatedText 
                      text="this is 8X Aid Circles' belief and vision." 
                      isVisible={philosophyTextVisible}
                      delay={5500}
                    />
                  </div>
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* <Section 3> */}
        <section className="flex flex-col justify-center items-center pt-8 md:pt-10 3xl:pt-16 4xl:pt-20 pb-32 md:pb-48 3xl:pb-64 4xl:pb-80">
          <div className="w-full max-w-12xl mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 4xl:px-16">
            <div className="text-center mb-8">
        
              <h2
                ref={aboutTitleRef}
                className="
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                  xl:text-8xl
                  3xl:text-9xl
                  4xl:text-10xl
                  5xl:text-11xl
                  font-bold
                  opacity-0
                  mb-6 md:mb-8 lg:mb-10 3xl:mb-12 4xl:mb-16
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
                  text-base
                  sm:text-2xl
                  md:text-3xl
                  lg:text-4xl
                  3xl:text-5xl
                  4xl:text-6xl
                  5xl:text-7xl
                  font-bold
                  text-gray-700
                  mt-4 max-w-10xl mx-auto
                  opacity-0
                  leading-tight
                "
              >
                Aid for One
              </p>
              </div>
            </div>
        </section>

        {/* <Section 4> */}
        <section className="min-h-screen flex flex-col justify-center items-center pt-16 md:pt-20 3xl:pt-24 4xl:pt-32 pb-8 md:pb-10 3xl:pb-12 4xl:pb-16">
          <div className="w-full max-w-12xl mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 4xl:px-16 w-full">
            {/* Services title centered */}
            <div className="w-full flex justify-center mb-12 3xl:mb-16 4xl:mb-20">
 
                <h2
                  className="
                    text-2xl
                    sm:text-3xl
                    md:text-4xl
                    lg:text-5xl
                    3xl:text-6xl
                    4xl:text-7xl
                    5xl:text-8xl
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
            {/* Two-column gradient border cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 3xl:gap-16 4xl:gap-20 w-full justify-center">
              {/* Technology Support Card */}
              <div className="bg-white rounded-2xl 3xl:rounded-3xl p-8 md:p-10 3xl:p-12 4xl:p-16 w-full border-2 opacity-0" style={{borderImage: 'linear-gradient(90deg, #43e97b 0%, #38f9d7 50%, #fa8bff 100%) 1'}} ref={technologyRef}>
                <h2
                  className="
                    text-base
                    md:text-2xl
                    3xl:text-3xl
                    4xl:text-4xl
                    5xl:text-5xl
                    font-bold
                    text-[#1b1b1b]
                    mb-4 3xl:mb-6 4xl:mb-8
                  "
                >Technology</h2>
                <p
                  className="
                    text-base
                    md:text-lg
                    3xl:text-xl
                    4xl:text-2xl
                    5xl:text-3xl
                    text-gray-700
                    leading-relaxed
                  "
                >
                  Creating new forms of social contribution by leveraging cutting-edge digital tools.
                </p>
              </div>
              {/* Brand Business Card */}
              <div className="bg-white rounded-2xl 3xl:rounded-3xl p-8 md:p-10 3xl:p-12 4xl:p-16 w-full border-2 opacity-0" style={{borderImage: 'linear-gradient(90deg, #43e97b 0%, #38f9d7 50%, #fa8bff 100%) 1'}} ref={brandRef}>
                <h2
                  className="
                    text-base
                    md:text-2xl
                    3xl:text-3xl
                    4xl:text-4xl
                    5xl:text-5xl
                    font-bold
                    text-[#1b1b1b]
                    mb-4 3xl:mb-6 4xl:mb-8
                  "
                >Brand</h2>
                <p
                  className="
                    text-base
                    md:text-lg
                    3xl:text-xl
                    4xl:text-2xl
                    5xl:text-3xl
                    text-gray-700
                    leading-relaxed
                  "
                >
                  Developing social brands that contribute to solving societal challenges.
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

