const model = require("../../models/index").batch;

const _get = (req, res) => {
  model
    .find()
    .then((d) => res.json({ status: true, data: d }))
    .catch((e) => res.json({ status: false, data: e }));
};

const _post = (req, res) => {
  let ob = {
    faculty: req.body.faculty,
    student: req.body.student,
    course: req.body.course,
    slot: req.body.slot,
    present: "good",
    status: "enbled",
    approved_by: "",
    reason: "",
    remarks: "",
  };
  model
    .find(req.body)
    .then((d) => (d.length > 0 ? Promise.reject("batch alreafy exxists") : ob))
    .then((d) => model.create(ob))
    .then((d) => res.json({ status: true, data: d }))
    .catch((e) => res.json({ status: false, data: e }));
};

const _patch = (req, res) => {
  res.json({ status: true, data: "updated" });
};

const _delete = (req, res) => {
  model
    .findByIdAndDelete(req.params.id)
    .then((d) => res.json({ status: true, data: d }))
    .catch((e) => res.json({ status: false, data: e }));
};

module.exports = { _get, _post, _patch, _delete };
