const router = require("express").Router();
const { Project, Team } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, (req, res) => {
  console.log("/API/PROJECT ROUTE HIT");
  Project.findAll({
    include: [Team],
  }).then((projectDBData) => {
    console.log(projectDBData, "FROM FIND ALL PROJECT");
    const projects = projectDBData.map((project) =>
      project.get({ plain: true })
    );
    console.log(projects);
    res.render("all-posts", { projects });
  });
});

module.exports = router;
