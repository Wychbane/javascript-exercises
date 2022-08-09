const findTheOldest = function(people) {
    return people.reduce((oldest, next) => {
     const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
     const nextAge = getAge(next.yearOfBirth, next.yearOfDeath);
     return oldestAge > nextAge ? oldest : next;
    });
   };
const getAge = function (birth, death){
    if (!death){
        death = new Date().getFullYear;
    }
    return death - birth;
    }

// Do not edit below this line
module.exports = findTheOldest;
