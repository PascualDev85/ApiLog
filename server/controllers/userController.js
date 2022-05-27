class userController {
  userLogin = (req, res) => {
    let { name, password } = req.body;
    console.log(name, password);
    console.log(req.body);

    const user = "Growth";
    if (name === user) {
      res.status(200).json(password);
    } else {
      res.status(401).json(error);
    }
  };
}

module.exports = new userController();
