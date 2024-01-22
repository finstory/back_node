const { Router } = require("express");
const router = Router();
const { usersGet, usersPost } = require("../controllers/userControllers");

router.get("/:email", usersGet);
router.post("/", usersPost);

module.exports = router;
