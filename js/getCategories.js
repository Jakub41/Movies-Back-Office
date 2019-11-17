// We get the categories []
getCategories = async () => {
    const categories = await Fetch.get("/movies");
    console.log(categories);
    return categories;
  };