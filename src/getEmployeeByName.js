const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const employee = employeeName;
  return employees.find((name) => name.firstName === employee || name.lastName === employee);
}

module.exports = getEmployeeByName;
