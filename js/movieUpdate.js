// PUT Function
updateMoviesForm = async (id, name, description, category, image) => {
  console.log("Adding...");
  // We update the product to API
  await Fetch.update(`/movies/${id}`, {
    name: name,
    category: category,
    description: description,
    imageUrl: image
  });
  // Show Spinner
  showSpinner();
  // Reset the form on complete
  H.$1("#addMoviesForm").reset();
  getAllMovies();
};
