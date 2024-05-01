import React, { useEffect, useState } from "react";

function NewsCard({ article }) {
  const publishedDate = new Date(article.published_at);
  const formattedDate = publishedDate.toLocaleDateString();

  const defaultImageUrl = "src/assets/Edu_Images/default.jpg";
  const isImageUrlValid = (url) => /\.(png|jpg|jpeg)$/i.test(url);
  const imageUrl = isImageUrlValid(article.image_url)
    ? article.image_url
    : defaultImageUrl;

  const redirectToPage = (url) => {
    window.location.href = url;
  };

  return (
    <div className="card w-80 min-w-200 min-h-300 overflow-hidden border border-gray-200 shadow-md">
      <img className="card-img w-full h-3/5 object-cover" src={imageUrl} alt="Article Image" />
      <div className="card-body p-4 text-center">
        <h1 className="card-title text-lg font-bold mb-2">{article.title}</h1>
        <div className="card-details flex justify-between text-sm text-gray-500 mb-2">
          <h5 className="font-medium">{article.news_site || "Unknown Site"}</h5>
          <h5 className="font-medium">{formattedDate || "Unknown Date"}</h5>
        </div>
        <button className="card-btn w-30 text-white bg-black rounded-md py-3 px-4" onClick={() => redirectToPage(article.url)}>
          Full article
        </button>
      </div>
    </div>
  );
}

function NewsPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles/?is_featured=false")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.results);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-20 max-w-1000 overflow-y-auto mt-10 mb-10">
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
}

export default NewsPage;
