import React, { useEffect, useState } from 'react';

function NewsSlider() {
  const [articles, setArticles] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    fetchArticles();
    const intervalId = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % articles.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles/?format=json&is_featured=true');
      const data = await response.json();
      setArticles(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const redirectToPage = (url) => {
    window.location.href = url;
  };

  const renderSlides = () => {
    return articles.map((article, index) => (
      <div key={index} className={`slide ${index === slideIndex ? '' : 'hidden'}`}>
        <img src={article.image_url} alt="Article" className="w-full h-90vh object-cover" />
        <div className="slide-content absolute bottom-20 left-0 right-0 text-center bg-black bg-opacity-50 text-white py-2">
          <h2 className="text-lg font-semibold">{article.title}</h2>
          <button className="mt-2 bg-white text-black py-2 px-4 rounded-lg" onClick={() => redirectToPage(article.url)}>
            Read More
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="slider-container w-full h-90vh overflow-hidden">
      <div className="slider flex transition-transform duration-500 ease-in-out">{renderSlides()}</div>
    </div>
  );
}

export default NewsSlider;
