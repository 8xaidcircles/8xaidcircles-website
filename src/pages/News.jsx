// pages/News.tsx
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Layout from "../components/Layout";
import useIntersectionObserver, { useImageFadeUp, useTextAnimation } from "../hooks/useIntersectionObserver";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function News() {
  const navigate = useNavigate();
  const newsRef = useIntersectionObserver();
  const titleRef = useIntersectionObserver();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    axios
      .get("https://8xaidcircles.microcms.io/api/v1/news", {
        headers: {
          "X-MICROCMS-API-KEY": "31wRT5nYw3aSAMwrYQwXKMZEi1WbUD4SIoWq",
        },
      })
      .then((res) => {
        setNews(res.data.contents);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("ニュースの取得に失敗しました。");
        setLoading(false);
      });
  }, []);

  const handleClick = (id) => {
    navigate(`/news/${id}`);
  };

  return (
    <Layout>
      <Helmet>
        <title>News - 8X Aid Circles</title>
        <meta name="description" content="8X Aid Circles - A Circle of Support, A World of Hope" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
      </Helmet>
      <div className="
        bg-[linear-gradient(135deg,#E6E6FA,#FFD1DC,#FFC0CB,#FAFAD2,#B0E0E6,#ADD8E6,white_85%)] 
        bg-[length:600%_600%] bg-[position:0%_0%] 
        animate-[gradientAnimation_18s_ease-in-out_infinite] 
        font-['Open_Sans'] min-h-screen">
        {/* Section 1 */}
        <section className="min-h-screen flex flex-col justify-center items-center w-full px-4">
      
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center opacity-0" ref={titleRef}>
              <span className="
                bg-[linear-gradient(to_right,#833ab4,#fd1d1d,#fcb045)]
                bg-[length:200%_100%]
                bg-clip-text text-transparent
                animate-[AnimationTitle_5s_ease_infinite]"> News</span>
            </h1>
        
        </section>
        {/* Section 2 */}
        <section className="min-h-screen flex flex-col justify-center items-center py-16 sm:py-24 md:py-32 opacity-0" ref={newsRef}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
            {loading && <p className="text-center text-gray-500 text-sm sm:text-base">読み込み中...</p>}
            {error && <p className="text-center text-red-500 text-sm sm:text-base">{error}</p>}
            <ul className="space-y-4 sm:space-y-6 md:space-y-8">
              {news.map((item) => (
                <li
                  key={item.id}
                  className="bg-[#f6f8fa] rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 flex flex-col cursor-pointer transition-shadow hover:shadow-md"
                  onClick={() => handleClick(item.id)}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-4 lg:space-x-8 w-full">
                    <span className="text-base sm:text-lg md:text-xl font-semibold text-[#222] w-24 sm:w-32 mb-2 md:mb-0">{item.publishedAt.slice(0, 10).replace(/-/g, ".")}</span>
                    <span className="inline-block border border-[#1da1f2] text-[#1da1f2] rounded-full px-3 sm:px-4 md:px-6 py-1 text-sm sm:text-base font-semibold mr-2 sm:mr-4 mb-2 md:mb-0 whitespace-nowrap">お知らせ</span>
                    <span className="text-base sm:text-lg md:text-xl text-[#222] font-medium flex-1">{item.title}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  );
}
