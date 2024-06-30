const API_KEY = import.meta.env.VITE_NEWS_API_KEY; 

const fetchArticles = async () => {
  try {
    const response = await fetch('https://google-news13.p.rapidapi.com/business?lr=en-US', {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'google-news13.p.rapidapi.com',
        'x-rapidapi-key': API_KEY
      }
    });
    
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
