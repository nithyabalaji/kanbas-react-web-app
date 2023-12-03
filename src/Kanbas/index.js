import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Signin from "./users/signin";
import Account from "./users/account";
import UserTable from "./users/table";
import Signup from "./users/signup";
import { useEffect, useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

function Kanbas() {
   const [courses, setCourses] = useState([]);
   const API_BASE = process.env.REACT_APP_API_BASE;
   const URL = `${API_BASE}/courses`;
   const findAllCourses = async () => {
      const response = await axios.get(URL);
      setCourses(response.data);
   };
   useEffect(() => {
      findAllCourses();
   }, []);
   const [course, setCourse] = useState({
      name: "New Course", number: "New Number",
      startDate: "2023-09-10", endDate: "2023-12-15",
   });
   const addCourse = async () => {
      const response = await axios.post(URL, course);
      setCourses([
         response.data,
         ...courses,
      ]);
      setCourse({ name: "" });
   };
   const deleteCourse = async (courseId) => {
      const response = await axios.delete(
         `${URL}/${courseId}`
      );
      setCourses(courses.filter(
         (c) => c._id !== courseId));
   };
   const updateCourse = async (course) => {
      const response = await axios.put(
         `${URL}/${course._id}`,
         course
      );
      setCourses(
         courses.map((c) => {
            if (c._id === course._id) {
               return course;
            }
            return c;
         })
      );
      setCourse({ name: "" });
   };
   return (
      <Provider store={store}>
         <div className="d-flex flex-column">
            <Nav />
            <div className="d-flex">
               <div className="float-left">
                  <KanbasNavigation />
               </div>
               <div className="main-container flex-grow-1">
                  <Routes>
                     <Route path="/" element={<Navigate to="Dashboard" />} />
                     {/* <Route path="Account" element={<h1>Account</h1>} /> */}
                     <Route path="Dashboard" element={
                        <Dashboard
                           courses={courses}
                           course={course}
                           setCourse={setCourse}
                           addCourse={addCourse}
                           deleteCourse={deleteCourse}
                           updateCourse={updateCourse} />
                     } />
                     <Route path="Courses/:courseId/*" element={
                        <Courses courses={courses} />} />
                     <Route path="/signin" element={<Signin />} />
                     <Route path="/account" element={<Account />} />
                     <Route path="/account/:id" element={<Account />} />
                     <Route path="/admin/users" element={<UserTable />} />
                     <Route path="/signup" element={<Signup />} />
                  </Routes>
               </div>
            </div>

         </div>
      </Provider>
   );
}
export default Kanbas