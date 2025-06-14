import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import useIntersectionObserver, { useImageFadeUp, useTextAnimation } from "../hooks/useIntersectionObserver";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Logo from "../assets/logo.svg";
import AnimatedText from "../components/AnimatedText";

const Brand = () => {
  const titleRef = useIntersectionObserver();
  const titleRef2 = useIntersectionObserver();
  const titleRef3 = useIntersectionObserver();
  const titleRef4 = useIntersectionObserver();
  const buttonRef = useIntersectionObserver();
  const brandTitleRef = useIntersectionObserver();
  const { elementRef: brandTextRef, isVisible: brandTextVisible } = useTextAnimation();
  const brandLogoRef = useIntersectionObserver();
  const valueTitleRef = useIntersectionObserver();
  const valueContentRef = useIntersectionObserver();

  return (
    <Layout>
      <Helmet>
        <title>Brand - 8X Aid Circles</title>
        <meta name="description" content="8X Aid Circles - A Circle of Support, A World of Hope" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
      </Helmet>

      <div className="
        bg-[linear-gradient(135deg,#E6E6FA,#FFD1DC,#FFC0CB,#FAFAD2,#B0E0E6,#ADD8E6,white_85%)] 
        bg-[length:600%_600%] bg-[position:0%_0%] 
        animate-[gradientAnimation_18s_ease-in-out_infinite] 
        font-['Open_Sans'] min-h-screen">

        {/* Section 1 */}
        <section className="
          min-h-screen
          flex flex-col justify-center
          w-full px-4
        ">
          <div className="w-full px-4 flex flex-col justify-center items-center">
       
          <h1
            className="
              text-xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              xl:text-7xl
              font-bold
              mb-4 md:mb-6
              text-gray-800
              leading-tight
              opacity-0
            "
            ref={titleRef}
          >
                <span className="
                  bg-[linear-gradient(to_right,#833ab4,#fd1d1d,#fcb045)]
                  bg-[length:200%_100%]
                  bg-clip-text text-transparent
                  animate-[AnimationTitle_5s_ease_infinite]">
                  8X Aid Circles
                </span>
              </h1>
        
            <p
              className="
                text-base
                sm:text-lg
                md:text-xl
                lg:text-2xl
                text-gray-700
                mb-8
                max-w-3xl
                mx-auto
                text-center
                opacity-0
              "
              ref={titleRef2}
            >
              <span className="
                bg-clip-text text-transparent 
                bg-gradient-to-r from-pink-600 to-purple-600 font-bold">
                創造を支え、支援へつなげる
              </span>
              <br />
              <span className="
                text-base
                sm:text-base
                md:text-lg
              ">
                収益の一部は持続可能な慈善活動のために活用されます
              </span>
            </p>
            <div className="flex gap-4 opacity-0" ref={buttonRef}>
              <button
                className="
                  rounded-full
                  px-4 sm:px-6 md:px-8
                  py-2 sm:py-3 md:py-4
                  bg-white
                  text-purple-600
                  hover:bg-purple-50
                  transition-colors
                  text-base
                  sm:text-base
                  md:text-lg
                  font-medium
                  shadow-lg
                  hover:shadow-xl
                "
              >
                Coming Soon
              </button>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="
          min-h-screen
          flex flex-col justify-center
          w-full px-4
        ">
          <div className="w-full px-4 flex flex-col justify-center items-center">
            <h2
              className="
                text-xs
                sm:text-base
                md:text-5xl
                lg:text-6xl
                font-bold
                mb-6 md:mb-8
                text-center
                leading-tight
                opacity-0
              "
              ref={titleRef3}
            >
              <span className="
                bg-[linear-gradient(to_right,#833ab4,#fd1d1d,#fcb045)]
                bg-[length:200%_100%]
                bg-clip-text text-transparent
                animate-[AnimationTitle_5s_ease_infinite]
                "
              >
                Code the life, make the future sparkle.
              </span>
            </h2>
            <p
              className="
                text-base
                sm:text-base
                md:text-xl
                lg:text-2xl
                font-bold
                mb-8
                text-center
                leading-snug
                opacity-0
              "
              ref={titleRef4}
            >
              ― 人生に、新しい光を。
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="py-32">
          <div className="w-full max-w-6xl mx-auto">
            <h2
              className="
                text-base
                sm:text-3xl
                md:text-4xl
                lg:text-5xl
                font-bold
                text-center
                mb-12
                opacity-0
              "
              ref={brandTitleRef}
            >
              <span className="
                bg-[linear-gradient(to_right,#833ab4,#fd1d1d,#fcb045)]
                bg-[length:200%_100%]
                bg-clip-text text-transparent
                animate-[AnimationTitle_5s_ease_infinite]">
                Brand Statement
              </span>
            </h2>
            <div className="max-w-3xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              <div className="w-full max-w-3xl mx-auto" ref={brandTextRef}>
                <div
                  className="
                    text-xs
                    sm:text-lg
                    md:text-xl
                    lg:text-2xl
                    leading-relaxed
                    text-[#1b1b1b]
                  "
                >
                  <div className="mb-4 whitespace-nowrap">
                    <AnimatedText 
                      text="8X Aid Circlesソーシャルブランドは" 
                      isVisible={brandTextVisible}
                      delay={0}
                    />
                  </div>
                  <div className="mb-4 whitespace-nowrap">
                    <AnimatedText 
                      text="支援 × 創造 × 発信の力で" 
                      isVisible={brandTextVisible}
                      delay={800}
                    />
                  </div>
                  <div className="mb-4 whitespace-nowrap">
                    <AnimatedText 
                      text="人々の人生に新たな物語を描きます" 
                      isVisible={brandTextVisible}
                      delay={1600}
                    />
                  </div>
                  <div className="mb-4 whitespace-nowrap">
                    <AnimatedText 
                      text="表現を通じて支援の価値を届ける" 
                      isVisible={brandTextVisible}
                      delay={2400}
                    />
                  </div>
                  <div className="mb-4 whitespace-nowrap">
                    <AnimatedText 
                      text="それが8X Aid Circlesソーシャルブランドの使命です" 
                      isVisible={brandTextVisible}
                      delay={3200}
                    />
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 w-full lg:w-auto opacity-0" ref={brandLogoRef}>
                <img 
                  src={Logo} 
                  alt="8X Aid Circles Logo" 
                  className="
                    w-24 h-24
                    sm:w-32 sm:h-32
                    md:w-40 md:h-40
                    lg:w-56 lg:h-56
                    xl:w-72 xl:h-72
                    object-contain
                  "
                />
              </div>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default Brand; 
