import '../index.css';
import { React } from "react";
import { Link } from "react-router-dom";

function Dashboard(
    { courses, course, setCourse, addCourse,
        deleteCourse, updateCourse }
) {
    return (
        <div className="ps-24 pe-24">
            <div className="dashboard-header">
                <p>Dashboard</p>
                <hr />
            </div>
            <div className="flex-col-container">
                <div className="subtitle-header ps-24">
                    <p>Published Courses ({courses.length})</p>
                    <hr className="mb-0" />
                </div>
                <div className="ps-24 mt-3">
                    <h5>Course</h5>
                    <input value={course.name} placeholder="Course Name" className="form-control"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                    <input value={course.number} placeholder="Course Number" className="form-control"
                        onChange={(e) => setCourse({ ...course, number: e.target.value })} />
                    <input value={course.startDate} className="form-control" type="date"
                        onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
                    <input value={course.endDate} className="form-control" type="date"
                        onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
                    <button className="btn btn-secondary gray me-2" onClick={addCourse} >
                        Add
                    </button>
                    <button className="btn btn-danger"
                        onClick={(event) => {
                            event.preventDefault();
                            updateCourse(course);
                        }}>
                        Update
                    </button>
                </div>
                <div className="course-cards d-flex flex-row flex-wrap">
                    {courses.map((course) => (
                        <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                            <div className="dashboard-card card col-3">
                                <img src={require("../images/blue.jpg")} alt="..." />
                                <div>
                                    <div className="card-body">
                                        <h5 className="card-title">{course.number} {course.name}</h5>
                                        <p className="card-text course-code">
                                            {course.number}.{course._id}.{course.year}
                                        </p>
                                        <p className="card-text course-term">
                                            {course.semester}
                                        </p>
                                    </div>
                                    <button
                                        className="btn btn-secondary gray m-0 w-50 rounded-0"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            setCourse(course);
                                        }}>
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-danger w-50 rounded-0"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            deleteCourse(course._id);
                                        }}>
                                        Delete
                                    </button>

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