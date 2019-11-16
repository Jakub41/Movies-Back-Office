// Delete Movie
const deletemovie = async id => {
  await Fetch.remove(`/movies/${id}`);
  // Show Spinner
  showSpinner();
  getAllMovies();
};
