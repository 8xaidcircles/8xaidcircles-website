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
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Poppins:wght@600&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
      </Helmet>

      {/* Section 1 */}
      <section
  className="
    min-h-screen flex flex-col justify-center items-center text-center
    bg-[linear-gradient(-45deg,#ff7e5f,#feb47b,#6a11cb,#2575fc)]
    bg-[length:400%_400%] bg-[position:0%_0%]
    animate-gradient
  "
>
        <h1 className="text-5xl font-bold mb-4">
          Aid Without Borders,{' '}
          <span className="
  bg-gradient-to-r from-green-400 via-blue-500 to-red-500
  bg-[length:200%_200%] bg-clip-text text-transparent
  animate-gradient-text
">
            Hope Without Limits.
          </span>
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mb-8">
          8X Aid Circles は 「助け合いの輪（Aid Circles）」 を創ります。
        </p>
      </section>

      {/* Section 2 */}
      <section className="py-20 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
          <h2 className="
            text-4xl font-bold
            bg-gradient-to-r from-green-400 via-blue-500 to-red-500
            bg-[length:200%_200%] bg-clip-text text-transparent
            animate-gradient-text
          ">
            8X Aid Circles
          </h2>
            <p className="text-xl text-gray-700 mt-4 max-w-2xl mx-auto">
              A Circle of Support, A World of Hope
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Philosophy */}
      <section className="py-20 bg-gradient-to-br from-purple-100 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16">
            <h2 className="text-2xl font-bold text-gray-800 whitespace-nowrap">Philosophy</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
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
      <section className="py-16 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '福祉×テクノロジー支援',
                description: '最新のデジタルツールを活用し、障がい者支援の新しい形を創造します'
              },
              {
                title: 'ソーシャルブランド事業',
                description: '環境と社会に配慮したサステナブルなペット用品・アパレル・ジュエリーブランド「8C」を展開します'
              },
              {
                title: 'NFTデジタルアート事業',
                description: '社会課題の解決に貢献するNFTアートを展開します'
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="relative p-8 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow border border-transparent hover:border-gradient"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;