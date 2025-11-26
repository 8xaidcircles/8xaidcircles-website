import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import useIntersectionObserver, { useImageFadeUp, useTextAnimation } from "../hooks/useIntersectionObserver";
import "@fortawesome/fontawesome-free/css/all.min.css";

const About = () => {
  const titleRef = useIntersectionObserver();
  const titleRef2 = useIntersectionObserver();
  const titleRef3 = useIntersectionObserver();
  const titleRef4 = useIntersectionObserver();
  const subtitleRef = useIntersectionObserver();
  const subtitleRef2 = useIntersectionObserver();
  const subtitleRef3 = useIntersectionObserver();
  const subtitleRef4 = useIntersectionObserver();
  const subtitleRef5 = useIntersectionObserver();
  const subtitleRef6 = useIntersectionObserver();
  const subtitleRef7 = useIntersectionObserver();
  const textRef1 = useIntersectionObserver();
  const textRef2 = useIntersectionObserver();
  const textRef3 = useIntersectionObserver();
  const textRef4 = useIntersectionObserver();
  const textRef5 = useIntersectionObserver();
  const textRef6 = useIntersectionObserver();
  const textRef7 = useIntersectionObserver();

  return (
    <Layout>
      <Helmet>
        <title>About - 8X Aid Circles</title>
        <meta name="description" content="Brand 8X Aid Circles" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
      </Helmet>

      <div className="min-h-screen">
                        
        {/* Section 1 */}
        <section className="relative min-h-screen flex items-center justify-center px-4 3xl:px-8 4xl:px-12 5xl:px-16">
          <div className="w-full max-w-12xl mx-auto flex flex-col justify-center items-center">
            
          <h1 className="
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl 3xl:text-9xl 4xl:text-10xl 5xl:text-11xl
              font-bold mb-4 md:mb-6 lg:mb-7 xl:mb-8 2xl:mb-10 3xl:mb-8 4xl:mb-12
              text-gray-800
              leading-tight
              opacity-0
              " ref={titleRef}>
                <span className="
                bg-[linear-gradient(to_right,#833ab4,#fd1d1d,#fcb045)] 
                bg-[length:200%_100%] 
                bg-clip-text text-transparent 
                animate-[AnimationTitle_5s_ease_infinite]"> Philosophy</span>
              </h1>
       
          </div>
        </section>

        {/* Section 2 */}
        <section className="min-h-screen flex flex-col justify-center items-center py-32 3xl:py-40 4xl:py-48 px-4 3xl:px-8 4xl:px-12 5xl:px-16">
          <div className="w-full max-w-12xl mx-auto">
            <div className="w-full text-center mb-4 3xl:mb-6 4xl:mb-8">
              <h2 className="
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl 5xl:text-10xl
              font-semibold 
              tracking-wider 
              mr-4 opacity-0
              " 
              ref={titleRef2}>
              <span className="
              bg-[linear-gradient(to_right,#833ab4,#fd1d1d,#fcb045)] 
              bg-[length:200%_100%] 
              bg-clip-text text-transparent 
              animate-[AnimationTitle_5s_ease_infinite]">Mission</span>
              </h2>
            </div>
            <div className="w-full flex flex-col items-center">
              <div className="max-w-10xl w-full text-center mx-auto">
                <h3 className="mt-8 3xl:mt-12 4xl:mt-16 mb-12 3xl:mb-16 4xl:mb-20 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl font-extrabold leading-tight tracking-wide opacity-0" ref={subtitleRef}>
                  命のもとの平等を<br />支援の仕組みに
                </h3>
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl leading-relaxed text-[#1b1b1b] opacity-0 text-center" ref={textRef1}>
                  <p className="mb-2 3xl:mb-4 4xl:mb-6">
                   境遇に関わらず誰もが可能性を持ち
                  </p>
                  <p className="mb-2 3xl:mb-4 4xl:mb-6">
                   尊厳を持って生きられるよう
                  </p>
                  <p className="mb-2 3xl:mb-4 4xl:mb-6">
                    テクノロジーの力で
                  </p>
                  <p className="mb-2 3xl:mb-4 4xl:mb-6">
                    持続可能な支援の仕組みを創る
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="min-h-screen flex flex-col justify-center items-center py-32 3xl:py-40 4xl:py-48 px-4 3xl:px-8 4xl:px-12 5xl:px-16">
          <div className="w-full max-w-12xl mx-auto">
            <div className="w-full text-center mb-4 3xl:mb-6 4xl:mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-8xl 4xl:text-9xl 5xl:text-10xl font-semibold tracking-wider mr-4 opacity-0" ref={titleRef3}>
              <span className="
              bg-[linear-gradient(to_right,#833ab4,#fd1d1d,#fcb045)] 
              bg-[length:200%_100%] 
              bg-clip-text text-transparent 
              animate-[AnimationTitle_5s_ease_infinite]">Vision</span>
              </h2>
            </div>
            <div className="w-full flex flex-col items-center">
              <div className="max-w-8xl w-full text-center mx-auto">
                <h3
                  className="
                    text-xl
                    sm:text-2xl
                    md:text-3xl
                    lg:text-4xl
                    xl:text-5xl
                    3xl:text-6xl
                    4xl:text-7xl
                    5xl:text-8xl
                    font-bold
                    mb-8 md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-16 3xl:mb-16 4xl:mb-20
                    leading-tight
                    opacity-0
                  "
                  ref={subtitleRef2}
                >
                  Aid Without Borders,<br />Hope Without Limits.
                </h3>
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl leading-relaxed text-[#1b1b1b] opacity-0 text-center" ref={textRef2}>
                  <p className="mb-2 3xl:mb-4 4xl:mb-6">
                      命に境界のない世界を創る
                  </p>
                  <p className="mb-2 3xl:mb-4 4xl:mb-6">
                      誰もが人生を自由に創造できる未来
                  </p>
                  <p className="mb-2 3xl:mb-4 4xl:mb-6">
                      国や立場を越えて支え合う
                  </p>
                  <p className="mb-2 3xl:mb-4 4xl:mb-6">
                      Aid Circles を創っていく
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="min-h-screen flex flex-col justify-center items-center py-32 3xl:py-40 4xl:py-48 px-4 3xl:px-8 4xl:px-12 5xl:px-16">
          <div className="w-full max-w-10xl mx-auto">
            <div className="w-full text-center mb-4 3xl:mb-6 4xl:mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-8xl 4xl:text-9xl 5xl:text-10xl font-semibold tracking-wider mr-4 opacity-0" ref={titleRef4}>
              <span className="
              bg-[linear-gradient(to_right,#833ab4,#fd1d1d,#fcb045)] 
              bg-[length:200%_100%] 
              bg-clip-text text-transparent 
              animate-[AnimationTitle_5s_ease_infinite]">Value</span>
              </h2>
            </div>
            <div className="w-full flex flex-col items-center">
              <div className="max-w-8xl w-full text-center mx-auto">
                <div className="mb-8 3xl:mb-12 4xl:mb-16">
                    <h3 className="mt-8 3xl:mt-12 4xl:mt-16 mb-4 3xl:mb-6 4xl:mb-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl font-extrabold leading-tight tracking-wide opacity-0" ref={subtitleRef3}>
                    命のもとの平等
                  </h3>
                  <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl leading-relaxed text-[#1b1b1b] opacity-0 text-center" ref={textRef3}>
                   すべての命は等しく尊く、誰もがかけがえのない存在である
                  </div>
                </div>

                <div className="mb-8 3xl:mb-12 4xl:mb-16">
                <h3
                  className="
                    text-xl
                    sm:text-2xl
                    md:text-3xl
                    lg:text-4xl
                    xl:text-5xl
                    3xl:text-6xl
                    4xl:text-7xl
                    5xl:text-8xl
                    font-bold
                    mb-2 3xl:mb-3 4xl:mb-4
                    leading-tight
                    opacity-0
                  "
                  ref={subtitleRef4}
                >
                  One for Aid —循環する支援
                </h3>
                <div
                  className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl leading-relaxed text-[#1b1b1b] text-center mt-0 opacity-0"
                  ref={textRef4}
                >
                  1つの創作が、1つの支援を生む
                </div>
                <div
                  className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl leading-relaxed text-[#1b1b1b] text-center mt-1 opacity-0"
                  ref={textRef5}
                >
                  支援が一過性で終わらないよう事業と支援を両立させる持続可能な仕組みを大切にする
                </div>
                </div>

                <div className="mb-8 3xl:mb-12 4xl:mb-16">
                    <h3 className="mt-8 3xl:mt-12 4xl:mt-16 mb-4 3xl:mb-6 4xl:mb-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl font-extrabold leading-tight tracking-wide opacity-0" ref={subtitleRef5}>
                    テクノロジーと善意の融合
                  </h3>
                  <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl leading-relaxed text-[#1b1b1b] opacity-0 text-center" ref={textRef6}>
                    テクノロジーを活用し善意の力を拡張する新しい支援のかたちを実現する
                  </div>
                </div>

                <div className="mb-8 3xl:mb-12 4xl:mb-16">
                  <h3 className="mt-8 3xl:mt-12 4xl:mt-16 mb-4 3xl:mb-6 4xl:mb-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl font-extrabold leading-tight tracking-wide opacity-0" ref={subtitleRef6}>
                    枠を越えた挑戦
                  </h3>
                  <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl leading-relaxed text-[#1b1b1b] opacity-0 text-center" ref={textRef7}>
                    国境や立場を越え「Aid without border, Hope without limits.」の精神で行動する
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
