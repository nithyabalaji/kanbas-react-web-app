import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
function Kanbas() {
    return(
      <div className="d-flex flex-column">
         <Nav/>
         <div className="d-flex">
            <div className="float-left">
            <KanbasNavigation/>
            </div>
            <div className="main-container flex-grow-1">
               <Routes>
                  <Route path="/" element={<Navigate to="Dashboard" />} />
                  <Route path="Account" element={<h1>Account</h1>} />
                  <Route path="Dashboard" element={<Dashboard />} />
                  <Route path="Courses/:courseId/*" element={<Courses/>} />
               </Routes>
            </div>
         </div>

      </div>
    );
 }
 export default Kanbas