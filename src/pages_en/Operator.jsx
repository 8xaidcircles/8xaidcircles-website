import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components_en/Layout';

const Operator = () => {
  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <title>Operator - 8X Aid Circles</title>
        <meta name="description" content="8X Aid Circles Operator Information" />
        <link rel="alternate" hreflang="ja" href="https://8xaidcircles.com/operator" />
        <link rel="alternate" hreflang="en" href="https://8xaidcircles.com/en/operator" />
        <link rel="alternate" hreflang="x-default" href="https://8xaidcircles.com/operator" />
      </Helmet>
      <div className="bg-white min-h-screen flex-grow">
        <div className="max-w-8xl mx-auto px-4 3xl:px-8 4xl:px-12 5xl:px-16 pt-32 3xl:pt-40 4xl:pt-48 pb-12 3xl:pb-16 4xl:pb-20">
          <h1 className="text-3xl 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl font-bold mb-8 3xl:mb-12 4xl:mb-16">Operator Information</h1>
          <div className="space-y-6 3xl:space-y-8 4xl:space-y-10 text-gray-700 text-base 3xl:text-lg 4xl:text-xl 5xl:text-2xl leading-relaxed">
            <section>
              <p>
                Operator information for this website (https://8xaidcircles.com) and related services is as follows.
              </p>
              <div className="mt-6 3xl:mt-8 4xl:mt-10 space-y-3 3xl:space-y-4 4xl:space-y-5">
                <p><strong>Trade Name</strong>: 8X Aid Circles</p>
                <p><strong>Business Owner</strong>: Will be disclosed without delay upon request</p>
                <p><strong>Business Activities</strong>: Technology and brand businesses</p>
                <p>
                  <strong>Address</strong>: Kyoei Building 2F, Kyoto Suzaku Studio AR-204, 44 Suzaku Hozocho, Shimogyo-ku, Kyoto 600-8847, Japan
                </p>
                <p>
                  <strong>Contact</strong>:{' '}
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
                Disclosure of Business Owner Information
              </h2>
              <p>
                Information regarding the business owner will be disclosed without delay, in writing or by electronic means (such as email), upon request. We maintain arrangements to provide such information without delay when a request is received.
              </p>
              <p className="mt-4 3xl:mt-6 4xl:mt-8">
                Please send requests to the email address above (8xaidcircles@gmail.com).
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Operator;
