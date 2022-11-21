const db = require("../models");

// create main Model
const Person = db.persons;

// main work
// 1. create person
const addPerson = async (req, res) => {
  let info = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
    subject: req.body.subject,
    message: req.body.message,
  };

  const person = await Person.create(info);
  res.status(200).send(person);
  console.log(person);
};

// 2. get all persons
const getAllPersons = async (req, res) => {
  let persons = await Person.findAll({});
  //   {
  //   attributes: ["firstname", "lastname"],
  // }
  res.status(200).send(persons);
};

// 3. get single person

const getOnePerson = async (req, res) => {
  let id = req.params.id;

  let person = await Person.findOne({ where: { id: id } });
  res.status(200).send(person);
};

// 4. update Person

const updatePerson = async (req, res) => {
  let id = req.params.id;
  console.log(id);
  const person = await Person.update(req.body, { where: { id: id } });

  res.status(200).send(person);
};

// 5. Delete Person

const deletePerson = async (req, res) => {
  let id = req.params.id;
  await Person.destroy({ where: { id: id } });

  res.status(200).send({ data: "Person is deleted" });
};

module.exports = {
  addPerson,
  getAllPersons,
  getOnePerson,
  updatePerson,
  deletePerson,
};
