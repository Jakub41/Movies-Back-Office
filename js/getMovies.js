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
const getmovies = async category => {
  const movies = await Fetch.get(`/movies/${category}`);
  console.log("movies...", movies);
  return movies;
};

function getmovieUpdate(id, name, category, imageUrl, description) {
  H.$1("#_id").value = id;
  H.$1("#name").value = name;
  H.$1("#category").value = category;
  H.$1("#description").value = unescape(description);
  H.$1("#image").value = imageUrl;
}

getCategoryMovies = async categories => {
  let data = [];
  categories.forEach(async category => {
    data.concat(await getmovies(category));
  });

  return data;
};
