let getHomePage = (req, res) => {
  //logic
  res.render("index.ejs");
};

module.exports = {
  getHomePage,
};
