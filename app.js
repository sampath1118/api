const express = require("express");
const app = express();
const cors = require("cors");
const body = require("body-parser");
const port = require("./config").port;
app.use(cors());
app.use(body.json());
app.use(body.urlencoded({ extended: true }));
const login = require("./routes/login");
const admin = require("./routes/admin");
const faculty = require("./routes/faculty");
const student = require("./routes/student");
const services = require("./services");

app.use(services.logger);
app.use("/login", login);
app.use("/admin", services.protectAdmin, admin);
app.use("/faculty", services.protectFaculty, faculty);
app.use("/student", services.protectStudent, student);

app.listen(port, () => console.log(`server started ${port}`));
