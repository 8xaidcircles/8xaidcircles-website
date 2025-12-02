import React from "react";
import Logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-white border-gray-100 py-8 3xl:py-12 4xl:py-16">
    <div className="max-w-12xl mx-auto px-4 3xl:px-8 4xl:px-12 5xl:px-16">
      {/* 3列グリッドレイアウト */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 3xl:gap-12 4xl:gap-16 mb-8 3xl:mb-12 4xl:mb-16">
        {/* 1列目: ロゴとスローガン */}
        <div className="flex flex-col items-start">
          <img
            src={Logo}
            alt="8X Aid Circles"
            className="h-8 md:h-9 lg:h-10 xl:h-10 2xl:h-10 3xl:h-10 4xl:h-12 5xl:h-16 mb-2 md:mb-3 3xl:mb-4 4xl:mb-6"
          />
          <p className="text-gray-600 text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-lg 3xl:text-lg 4xl:text-xl 5xl:text-2xl leading-relaxed text-left">
            Aid Without Borders,<br />
            Hope Without Limits.
          </p>
        </div>

        {/* 2列目: 住所と連絡先 */}
        <div className="flex flex-col items-start">
          <p className="text-gray-600 text-xs sm:text-xs lg:text-sm xl:text-base 2xl:text-base 3xl:text-base 4xl:text-lg 5xl:text-xl leading-relaxed text-left">
            <strong>8X Aid Circles</strong><br />
            〒600-8847 京都府京都市下京区<br />
            朱雀宝蔵町44番地協栄ビル2階<br />
            京都朱雀スタジオAR-204<br />
          </p>
        </div>

        {/* 3列目: リンク */}
        <div className="flex flex-col items-start space-y-2 3xl:space-y-3 4xl:space-y-4">
          <p className="text-gray-600 text-xs sm:text-xs lg:text-sm xl:text-base 2xl:text-base 3xl:text-base 4xl:text-lg 5xl:text-xl font-semibold">
            リンク
          </p>
          <Link
            to="/privacy-policy"
            className="text-gray-600 hover:text-purple-600 text-xs sm:text-xs lg:text-sm xl:text-base 2xl:text-base 3xl:text-base 4xl:text-lg 5xl:text-xl"
          >
            プライバシーポリシー
          </Link>
          <Link
            to="/terms-of-service"
            className="text-gray-600 hover:text-purple-600 text-xs sm:text-xs lg:text-sm xl:text-base 2xl:text-base 3xl:text-base 4xl:text-lg 5xl:text-xl"
          >
            利用規約
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 hover:text-purple-600 text-xs sm:text-xs lg:text-sm xl:text-base 2xl:text-base 3xl:text-base 4xl:text-lg 5xl:text-xl"
          >
            問い合わせ
          </Link>
        </div>
      </div>

      {/* 著作権表示 */}
      <div className="border-t border-gray-200 pt-6 3xl:pt-8 4xl:pt-10">
        <p className="text-gray-600 text-xs sm:text-sm md:text-base 3xl:text-lg 4xl:text-xl 5xl:text-2xl text-center">
          &copy;2025 8X Aid Circles
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
