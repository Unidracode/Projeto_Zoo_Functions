const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((i, spe) => Object.assign(i, { [spe.name]: spe.residents.length }), {});
  }
  const residentList = species.find((spe) => spe.name === animal.specie).residents;
  if (!animal.sex) return residentList.length;
  return residentList.filter((resident) => resident.sex === animal.sex).length;
}

module.exports = countAnimals;
