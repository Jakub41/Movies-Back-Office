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
console.log("getmovies...");
// Get the movie with category
const getmovies = async category => {
  const movies = await Fetch.get(`/movies/${category}`);
  console.log("movies...", movies);
  return movies;
};
// We get the movie update
function getmovieUpdate(id, name, category, imageUrl, description) {
  H.$1("#_id").value = id;
  H.$1("#name").value = name;
  H.$1("#category").value = category;
  H.$1("#description").value = unescape(description);
  H.$1("#image").value = imageUrl;
}
// We get the category
getCategoryMovies = async categories => {
  let data = [];
  categories.forEach(async category => {
    // Call back to concat movies and category in one
    data.concat(await getmovies(category));
  });

  return data;
};
