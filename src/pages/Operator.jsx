import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';

const Operator = () => {
  return (
    <Layout>
      <Helmet>
        <html lang="ja" />
        <title>運営者 - 8X Aid Circles</title>
        <meta name="description" content="8X Aid Circles 運営者情報" />
        <link rel="alternate" hreflang="ja" href="https://8xaidcircles.com/operator" />
        <link rel="alternate" hreflang="en" href="https://8xaidcircles.com/en/operator" />
        <link rel="alternate" hreflang="x-default" href="https://8xaidcircles.com/operator" />
      </Helmet>
      <div className="bg-white min-h-screen flex-grow">
        <div className="max-w-8xl mx-auto px-4 3xl:px-8 4xl:px-12 5xl:px-16 pt-32 3xl:pt-40 4xl:pt-48 pb-12 3xl:pb-16 4xl:pb-20">
          <h1 className="text-3xl 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl font-bold mb-8 3xl:mb-12 4xl:mb-16">運営者情報</h1>
          <div className="space-y-6 3xl:space-y-8 4xl:space-y-10 text-gray-700 text-base 3xl:text-lg 4xl:text-xl 5xl:text-2xl leading-relaxed">
            <section>
              <p>
                本サイト（https://8xaidcircles.com）および関連サービスの運営者情報は、以下のとおりです。
              </p>
              <div className="mt-6 3xl:mt-8 4xl:mt-10 space-y-3 3xl:space-y-4 4xl:space-y-5">
                <p><strong>屋号</strong>: 8X Aid Circles</p>
                <p><strong>事業主</strong>: 請求があり次第、遅滞なく開示いたします</p>
                <p><strong>事業内容</strong>: テクノロジー及びブランド事業</p>
                <p>
                  <strong>住所</strong>: 〒600-8847 京都府京都市下京区朱雀宝蔵町44番地協栄ビル2階 京都朱雀スタジオAR-204
                </p>
                <p>
                  <strong>連絡方法</strong>:{' '}
                  <a
                    href="mailto:8xaidcircles@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    8xaidcircles@gmail.com
                  </a>
                </p>
              </div>
            </section>

            <hr className="border-gray-300" />

            <section>
              <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">
                事業主情報の提供について
              </h2>
              <p>
                事業主に関する事項は、請求により、書面または電磁的記録（電子メール等）により遅滞なく開示いたします。実際に請求があった場合には、遅滞なく提供できる体制を整えております。
              </p>
              <p className="mt-4 3xl:mt-6 4xl:mt-8">
                ご請求は、上記メールアドレス（8xaidcircles@gmail.com）までご連絡ください。
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Operator;
