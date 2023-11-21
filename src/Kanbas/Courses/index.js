import '../index.css';
import db from "../../Kanbas/Database";
import { HiOutlineBars3 } from "react-icons/hi2";
import { BiGlasses } from "react-icons/bi";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";

function Courses() {
    const { courseId } = useParams();
    const API_BASE = process.env.REACT_APP_API_BASE;
    const URL = `${API_BASE}/courses`;
    const [course, setCourse] = useState({});
    const findCourseById = async (courseId) => {
        const response = await axios.get(
            `${URL}/${courseId}`
        );
        setCourse(response.data);
    };
    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);
    const pathArray = useLocation().pathname.split('/');
    const courseIdIndex = pathArray.findIndex(a => a === courseId);
    const pageName = pathArray[courseIdIndex + 1];
    return (
        <div className='flex-col-containers'>
            <div className="header-container flex-row-container hide-if-small">
                <HiOutlineBars3 className="red ms-2 me-12" />
                <div>
                    <nav className='course-nav-header' aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><a href="#" class="red me-1">{course.number}.{course._id}.{course.year}</a></li>
                            <li className="breadcrumb-item active" aria-current="page">{pageName}</li>
                        </ol>
                    </nav>
                </div>
                <div className="flex-grow-1"></div>
                <button className="btn btn-secondary gray float-end">
                    <BiGlasses className="me-1 mt-1 float-start" />
                    Student View
                </button>
            </div>
            <div className='flex-row-container'>
                <CourseNavigation />
                <div className="content-container flex-grow-1">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
                        <Route path="Grades" element={<Grades />} />
                    </Routes>
                </div>
            </div>
        </div>

    );
}
export default Courses;