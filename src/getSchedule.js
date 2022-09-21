const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const date = data.hours;
const getAnimals = Object.values(data.species);
const nameAnimals = getAnimals.map((animal) => animal.name);

const day = {
  Tuesday: {
    officeHour: `Open from ${date.Tuesday.open}am until ${date.Tuesday.close}pm` },
  Wednesday: {
    officeHour: `Open from ${date.Wednesday.open}am until ${date.Wednesday.close}pm` },
  Thursday: {
    officeHour: `Open from ${date.Thursday.open}am until ${date.Thursday.close}pm` },
  Friday: {
    officeHour: `Open from ${date.Friday.open}am until ${date.Friday.close}pm` },
  Saturday: {
    officeHour: `Open from ${date.Saturday.open}am until ${date.Saturday.close}pm` },
  Sunday: {
    officeHour: `Open from ${date.Sunday.open}am until ${date.Sunday.close}pm` },
  Monday: {
    officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

function createObj() {
  day.Tuesday.exhibition = (data.species.filter((item) => item.availability
    .includes('Tuesday')).map((item) => item.name));
  day.Wednesday.exhibition = (data.species.filter((item) => item.availability
    .includes('Wednesday')).map((item) => item.name));
  day.Thursday.exhibition = (data.species.filter((item) => item.availability
    .includes('Thursday')).map((item) => item.name));
  day.Friday.exhibition = (data.species.filter((item) => item.availability
    .includes('Friday')).map((item) => item.name));
  day.Saturday.exhibition = (data.species.filter((item) => item.availability
    .includes('Saturday')).map((item) => item.name));
  day.Sunday.exhibition = (data.species.filter((item) => item.availability
    .includes('Sunday')).map((item) => item.name));
}

function getSchedule(scheduleTarget) {
  createObj();
  if (nameAnimals.includes(scheduleTarget)) {
    return species.find((animal) => animal.name === scheduleTarget).availability;
  } if (Object.keys(day).includes(scheduleTarget)) {
    return { [scheduleTarget]: day[scheduleTarget] };
  } if (!Object.keys(day).includes(scheduleTarget) && !nameAnimals.includes(scheduleTarget)) {
    return day;
  }
  return day;
}

module.exports = getSchedule;
