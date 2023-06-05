var express = require("express");
var router = express.Router();
var Todo = require("./../models/todo.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json("To do Application");
});

router.get("/get-tasks", (req, res, next) => {
  Todo.find({})
    .exec()
    .then((tasks) => {
      res.statusCode = 200;
      res.statusMessage = "OK";
      res.json(tasks);
    })
    .catch((err) => next(err));
});

router.post("/add-task", (req, res, next) => {
  Todo.create({ task: req.body.task })
    .then((task) => res.json(task))
    .catch((err) => next(err));
});
router.put("/update-task/:id", (req, res, next) => {
  Todo.findByIdAndUpdate(req.params.id, {
    completed: true,
    completedTime: Date.now(),
  })
    .then((task) => res.json(task), {
      new: true,
    })
    .catch((err) => next(err));
});

router.delete("/delete-task/:id", (req, res, next) => {
  console.log(req.params);
  Todo.findByIdAndDelete(req.params.id)
    .then((tasks) => res.json(tasks))
    .catch((err) => next(err));
});

module.exports = router;
