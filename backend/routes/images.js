const express = require("express");
const router = express();

const { getAllImages } = require("../controllers/images");

router.route("/").get(getAllImages);

module.exports = router;
