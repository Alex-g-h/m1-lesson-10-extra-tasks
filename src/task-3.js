const suspects_1 = {
  James: ["Jacob", "Bill", "Lucas"],
  Johnny: ["David", "Kyle", "Lucas"],
  Peter: ["Lucy", "Kyle"]
};
const dead_1 = ["Lucas", "Bill"];

const suspects_2 = {
  Brad: [],
  Megan: ["Ben", "Kevin"],
  Finn: []
};
const dead_2 = ["Ben"];

const suspects_3 = {
  Kate: ["John", "Ray", "Michael", "Ben"],
  Will: ["Phillip", "John", "Kelly", "Jim"],
  Evan: ["Ray", "Nick", "Dave", "Ben"]
};
const dead_3 = ["Ray", "John", "Ben"];


console.log(getKiller(suspects_1, dead_1)); // Убийца James
console.log(getKiller(suspects_2, dead_2)); // Убийца Megan
console.log(getKiller(suspects_3, dead_3)); // Убийца Kate


/**
 * Find killer (first person who had seen all killed people)
 * @param {*} suspectInfo Object with name of suspect person and list of people had seen by him
 * @param {*} deadPeople Array of killed people
 * @returns Killer name if found or null otherwise
 */
function getKiller(suspectInfo, deadPeople) {
  let killer = null;
  for (suspect in suspectInfo) {
    let isKiller = true;
    people = suspectInfo[suspect];
    deadPeople.forEach(dead => {
      isKiller &&= people.includes(dead);
    });
    if (isKiller) {
      killer = suspect;
      break;
    }
  }

  return killer;
}