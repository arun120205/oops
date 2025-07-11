function createUser(name, password) {
  let _password = password; 

  return {
    name,
    checkPassword: (input) => input === _password
  };
}

const user = createUser("Arun", "1234");

console.log(user.name);            
console.log(user.checkPassword("1243")); 
console.log(user._password);     
