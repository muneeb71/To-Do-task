import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import * as React from "react";
import InputField from "./components/input";
import TaskItem from "./components/task";
import api from "./server/controller/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const [tasks, setTasks] = useState();
  const [input, setInput] = useState("");

  const apiService = api;

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    try {
      const newTasks = await apiService.getTasks();
      setTasks(newTasks);
    } catch (err) {
      console.log(err);
    }
  };
  const addItem = async () => {
    if (input.length === 0) {
      toast.error("Please Enter Task.");
      return;
    }
    try {
      const res = await apiService.addItem(input);
      setTasks([...tasks, res]);
      setInput("");
      toast.success("Task added successfully!");
    } catch (error) {
      toast.error("Failed to add task. Please try again.");
    }
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addItem();
    }
  };
  const handleDelete = async (_id) => {
    try {
      await apiService.handleDelete(_id);
      const updatedArray = tasks.filter((task) => task._id !== _id);
      setTasks(updatedArray);
      toast.success("Task deleted successfully!");
    } catch (err) {
      toast.error("Failed to add task. Please try again.");
    }
  };
  return (
    <div className="App">
      <div className="input">
        <InputField
          input={input}
          handleInputChange={handleInputChange}
          handleKeyPress={handleKeyPress}
          addItem={addItem}
        />
        <ToastContainer />
        <div style={{ marginTop: 20 }}>
          {tasks &&
            tasks.map((task, index) => (
              <TaskItem key={index} task={task} handleDelete={handleDelete} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;

// function App(){

//   const [selectedClass, setSelectedClass] = useState("");
//   const [selectedStudent, setSelectedStudent] = useState("");
//   const [classes, setClasses] = useState("");
//   const [students, setStudents] = useState("");

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = async () => {
//     try {
//       const classes = await fetch(
//         "http://localhost:4000/teachers/view-teachers"
//       );
//       classes = classes.json();
//       const students = await fetch(
//         "http://localhost:4000/students/view-students"
//       ).then((students) => students.json());
//     } catch (err) {
//       console.log(err);
//     }
//     setClasses(classes);
//     setStudents(students);
//   };

//   const handleClassChange = (event) => {
//     setSelectedClass(event.target.value);
//   };

//   const handleStudentChange = (event) => {
//     setSelectedStudent(event.target.value);
//   };

//   const handleAssign = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:4000/assign_student/" +
//           selectedClass +
//           "/" +
//           selectedStudent
//       );
//       const data = await response.json();
//       if (data) {
//         alert("Student assigned successfully");
//       } else {
//         alert(data.message);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   const defaultTheme = createTheme({
//     palette: {
//       mode: 'dark',
//     },
//   });

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
//             <AssignmentIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Assign Student
//           </Typography>
//           <Box component="form" noValidate sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Select Student"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Select Class"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />

//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Assign
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   See Students List
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   {"Check Assigned Students"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>

//       </Container>
//     </ThemeProvider>
//   );
// }
// export default App;
