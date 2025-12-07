import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components_en/Layout';

const Contact = () => {
  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <title>Contact - 8X Aid Circles</title>
        <meta name="description" content="Contact 8X Aid Circles" />
        <link rel="alternate" hreflang="ja" href="https://8xaidcircles.com/contact" />
        <link rel="alternate" hreflang="en" href="https://8xaidcircles.com/en/contact" />
        <link rel="alternate" hreflang="x-default" href="https://8xaidcircles.com/contact" />
      </Helmet>
      <div className="max-w-12xl w-full mx-auto px-2 sm:px-6 lg:px-8 3xl:px-12 4xl:px-16 5xl:px-20 pt-16 sm:pt-24 md:pt-32 3xl:pt-40 4xl:pt-48 pb-8 sm:pb-12 3xl:pb-16 4xl:pb-20">
        <div className="bg-white rounded-lg sm:rounded-xl 3xl:rounded-2xl shadow-md p-2 sm:p-6 3xl:p-8 4xl:p-12">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdJwekPfycGQARHnU-AYpKmDa5mvcHJbJjWgbPX0Y8KscWfDA/viewform?embedded=true"
            style={{ 
              width: '100%', 
              height: '1300px',
              border: 0
            }}
            className="3xl:h-[1600px] 4xl:h-[2000px] 5xl:h-[2400px]"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Contact"
            allowFullScreen
          >
            Loading...
          </iframe>
        </div>
      </div>
    </Layout>
  );
};

export default Contact; 

