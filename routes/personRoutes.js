const express = require("express");
const {
	getSinglePerson,
	getAllPersons,
	updatePerson,
	deletePerson,
	createPerson,
} = require("../controllers/personControllers");

const router = express.Router();

router.route("/").get(getAllPersons).post(createPerson);
router
	.route("/:id")
	.get(getSinglePerson)
	.put(updatePerson)
	.delete(deletePerson);

module.exports = router;
