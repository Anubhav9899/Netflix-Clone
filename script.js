// Your TMDB API key
const apiKey = "b04a39eee7ea1ecc3daa449b225db684"; // Replace with your TMDB API Key
const apiUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;

// Fetch trending movies from TMDB
async function fetchMovies() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const trendingMovies = data.results;

    // Call function to display movies
    displayMovies(trendingMovies);
  } catch (error) {
    console.error("Error fetching data from TMDB API:", error);
  }
}

// Function to display movies in the movie row
function displayMovies(movies) {
  const trendingRow = document.getElementById("trending");
  movies.forEach((movie) => {
    const movieDiv = document.createElement("div");
    movieDiv.classList.add("movie");
    movieDiv.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
        `;
    trendingRow.appendChild(movieDiv);
  });
}

// Fetch and display movies when the page loads
fetchMovies();
