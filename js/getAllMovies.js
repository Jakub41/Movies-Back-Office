console.log("Get All Movies...");
/**
 * ! Get Movies By Category
 * * Method to GET the data from API
 * * we use the GET exposed from fetchData
 *
 * @function getMovies
 * @async
 * @param { String } URL
 *
*/
const getAllMoviesCategory = async () => {
    // We fetch all Movies GET method
    const movies = await Fetch.get("/movies/");
    //console.log("Movie Categories...", movies);
    getMoviesByCategory(movies);
    // Return the data
    return movies;
};

getMoviesByCategory = async (movies) => {
    const category = await Fetch.get(`${movies}` + "/Action");
}

// Init the function
getAllMoviesCategory();
