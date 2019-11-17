console.log("Movie Back Office Table...");
// We get all the movies to show in the table
const getAllMovies = async () => {
  H.$1("#movieTable").getElementsByTagName("tbody")[0].innerHTML = "";

  const categories = await getCategories();
  categories.forEach(async category => {
    const movies = await getmovies(category);
    await showMovies(movies, category);
  });
};
// We show the movies grouped by category
showMovies = async (movies, category) => {
  //action
  let moviesSection = H.$1("#movieTable");
  let section = moviesSection.getElementsByTagName("tbody")[0];

  if (movies.length > 0) {
    await showAllMovies(movies, section);
  } else {
    section.innerText = "No movies were added";
  }
};
// We show the movies in the table 
showAllMovies = async (allMovies, movieCard) => {
  movieCard.innerHTML += allMovies
    .map(
      movie => `<tr>
                    <td>${movie._id}</td>
                    <td>${movie.name}</td>
                    <td>${movie.category}</td>
                    <td><img src="${movie.imageUrl}" alt="${
                            movie.name
                        }" height="42" width="42"></td>
                    <td>${movie.description}</td>
                    <td>
                        <div class="btn-group" role="group" aria-label="Action">
                        <button type="button" onclick="deletemovie('${
                                    movie._id
                                    }')" class="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i></button>
                        <button type="button" onclick='getmovieUpdate("${movie._id}","${
                            movie.name
                        }","${movie.category}","${movie.imageUrl}","${escape(
                            movie.description
                        )}")' class="btn btn-warning"><i class="fa fa-pencil-alt" aria-hidden="true"></i></button>
                        </div>
                    </td>
                </tr>`
    )
    .join("");
};

getAllMovies();
