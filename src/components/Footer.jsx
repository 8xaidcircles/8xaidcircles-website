import React from "react";
import Logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-white border-gray-100 py-8 3xl:py-12 4xl:py-16 mt-20 3xl:mt-24 4xl:mt-32">
    <div className="max-w-12xl mx-auto px-4 3xl:px-8 4xl:px-12 5xl:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 3xl:gap-12 4xl:gap-16 text-center md:text-left">
      <div className="lg:ml-20 md:ml-12 ml-6">
        <img
          src={Logo}
          alt="8X Aid Circles"
          className="h-8 md:h-9 lg:h-10 xl:h-10 2xl:h-10 3xl:h-10 4xl:h-12 5xl:h-16 mx-auto md:mx-0 mb-2 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-3 3xl:mb-4 4xl:mb-6"
        />
        <p className="text-gray-600 text-base md:text-base lg:text-base xl:text-lg 2xl:text-lg 3xl:text-lg 4xl:text-xl 5xl:text-2xl leading-relaxed">
          命のもとの平等を目指して、<br />
          助け合いの輪を広げる
        </p>
      </div>

      <div className="space-y-2 3xl:space-y-3 4xl:space-y-4">
        <Link
          to="/privacy-policy"
          className="block text-gray-600 hover:text-purple-600 text-left text-base 3xl:text-lg 4xl:text-xl 5xl:text-2xl"
        >
          プライバシーポリシー
        </Link>
        <Link
          to="/terms-of-service"
          className="block text-gray-600 hover:text-purple-600 text-left text-base 3xl:text-lg 4xl:text-xl 5xl:text-2xl"
        >
          利用規約
        </Link>
        <Link
          to="/contact"
          className="block text-gray-600 hover:text-purple-600 text-left text-base 3xl:text-lg 4xl:text-xl 5xl:text-2xl"
        >
          お問い合わせ
        </Link>
      </div>

      <div className="flex justify-center md:justify-start space-x-4">
        <p className="text-base 3xl:text-lg 4xl:text-xl 5xl:text-2xl leading-relaxed">本サイトは現在一部コンテンツを構築中のため、情報が未整備の箇所やリンク切れが含まれている場合があります。あらかじめご了承ください。
※ This website is currently under development. Some content or links may be incomplete or unavailable.
</p>
      </div>
    </div>
    <p className="text-center text-gray-600 mt-8 3xl:mt-12 4xl:mt-16 text-base 3xl:text-lg 4xl:text-xl 5xl:text-2xl">
      &copy;2025 8X Aid Circles
    </p>
  </footer>
);

export default Footer;
