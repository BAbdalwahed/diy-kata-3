/*const joinNames = (namesObj) => {
   const names = namesObj.map(e => e.name).join(', ');
   const finalComma = names.lastIndexOf(',');
   const final = names.slice(0, finalComma) + ' &' + names.slice(finalComma + 1);
   return final;
};*/
let results = namesObj.map(e => e.toString());
results.pop();

let final = namesObj.pop();
return results.join(', ') + ' &' + final;
module.exports = joinNames;
