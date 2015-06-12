/**
 * Partly to celebrate the announcement of the 12th Doctor and to make things a little more interesting we are going to
 * use data about the 12 Doctors as we unpack .filter(), .map(), and .reduce().
 *
 * Here is the data format we will be using:
 * var doctors = [{ number: 9,  actor: "Christopher Eccleston", begin: 2005, end: 2005 }];
 *
 * Desired output format:
 * [{ doctorNumber: "#9",  playedBy: "Christopher Eccleston", yearsPlayed: 1 }]
 *
 * Problem to Solve
 * What we want to do is to take all the Doctors from year 2000 until today and change their data up just a little bit.
 * We want to massage the data a little bit and have keys of doctorNumber, playedBy, and yearsPlayed.
 * We don't want to just directly map one field to another, but for doctorNumber we want to prepend a "#" and for
 * the yearsPlayed we want to want how many years the doctor played and not a range.
 *
 */

