const winnerApplicants = {
  "001": {
    name: "Максим",
    age: 25
  },
  "201": {
    name: "Светлана",
    age: 20
  },
  "304": {
    name: "Екатерина",
    age: 35
  }
};

const todaysWinner = {
  prize: "10 000$"
};


/**
 * Generate random value in range [min, max)
 * @param {*} min Range from value (included)
 * @param {*} max Range to value (not included)
 * @returns Random integer value in the range
 */
function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
  

/**
 * Generate winner from applicants
 * @param {*} applicants Object with ticket number and applicant info
 * @param {*} winnerObject Prize of lottery
 * @returns Object with prize info and winner info
 */
function getWinner(applicants, winnerObject) {
  let applicantsTickets = []; // array of applicant's tickets
  for (applicant in applicants)
    applicantsTickets.push(applicant);

  const winnerIndex = getRandomNumberInRange(0, applicantsTickets.length);
  const winnerPerson = applicants[applicantsTickets[winnerIndex]];

  const winner = {...winnerObject, ...winnerPerson};
  return winner;
}
  
  

  
const resultWinner = getWinner(winnerApplicants, todaysWinner);
console.log("resultWinner", resultWinner);
// { prize: '10 000$', name: 'Максим', age: 25 }

