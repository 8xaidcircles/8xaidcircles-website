import React from 'react';
import Layout from '../components/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="bg-white min-h-screen flex-grow">
      <div className="max-w-8xl mx-auto px-4 3xl:px-8 4xl:px-12 5xl:px-16 pt-32 3xl:pt-40 4xl:pt-48 pb-12 3xl:pb-16 4xl:pb-20">
        <h1 className="text-3xl 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl font-bold mb-8 3xl:mb-12 4xl:mb-16">プライバシーポリシー</h1>
        <div className="space-y-6 3xl:space-y-8 4xl:space-y-10 text-gray-700 text-base 3xl:text-lg 4xl:text-xl 5xl:text-2xl leading-relaxed">

          {/* 運営者 */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">運営者</h2>
            <p>
              本サイト (https://8xaidcircles.com) および当社が提供するサービスの運営者は以下のとおりです。
            </p>
            <div className="mt-4 3xl:mt-6 4xl:mt-8 space-y-2 3xl:space-y-3 4xl:space-y-4">
              <p><strong>屋号</strong>: 8X Aid Circles</p>
              <p><strong>住所</strong>: 京都府京都市下京区朱雀宝蔵町44番地協栄ビル2階京都朱雀スタジオAR-204</p>
              <p><strong>お問い合わせ先</strong>: 8xaidcircles@gmail.com</p>
            </div>
            <p className="mt-4 3xl:mt-6 4xl:mt-8">
              本プライバシーポリシー内では、上記運営者を「当社」と表記します。
            </p>
          </section>

          <hr className="border-gray-300" />

          {/* 適用範囲 */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">適用範囲</h2>
            <p>
              当社は、以下のサービスにおけるお客様の個人情報の取扱いについて、本プライバシーポリシーを定めます。
            </p>
            <p className="mt-4 3xl:mt-6 4xl:mt-8"><strong>対象サービス:</strong></p>
            <ul className="list-disc ml-6 3xl:ml-8 4xl:ml-10 mt-2 3xl:mt-4 4xl:mt-6 space-y-1 3xl:space-y-2 4xl:space-y-3">
              <li>事業サイト (https://8xaidcircles.com)</li>
              <li>検索サイト「8Wheel」 (https://8wheel.jp/)</li>
              <li>その他当社が提供するサービス</li>
            </ul>
          </section>

          <hr className="border-gray-300" />

          {/* お客様から取得する情報 */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">お客様から取得する情報</h2>
            <p>当社は、お客様から以下の情報を取得します。</p>

            <h3 className="text-lg 3xl:text-xl 4xl:text-2xl font-semibold mt-6 3xl:mt-8 4xl:mt-10 mb-3 3xl:mb-4 4xl:mb-5">基本情報</h3>
            <ul className="list-disc ml-6 3xl:ml-8 4xl:ml-10 space-y-1 3xl:space-y-2 4xl:space-y-3">
              <li>氏名（ニックネームやペンネームも含む）</li>
              <li>メールアドレス</li>
            </ul>

            <h3 className="text-lg 3xl:text-xl 4xl:text-2xl font-semibold mt-6 3xl:mt-8 4xl:mt-10 mb-3 3xl:mb-4 4xl:mb-5">端末・アクセス情報</h3>
            <ul className="list-disc ml-6 3xl:ml-8 4xl:ml-10 space-y-1 3xl:space-y-2 4xl:space-y-3">
              <li>OSが生成するID、端末の種類、端末識別子等のお客様が利用するOSや端末に関する情報</li>
              <li>Cookie（クッキー）を用いて生成された識別情報</li>
              <li>お客様の位置情報（大まかな地域情報）</li>
            </ul>

            <h3 className="text-lg 3xl:text-xl 4xl:text-2xl font-semibold mt-6 3xl:mt-8 4xl:mt-10 mb-3 3xl:mb-4 4xl:mb-5">サイト利用情報</h3>
            <ul className="list-disc ml-6 3xl:ml-8 4xl:ml-10 space-y-1 3xl:space-y-2 4xl:space-y-3">
              <li>当社ウェブサイトの滞在時間、入力履歴、購買履歴等の当社ウェブサイトにおけるお客様の行動履歴</li>
            </ul>

            <h3 className="text-lg 3xl:text-xl 4xl:text-2xl font-semibold mt-6 3xl:mt-8 4xl:mt-10 mb-3 3xl:mb-4 4xl:mb-5">検索サービスに関する情報</h3>
            <ul className="list-disc ml-6 3xl:ml-8 4xl:ml-10 space-y-1 3xl:space-y-2 4xl:space-y-3">
              <li>検索キーワード、検索履歴</li>
              <li>検索結果のクリック履歴</li>
              <li>検索サービスの利用時間、利用頻度</li>
            </ul>
          </section>

          <hr className="border-gray-300" />

          {/* お客様の情報を利用する目的 */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">お客様の情報を利用する目的</h2>
            <p>当社は、お客様から取得した情報を、以下の目的のために利用します。</p>

            <h3 className="text-lg 3xl:text-xl 4xl:text-2xl font-semibold mt-6 3xl:mt-8 4xl:mt-10 mb-3 3xl:mb-4 4xl:mb-5">サービス提供・運営</h3>
            <ol className="list-decimal ml-6 3xl:ml-8 4xl:ml-10 space-y-1 3xl:space-y-2 4xl:space-y-3">
              <li>当社サービスに関する登録の受付、お客様の本人確認、認証のため</li>
              <li>お客様の当社サービスの利用履歴を管理するため</li>
              <li>当社サービスにおけるお客様の行動履歴を分析し、当社サービスの維持改善に役立てるため</li>
              <li>当社のサービスに関するご案内をするため</li>
              <li>以上の他、当社サービスの提供、維持、保護及び改善のため</li>
            </ol>

            <h3 className="text-lg 3xl:text-xl 4xl:text-2xl font-semibold mt-6 3xl:mt-8 4xl:mt-10 mb-3 3xl:mb-4 4xl:mb-5">お客様対応</h3>
            <ol className="list-decimal ml-6 3xl:ml-8 4xl:ml-10 space-y-1 3xl:space-y-2 4xl:space-y-3" start="6">
              <li>お客様からのお問い合わせに対応するため</li>
              <li>当社サービスの変更、提供中止、終了、契約解除をご連絡するため</li>
              <li>当社規約の変更等を通知するため</li>
            </ol>

            <h3 className="text-lg 3xl:text-xl 4xl:text-2xl font-semibold mt-6 3xl:mt-8 4xl:mt-10 mb-3 3xl:mb-4 4xl:mb-5">広告・マーケティング</h3>
            <ol className="list-decimal ml-6 3xl:ml-8 4xl:ml-10 space-y-1 3xl:space-y-2 4xl:space-y-3" start="9">
              <li>広告の配信、表示及び効果測定のため</li>
              <li>お客様の趣味嗜好にあわせたターゲティング広告を表示するため</li>
            </ol>

            <h3 className="text-lg 3xl:text-xl 4xl:text-2xl font-semibold mt-6 3xl:mt-8 4xl:mt-10 mb-3 3xl:mb-4 4xl:mb-5">規約違反への対応</h3>
            <ol className="list-decimal ml-6 3xl:ml-8 4xl:ml-10 space-y-1 3xl:space-y-2 4xl:space-y-3" start="11">
              <li>当社の規約や法令に違反する行為に対応するため</li>
            </ol>
          </section>

          <hr className="border-gray-300" />

          {/* 安全管理のために講じた措置 */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">安全管理のために講じた措置</h2>
            <p>
              当社が、お客様から取得した情報に関して安全管理のために講じた措置につきましては、末尾記載のお問い合わせ先にご連絡をいただきましたら、法令の定めに従い個別にご回答させていただきます。
            </p>
          </section>

          <hr className="border-gray-300" />

          {/* 保存期間 */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">保存期間</h2>
            <p>当社は、お客様から取得した個人情報を、以下の期間保存します。</p>
            <ul className="list-disc ml-6 3xl:ml-8 4xl:ml-10 mt-2 3xl:mt-4 4xl:mt-6 space-y-1 3xl:space-y-2 4xl:space-y-3">
              <li>会員登録情報: 退会後1年間</li>
              <li>お問い合わせ履歴: お問い合わせ対応完了後3年間</li>
              <li>アクセスログ、検索履歴: 最終アクセスから2年間</li>
              <li>その他の情報: 利用目的達成後、適切な期間</li>
            </ul>
            <p className="mt-4 3xl:mt-6 4xl:mt-8">
              ただし、法令により保存が義務付けられている場合は、当該期間保存するものとします。
            </p>
          </section>

          <hr className="border-gray-300" />

          {/* 第三者提供 */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">第三者提供</h2>
            <p>
              当社は、お客様から取得する情報のうち、個人データ（個人情報保護法第16条第3項）に該当するものついては、あらかじめお客様の同意を得ずに、第三者（日本国外にある者を含みます）に提供しません。
            </p>
            <p className="mt-4 3xl:mt-6 4xl:mt-8">ただし、次の場合は除きます。</p>
            <ol className="list-decimal ml-6 3xl:ml-8 4xl:ml-10 mt-2 3xl:mt-4 4xl:mt-6 space-y-1 3xl:space-y-2 4xl:space-y-3">
              <li>個人データの取扱いを外部に委託する場合</li>
              <li>当社や当社サービスが買収された場合</li>
              <li>事業パートナーと共同利用する場合（具体的な共同利用がある場合は、その内容を別途公表します）</li>
              <li>その他、法律によって合法的に第三者提供が許されている場合</li>
            </ol>
          </section>

          <hr className="border-gray-300" />

          {/* 外部委託について */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">外部委託について</h2>
            <p>
              当社は、お客様から取得した個人情報の取扱いの全部または一部を外部に委託することがあります。
            </p>

            <h3 className="text-lg 3xl:text-xl 4xl:text-2xl font-semibold mt-6 3xl:mt-8 4xl:mt-10 mb-3 3xl:mb-4 4xl:mb-5">委託先について</h3>
            <p>
              当社は、Google Analytics、Google AdSense等の外部サービスを利用しています。これらにより収集された情報は、当該サービス事業者のサーバーに保存されることがあり、国をまたいで処理される場合があります。
            </p>

            <h3 className="text-lg 3xl:text-xl 4xl:text-2xl font-semibold mt-6 3xl:mt-8 4xl:mt-10 mb-3 3xl:mb-4 4xl:mb-5">委託先の管理</h3>
            <p>
              当社は、これらの業務を外部に委託する場合、契約により委託先に対する必要かつ適切な監督を行い、個人データの安全管理を担保します。
            </p>

            <h3 className="text-lg 3xl:text-xl 4xl:text-2xl font-semibold mt-6 3xl:mt-8 4xl:mt-10 mb-3 3xl:mb-4 4xl:mb-5">委託先情報の開示</h3>
            <p>
              外部委託先の詳細については、お客様から要請があれば開示いたします。末尾記載のお問い合わせ先までご連絡ください。
            </p>

            <h3 className="text-lg 3xl:text-xl 4xl:text-2xl font-semibold mt-6 3xl:mt-8 4xl:mt-10 mb-3 3xl:mb-4 4xl:mb-5">主な委託先</h3>
            <ul className="list-disc ml-6 3xl:ml-8 4xl:ml-10 space-y-1 3xl:space-y-2 4xl:space-y-3">
              <li>Google LLC（Google Analytics、Google AdSense）</li>
              <li>その他、サービス運営に必要な事業者</li>
            </ul>
          </section>

          <hr className="border-gray-300" />

          {/* 外国にある第三者への提供 */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">外国にある第三者への提供</h2>
            <p>当社は、以下のサービスを利用しており、お客様の情報が日本国外のサーバーに保存される場合があります。</p>
            <ul className="list-disc ml-6 3xl:ml-8 4xl:ml-10 mt-2 3xl:mt-4 4xl:mt-6 space-y-1 3xl:space-y-2 4xl:space-y-3">
              <li>Google Analytics（米国）</li>
              <li>Google AdSense（米国）</li>
            </ul>
            <p className="mt-4 3xl:mt-6 4xl:mt-8">
              これらのサービスは、各社のプライバシーポリシーに基づき、適切に情報を管理しています。
            </p>
          </section>

          <hr className="border-gray-300" />

          {/* Cookieの使用について */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">Cookieの使用について</h2>
            <p>
              当社は、本サービスの利用状況の把握、広告配信、サービス改善のため、Cookieを使用しています。
            </p>

            <h3 className="text-lg 3xl:text-xl 4xl:text-2xl font-semibold mt-6 3xl:mt-8 4xl:mt-10 mb-3 3xl:mb-4 4xl:mb-5">Cookieとは</h3>
            <p>
              Cookieとは、ウェブサイトを訪問した際に、お客様のコンピューターに保存される小さなテキストファイルです。
            </p>

            <h3 className="text-lg 3xl:text-xl 4xl:text-2xl font-semibold mt-6 3xl:mt-8 4xl:mt-10 mb-3 3xl:mb-4 4xl:mb-5">Cookieの利用目的</h3>
            <ul className="list-disc ml-6 3xl:ml-8 4xl:ml-10 space-y-1 3xl:space-y-2 4xl:space-y-3">
              <li>お客様の利便性向上（ログイン状態の保持等）</li>
              <li>アクセス解析（訪問回数、滞在時間等の統計取得）</li>
              <li>広告配信の最適化</li>
            </ul>

            <h3 className="text-lg 3xl:text-xl 4xl:text-2xl font-semibold mt-6 3xl:mt-8 4xl:mt-10 mb-3 3xl:mb-4 4xl:mb-5">Cookieの拒否方法</h3>
            <p>
              お客様はブラウザの設定により、Cookieの受け取りを拒否することができます。ただし、Cookieを拒否した場合、本サービスの一部機能が正常に動作しない場合があります。
            </p>
            <p className="mt-2 3xl:mt-4 4xl:mt-6">
              詳しくはお使いのブラウザの設定をご確認ください。
            </p>
          </section>

          <hr className="border-gray-300" />

          {/* アクセス解析ツール */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">アクセス解析ツール</h2>
            <p>
              当社は、お客様のアクセス解析のために、「Google Analytics」を利用しています。
            </p>
            <p className="mt-4 3xl:mt-6 4xl:mt-8">
              Google Analyticsは、トラフィックデータの収集のためにCookieを使用しています。トラフィックデータは匿名で収集されており、個人を特定するものではありません。
            </p>
            <p className="mt-4 3xl:mt-6 4xl:mt-8">
              Cookieを無効にすれば、これらの情報の収集を拒否することができます。
            </p>
            <p className="mt-4 3xl:mt-6 4xl:mt-8">
              Google Analyticsについて、詳しくは以下からご確認ください。<br />
              <a href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                https://marketingplatform.google.com/about/analytics/terms/jp/
              </a>
            </p>
          </section>

          <hr className="border-gray-300" />

          {/* 広告の配信 */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">広告の配信</h2>

            <h3 className="text-lg 3xl:text-xl 4xl:text-2xl font-semibold mb-3 3xl:mb-4 4xl:mb-5">Google AdSense</h3>
            <p>
              当社は、Google及びそのパートナー（第三者配信事業者）の提供する広告を設置しています。
            </p>
            <p className="mt-4 3xl:mt-6 4xl:mt-8">
              広告配信にはCookieを使用し、お客様が過去に当社ウェブサイトやその他のサイトにアクセスした情報に基づいて広告を配信します。Googleやそのパートナーは、Cookieを使用することにより適切な広告を表示しています。
            </p>
            <p className="mt-4 3xl:mt-6 4xl:mt-8">
              <strong>パーソナライズ広告の無効化:</strong><br />
              お客様は、以下のGoogleアカウントの広告設定ページから、パーソナライズ広告を無効にできます。<br />
              <a href="https://adssettings.google.com/u/0/authenticated" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                https://adssettings.google.com/u/0/authenticated
              </a>
            </p>
            <p className="mt-4 3xl:mt-6 4xl:mt-8">
              また、aboutads.infoのページにアクセスし、パーソナライズ広告掲載に使用される第三者配信事業者のCookieを無効にすることもできます。
            </p>
            <p className="mt-4 3xl:mt-6 4xl:mt-8">
              その他、GoogleによるCookieの取り扱い詳細については、以下のGoogleのポリシーと規約のページをご覧ください。<br />
              <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                https://policies.google.com/technologies/ads
              </a>
            </p>
          </section>

          <hr className="border-gray-300" />

          {/* アフィリエイト広告 */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">アフィリエイト広告</h2>
            <p>
              当社は、本サービス内に第三者配信のアフィリエイト広告を掲載することがあります。
            </p>
            <p className="mt-4 3xl:mt-6 4xl:mt-8">
              アフィリエイト広告では、お客様の当社サービスへのアクセス情報やCookieを利用して、お客様の興味関心に応じた広告を配信する場合があります。
            </p>

            <h3 className="text-lg 3xl:text-xl 4xl:text-2xl font-semibold mt-6 3xl:mt-8 4xl:mt-10 mb-3 3xl:mb-4 4xl:mb-5">当社が利用するアフィリエイトサービス</h3>
            <ul className="list-disc ml-6 3xl:ml-8 4xl:ml-10 space-y-1 3xl:space-y-2 4xl:space-y-3">
              <li>
                <strong>A8.net</strong>（株式会社ファンコミュニケーションズ）<br />
                詳細: <a href="https://www.a8.net/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.a8.net/</a>
              </li>
            </ul>
            <p className="mt-4 3xl:mt-6 4xl:mt-8">
              お客様がアフィリエイト広告をクリックし、外部サイトで商品やサービスを購入された場合、当社は成果報酬を受け取ることがあります。これによりお客様に追加費用が発生することはありません。
            </p>
          </section>

          <hr className="border-gray-300" />

          {/* 検索サービスに関する免責事項 */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">検索サービスに関する免責事項</h2>
            <p>
              当社が提供する検索サービスは、インターネット上の情報を検索し、その結果を表示するものです。
            </p>
            <ul className="list-disc ml-6 3xl:ml-8 4xl:ml-10 mt-2 3xl:mt-4 4xl:mt-6 space-y-1 3xl:space-y-2 4xl:space-y-3">
              <li>検索結果の正確性、完全性、有用性について保証するものではありません</li>
              <li>検索結果として表示される外部ウェブサイトの内容について、当社は一切の責任を負いません</li>
              <li>検索結果から遷移した外部サイトでの取引やトラブルについて、当社は一切の責任を負いません</li>
            </ul>
          </section>

          <hr className="border-gray-300" />

          {/* プライバシーポリシーの変更 */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">プライバシーポリシーの変更</h2>
            <p>
              当社は、必要に応じて、このプライバシーポリシーの内容を変更します。この場合、変更後のプライバシーポリシーの施行時期と内容を適切な方法により周知または通知します。
            </p>
          </section>

          <hr className="border-gray-300" />

          {/* お問い合わせ・開示等の請求 */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">お問い合わせ・開示等の請求</h2>
            <p>
              お客様は、当社に対し、個人情報保護法に基づき、保有個人データの開示、訂正、利用停止、削除等を請求することができます。
            </p>

            <h3 className="text-lg 3xl:text-xl 4xl:text-2xl font-semibold mt-6 3xl:mt-8 4xl:mt-10 mb-3 3xl:mb-4 4xl:mb-5">開示等の請求方法</h3>
            <p>開示・訂正・削除・利用停止等の請求は、以下の方法で受け付けております。</p>
            <div className="mt-4 3xl:mt-6 4xl:mt-8 space-y-4 3xl:space-y-6 4xl:space-y-8">
              <div>
                <p><strong>メールでの請求:</strong></p>
                <p>e-mail: 8xaidcircles@gmail.com</p>
              </div>
              <div>
                <p><strong>書面での請求:</strong></p>
                <p>書面（簡易書留等）で以下宛先にご送付ください。</p>
                <p>送付先: 〒600-8847 京都府京都市下京区朱雀宝蔵町44番地協栄ビル2階京都朱雀スタジオAR-204</p>
                <p>8X Aid Circles 個人情報開示請求係 宛</p>
              </div>
            </div>

            <h3 className="text-lg 3xl:text-xl 4xl:text-2xl font-semibold mt-6 3xl:mt-8 4xl:mt-10 mb-3 3xl:mb-4 4xl:mb-5">本人確認について</h3>
            <p>ご請求にあたっては、本人確認のため、以下の書類が必要です。</p>
            <div className="mt-4 3xl:mt-6 4xl:mt-8 space-y-4 3xl:space-y-6 4xl:space-y-8">
              <div>
                <p><strong>本人からの請求の場合:</strong></p>
                <ul className="list-disc ml-6 3xl:ml-8 4xl:ml-10 mt-2 3xl:mt-4 4xl:mt-6 space-y-1 3xl:space-y-2 4xl:space-y-3">
                  <li>請求書（氏名、連絡先、請求内容を明記）</li>
                  <li>本人確認書類（運転免許証、マイナンバーカード、パスポート等）の写し</li>
                </ul>
              </div>
              <div>
                <p><strong>代理人からの請求の場合:</strong></p>
                <ul className="list-disc ml-6 3xl:ml-8 4xl:ml-10 mt-2 3xl:mt-4 4xl:mt-6 space-y-1 3xl:space-y-2 4xl:space-y-3">
                  <li>委任状（本人の署名・押印があるもの）</li>
                  <li>代理人の本人確認書類の写し</li>
                  <li>本人の本人確認書類の写し</li>
                </ul>
              </div>
            </div>

            <h3 className="text-lg 3xl:text-xl 4xl:text-2xl font-semibold mt-6 3xl:mt-8 4xl:mt-10 mb-3 3xl:mb-4 4xl:mb-5">開示請求手数料</h3>
            <p>
              情報の開示請求については、開示の有無に関わらず、ご申請時に一件あたり1,000円の事務手数料を申し受けます。
            </p>
            <div className="mt-4 3xl:mt-6 4xl:mt-8">
              <p><strong>お支払方法:</strong></p>
              <ul className="list-disc ml-6 3xl:ml-8 4xl:ml-10 mt-2 3xl:mt-4 4xl:mt-6 space-y-1 3xl:space-y-2 4xl:space-y-3">
                <li>現金書留による送付</li>
                <li>または、当社から請求書を送付いたしますので、指定の方法でお支払いください</li>
              </ul>
            </div>

            <h3 className="text-lg 3xl:text-xl 4xl:text-2xl font-semibold mt-6 3xl:mt-8 4xl:mt-10 mb-3 3xl:mb-4 4xl:mb-5">対応期間</h3>
            <p>
              ご請求を受け付けてから、原則として30日以内に対応いたします。ただし、請求内容が複雑な場合や、調査に時間を要する場合は、対応期間を延長することがあります。その場合は、遅滞なくその旨をご連絡いたします。
            </p>

            <h3 className="text-lg 3xl:text-xl 4xl:text-2xl font-semibold mt-6 3xl:mt-8 4xl:mt-10 mb-3 3xl:mb-4 4xl:mb-5">その他の請求（訂正・削除・利用停止）</h3>
            <p>
              訂正、削除、利用停止等の請求については、手数料は不要です。ただし、本人確認書類の提出は必要となります。
            </p>
          </section>

          <hr className="border-gray-300" />

          {/* 事業者情報 */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">事業者情報</h2>
            <div className="space-y-2 3xl:space-y-3 4xl:space-y-4">
              <p><strong>事業者の氏名（屋号）</strong>: 8X Aid Circles</p>
              <p><strong>事業者の住所</strong>: 京都府京都市下京区朱雀宝蔵町44番地協栄ビル2階京都朱雀スタジオAR-204</p>
              <p><strong>メールアドレス</strong>: 8xaidcircles@gmail.com</p>
            </div>
          </section>

          <hr className="border-gray-300" />

          {/* 制定日・改定日 */}
          <section className="mt-8 3xl:mt-12 4xl:mt-16">
            <p><strong>制定日</strong>: 2025年11月26日</p>
            <p><strong>最終改定日</strong>: 2025年11月28日</p>
          </section>

        </div>
      </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
