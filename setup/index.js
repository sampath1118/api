const model = require("../models/index").admin;
let ob = {
  name: "sampii",
  email: "sampii@gmail.com",
  phone: 9533548735,
  password: "sampii",
};
model
  .create(ob)
  .then((d) => console.log(d))
  .catch((d) => console.log(d));
