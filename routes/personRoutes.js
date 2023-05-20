const express = require("express");
const {
	getSinglePerson,
	getAllPersons,
	updatePerson,
	deletePerson,
	createPerson,
	getSingle,
} = require("../controllers/personControllers");

const router = express.Router();

router.route("/").get(getAllPersons).post(createPerson);
router
	.route("/:id")
	.get(getSinglePerson)
	.put(updatePerson)
	.delete(deletePerson);
router.route("/:board/:year/:roll").get(getSingle);

module.exports = router;
