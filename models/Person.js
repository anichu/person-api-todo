const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	roll: {
		type: Number,
		required: true,
		unique: true,
	},
	board: {
		type: String,
		required: true,
	},
	year: {
		type: Number,
		required: true,
	},
	result: {
		type: Object,
		required: true,
	},
	position: {
		type: Number,
		required: true,
		unique: true,
	},
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;

// response format:
// {
// "name": "Anis",
// "roll": "009",
// "board": "barisal",
// "year": "2022",
// "result": { "bangla": "20", "English": "22","math": "233" },
// "total":"275"
// "position": "23",
// }
