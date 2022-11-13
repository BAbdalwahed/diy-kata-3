const getEmployerRole = (employeeName, employees) => {
  let person = employees.filter((person) => person.name == employeeName);
  return person[0].role;
};
module.exports = getEmployerRole;
