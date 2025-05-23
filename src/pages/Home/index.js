import React from 'react';
import '../../index.css'; // src/pages/Home/index.js から src/index.css をインポート
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout';// src/index.js または src/App.js の上部


const Home = () => {
  return (
    <Layout>
      <Helmet>
        <title>8X Aid Circles LP</title>
        <meta name="description" content="8X Aid Circles - A Circle of Support, A World of Hope" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
      </Helmet>

      {/* Section 1 */}
      <section className="
        flex flex-col justify-center items-center text-center
        bg-[linear-gradient(135deg,#E6E6FA,#FFD1DC,#FFC0CB,#FAFAD2,#B0E0E6,#ADD8E6,white_85%)]
        bg-[length:600%_600%] bg-[position:0%_0%]
        animate-[gradientAnimation_18s_ease-in-out_infinite]
        font-['Open_Sans']
        py-24 md:py-36 lg:py-48
      ">
        <h1 className="text-3xl sm:text-5xl lg:text-[4rem] font-bold mb-4 md:mb-6 text-gray-800 px-4 leading-relaxed">
          Aid Without Borders,{' '}
          <span className="
            bg-[linear-gradient(to_right,#833ab4,#fd1d1d,#fcb045)]
            bg-[length:200%_100%]
            bg-clip-text text-transparent
            animate-[AnimationTitle_5s_ease_infinite]
          ">
            Hope Without Limits.
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-[1.2rem] text-gray-700 max-w-full sm:max-w-[600px] mb-6 md:mb-8 px-4 leading-relaxed">
          8X Aid Circles は 「助け合いの輪（Aid Circles）」 を創ります。
        </p>
        <a href="#" className="
          inline-block px-6 py-3
          bg-white text-purple-700
          text-base md:text-xl font-bold
          rounded-lg shadow-md hover:shadow-lg
          transition-all duration-300
          hover:bg-purple-50
          mt-8
        ">
          Learn More
        </a>
      </section>

      {/* Section 2 */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="
              text-3xl sm:text-5xl lg:text-[4rem] font-bold
              bg-[linear-gradient(to_right,#833ab4,#fd1d1d,#fcb045)]
              bg-[length:200%_100%]
              bg-clip-text text-transparent
              animate-[AnimationTitle_5s_ease_infinite]
            ">
              8X Aid Circles
            </h2>
            <p className="text-base md:text-xl text-gray-700 mt-4 max-w-2xl mx-auto">
              A Circle of Support, A World of Hope
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Philosophy */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-purple-100 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2rem] font-bold text-gray-800 whitespace-nowrap">Philosophy</h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              「命のもとの平等」という理念のもと<br />
              「助け合いの輪（Aid Circles）」を創出し<br />
              テクノロジーと福祉の融合によって<br />
              すべての人々に希望ある未来を届けること<br /><br />
              どんな立場にあっても、未来を切り拓く力は誰にでもある<br />
              どんな状況でも、人生は書き換えることができる——<br />
              これが8X Aid Circlesの信念であり、目指す社会の姿です
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Services */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2rem] font-bold text-gray-800">Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[{
                title: 'テクノロジー支援',
                description: '最新のデジタルツールを活用し、社会貢献の新しい形を創造します'
              },
              {
                title: 'ソーシャルブランド事業',
                description: '社会課題の解決に貢献するソーシャルブランドを展開します'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="relative p-6 md:p-8 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow gradient-border"
              >
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-base">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;