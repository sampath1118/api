const express = require("express");
const router = express.Router();

const admin = require("../controllers/admin/admin");
const faculty = require("../controllers/admin/faculty");
const student = require("../controllers/admin/student");
const courses = require("../controllers/admin/courses");
const slots = require("../controllers/admin/slots");
const batch = require("../controllers/admin/batch");
const attendance = require("../controllers/admin/attendance");

router.get("/admin", admin._get);
router.post("/admin", admin._post);
router.patch("/admin/:id", admin._patch);
router.delete("/admin/:id", admin._delete);

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

router.patch("/attendance/:id", attendance._patch);

module.exports = router;
