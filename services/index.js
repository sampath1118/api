const jwt = require("jsonwebtoken");
const secret = require("../config").secret;

function sign(user, role) {
  return new Promise((resolve, reject) => {
    jwt.sign({ id: user.id, role: role }, secret, (err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve({ token, user });
      }
    });
  });
}
const logger = (req, res, next) => {
  console.log(req.url, req.method);
  next();
};
function verify(token, role) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, data) => {
      if (err) {
        reject(err);
      } else {
        if (data.role == role) {
          resolve(data);
        } else {
          reject("invalid role of " + data.role + "and expected was " + role);
        }
      }
    });
  });
}
function getToken(headers) {
  let token = "";
  if (headers.authorization.split(" ")[1]) {
    token = headers.authorization.split(" ")[1];
  }
  return token;
}
function protectAdmin(req, res, next) {
  let role = "admin";
  let token = getToken(req.headers);
  verify(token, role)
    .then((d) => (req.id = d.id))
    .then((d) => next())
    .catch((e) => res.json({ status: false, data: e }));
}
function protectFaculty(req, res, next) {}
function protectStudent(req, res, next) {}

module.exports = {
  sign,
  verify,
  getToken,
  protectAdmin,
  protectFaculty,
  protectStudent,
  logger,
};
