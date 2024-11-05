const controller = require("../controllers/public.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/articles", controller.postArticle);
  app.post("/api/tokohwayang", controller.postTokohWayang)
  app.get("/api/articles", controller.getArticle);
  app.get("/api/tokohwayang", controller.getTokohWayang);

};