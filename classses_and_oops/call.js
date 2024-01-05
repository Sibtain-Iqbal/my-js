function setUserName(username) {
  // complex calculation (coll from DATA BASE chek user name alreaddy use else)
  this.username = username;
}

function CreateUser(username, email, password) {
  setUserName.call(this,username);
  this.email = email;
  this.password = password;
}

const code = new CreateUser("sibtain", "@sibtain", "12345");
console.log(code);
