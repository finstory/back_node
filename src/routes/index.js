const { Router } = require("express");
const { checkUserToken } = require("../middleware/authMiddlewares");

const Users = require("./userRoutes");

const router = Router();
router.use("/users", Users);

router.use("/:id", (req, res) => {
  res.json({ success: req.params.id, message: "a trabajar Rama." });
});

module.exports = router;
