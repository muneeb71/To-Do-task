var Todo = require("./../models/todo");
const getTasks = () => {
 return Todo.find({})
    .exec()
    .then((tasks) => {
      return tasks;
    })
    .catch((err) => {
      throw err;
    });
};

const addTask = (req) => {
    return Todo.create({ task: req.body.task })
    .then((task) => {
      return task;
    })
    .catch((err) => {
        console.log(err);
        throw err;
    });
};

const updateTask = (id ) => {
    return Todo.findByIdAndUpdate(id, {
    completed: true,
    completedTime: Date.now(),
  })
    .then(
      (task) => {
        return task;
      },
      {
        new: true,
      }
    )
    .catch((err) => {
        throw err;
    });
};

const deleteTask = (id) => {
    return Todo.findByIdAndDelete(id)
    .then((tasks) => {
      return tasks;
    })
    .catch((err) => {
        throw err;
    });
};

module.exports = { getTasks, addTask, updateTask, deleteTask };
