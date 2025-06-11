import React from 'react';
import Layout from '../components/Layout';

const TermsOfService = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 pt-32 pb-12">
        <h1 className="text-3xl font-bold mb-8">利用規約（8X Aid Circles）</h1>
        <div className="space-y-6 text-gray-700">
          <p>
            本利用規約（以下「本規約」といいます）は、8X Aid Circles（以下「当団体」または「当社」といいます）が運営するウェブサイトおよびアプリケーション（以下「当社電子プラットフォーム」といいます）の利用条件を定めるものです。利用者（以下「ユーザー」といいます）は、当社電子プラットフォームの利用にあたり、本規約に同意したものとみなされます。
          </p>

          <section>
            <h2 className="text-xl font-semibold mb-4">第1条（総則）</h2>
            <p>
              ユーザーは、当社電子プラットフォームへのアクセスまたは利用を行うことにより、本規約の全ての条項に法的に拘束されることに同意したものとみなされます。本規約に同意されない場合、当社電子プラットフォームのご利用はできません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">第2条（規約の変更）</h2>
            <p>
              当社は、本規約を必要に応じて変更することができるものとします。変更後の規約は当社電子プラットフォーム上に掲載された時点で効力を生じ、ユーザーがその後も当社電子プラットフォームを利用した場合には、変更後の規約に同意したものとみなします。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">第3条（知的財産権）</h2>
            <ol className="list-decimal ml-6 mt-2 space-y-2">
              <li>
                <span className="font-bold">商標について</span><br />
                「8X Aid Circles」および関連するロゴや名称は、当社の商標または商標申請中のものです。無断での使用・模倣・類似使用は固くお断りします。
              </li>
              <li>
                <span className="font-bold">著作権について</span><br />
                当社電子プラットフォーム上に掲載されているテキスト、画像、動画、音声、図表、ロゴ、UIデザインその他すべてのコンテンツ（以下「コンテンツ」）に関する著作権は、当社または正当な権利を有する第三者に帰属します。<br />
                現在、著作権の正式な登録手続きは未了ですが、創作と同時に発生する著作権の原始的権利として、第三者による無断使用、複製、改変、転載、頒布等は法律上制限される場合があります。<br />
                ユーザーは、当社の明示的な許可がない限り、当該コンテンツを商業目的で使用してはならず、私的利用の範囲を超えて利用することはできません。
              </li>
              <li>
                <span className="font-bold">ライセンスの不付与</span><br />
                当社電子プラットフォーム上の記載や表示から、当社または第三者の知的財産に関するライセンスや権利がユーザーに付与されるものではありません。
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">第4条（年齢・契約能力）</h2>
            <p>
              ユーザーは、利用にあたり18歳以上または法定の成年年齢に達しており、法的な契約を締結する能力があることを表明するものとします。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">第5条（免責）</h2>
            <p>
              当社電子プラットフォームの内容や提供情報は、現状有姿で提供されるものであり、当社はその正確性、完全性、有用性、信頼性について保証するものではありません。また、予告なく内容を変更・削除することがあります。
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService; 