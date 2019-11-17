// Spinner
const showSpinner = () => {
  // Selected spinner container
  const spinner = H.$1("#spinner");
  // Show in it
  spinner.classList.add("show");
  // Adding overlay to page
  const loadingDiv = H.createNode("div");
  loadingDiv.classList.add("overlay");
  const body = H.$1("body");
  body.append(loadingDiv);
  // Timeout of the loading
  setTimeout(() => {
    // we show the page when done
    spinner.classList.remove("show");
    loadingDiv.remove();
  }, 5000);
};
