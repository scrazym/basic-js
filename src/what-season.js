const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */


// if (Object.prototype.toString.call(date) !== "[object Date]"){
function getSeason(date) {
//   console.log(date);
//   date = Date.parse(date);
//   console.log(date);
//   // const month = date.getMonth();
//  if (Object.prototype.toString.call(date) === "[object Date]"){
//   console.log('true');
//  } else {
//   console.log('false');
//  }

//   if (date instanceof Date) {
//    if (month === 0 || month <= 1 || month === 11){
//     console.log('1213');
//     return `winter`;
//   } else if( month === 2 || month <= 4) {
//     console.log('w222');
//     return `spring`;
//   } else if ( month === 5 || month <= 7) {
//     console.log('ww');
//     return `summer`;
//   } else if (month === 8 || month <= 10){
//     console.log('www');
//     return `autumn`;
//   } else {
//     return 'Unable to determine the time of year!';
//   }


  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
// }
// }
// getSeason(2020, 2);
}

module.exports = {
  getSeason
};
