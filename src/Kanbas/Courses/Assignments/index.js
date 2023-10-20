import React from "react";
import '../../index.css';
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FaEllipsisVertical } from "react-icons/fa6";
import { AiOutlinePlus } from "react-icons/ai";
import { LuGripVertical } from "react-icons/lu";
import { BiSolidCheckCircle } from "react-icons/bi";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { GoTriangleDown } from "react-icons/go";
import { LiaEdit } from "react-icons/lia"

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div className="flex-col-container flex-grow-1">
        <div className="top-buttons flex-row-container">
            <input id="text-fields-search assignments form-control float-left w-25" placeholder="Search for Assignment"/><br/>
            <div className="float-left flex-grow-1"></div>
            <button className="btn btn-secondary gray flex-right"><AiOutlinePlus className="me-1 mb-1"/>Group</button>
            <button className="btn btn-danger flex-right"><AiOutlinePlus className="me-1 mb-1"/>Assignment</button>
            <button className="btn btn-secondary gray flex-right"><FaEllipsisVertical className="mb-1"/></button>
        </div>
        <ul className="list-group module assignments">
            <li className="list-group-item list-group-item-secondary">
                <LuGripVertical className="float-start mt-1 me-1 gray"/>
                <GoTriangleDown className="float-start mt-1 me-1"/>
                <div className="flex-grow-1">Assignments</div>
                <p className="border border-secondary rounded-pill small-text me-3 p-1 float-end">40% of Total</p>
                <AiOutlinePlus className="float-end mt-1 gray me-2"/>
                <HiOutlineEllipsisVertical className="float-end mt-1 gray"/>
            </li>
            <ul className="list-group">
                {courseAssignments.map((assignment, index) => (
                    <li key={index} className="list-group-item flex-row-container">
                    <LuGripVertical className="float-start mt-1 me-2 gray"/>
                    <LiaEdit className="float-start mt-1 me-2 green"/>
                    <div className="flex-col-container flex-grow-1">
                        <Link
                            key={assignment._id}
                            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                            className="title">
                            {assignment.title}
                        </Link>
                        <p className="description red">Multiple Modules |</p>
                        <p className="deadline"><b>Due</b> Sep 18, 2022 at 11:59pm | 100pts</p>
                    </div>
                    <BiSolidCheckCircle className="float-end mt-1 me-3 green"/>
                    <HiOutlineEllipsisVertical className="float-end mt-1 gray"/>
                </li>
                ))}
            </ul>
        </ul>
    </div>
  );
}
export default Assignments;