const model = require("../../models/index").courses;
let cols = ["name", "price", "days"];

const _get = (req, res) => {
  model
    .find()
    .then((d) => res.json({ status: true, data: d }))
    .catch((e) => res.json({ status: false, data: e }));
};

const _post = (req, res) => {
  model
    .create(req.body)
    .then((d) => res.json({ status: true, data: d }))
    .catch((e) => res.json({ status: false, data: e }));
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
