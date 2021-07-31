const express = require("express");
const services = require("../services/index");
const model = require("../models/index");
const router = express.Router();

router.post("/", (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let role = req.body.role;

  model[role]
    .find({ email: email, password: password })
    .then((d) =>
      d.length > 0 ? d[0] : Promise.reject("failed to login as " + role)
    )
    .then((d) => d)
    .then((d) => services.sign(d, role))
    .then((token) => res.json({ status: true, data: token }))
    .catch((e) =>
      res.json({ status: false, data: `failed to login as ${role}` })
    );
});

module.exports = router;
