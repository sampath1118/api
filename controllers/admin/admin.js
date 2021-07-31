const model = require("../../models/index").admin;
let cols = ["name", "email", "phone", "password"];

const _get = (req, res) => {
  model
    .find()
    .then((d) => res.json({ status: true, data: d }))
    .catch((e) => res.json({ status: false, data: e }));
};

const _post = (req, res) => {
  if (cols.every((x) => req.body[x].trim().length > 0)) {
    model
      .find({ email: req.body.email })
      .then((d) =>
        d.length > 0
          ? Promise.reject("email already exists in admin")
          : req.body
      )
      .then((d) => model.create(d))
      .then((d) => res.json({ status: true, data: d }))
      .catch((d) => res.json({ status: false, data: d }));
  } else {
    res.json({ status: false, data: "please fill all details" });
  }
};

const _patch = (req, res) => {
  model
    .findByIdAndUpdate(req.params.id)
    .then((d) => {
      for (let item of cols) {
        d[item] = req.body[item];
      }
      return d.save();
    })
    .then((d) => res.json({ status: true, data: d }))
    .catch((e) => res.json({ status: false, data: e }));
};

const _delete = (req, res) => {
  model
    .findByIdAndDelete(req.params.id)
    .then((d) => res.json({ status: true, data: d }))
    .catch((e) => res.json({ status: false, data: e }));
};

module.exports = { _get, _post, _patch, _delete };
