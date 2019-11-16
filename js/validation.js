validateForm = async (name, description, category, image) => {
  if (name == null || name == "") {
    alert("Name can't be blank");
    return false;
  } else if (category == null || category == "") {
    alert("Category can't be blank");
    return false;
  } else if (image == null || image == "") {
    alert("Image can't be blank");
    return false;
  } else if (description == null || description == "") {
    alert("Description can't be blank");
    return false;
  }
  return true;
};
