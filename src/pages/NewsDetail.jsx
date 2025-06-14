import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import useIntersectionObserver, { useImageFadeUp, useTextAnimation } from "../hooks/useIntersectionObserver";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const newsRef = useIntersectionObserver();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`https://8xaidcircles.microcms.io/api/v1/news/${id}`, {
        headers: {
          "X-MICROCMS-API-KEY": "31wRT5nYw3aSAMwrYQwXKMZEi1WbUD4SIoWq",
        },
      })
      .then((res) => {
        setNews(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("ニュースの取得に失敗しました。");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center text-gray-500">読み込み中...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!news) return <div className="text-center text-gray-500">ニュースが見つかりません。</div>;

  return (
    <Layout>
      <div className="
      min-h-screen 
      bg-[linear-gradient(135deg,#E6E6FA,#FFD1DC,#FFC0CB,#FAFAD2,#B0E0E6,#ADD8E6,white_85%)] 
      bg-[length:600%_600%] bg-[position:0%_0%] 
      animate-[gradientAnimation_18s_ease-in-out_infinite] 
      font-['Open_Sans']">
        <section className="min-h-screen flex flex-col justify-center items-center py-16 sm:py-24 md:py-32 opacity-0" ref={newsRef}>
          <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10 bg-white rounded-xl sm:rounded-2xl shadow-lg">
           
              <h1
                className="
                  text-xs
                  sm:text-2xl
                  md:text-3xl
                  lg:text-4xl
                  font-bold
                  text-center
                  mb-6 sm:mb-8
                  opacity-0
                "
              >
                <span className="
                  bg-[linear-gradient(to_right,#833ab4,#fd1d1d,#fcb045)]
                  bg-[length:200%_100%]
                  bg-clip-text text-transparent
                  animate-[AnimationTitle_5s_ease_infinite]">
                  News Detail
                </span>
              </h1>
       
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 lg:space-x-8 w-full mb-6 sm:mb-8">
              <span
                className="
                  text-xs
                  sm:text-base
                  md:text-lg
                  font-semibold
                  text-[#222]
                  w-24
                  sm:w-32
                  mb-2
                  md:mb-0
                "
              >
                {news.publishedAt.slice(0, 10).replace(/-/g, ".")}
              </span>
              <span
                className="
                  inline-block
                  border
                  border-[#1da1f2]
                  text-[#1da1f2]
                  rounded-full
                  px-3
                  sm:px-4
                  md:px-6
                  py-1
                  text-xs
                  sm:text-base
                  font-semibold
                  mr-2
                  sm:mr-4
                  mb-2
                  md:mb-0
                  whitespace-nowrap
                "
              >
                お知らせ
              </span>
            </div>
            <h2
              className="
                text-xs
                sm:text-xl
                md:text-2xl
                font-bold
                text-[#222]
                mb-6 sm:mb-8
              "
            >
              {news.title}
            </h2>
            <div
              className="
                text-gray-700
                text-xs
                sm:text-base
                md:text-lg
              "
              dangerouslySetInnerHTML={{ __html: news.content }}
            />
            <button
              onClick={() => navigate("/news")}
              className="
                mt-6
                sm:mt-8
                px-4
                sm:px-6
                py-2
                sm:py-3
                bg-[#1da1f2]
                text-white
                rounded-full
                hover:bg-[#1a8cd8]
                transition-colors
                text-xs
                sm:text-base
              "
            >
              ニュース一覧に戻る
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
} 