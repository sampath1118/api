const model = require("../../models").batch;
function _patch(req, res) {
  model
    .findByIdAndUpdate(req.params.id)
    .then((d) => {
      for (let item in req.body) {
        d[item] = req.body[item];
      }
      return d.save();
    })
    .then((d) => res.json({ status: true, data: d }))
    .catch((d) => res.json({ status: false, data: d }));
}
module.exports = {
  _patch,
};
