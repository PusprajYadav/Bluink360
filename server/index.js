const express = require("express");
// for incresing payload
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

const mongoose = require("mongoose");

const Port = 5000;

// alll controller files imported
const JobController = require("./Controller/JobController");
const EventController = require("./Controller/EventController");
const AlumaniController = require("./Controller/AlumanaiCont");
const AlumaniController2 = require("./Controller/AlumanaiCont2");
const RegisterationController = require("./Controller/RegisterContr");

// middlewares
app.use(cors()); // connection from forntend to backend
app.use(express.json()); // connection from backend to database
app.use(bodyParser.json());

// db connection
mongoose
  .connect("mongodb://127.0.0.1:27017/Juzzit")
  .then((res) => {
    console.log("MongoDB Connected Successfully ");
  })
  .catch((err) => {
    console.log(err);
  });

//*********************************Admin*********************************************/
// admin

//alumanai post from admin panel
app.post("/api/Admin/Alumanai", AlumaniController.AlumaniPost);
//get all Alumani
app.get("/api/GetAllAlumanai", AlumaniController.GetAllAlumani);
// delete alumani data
app.delete("/api/DeleteAlumanai/:id", AlumaniController.DeleteAlumanai);
// update alumanai data
app.put("/api/UpdateAlumani/:id", AlumaniController.UpadetAlumani); // pending not working

//alumani 2
app.post("/api/Admin2/Alumanai2", AlumaniController2.AlumaniPost2);
//get all Alumani
app.get("/api/GetAllAlumanai2", AlumaniController2.GetAllAlumani2);
// delete alumani data
app.delete("/api/DeleteAlumanai2/:id", AlumaniController2.DeleteAlumanai2);
// update alumanai data
app.put("/api/UpdateAlumani2/:id", AlumaniController2.UpadetAlumani2); // pending not working

// event post
app.post("/api/Admin/Event", EventController.EventPost);
//get all events
app.get("/api/GetAllEvent", EventController.GetEvent);
// dlete posts
app.delete("/api/DeleteEventbybId/:id", EventController.DeleteEvent);
// Update by id
app.put("/api/UpdateEventbyId/:id", EventController.UpdateEvent);

//job posting from admin panel
app.post("/api/Admin/Job", JobController.JobPosts);
//get job
app.get("/api/GetAllJob", JobController.GetJob);
// delete job
app.delete("/api/DeleteJobById/:id", JobController.DeleteJob);
// update job data
app.put("/api/UpdateJob/:id", JobController.UpdateJob);

// for fronyt end
// only post and get for registration

app.post("/api/Registraion", RegisterationController.PostUser);

app.get("/api/AllUsers", RegisterationController.GetAllUsers);

app.delete("/api/DeleteUserId/:id", RegisterationController.DeleteRegUser);

// staring the app
app.listen(Port, "127.0.0.1", () => {
  console.log("Server Started At " + Port);
});
