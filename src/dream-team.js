const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(name) {

    let team = [];
    let dreamTeam;

    if (Array.isArray(name)) {
      for (let i = 0; i < name.length; i++) {

        if (typeof(name[i]) === 'string') {
          team.push(name[i].trim()[0].toUpperCase());
          dreamTeam = team.sort().join('');
          console.log(dreamTeam);
      } 
      // throw new NotImplementedError('Not implemented');
      // // remove line with error and write your code here
    }
    return dreamTeam;
    } else {
      return false;
    }
  }
  
    
module.exports = {
  createDreamTeam
};

