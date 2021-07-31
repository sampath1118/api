const model = require("../../models/index").student;

const _get = (req, res) => {
  model
    .find()
    .then((d) => res.json({ status: true, data: d }))
    .catch((e) => res.json({ status: false, data: e }));
};

const _post = (req, res) => {
  res.json({ status: false, data: "faculty is not allowd to create admins" });
};

const _patch = (req, res) => {
  res.json({ status: false, data: "faculty is not allowd to update admins" });
};

const _delete = (req, res) => {
  res.json({ status: false, data: "faculty is not allowd to delete admins" });
};

module.exports = { _get, _post, _patch, _delete };
