const getAllMovies = async () => {
  const categories = await getCategories();
  showSpinner();
  categories.forEach(async category => {
    const movies = await getmovies(category);
    await showMovies(movies, category);
  });
};

showMovies = async (movies, category) => {
  //action
  let moviesSection = H.$1("#renderMovies");
  let categoryHeading = H.createNode("h1");
  categoryHeading.textContent = category;
  moviesSection.appendChild(categoryHeading);
  let sectionRender = H.createNode("section");
  let card = moviesSection.appendChild(sectionRender);
  let render = H.createNode("div");
  render.className = "row py-4";
  let movieDiv = card.appendChild(render);

  if (movies.length > 0) {
    await showAllMovies(movies, movieDiv);
  }
};
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
