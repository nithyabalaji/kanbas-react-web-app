import db from "../../Database";
import { useParams } from "react-router-dom";
import { FaFileExport, FaFileImport, FaFilter } from "react-icons/fa6";
import { BsFillGearFill } from "react-icons/bs";

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div class="flex-col-container me-4 flex-grow-1">
        <div class="top-buttons border-0 flex-row-container">
            <div class="float-left flex-grow-1"></div>
            <button class="btn btn-secondary gray flex-right"><FaFileImport className="me-2 mt-1 float-start"/>Import</button>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle gray flex-right" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <FaFileExport className="me-2 mt-1 float-start"/>Export
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Export</a>
                </div>
            </div>
            <button className="btn btn-secondary gray flex-right"><BsFillGearFill className="mb-1"/></button>
        </div>
        <div class="flex-col-container">
            <div class="row">
                <div class="col-6">
                    <label for="text-fields-student-names" class="form-label">Student Names</label>
                    <input id="text-fields-student-names" class="form-control" placeholder="Search Students"/>
                </div>
                <div class="col-6">
                    <label for="text-fields-assignment-names" class="form-label">Assignment Names</label>
                    <input id="text-fields-assignment-names" class="form-control" placeholder="Search Assignments"/>
                </div>
            </div>
            <div class="mb-2">
                <button type="button" class="btn btn-secondary gray float-start"><FaFilter className="me-2 mt-1 float-start"/>Apply Filters</button>
            </div>
            <div className="table-responsive">
                <table border="1" width="100%" class="table table-striped grades">
                    <thead>
                        <th>Student Name</th>
                        {assignments.map((assignment) => (<th>{assignment.title}</th>))}
                    </thead>
                    <tbody>
                        {enrollments.map((enrollment) => {
                        const user = db.users.find((user) => user._id === enrollment.user);
                        return (
                            <tr>
                            <td><a href="#">{user.firstName} {user.lastName}</a></td>
                            {assignments.map((assignment) => {
                                const grade = db.grades.find(
                                (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                return (<td>{grade?.grade || ""}</td>);})}
                            </tr>);
                        })}
                    </tbody>
                </table>
            </div>       
        </div>
    </div>);
}
export default Grades;