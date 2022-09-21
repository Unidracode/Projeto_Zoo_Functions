const data = require('../data/zoo_data');
const { species, employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animal = employees.find((employee) => employee.id === id).responsibleFor[0];
  const { name, sex, age } = species.find((spec) => spec.id === animal)
    .residents.sort((b, c) => c.age - b.age)[0];
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
