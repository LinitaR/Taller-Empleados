const { Router } = require("express"),
  router = Router();

router.use("/user", require("../route/user.route"));

module.exports = router;