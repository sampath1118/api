const express = require("express");
const router = express.Router();

const admin = require("../controllers/student/admin");
const faculty = require("../controllers/student/faculty");
const student = require("../controllers/student/student");
const courses = require("../controllers/student/courses");
const slots = require("../controllers/student/slots");
const batch = require("../controllers/student/batch");

router.get("/admin", admin._get);
router.post("/admin", admin._post); //we can use common.js instead of those respective functions for all which are not accessed
router.patch("/admin/:id", admin._patch); //we can use common.js instead of those respective functions for all which are not accessed
router.delete("/admin/:id", admin._delete); //we can use common.js instead of those respective functions for all which are not accessed

router.get("/faculty", faculty._get);
router.post("/faculty", faculty._post);
router.patch("/faculty/:id", faculty._patch);
router.delete("/faculty/:id", faculty._delete);

router.get("/student", student._get);
router.post("/student", student._post);
router.patch("/student/:id", student._patch);
router.delete("/student/:id", student._delete);

router.get("/courses", courses._get);
router.post("/courses", courses._post);
router.patch("/courses/:id", courses._patch);
router.delete("/courses/:id", courses._delete);

router.get("/slots", slots._get);
router.post("/slots", slots._post);
router.patch("/slots/:id", slots._patch);
router.delete("/slots/:id", slots._delete);

router.get("/batch", batch._get);
router.post("/batch", batch._post);
router.patch("/batch/:id", batch._patch);
router.delete("/batch/:id", batch._delete);

module.exports = router;
