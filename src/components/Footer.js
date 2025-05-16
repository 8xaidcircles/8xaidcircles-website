import React from "react";

const Footer = () => (
  <footer className="bg-white border-t border-gray-100 py-8 mt-20">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
      <div>
        <img
          src="https://static.wixstatic.com/media/2d6f7a_aae02a50020e41f19251f6f862ddffbb~mv2.png"
          alt="8X Aid Circles"
          className="h-8 mx-auto md:mx-0 mb-2"
        />
        <p className="text-gray-600">
          命のもとの平等を目指して、<br />
          助け合いの輪を広げる
        </p>
      </div>

      <div className="space-y-2">
        <button
          type="button"
          disabled
          className="block text-gray-600 hover:text-purple-600 cursor-not-allowed text-left"
        >
          プライバシーポリシー
        </button>
        <button
          type="button"
          disabled
          className="block text-gray-600 hover:text-purple-600 cursor-not-allowed text-left"
        >
          利用規約
        </button>
        <button
          type="button"
          disabled
          className="block text-gray-600 hover:text-purple-600 cursor-not-allowed text-left"
        >
          お問い合わせ
        </button>
      </div>

      <div className="flex justify-center md:justify-start space-x-4">
        <button
          type="button"
          disabled
          aria-label="LinkedIn"
          className="text-gray-600 hover:text-purple-600 cursor-not-allowed"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 12L12 22L22 12L12 2Z" />
          </svg>
        </button>
        <button
          type="button"
          disabled
          aria-label="Pinterest"
          className="text-gray-600 hover:text-purple-600 cursor-not-allowed"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 12L12 22L22 12L12 2Z" />
          </svg>
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
