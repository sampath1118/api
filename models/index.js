const mongoose = require("mongoose");
const url = require("../config").url;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const admin = new mongoose.model(
  "admin",
  new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
    createdAt: { type: String, default: new Date().toString() },
  })
);
const faculty = new mongoose.model(
  "faculty",
  new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
    branch: String,
    createdAt: { type: String, default: new Date().toString() },
  })
);
const student = new mongoose.model(
  "student",
  new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
    course: String,
    createdAt: { type: String, default: new Date().toString() },
  })
);
const courses = new mongoose.model(
  "courses",
  new mongoose.Schema({
    name: String,
    price: String,
    days: String,
    createdAt: { type: String, default: new Date().toString() },
  })
);
const slots = new mongoose.model(
  "slots",
  new mongoose.Schema({
    name: String,
    createdAt: { type: String, default: new Date().toString() },
  })
);
const batch = new mongoose.model(
  "batch",
  new mongoose.Schema({
    faculty: String,
    student: String,
    course: String,
    slot: String,
    present: String,
    status: String,
    approved_by: String,
    reason: String,
    remarks: String,
    createdAt: { type: String, default: new Date().toString() },
  })
);

module.exports = {
  admin,
  faculty,
  student,
  courses,
  slots,
  batch,
};
