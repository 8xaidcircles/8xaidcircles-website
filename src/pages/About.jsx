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

      <div className="
      bg-[linear-gradient(135deg,#E6E6FA,#FFD1DC,#FFC0CB,#FAFAD2,#B0E0E6,#ADD8E6,white_85%)] 
      bg-[length:600%_600%] bg-[position:0%_0%] 
      animate-[gradientAnimation_18s_ease-in-out_infinite] 
      font-['Open_Sans'] min-h-screen">

        {/* Section 1 */}
        <section className="relative min-h-screen flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-4 w-full flex flex-col justify-center items-center">
            
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center opacity-0" ref={titleRef}>
                <span className="
                bg-[linear-gradient(to_right,#833ab4,#fd1d1d,#fcb045)] 
                bg-[length:200%_100%] 
                bg-clip-text text-transparent 
                animate-[AnimationTitle_5s_ease_infinite]"> Philosophy</span>
              </h1>
       
          </div>
        </section>

        {/* Section 2 */}
        <section className="min-h-screen flex flex-col justify-center items-center py-32">
          <div className="max-w-5xl w-full px-4">
            <div className="flex items-center mb-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wider mr-4 opacity-0" ref={titleRef2}>
              <span className="
              bg-[linear-gradient(to_right,#833ab4,#fd1d1d,#fcb045)] 
              bg-[length:200%_100%] 
              bg-clip-text text-transparent 
              animate-[AnimationTitle_5s_ease_infinite]">Mission</span>
              </h2>
            </div>
            <h3 className="mt-10 mb-16 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-wide opacity-0" ref={subtitleRef}>
              命のもとの平等を<br />社会の仕組みに
            </h3>
            <div className="flex-1 text-left">
              <div className="text-lg sm:text-xl md:text-1xl lg:text-2xl xl:text-3xl leading-relaxed text-[#1b1b1b] opacity-0" ref={textRef1}>
                <p className="mb-2">
                 境遇に関わらず誰もが可能性を持ち
                </p>
                <p className="mb-2">
                 尊厳と役割を持って生きられる社会の実現を目指し
                </p>
                <p className="mb-2">
                  テクノロジーの力で
                </p>
                <p className="mb-2">
                  持続可能な支援の仕組みを創る
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="min-h-screen flex flex-col justify-center items-center py-32">
          <div className="max-w-5xl w-full px-4">
            <div className="flex items-center mb-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wider mr-4 opacity-0" ref={titleRef3}>
              <span className="
              bg-[linear-gradient(to_right,#833ab4,#fd1d1d,#fcb045)] 
              bg-[length:200%_100%] 
              bg-clip-text text-transparent 
              animate-[AnimationTitle_5s_ease_infinite]">Vision</span>
              </h2>
            </div>
            <div className="flex-1 text-left">
              <h3 className="mt-10 mb-16 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-wide opacity-0" ref={subtitleRef2}>
                Aid without border, <br />Hope without limits.
              </h3>
              <div className="text-lg sm:text-xl md:text-1xl lg:text-2xl xl:text-3xl leading-relaxed text-[#1b1b1b] opacity-0" ref={textRef2}>
                <p className="mb-2">
                    命の価値に境界線を引かない世界
                </p>
                <p className="mb-2">
                    誰もが誇りと尊厳を持ち
                </p>
                <p className="mb-2">
                    人生を自由に創造できる未来
                </p>
                <p className="mb-2">
                    国や立場を越えて人と人が支え合う
                </p>
                <p className="mb-2">
                    Aid Circles（助け合いの循環）を世界へ
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="min-h-screen flex flex-col justify-center items-center py-32">
          <div className="max-w-5xl w-full px-4">
            <div className="flex items-center mb-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wider mr-4 opacity-0" ref={titleRef4}>
              <span className="
              bg-[linear-gradient(to_right,#833ab4,#fd1d1d,#fcb045)] 
              bg-[length:200%_100%] 
              bg-clip-text text-transparent 
              animate-[AnimationTitle_5s_ease_infinite]">Value</span>
              </h2>
            </div>
            <div className="flex-1 text-left">
              <div className="mb-8">
                <h3 className="mt-10 mb-4 text-xl md:text-3xl lg:text-4xl font-extrabold leading-tight tracking-wide opacity-0" ref={subtitleRef3}>
                  命のもとの平等
                </h3>
                <div className="text-lg sm:text-xl md:text-1xl lg:text-2xl xl:text-3xl leading-relaxed text-[#1b1b1b] opacity-0" ref={textRef3}>
                  命の価値は等しく誰しもが尊厳を持つ存在である
                </div>
              </div>

              <div className="mb-8">
                <h3 className="mt-10 mb-4 text-xl md:text-3xl lg:text-4xl font-extrabold leading-tight tracking-wide opacity-0" ref={subtitleRef5}>
                  循環する支援
                </h3>
                <div className="text-lg sm:text-xl md:text-1xl lg:text-2xl xl:text-3xl leading-relaxed text-[#1b1b1b] opacity-0" ref={textRef5}>
                  支援が一過性で終わらないよう事業と支援を両立させる持続可能な仕組みを追求する
                </div>
              </div>

              <div className="mb-8">
                  <h3 className="mt-10 mb-4 text-xl md:text-3xl lg:text-4xl font-extrabold leading-tight tracking-wide opacity-0" ref={subtitleRef6}>
                  テクノロジーと善意の融合
                </h3>
                <div className="text-lg sm:text-xl md:text-1xl lg:text-2xl xl:text-3xl leading-relaxed text-[#1b1b1b] opacity-0" ref={textRef6}>
                  テクノロジーを活用し善意の力を拡張する新しい形の社会的支援を実現する
                </div>
              </div>

              <div className="mb-8">
                <h3 className="mt-10 mb-4 text-xl md:text-3xl lg:text-4xl font-extrabold leading-tight tracking-wide opacity-0" ref={subtitleRef7}>
                  枠を越えた挑戦
                </h3>
                <div className="text-lg sm:text-xl md:text-1xl lg:text-2xl xl:text-3xl leading-relaxed text-[#1b1b1b] opacity-0" ref={textRef7}>
                  国境/立場を越え「Aid without border, Hope without limits.」の精神で行動する
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
