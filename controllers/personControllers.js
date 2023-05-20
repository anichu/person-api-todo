const Person = require("../models/Person");

// TODO::CREATE PERSON WITH POST CALL
exports.createPerson = async (req, res) => {
	try {
		const person = new Person(req.body);
		await person.save();
		res.json(person);
	} catch (error) {
		console.log(error);
		res.status(500).send(error.message);
	}
};

// TODO::GET SINGLE PERSONS
exports.getSinglePerson = async (req, res) => {
	try {
		const person = await Person.findById(req.params.id);

		if (!person) {
			return res.status(404).json({ message: "Person not found" });
		}
		res.json(person);
	} catch (error) {
		res.status(500).send(error.message);
	}
};

// TODO:: UPDATE PERSON

exports.updatePerson = async (req, res) => {
	const { name, roll, board, position, year, result } = req.body;
	try {
		const id = req.params.id;
		const person = await Person.findById(id);
		if (!person) {
			return res.status(404).json({ message: "Person not found" });
		}

		person.name = name || person.name;
		person.roll = roll || person.roll;
		person.board = board || person.board;
		person.position = position || person.position;
		person.year = year || person.year;
		person.result = result || person.result;
		await person.save();
		res.json(person);
	} catch (error) {
		res.status(500).send(error.message);
	}
};

// TODO:: DELETE PERSON FROM DB

exports.deletePerson = async (req, res) => {
	try {
		const id = req.params.id;
		const person = await Person.deleteOne({
			_id: id,
		});
		res.json({ message: "Person deleted" });
	} catch (error) {
		res.status(500).send(error.message);
	}
};

// TODO: GET ALL PERSONS

exports.getAllPersons = async (req, res) => {
	try {
		const persons = await Person.find();
		res.json(persons);
	} catch (error) {
		res.status(500).send(error.message);
	}
};

exports.getSingle = async (req, res) => {
	const { board, year, roll } = req.params;
	try {
		const person = await Person.findOne({
			board: board,
			year: year,
			roll: roll,
		});
		if (!person) {
			return res.status(404).json({ message: "Person not found" });
		}
		res.json(person);
	} catch (error) {
		res.status(500).send(error.message);
	}
};
