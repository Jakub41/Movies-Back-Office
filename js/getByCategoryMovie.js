// Wee get all the movies based on category
const getAllMovies = async () => {
  // We get the category array
  const categories = await getCategories();
  // we show loader
  showSpinner();
  // We loop the array
  categories.forEach(async category => {
    const movies = await getmovies(category);
    await showMovies(movies, category);
  });
};
// We show the movies by category
showMovies = async (movies, category) => {
  // We select and add the movies to the DOM
  let moviesSection = H.$1("#renderMovies");
  let categoryHeading = H.createNode("h1");
  // The Category title we pass the category of the movie
  categoryHeading.textContent = category;
  moviesSection.appendChild(categoryHeading);
  let sectionRender = H.createNode("section");
  let card = moviesSection.appendChild(sectionRender);
  let render = H.createNode("div");
  render.className = "row py-4";
  let movieDiv = card.appendChild(render);
  // Movies > 0 we show them 
  if (movies.length > 0) {
    await showAllMovies(movies, movieDiv);
  } else {
    movieDiv.innerText = "Sorry, no movies to show at the moment";
  }
};
// We show all movies by category
showAllMovies = async (allMovies, movieCard) => {
  movieCard.innerHTML = allMovies
    .map(
      movie => `
        <div class="col-md-3 py-2">
        <div class="card bg-dark text-white bg-dark h-100 d-flex flex-column" id="${movie._id}">
            <img class="card-img-top" src="${movie.imageUrl}" alt="product">
            <div class="card-block">
              <h4 class="card-title">${movie.name}</h4>
              <p class="card-text">${movie.description}</p>
              <a href="/details" class="btn btn-outline-light btn-sm">Details</a>
            </div>
        </div>
    </div>   
  `
    )
    .join("");
};

getAllMovies();
