const API_KEY =  "44b0a9c64c0f483e92dd8944f2bcd566";
const BASE_URL = "https://newsapi.org/v2";

const fetchdata = async (category, page) => {
    const url = `${BASE_URL}/top-headlines?country=us&category=${category}&page=${page}&apiKey=${API_KEY}`;
    const response = await fetch(url);
    console.log(response);
    if(!response.ok){
        throw new Error("failed to fetch articles");
    }

    return response.json();
}

export default fetchdata;