import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';

const TermsOfService = () => {
  return (
    <Layout>
      <Helmet>
        <html lang="ja" />
        <title>Terms of Service - 8X Aid Circles</title>
        <meta name="description" content="8X Aid Circles Terms of Service" />
        <link rel="alternate" hreflang="ja" href="https://8xaidcircles.com/terms-of-service" />
        <link rel="alternate" hreflang="en" href="https://8xaidcircles.com/en/terms-of-service" />
        <link rel="alternate" hreflang="x-default" href="https://8xaidcircles.com/terms-of-service" />
      </Helmet>
      <div className="bg-white min-h-screen flex-grow">
      <div className="max-w-8xl mx-auto px-4 3xl:px-8 4xl:px-12 5xl:px-16 pt-32 3xl:pt-40 4xl:pt-48 pb-12 3xl:pb-16 4xl:pb-20">
        <h1 className="text-3xl 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl font-bold mb-8 3xl:mb-12 4xl:mb-16">利用規約</h1>
        <div className="space-y-6 3xl:space-y-8 4xl:space-y-10 text-gray-700 text-base 3xl:text-lg 4xl:text-xl 5xl:text-2xl leading-relaxed">

          {/* 運営者 */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">運営者</h2>
            <p>
              本サイト (https://8xaidcircles.com) および当事業者が提供するサービスの運営者は以下のとおりです。
            </p>
            <div className="mt-4 3xl:mt-6 4xl:mt-8 space-y-2 3xl:space-y-3 4xl:space-y-4">
              <p><strong>屋号</strong>: 8X Aid Circles</p>
              <p><strong>住所</strong>: 京都府京都市下京区朱雀宝蔵町44番地協栄ビル2階京都朱雀スタジオAR-204</p>
              <p><strong>お問い合わせ先</strong>: 8xaidcircles@gmail.com</p>
            </div>
            <p className="mt-4 3xl:mt-6 4xl:mt-8">
              本規約内では、上記運営者を「当事業者」と表記します。
            </p>
          </section>

          <hr className="border-gray-300" />

          {/* 第1条 */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">第1条（定義・適用範囲）</h2>
            <p>
              この利用規約（以下「本規約」といいます）は、8X Aid Circles（以下「当事業者」といいます）が提供する以下のサービス（以下総称して「本サービス」といいます）の利用条件を定めるものです。
            </p>
            <p className="mt-4 3xl:mt-6 4xl:mt-8"><strong>対象サービス:</strong></p>
            <ul className="list-disc ml-6 3xl:ml-8 4xl:ml-10 mt-2 3xl:mt-4 4xl:mt-6 space-y-1 3xl:space-y-2 4xl:space-y-3">
              <li>事業サイト (https://8xaidcircles.com)</li>
              <li>検索サイト「8Wheel」 (https://8wheel.jp/)</li>
              <li>その他当事業者が提供するサービス</li>
            </ul>
            <p className="mt-4 3xl:mt-6 4xl:mt-8">
              本規約は、本サービスを利用するすべてのユーザーに適用されます。
            </p>
          </section>

          <hr className="border-gray-300" />

          {/* 第2条 */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">第2条（本規約への同意）</h2>
            <ol className="list-decimal ml-6 3xl:ml-8 4xl:ml-10 space-y-2 3xl:space-y-3 4xl:space-y-4">
              <li>ユーザーは、本サービスを利用することによって、本規約に有効かつ取り消し不能な同意をしたものとみなされます。</li>
              <li>本規約に同意しないユーザーは、本サービスをご利用いただけません。</li>
            </ol>
          </section>

          <hr className="border-gray-300" />

          {/* 第3条 */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">第3条（未成年による利用）</h2>
            <ol className="list-decimal ml-6 3xl:ml-8 4xl:ml-10 space-y-2 3xl:space-y-3 4xl:space-y-4">
              <li>ユーザーが未成年である場合には、法定代理人の同意を得た上で、本サービスを利用してください。</li>
              <li>法定代理人の同意を得ずに本サービスのご利用を開始したユーザーが成年に達した場合、未成年者であった間の利用行為を追認したものとみなします。</li>
            </ol>
          </section>

          <hr className="border-gray-300" />

          {/* 第4条 */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">第4条（コンテンツのご利用）</h2>
            <ol className="list-decimal ml-6 3xl:ml-8 4xl:ml-10 space-y-2 3xl:space-y-3 4xl:space-y-4">
              <li>当事業者は、ユーザーに対し、本サービスが提供する文章、画像、動画、音声、音楽、ソフトウェア、プログラム、コードその他のコンテンツについて、本サービスの利用範囲内における私的な利用を許諾します。</li>
              <li>有償コンテンツについては、当事業者が定める利用料金の支払が完了した場合に、本サービスの利用範囲内における私的な利用を許諾します。これは、譲渡及び再許諾できない、非独占的な利用権です。</li>
              <li>前各項の範囲を超えて本サービスが提供するコンテンツを利用することは一切禁止します。</li>
              <li>理由の如何を問わず、ユーザーが本サービスを利用する権利を失った場合、本サービスの一切のコンテンツの利用ができなくなることを、ユーザーは予め承諾するものとします。</li>
            </ol>
          </section>

          <hr className="border-gray-300" />

          {/* 第5条 */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">第5条（知的財産権）</h2>
            <ol className="list-decimal ml-6 3xl:ml-8 4xl:ml-10 space-y-2 3xl:space-y-3 4xl:space-y-4">
              <li>本サービスおよび本サービスに関連するウェブサイト、ソフトウェア、コンテンツ（文章、画像、動画、プログラム、デザイン、商標等を含みます）に関する一切の知的財産権は、当事業者または当事業者にライセンスを許諾している者に帰属します。</li>
              <li>ユーザーは、本サービスの利用によって、これらの知的財産権の使用許諾を受けるものではありません。</li>
              <li>検索結果として表示される外部ウェブサイトのコンテンツに関する知的財産権は、各ウェブサイトの運営者に帰属します。</li>
            </ol>
          </section>

          <hr className="border-gray-300" />

          {/* 第6条 */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">第6条（検索サービスに関する特則）</h2>

            <h3 className="text-lg 3xl:text-xl 4xl:text-2xl font-semibold mt-6 3xl:mt-8 4xl:mt-10 mb-3 3xl:mb-4 4xl:mb-5">第1項（サービスの内容）</h3>
            <p>
              当事業者が提供する検索サービス（8Wheel）は、ユーザーが入力した検索クエリに基づき、インターネット上の情報を検索し、その結果を表示するものです。
            </p>

            <h3 className="text-lg 3xl:text-xl 4xl:text-2xl font-semibold mt-6 3xl:mt-8 4xl:mt-10 mb-3 3xl:mb-4 4xl:mb-5">第2項（検索結果について）</h3>
            <ol className="list-decimal ml-6 3xl:ml-8 4xl:ml-10 space-y-2 3xl:space-y-3 4xl:space-y-4">
              <li>検索結果は、独自のアルゴリズムまたは第三者の検索エンジンを利用して生成されます。</li>
              <li>検索結果の正確性、完全性、有用性、適時性について、当事業者は一切保証いたしません。</li>
              <li>検索結果として表示されるウェブサイトの内容については、各ウェブサイトの運営者が責任を負うものとし、当事業者は一切の責任を負いません。</li>
              <li>検索結果の表示順位やランキングについて、当事業者は一切保証せず、責任を負いません。</li>
            </ol>

            <h3 className="text-lg 3xl:text-xl 4xl:text-2xl font-semibold mt-6 3xl:mt-8 4xl:mt-10 mb-3 3xl:mb-4 4xl:mb-5">第3項（検索履歴の取扱い）</h3>
            <ol className="list-decimal ml-6 3xl:ml-8 4xl:ml-10 space-y-2 3xl:space-y-3 4xl:space-y-4">
              <li>検索履歴は、サービス改善、統計分析、および広告配信の最適化の目的で収集・利用されることがあります。</li>
              <li>検索履歴の取扱いの詳細については、当事業者のプライバシーポリシーをご確認ください。</li>
            </ol>

            <h3 className="text-lg 3xl:text-xl 4xl:text-2xl font-semibold mt-6 3xl:mt-8 4xl:mt-10 mb-3 3xl:mb-4 4xl:mb-5">第4項（検索結果の収集・分析に関する制限）</h3>
            <p>ユーザーは、以下の行為を行ってはなりません。</p>
            <ol className="list-decimal ml-6 3xl:ml-8 4xl:ml-10 mt-2 3xl:mt-4 4xl:mt-6 space-y-2 3xl:space-y-3 4xl:space-y-4">
              <li>検索結果を自動的に収集、スクレイピング、クローリングする行為</li>
              <li>検索結果のデータを商業目的で分析、利用、再配布する行為</li>
              <li>検索サービスに過度な負荷をかける大量のリクエストを送信する行為</li>
              <li>検索結果を利用して、当事業者の競合サービスを構築する行為</li>
              <li>その他、当事業者が不適切と判断する検索結果の利用</li>
            </ol>

            <h3 className="text-lg 3xl:text-xl 4xl:text-2xl font-semibold mt-6 3xl:mt-8 4xl:mt-10 mb-3 3xl:mb-4 4xl:mb-5">第5項（検索サービスの利用制限）</h3>
            <p>当事業者は、以下の場合、事前通知なく検索サービスの利用を制限または停止できるものとします。</p>
            <ol className="list-decimal ml-6 3xl:ml-8 4xl:ml-10 mt-2 3xl:mt-4 4xl:mt-6 space-y-2 3xl:space-y-3 4xl:space-y-4">
              <li>過度なアクセスや自動化されたクエリの送信が確認された場合</li>
              <li>検索結果の不正な収集や再配布が確認された場合</li>
              <li>その他、当事業者が不適切と判断する利用があった場合</li>
            </ol>
          </section>

          <hr className="border-gray-300" />

          {/* 第7条 */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">第7条（広告の表示）</h2>
            <p>
              当事業者は、本サービスに当事業者または第三者の広告を掲載することができるものとします。
            </p>
          </section>

          <hr className="border-gray-300" />

          {/* 第8条 */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">第8条（禁止事項）</h2>
            <p>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
            <ol className="list-decimal ml-6 3xl:ml-8 4xl:ml-10 mt-4 3xl:mt-6 4xl:mt-8 space-y-2 3xl:space-y-3 4xl:space-y-4">
              <li>法令、裁判所の判決、決定若しくは命令、又は法令上拘束力のある行政措置に違反する行為又はこれらを助長する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>当事業者や第三者の知的財産権を侵害する行為</li>
              <li>当事業者や第三者の肖像権、プライバシー、名誉、その他の権利又は利益を侵害する行為</li>
              <li>当事業者や第三者のサーバーまたはネットワークに過度の負担をかけたり、その正常な作動を妨害する行為</li>
              <li>当事業者のサービスの運営を妨害するおそれのある行為</li>
              <li>不正アクセスをし、またはこれを試みる行為</li>
              <li>逆アセンブル、逆コンパイル、リバースエンジニアリング等によって本サービスのソースコードを解析する行為</li>
              <li>本サービスに接続しているシステムに権限なく不正にアクセスし又は当事業者設備に蓄積された情報を不正に書き換え若しくは消去する行為</li>
              <li>本サービスのウェブサイトやソフトウェアを複製、送信、譲渡、貸与又は改変する行為</li>
              <li>本サービス上のアカウント又はコンテンツを第三者に有償で貸与、譲渡、売買等をする行為</li>
              <li>本サービスによって得られた情報を商業的に利用する行為</li>
              <li>当事業者が意図しない方法によって本サービスに関連して利益を得ることを目的とする行為</li>
              <li>当事業者が許諾しない本サービス上での宣伝、広告、勧誘、または営業行為</li>
              <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
              <li>違法、不正又は不当な目的を持って本サービスを利用する行為</li>
              <li>本サービスの他のユーザーまたはその他の第三者に不利益、損害、不快感を与える行為</li>
              <li>他のユーザーに成りすます行為</li>
              <li>他のユーザーのアカウントを利用する行為</li>
              <li>反社会的勢力に対して直接または間接に利益を供与する行為</li>
              <li>公序良俗に違反する行為</li>
              <li>歩行中、車両運転中、その他本サービスの利用が不適切な状況又は態様において本サービスを利用する行為</li>
              <li>本サービスまたは当事業者ウェブサイトに対して、過度なアクセスやクローリング、スクレイピングを行う行為</li>
              <li>検索結果やサイトコンテンツを、当事業者の許可なく自動的に収集、複製、再配布する行為</li>
              <li>本サービスを通じ、過度に暴力的、わいせつ、差別的、または反社会的な表現を含む情報を送信または投稿する行為</li>
              <li>その他、当事業者が不適切と判断する行為</li>
            </ol>
          </section>

          <hr className="border-gray-300" />

          {/* 第9条 */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">第9条（反社会的勢力の排除）</h2>

            <h3 className="text-lg 3xl:text-xl 4xl:text-2xl font-semibold mt-6 3xl:mt-8 4xl:mt-10 mb-3 3xl:mb-4 4xl:mb-5">第1項（表明保証）</h3>
            <p>ユーザーは、次の各号のいずれか一にも該当しないことを表明し、かつ将来にわたっても該当しないことを表明し、保証するものとします。</p>
            <ol className="list-decimal ml-6 3xl:ml-8 4xl:ml-10 mt-2 3xl:mt-4 4xl:mt-6 space-y-2 3xl:space-y-3 4xl:space-y-4">
              <li>自ら（法人その他の団体にあっては、自らの役員を含みます）が、暴力団、暴力団員、暴力団員でなくなった時から5年を経過しない者、暴力団準構成員、暴力団関係企業、総会屋、社会運動等標ぼうゴロまたは特殊知能暴力集団等その他これらに準じる者（以下総称して「暴力団員等」といいます）であること</li>
              <li>ユーザーが法人その他の団体の場合にあっては、暴力団員等が経営を支配していると認められる関係を有すること</li>
              <li>ユーザーが法人その他の団体の場合にあっては、暴力団員等が経営に実質的に関与していると認められる関係を有すること</li>
              <li>自らもしくは第三者の不正の利益を図る目的または第三者に損害を加える目的をもって取引を行うなど、暴力団員等を利用していると認められる関係を有すること</li>
              <li>暴力団員等に対して資金等を提供し、または便宜を供与するなどの関与をしていると認められる関係を有すること</li>
              <li>ユーザーが法人その他の団体の場合にあっては、自らの役員または自らの経営に実質的に関与している者が暴力団員等と社会的に非難されるべき関係を有すること</li>
            </ol>

            <h3 className="text-lg 3xl:text-xl 4xl:text-2xl font-semibold mt-6 3xl:mt-8 4xl:mt-10 mb-3 3xl:mb-4 4xl:mb-5">第2項（禁止行為）</h3>
            <p>ユーザーは、自らまたは第三者を利用して次の各号のいずれか一にでも該当する行為を行わないことを保証するものとします。</p>
            <ol className="list-decimal ml-6 3xl:ml-8 4xl:ml-10 mt-2 3xl:mt-4 4xl:mt-6 space-y-2 3xl:space-y-3 4xl:space-y-4">
              <li>暴力的な要求行為</li>
              <li>法的な責任を超えた不当な要求行為</li>
              <li>取引に関して、脅迫的な言動をし、または暴力を用いる行為</li>
              <li>風説を流布し、偽計を用い、または威力を用いて、当事業者の信用を毀損し、または当事業者の業務を妨害する行為</li>
              <li>その他前各号に準ずる行為</li>
            </ol>
          </section>

          <hr className="border-gray-300" />

          {/* 第10条 */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">第10条（利用制限）</h2>
            <ol className="list-decimal ml-6 3xl:ml-8 4xl:ml-10 space-y-4 3xl:space-y-6 4xl:space-y-8">
              <li>
                当事業者は、ユーザーが以下のいずれかに該当する場合には、事前の通知なく、ユーザーに対して、本サービスの全部もしくは一部の利用を制限し、またはユーザーとしての登録を抹消することができるものとします。
                <ul className="list-disc ml-6 3xl:ml-8 4xl:ml-10 mt-2 3xl:mt-4 4xl:mt-6 space-y-1 3xl:space-y-2 4xl:space-y-3">
                  <li>本規約のいずれかの条項に違反した場合</li>
                  <li>登録事項に虚偽の事実があることが判明した場合</li>
                  <li>金銭債務の不履行があった場合</li>
                  <li>当事業者からの連絡に対し、相当の期間が経過しても返答がない場合</li>
                  <li>最終のご利用日から相当期間、本サービスのご利用がない場合</li>
                  <li>反社会的勢力等であるか、反社会的勢力等との何らかの交流若しくは関与を行っていると当事業者が判断した場合</li>
                  <li>その他、当事業者が本サービスの利用を適当でないと判断した場合</li>
                </ul>
              </li>
              <li>当事業者は、本条に基づき当事業者が行った行為によりユーザーに生じた損害について、一切の責任を負いません。</li>
            </ol>
          </section>

          <hr className="border-gray-300" />

          {/* 第11条 */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">第11条（本サービスの提供の停止）</h2>
            <ol className="list-decimal ml-6 3xl:ml-8 4xl:ml-10 space-y-4 3xl:space-y-6 4xl:space-y-8">
              <li>
                当事業者は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                <ul className="list-disc ml-6 3xl:ml-8 4xl:ml-10 mt-2 3xl:mt-4 4xl:mt-6 space-y-1 3xl:space-y-2 4xl:space-y-3">
                  <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                  <li>地震、落雷、火災、停電、天災またはウィルスの蔓延などの不可抗力により、本サービスの提供が困難となった場合</li>
                  <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                  <li>その他、当事業者が本サービスの提供が困難と判断した場合</li>
                </ul>
              </li>
              <li>当事業者は、この場合にユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。</li>
            </ol>
          </section>

          <hr className="border-gray-300" />

          {/* 第12条 */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">第12条（保証の否認）</h2>
            <p>
              当事業者は、本サービスや本サービスが提供するコンテンツに、システムバグや第三者の権利侵害が含まれないことを保証するものではありません。また、安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性を保証するものでもありません。
            </p>
          </section>

          <hr className="border-gray-300" />

          {/* 第13条 */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">第13条（免責）</h2>

            <h3 className="text-lg 3xl:text-xl 4xl:text-2xl font-semibold mt-6 3xl:mt-8 4xl:mt-10 mb-3 3xl:mb-4 4xl:mb-5">第1項（一般的免責）</h3>
            <ol className="list-decimal ml-6 3xl:ml-8 4xl:ml-10 space-y-2 3xl:space-y-3 4xl:space-y-4">
              <li>当事業者は、本サービスに関してユーザーに生じたあらゆる損害について一切の責任を負いません。ただし、本サービスに関する当事業者とユーザーとの間の契約（本規約を含みます）が消費者契約法に定める消費者契約となる場合、この免責規定は適用されません。</li>
              <li>消費者契約に該当する場合であっても、当事業者は、当事業者の過失（重過失を除きます）によってユーザーに生じた損害のうち、ユーザーに直接かつ現実に発生した損害についてのみ賠償責任を負うものとし、また、その賠償額は、本サービスの利用料金の直近1ヶ月分または金1万円のいずれか低い方を上限とします。</li>
            </ol>

            <h3 className="text-lg 3xl:text-xl 4xl:text-2xl font-semibold mt-6 3xl:mt-8 4xl:mt-10 mb-3 3xl:mb-4 4xl:mb-5">第2項（検索サービスに関する免責）</h3>
            <ol className="list-decimal ml-6 3xl:ml-8 4xl:ml-10 space-y-2 3xl:space-y-3 4xl:space-y-4">
              <li>検索結果の表示内容や順位について、当事業者は一切保証せず、責任を負いません。</li>
              <li>検索結果から遷移した外部サイトでの取引、トラブル、損害について、当事業者は一切の責任を負いません。</li>
              <li>検索結果に表示される広告について、当事業者は広告内容の正確性を保証せず、広告主との取引について一切の責任を負いません。</li>
            </ol>

            <h3 className="text-lg 3xl:text-xl 4xl:text-2xl font-semibold mt-6 3xl:mt-8 4xl:mt-10 mb-3 3xl:mb-4 4xl:mb-5">第3項（外部リンクについて）</h3>
            <p>
              本サービスには、第三者が運営するウェブサイトへのリンクが含まれる場合があります。当事業者は、リンク先のウェブサイトの内容について、一切の責任を負いません。
            </p>

            <h3 className="text-lg 3xl:text-xl 4xl:text-2xl font-semibold mt-6 3xl:mt-8 4xl:mt-10 mb-3 3xl:mb-4 4xl:mb-5">第4項（広告について）</h3>
            <p>
              本サービスには、当事業者または第三者の広告が表示されることがあります。広告の内容について、当事業者は一切の責任を負いません。
            </p>
          </section>

          <hr className="border-gray-300" />

          {/* 第14条 */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">第14条（サービス内容の変更）</h2>
            <p>
              当事業者は、ユーザーに通知することなく、本サービスの内容を変更したり、本サービスの提供を中止、終了することができるものとします。当事業者は、これによってユーザーに生じた損害について一切の責任を負いません。
            </p>
          </section>

          <hr className="border-gray-300" />

          {/* 第15条 */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">第15条（利用規約の変更）</h2>
            <ol className="list-decimal ml-6 3xl:ml-8 4xl:ml-10 space-y-2 3xl:space-y-3 4xl:space-y-4">
              <li>当事業者は、ユーザーに通知することなく、いつでも本規約を変更することができるものとします。</li>
              <li>変更後の本規約は、当事業者ウェブサイトに掲示された時点から効力を生じるものとします。</li>
              <li>本規約の変更後、本サービスの利用を継続したユーザーは、変更後の本規約に同意したものとみなします。</li>
            </ol>
          </section>

          <hr className="border-gray-300" />

          {/* 第16条 */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">第16条（個人情報の取扱い）</h2>
            <p>
              本サービスの利用によって取得するユーザーの個人情報については、当事業者のプライバシーポリシーに従い適切に取り扱うものとします。
            </p>
          </section>

          <hr className="border-gray-300" />

          {/* 第17条 */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">第17条（通知または連絡）</h2>
            <ol className="list-decimal ml-6 3xl:ml-8 4xl:ml-10 space-y-2 3xl:space-y-3 4xl:space-y-4">
              <li>ユーザーと当事業者との間の通知または連絡は、当事業者の定める方法によって行うものとします。</li>
              <li>当事業者は、ユーザーから、当事業者が別途定める方式に従った変更届け出がない限り、現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い、これらは、発信時にユーザーへ到達したものとみなします。</li>
            </ol>
          </section>

          <hr className="border-gray-300" />

          {/* 第18条 */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">第18条（権利義務の譲渡）</h2>
            <p>
              ユーザーは、当事業者の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。
            </p>
          </section>

          <hr className="border-gray-300" />

          {/* 第19条 */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">第19条（事業譲渡）</h2>
            <p>
              当事業者は本サービスにかかる事業を他社に事業譲渡（事業譲渡、会社分割その他事業が移転するあらゆる場合を含みます）した場合には、当該事業譲渡に伴い利用契約上の地位、本規約に基づく権利及び義務並びにユーザーの情報を当該事業譲渡の譲受人に譲渡することができるものとします。ユーザーは、かかる譲渡につき予め同意したものとみなします。
            </p>
          </section>

          <hr className="border-gray-300" />

          {/* 第20条 */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">第20条（適用関係）</h2>
            <ol className="list-decimal ml-6 3xl:ml-8 4xl:ml-10 space-y-2 3xl:space-y-3 4xl:space-y-4">
              <li>本規約は、ユーザーと当事業者との間の本サービスの利用に関わる一切の関係に適用されるものとします。</li>
              <li>当事業者は本サービスに関し、本規約のほか、ご利用にあたってのルールを定めることがあります。これらのルールは、その名称のいかんに関わらず、本規約の一部を構成するものとします。</li>
              <li>本規約がこれらのルールと矛盾する場合には、これらのルールが優先して適用されるものとします。</li>
            </ol>
          </section>

          <hr className="border-gray-300" />

          {/* 第21条 */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">第21条（分離可能性）</h2>
            <p>
              本規約のいずれかの条項又はその一部が無効又は執行不能と判断された場合であっても、当該判断は他の部分に影響を及ぼさず、本規約の残りの部分は、引き続き有効かつ執行力を有するものとします。
            </p>
          </section>

          <hr className="border-gray-300" />

          {/* 第22条 */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">第22条（お問い合わせ）</h2>
            <p>本規約に関するお問い合わせは、下記までご連絡ください。</p>
            <div className="mt-4 3xl:mt-6 4xl:mt-8 space-y-2 3xl:space-y-3 4xl:space-y-4">
              <p><strong>事業者名</strong>: 8X Aid Circles</p>
              <p><strong>所在地</strong>: 京都府京都市下京区朱雀宝蔵町44番地協栄ビル2階京都朱雀スタジオAR-204</p>
              <p><strong>メールアドレス</strong>: 8xaidcircles@gmail.com</p>
            </div>
          </section>

          <hr className="border-gray-300" />

          {/* 第23条 */}
          <section>
            <h2 className="text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl font-semibold mb-4 3xl:mb-6 4xl:mb-8">第23条（準拠法・裁判管轄）</h2>
            <ol className="list-decimal ml-6 3xl:ml-8 4xl:ml-10 space-y-2 3xl:space-y-3 4xl:space-y-4">
              <li>本規約の解釈にあたっては、日本法を準拠法とします。</li>
              <li>本サービスに関して紛争が生じた場合には、当事業者の本店所在地を管轄する地方裁判所を専属的合意管轄とします。</li>
            </ol>
          </section>

          <hr className="border-gray-300" />

          {/* 制定日・改定日 */}
          <section className="mt-8 3xl:mt-12 4xl:mt-16">
            <p><strong>制定日</strong>: 2025年11月28日</p>
            <p><strong>最終改定日</strong>: 2025年11月28日</p>
          </section>

        </div>
      </div>
      </div>
    </Layout>
  );
};

export default TermsOfService;
