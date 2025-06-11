import React from 'react';
import Layout from '../components/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 pt-32 pb-12">
        <h1 className="text-3xl font-bold mb-8">プライバシーポリシー</h1>
        <div className="space-y-6 text-gray-700">
          <p>
            8X Aid Circles（以下、「当事業」といいます。）は、個人情報の保護を社会的責任と認識し、個人情報に関する法令およびその他の規範を遵守し、適切な管理を行うことで、安心してご利用いただけるサービスを提供してまいります。
          </p>

          <section>
            <h2 className="text-xl font-semibold mb-4">1．個人情報の取得と利用目的</h2>
            <p>
              当事業では、次の目的のために必要な範囲で、適正かつ公正な手段により個人情報を取得し、利用します。
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>商品・サービスの提供およびそれに関するご連絡</li>
              <li>キャンペーン、アンケート、イベント等のご案内と実施</li>
              <li>お問い合わせやご要望への対応</li>
              <li>商品開発やサービス向上のためのマーケティング調査・分析</li>
              <li>利用状況の分析、サービス改善</li>
              <li>将来的なECサイト運営の準備・サービス提供に関する対応</li>
              <li>法令に基づく権利行使・義務履行</li>
            </ul>
            <p className="mt-2">
              これらの目的を超えて個人情報を利用する場合は、あらかじめご本人の同意を得ます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">2．個人情報の第三者提供</h2>
            <p>以下の場合を除き、ご本人の同意なしに個人情報を第三者へ提供することはありません。</p>
            <ul className="list-disc ml-6 mt-2">
              <li>法令に基づく場合</li>
              <li>人の生命、身体、財産の保護に必要な場合でご本人の同意が困難なとき</li>
              <li>公衆衛生の向上または児童の健全な育成の推進に特に必要な場合</li>
              <li>国の機関や地方公共団体からの要請で、同意によって支障をきたすおそれがある場合</li>
              <li>業務委託先に業務を委託する場合（下記参照）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">3．個人情報の委託</h2>
            <p>
              業務の一部を外部に委託することがあり、その際に必要な範囲で個人情報を提供する場合があります。その際は、委託先に対して適切な管理・監督を行います。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">4．個人情報の管理と安全対策</h2>
            <p>
              個人情報は正確かつ最新の内容を保つよう努め、漏えい、滅失、き損等を防ぐため、以下の対策を講じています。
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>個人情報の管理責任者の設置</li>
              <li>安全管理措置（アクセス制限、パスワード管理、バックアップ等）の実施</li>
              <li>外部との通信における暗号化（SSL等）の利用</li>
              <li>業務委託先との契約における守秘義務の明示</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">5．個人情報の開示・訂正・利用停止等</h2>
            <p>
              ご本人からの申し出により、保有するご自身の個人情報について、開示・訂正・追加・削除・利用停止・第三者提供の停止を希望される場合は、適切な本人確認を行った上で、速やかに対応いたします。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">6．Cookie等の利用について</h2>
            <p>
              当サイトでは、ユーザーの利便性向上およびアクセス解析のためにCookie（クッキー）を使用する場合があります。Cookieの使用を希望されない場合は、ブラウザの設定により無効にできますが、一部の機能が制限されることがあります。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">7．改定について</h2>
            <p>
              当プライバシーポリシーは、必要に応じて事前の告知なく改定する場合があります。重要な変更がある場合は、当サイト上にてお知らせいたします。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">8．お問い合わせ先</h2>
            <p>
              個人情報に関するお問い合わせは、以下のメールアドレスまでご連絡ください。
            </p>
            <div className="mt-2">
              <div>事業者名：8X Aid Circles</div>
              <div>メールアドレス：8xaidcircles@gmail.com</div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy; 