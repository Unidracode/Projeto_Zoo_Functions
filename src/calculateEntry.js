const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const senior = entrants.filter((entrant) => entrant.age >= 50).length;
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const child = entrants.filter((entrant) => entrant.age < 18).length;
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (!entrants || entrants.length === undefined) return 0;
  return countEntrants(entrants).senior * 24.99 + countEntrants(entrants).adult * 49.99
   + countEntrants(entrants).child * 20.99;
}

module.exports = { calculateEntry, countEntrants };
