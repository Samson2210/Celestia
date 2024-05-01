//For home page : Featured News
import React from 'react';

const NewsBox = () => {

    function fetchAndDisplayArticles(startIndex) {
        fetch(
            "https://api.spaceflightnewsapi.net/v4/articles/?format=json&is_featured=true"
        )
            .then((response) => response.json())
            .then((data) => {

                const totalArticles = data.results.length;
                console.log("Total number of articles:", totalArticles);

                startIndex = startIndex % totalArticles;

                const article1 = data.results[startIndex];
                const article2 = data.results[(startIndex + 1) % totalArticles];

                const defaultImageUrl = "default.jpg";
                function isImageUrlValid(url) {
                    return /\.(png|jpg|jpeg)$/i.test(url);
                }

                document.getElementById("card-img1").src = isImageUrlValid(article1.image_url) ? article1.image_url : defaultImageUrl;
                document.getElementById("title1").innerText = article1.title;
                document.getElementById("site1").innerText = article1.news_site;
                document.getElementById("article-link1").onclick = function () {
                    window.location.href = article1.url;
                }
                const publishedDate1 = new Date(article1.published_at);
                const formattedDate1 = publishedDate1.toLocaleDateString();
                document.getElementById("date1").innerText = formattedDate1;

                document.getElementById("card-img2").src = isImageUrlValid(article2.image_url) ? article2.image_url : defaultImageUrl;
                document.getElementById("title2").innerText = article2.title;
                document.getElementById("site2").innerText = article2.news_site;
                document.getElementById("article-link2").onclick = function () {
                    window.location.href = article2.url;
                }
                const publishedDate2 = new Date(article2.published_at);
                const formattedDate2 = publishedDate2.toLocaleDateString();
                document.getElementById("date2").innerText = formattedDate2;

            })
            .catch((error) => console.error("Error fetching data:", error));
    }

    fetchAndDisplayArticles(0);

    setInterval(() => {
        fetchAndDisplayArticles((startIndex += 2));
    }, 6500); //6500=6.5 secs

    let startIndex = 2;

    return (
        <div class="mt-20 mb-60 mx-4">
            <h1 class="text-4xl font-bold mb-8 pb-8">Featured News</h1>
            <div className="flex justify-center">

                <div className="w-2/5 min-w-80 min-h-cardHeight max-h-cardHeight bg-white border border-gray-200 rounded-md shadow-md overflow-hidden mx-4">
                    <img className="w-full h-3/5 object-cover" id="card-img1" src="src/assets/Edu_Images/default.jpg" alt="Card Image" />
                    <div className="p-4">
                        <h1 className="text-lg font-bold mb-2" id="title1">Title</h1>
                        <div className="flex justify-between text-sm text-gray-500 mb-2">
                            <h5 className="font-medium" id="site1">Site</h5>
                            <h5 className="font-medium" id="date1">Published on</h5>
                        </div>
                        <button className="bg-black text-white rounded-md px-4 py-2 mx-auto block" id="article-link1" onclick="redirectToPage()">Full article</button>
                    </div>
                </div>

                <div className="w-2/5 min-w-80 min-h-cardHeight max-h-cardHeight bg-white border border-gray-200 rounded-md shadow-md overflow-hidden mx-4">
                    <img className="w-full h-3/5 object-cover" id="card-img2" src="src/assets/Edu_Images/default.jpg" alt="Card Image" />
                    <div className="p-4">
                        <h1 className="text-lg font-bold mb-2" id="title2">Title</h1>
                        <div className="flex justify-between text-sm text-gray-500 mb-2">
                            <h5 className="font-medium" id="site2">Site</h5>
                            <h5 className="font-medium" id="date2">Published on</h5>
                        </div>
                        <button className="bg-black text-white rounded-md px-4 py-2 mx-auto block" id="article-link2" onclick="redirectToPage()">Full article</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsBox