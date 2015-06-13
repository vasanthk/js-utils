/**
 * Partly to celebrate the announcement of the 12th Doctor and to make things a little more interesting we are going to
 * use data about the 12 Doctors as we unpack .filter(), .map(), and .reduce().
 *
 * Here is the data format we will be using:
 * var doctors = [{ number: 9,  actor: 'Christopher Eccleston', begin: 2005, end: 2005 }];
 *
 * Desired output format:
 * [{ doctorNumber: '#9',  playedBy: 'Christopher Eccleston', yearsPlayed: 1 }]
 *
 * Problem to Solve
 * What we want to do is to take all the Doctors from year 2000 until today and change their data up just a little bit.
 * We want to massage the data a little bit and have keys of doctorNumber, playedBy, and yearsPlayed.
 * We don't want to just directly map one field to another, but for doctorNumber we want to prepend a '#' and for
 * the yearsPlayed we want to want how many years the doctor played and not a range.
 *
 * @Link: http://elijahmanor.com/reducing-filter-and-map-down-to-reduce/
 */

var doctors = [
  {number: 1, actor: 'William Hartnell', begin: 1963, end: 1966},
  {number: 2, actor: 'Patrick Troughton', begin: 1966, end: 1969},
  {number: 3, actor: 'Jon Pertwee', begin: 1970, end: 1974},
  {number: 4, actor: 'Tom Baker', begin: 1974, end: 1981},
  {number: 5, actor: 'Peter Davison', begin: 1982, end: 1984},
  {number: 6, actor: 'Colin Baker', begin: 1984, end: 1986},
  {number: 7, actor: 'Sylvester McCoy', begin: 1987, end: 1989},
  {number: 8, actor: 'Paul McGann', begin: 1996, end: 1996},
  {number: 9, actor: 'Christopher Eccleston', begin: 2005, end: 2005},
  {number: 10, actor: 'David Tennant', begin: 2005, end: 2010},
  {number: 11, actor: 'Matt Smith', begin: 2010, end: 2013},
  {number: 12, actor: 'Peter Capaldi', begin: 2013, end: 2013}
];

// Using filter() and map()
doctors = doctors.filter(function (doctor) {
  return doctor.begin > 2000;
}).map(function (doctor) {
  return {  // return what new object will look like.
    doctorNumber: '#' + doctor.number,
    playedBy: doctor.actor,
    yearsPlayed: doctor.end - doctor.begin + 1
  };
});

console.log(JSON.stringify(doctors, null, 4));

// Using reduce()
// Syntax: arr.reduce(callback[, initialValue])
doctors = doctors.reduce(function (memo, doctor) {
  if (doctor.begin > 2000) {  // This serves as our 'filter'
    memo.push({ // This serves as our 'map'
      doctorNumber: '#' + doctor.number,
      playedBy: doctor.actor,
      yearsPlayed: doctor.end - doctor.begin + 1
    });
  }
  return memo;
}, []);
