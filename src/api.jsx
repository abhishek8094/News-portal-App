const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2";

const fetchArticles = async (category, page) => {
  const url = `${BASE_URL}/top-headlines?country=in&category=${category}&page=${page}&apiKey=${API_KEY}`
  // console.log(url)

  try {
    const response = await fetch(url);
    // console.log(response)
    if (!response.ok) {
      throw new Error("Failed to fetch articles");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default fetchArticles;
