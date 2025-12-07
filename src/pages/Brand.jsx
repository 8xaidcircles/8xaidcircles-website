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
        <html lang="ja" />
        <title>Brand - 8X Aid Circles</title>
        <meta name="description" content="8X Aid Circles - A Circle of Support, A World of Hope" />
        <link rel="alternate" hreflang="ja" href="https://8xaidcircles.com/brand" />
        <link rel="alternate" hreflang="en" href="https://8xaidcircles.com/en/brand" />
        <link rel="alternate" hreflang="x-default" href="https://8xaidcircles.com/brand" />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
      </Helmet>

      <div className="font-sans min-h-screen">

        {/* Section 1 */}
        <section className="
          min-h-screen
          flex flex-col justify-center
          w-full px-4 3xl:px-8 4xl:px-12 5xl:px-16
        ">
          <div className="w-full max-w-12xl mx-auto px-4 flex flex-col justify-center items-center">
       
          <h1
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
              mb-4 md:mb-6 3xl:mb-8 4xl:mb-12
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
                text-sm
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
                  text-sm
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
                text-xl
                sm:text-2xl
                md:text-3xl
                lg:text-4xl
                xl:text-5xl
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
                break-words
                "
              >
                Code life,
                <span className="
                  block md:inline
                  bg-[linear-gradient(to_right,#833ab4,#fd1d1d,#fcb045)]
                  bg-[length:200%_100%]
                  bg-clip-text text-transparent
                  animate-[AnimationTitle_5s_ease_infinite]
                ">
                  {" "}make the future sparkle.
                </span>
              </span>
            </h2>
            <p
              className="
                text-base
                sm:text-lg
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
                text-2xl
                sm:text-3xl
                md:text-4xl
                lg:text-5xl
                xl:text-6xl 
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
            <div className="max-w-6xl mx-auto flex flex-row flex-wrap w-full px-2 sm:px-4 items-start gap-4 sm:gap-6 lg:gap-16">
              <div className="flex-1 min-w-[220px]" ref={brandTextRef}>
                <div
                  className="
                    text-xs
                    sm:text-sm
                    md:text-xl
                    lg:text-2xl
                    xl:text-3xl 
                    leading-relaxed
                    text-[#1b1b1b]
                  "
                >
                  <div className="mb-2">
                    <AnimatedText 
                      text="8X Aid Circlesソーシャルブランドは" 
                      isVisible={brandTextVisible}
                      delay={0}
                    />
                  </div>
                  <div className="mb-2">
                    <AnimatedText 
                      text="支援 × 創造の力で" 
                      isVisible={brandTextVisible}
                      delay={800}
                    />
                  </div>
                  <div className="mb-2">
                    <AnimatedText 
                      text={`人間・動物・自然——\n共に生きる存在に新たな物語を描きます`}  
                      isVisible={brandTextVisible}
                      delay={1600}
                    />
                  </div>
                  <div className="mb-2">
                    <AnimatedText 
                      text={`Aid for One ー \nあなたの選択が、\n誰かの人生を変える仕組み`} 
                      isVisible={brandTextVisible}
                      delay={2600}
                    />
                  </div>
                  <div className="mb-2">
                    <AnimatedText 
                      text="表現を通じて支援の価値を届ける" 
                      isVisible={brandTextVisible}
                      delay={4700}
                    />
                  </div>
                  <div className="mb-2">
                    <AnimatedText 
                      text="それが8X Aid Circlesの使命です" 
                      isVisible={brandTextVisible}
                      delay={5000}
                    />
                  </div>
                </div>
              </div>
              <div
                className="flex-shrink-0 w-28 xs:w-32 sm:w-36 md:w-44 lg:w-auto opacity-0 flex justify-center"
                ref={brandLogoRef}
              >
                <img 
                  src={Logo} 
                  alt="8X Aid Circles Logo" 
                  className="
                    w-24 h-24
                    sm:w-28 sm:h-28
                    md:w-32 md:h-32
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
