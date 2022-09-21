const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

const result = (employed) => ({
  id: employed.id,
  fullName: `${employed.firstName} ${employed.lastName}`,
  species: species.filter((spec) => employed.responsibleFor
    .includes(spec.id)).map((animal) => animal.name),
  locations: species.filter((spec) => employed.responsibleFor
    .includes(spec.id)).map((anim) => anim.location),
});

const getEmployee = (employed) => {
  if (employed.name) {
    return employees.find((worker) => worker.firstName === employed.name
      || worker.lastName === employed.name);
  }
  if (employed.id) {
    return employees.find((worker) => employed.id === worker.id);
  }
};

function getEmployeesCoverage(employed) {
  if (!employed) return employees.map((employee) => result(employee));
  if (!getEmployee(employed)) throw new Error('Informações inválidas');
  return result(getEmployee(employed));
}

module.exports = getEmployeesCoverage;
