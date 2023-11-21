import '../../index.css';
import { useNavigate, Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { React, useEffect } from "react";
import {
    deleteAssignment,
    selectAssignment,
    setAssignments
} from "./assignmentsReducer";
import * as client from "./client";
import { FaEllipsisVertical } from "react-icons/fa6";
import { AiOutlinePlus } from "react-icons/ai";
import { LuGripVertical } from "react-icons/lu";
import { BiSolidCheckCircle } from "react-icons/bi";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { GoTriangleDown } from "react-icons/go";
import { LiaEdit } from "react-icons/lia"

function Assignments() {
    const { courseId } = useParams();
      const handleDeleteAssignment = (assignmentId) => {
        client.deleteAssignment(assignmentId).then((status) => {
          dispatch(deleteAssignment(assignmentId));
        });
      };
      useEffect(() => {
        client.findAssignmentsForCourse(courseId)
          .then((assignments) =>
            dispatch(setAssignments(assignments))
          );
      }, [courseId]);
    const navigate = useNavigate();
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const dispatch = useDispatch();
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId
    );
    return (
        <div className="flex-col-container flex-grow-1">
            <div className="top-buttons flex-row-container">
                <input id="text-fields-search assignments form-control float-left w-25" placeholder="Search for Assignment" /><br />
                <div className="float-left flex-grow-1"></div>
                <button className="btn btn-secondary gray flex-right"><AiOutlinePlus className="me-1 mb-1" />Group</button>
                <button className="btn btn-danger flex-right"><AiOutlinePlus className="me-1 mb-1" />Assignment</button>
                <button className="btn btn-secondary gray flex-right"><FaEllipsisVertical className="mb-1" /></button>
            </div>
            <ul className="list-group module assignments">
                <li className="list-group-item list-group-item-secondary">
                    <LuGripVertical className="float-start mt-1 me-1 gray" />
                    <GoTriangleDown className="float-start mt-1 me-1" />
                    <div className="flex-grow-1">Assignments</div>
                    <p className="border border-secondary rounded-pill small-text me-3 p-1 float-end">40% of Total</p>
                    <button
                        className="p-0 border-0 bg-transparent"
                        onClick={() => {
                            dispatch(selectAssignment({}))
                            navigate(`/Kanbas/Courses/${courseId}/Assignments/new`);
                        }}>
                        <AiOutlinePlus className="float-end mt-1 gray me-2" />
                    </button>
                    <HiOutlineEllipsisVertical className="float-end mt-1 gray" />
                </li>
                <ul className="list-group">
                    {courseAssignments.map((assignment, index) => (
                        <li key={index} className="list-group-item flex-row-container">
                            <LuGripVertical className="float-start mt-1 me-2 gray" />
                            <LiaEdit className="float-start mt-1 me-2 green" />
                            <div className="flex-col-container flex-grow-1">
                                <Link
                                    key={assignment._id}
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                    className="title"
                                    onClick={() => dispatch(selectAssignment(assignment))}>
                                    {assignment.title}
                                </Link>
                                <p className="description red">Multiple Modules |</p>
                                <p className="deadline"><b>Due</b> {assignment.dueDate} at 11:59pm | 100pts</p>
                            </div>
                            <BiSolidCheckCircle className="float-end mt-1 me-3 green" />
                            <HiOutlineEllipsisVertical className="float-end mt-1 me-2 gray" />
                            <button
                                className="btn btn-danger"
                                onClick={() => handleDeleteAssignment(assignment._id)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </ul>
        </div >
    );
}
export default Assignments;