import React from "react";
import Logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-white border-gray-100 py-8 mt-20">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
      <div>
        <img
          src={Logo}
          alt="8X Aid Circles"
          className="h-8 mx-auto md:mx-0 mb-2"
        />
        <p className="text-gray-600">
          命のもとの平等を目指して、<br />
          助け合いの輪を広げる
        </p>
      </div>

      <div className="space-y-2">
        <Link
          to="/privacy-policy"
          className="block text-gray-600 hover:text-purple-600 text-left"
        >
          プライバシーポリシー
        </Link>
        <Link
          to="/terms-of-service"
          className="block text-gray-600 hover:text-purple-600 text-left"
        >
          利用規約
        </Link>
        <Link
          to="/contact"
          className="block text-gray-600 hover:text-purple-600 text-left"
        >
          お問い合わせ
        </Link>
      </div>

      <div className="flex justify-center md:justify-start space-x-4">
        <p>本サイトは現在一部コンテンツを構築中のため、情報が未整備の箇所やリンク切れが含まれている場合があります。あらかじめご了承ください。
※ This website is currently under development. Some content or links may be incomplete or unavailable.
</p>
      </div>
    </div>
    <p className="text-center text-gray-600 mt-8">
      &copy;2025 8X Aid Circles
    </p>
  </footer>
);

export default Footer;
