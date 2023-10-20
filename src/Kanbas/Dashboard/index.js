import '../index.css';
import { Link } from "react-router-dom";
import db from "../Database";
import { LiaEdit } from "react-icons/lia"

function Dashboard() {
  const courses = db.courses;
  return (
    <div className="ps-24 pe-24">
        <div className="dashboard-header">
            <p>Dashboard</p>
            <hr/>
        </div>
        <div className="flex-col-container">
            <div className="subtitle-header ps-24">
                <p>Published Courses (24)</p>
                <hr className="mb-0"/>
            </div>
            <div className="course-cards d-flex flex-row flex-wrap">
                {courses.map((course) => (
                    <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                        <div className="dashboard-card card col-3">
                            <img src={require("../images/blue.jpg")} alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{course.number} {course.name}</h5>
                                <p className="card-text course-code">
                                    {course.number}.{course._id}.{course.year}
                                </p>
                                <p className="card-text course-term">
                                    {course.semester}
                                </p>
                                <LiaEdit/>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  );
}
export default Dashboard;