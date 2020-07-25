const router = require("express").Router();
const Home = require("./src/components/Pages/Home");
const Contacts = require("./src/components/Pages/Contacts");
const Portfolio = require("./src/components/Pages/Portfolio");

// Post routes
router.use("/Home", Home);
router.use("/Contacts", Contacts);
router.use("/Portfolio", Portfolio);

module.exports = router;