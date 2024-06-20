const API_KEY = "37de4e32874b4dd6b4aa98518f117668";
const BASE_URL = "https://newsapi.org/v2";

const fetchArticles = async (category, page) => {
    const url = `${BASE_URL}/top-headlines?country=us&category=${category}&page=${page}&apiKey=${API_KEY}`;
    const response = await fetch(url);
    if(!response.ok){
        throw new Error("failed to fetch articles");
    }

    return response.json();
}

export default fetchArticles;