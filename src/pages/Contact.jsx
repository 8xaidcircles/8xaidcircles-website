import React from 'react';
import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout>
      <div className="max-w-6xl w-full mx-auto px-2 sm:px-6 lg:px-8 pt-16 sm:pt-24 md:pt-32 pb-8 sm:pb-12">
        <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-2 sm:p-6">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdJwekPfycGQARHnU-AYpKmDa5mvcHJbJjWgbPX0Y8KscWfDA/viewform?embedded=true"
            style={{ width: '100%', height: '1300px', border: 0 }}
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="問い合わせ"
            allowFullScreen
          >
            読み込んでいます...
          </iframe>
        </div>
      </div>
    </Layout>
  );
};

export default Contact; 