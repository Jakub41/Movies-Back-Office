console.log("Add Movies...");

/**
 *
 * ! Add Movies
 * * Method to add a Movies from a form
 * * and POST it to the server API
 *
 * @function addMovieForm
 * @async
 * @param { Strings } name, category, description, image
 *
 */
// Button click on the form
H.$1("#addMoviesForm>.btn").addEventListener("click", async e => {
  e.preventDefault();
  // Values from the form
  const id = H.$1("#_id").value;
  const name = H.$1("#name").value;
  const category = H.$1("#category").value;
  const description = H.$1("#description").value;
  const image = H.$1("#image").value;

  // We call the function to POST the data after the validation
  // We add a new movie or we update a movie
  if (await validateForm(name, description, category, image)) {
    if (id == "" || id == null || id == undefined || isNaN(id)) {
      await addMoviesForm(name, description, category, image);
    } else {
      await updateMoviesForm(id, name, description, category, image);
    }
  }
});

// POST Function
addMoviesForm = async (name, description, category, image) => {
  console.log("Adding...");
  // We create the product to API
  const response = await Fetch.create("/movies/", {
    name: name,
    category: category,
    description: description,
    imageUrl: image
  });
  //Error;
  if (response.status && response.status !== 200) {
    H.$1("#addMoviesForm").reset();
    throw new Error("HTTP status " + response.status);
  }
  // Show Spinner
  showSpinner();
  // Reset the form on complete
  H.$1("#addMoviesForm").reset();
  getAllMovies();
};
