import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "../../index.css";
import { LuGripVertical } from "react-icons/lu";
import { BiSolidCheckCircle } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { GoTriangleRight, GoTriangleDown } from "react-icons/go";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div>
      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
            <ul className="list-group module">
                <li key={index} className="list-group-item list-group-item-secondary">
                    <LuGripVertical className="float-start mt-1 me-1 gray"/>
                    <GoTriangleRight className="float-start mt-1 me-1"/>
                    <div className="flex-grow-1">{module.name}</div>
                    <BiSolidCheckCircle className="float-end mt-1 green"/>
                    <GoTriangleDown className="float-end mt-1 me-2"/>
                    <AiOutlinePlus className="float-end mt-1 gray me-2"/>
                    <HiOutlineEllipsisVertical className="float-end mt-1 gray"/>
                </li>
            </ul>
      ))
      }
    </div>
  );
}
export default ModuleList;