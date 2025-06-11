import React from 'react';
import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 pt-32 pb-12">
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdJwekPfycGQARHnU-AYpKmDa5mvcHJbJjWgbPX0Y8KscWfDA/viewform?embedded=true"
            width="640"
            height="1100"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="問い合わせ"
          >
            読み込んでいます...
          </iframe>
        </div>
      </div>
    </Layout>
  );
};

export default Contact; 