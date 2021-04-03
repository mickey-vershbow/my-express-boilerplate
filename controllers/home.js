function index(req, res) {
  console.log("Hi, you visited the homeroute!");
  console.log(req.user);

  let username;
  if (req.user) {
    username = req.user.username;
  } else {
    username = "Please log in";
  }
  res.render("home", { username: username, currentUser: req.user });
}

module.exports = {
  index,
};
