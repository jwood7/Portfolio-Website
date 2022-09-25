const codeRoutes = require("./code");
const gamesRoutes = require("./games");
const artRoutes = require("./art");

const path = require("path");

const constructorMethod = app => {
  app.use("/code", codeRoutes);
  app.use("/games", gamesRoutes);
  app.use("/art", artRoutes);

  app.use("*", (req, res) => {
    res.status(200).render('pages/home');

    // res.status(num).render(template, data)
    // path.resolve(`path/fileName.html`); -> res.sendfile
  });
};

module.exports = constructorMethod;