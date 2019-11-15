getCategoryAction = async () => {
  const actionMovies = await Fetch.get("/movies/Action");
  console.log(actionMovies);
  showActionMovies(actionMovies);
  return actionMovies;
};

showActionMovies = actionMovies => {
  //action
  let actionMoviesSection = H.$1("#action");
  let movieRow = H.createNode("div");
  movieRow.className = "row py-4";

  let movieDiv = actionMoviesSection.appendChild(movieRow);

  if(actionMovies.length > 0) {
    movieDiv.innerHTML = actionMovies.map(
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
    ).join("");
  }

};

getCategoryScifi = async () => {
    const scifi = await Fetch.get("/movies/Sci-Fi");
    console.log(scifi);
    showScifiMovies(scifi);
    return scifi;
  };
  
  showScifiMovies = scifi => {
    //action
    let scifiMoviesSection = H.$1("#scifi");
    let movieRow = H.createNode("div");
    movieRow.className = "row py-4";
  
    let movieDiv = scifiMoviesSection.appendChild(movieRow);
  
    if(scifi.length > 0) {
      movieDiv.innerHTML = scifi.map(
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
      ).join("");
    }
  
  };

getCategoryScifi();
getCategoryAction();
