var express = require("express");
var router = express.Router();

const {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
} = require("./../controllers/tasks.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json("To do Application");
});

router.get("/get-tasks", async (req, res, next) => {
  try {
    const response = await getTasks();
    res.json(response)
    } 
   catch (error) {
    next(error);
  }
});

router.post("/add-task", async (req, res, next) => {
  try {
    const response = await addTask(req);
    res.json(response)
    } 
   catch (error) {
    console.log(error);
    next(error);
  }
 
});
router.put("/update-task/:id", (req, res, next) => {
  
  try {
    const response = updateTask(req.params.id);
    res.json(response)
    } 
   catch (error) {
    next(error);
  }
});

router.delete("/delete-task/:id", (req, res, next) => {
  
  
  try {
    const response = deleteTask(req.params.id);
    res.json(response)
    } 
   catch (error) {
    next(error);
  }
});

module.exports = router;
