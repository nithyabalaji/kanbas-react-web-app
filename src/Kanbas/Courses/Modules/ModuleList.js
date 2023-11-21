import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { React, useEffect } from "react";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules
} from "./modulesReducer";
import * as client from "./client";
import "../../index.css";
import { LuGripVertical } from "react-icons/lu";
import { BiSolidCheckCircle } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { GoTriangleRight, GoTriangleDown } from "react-icons/go";

function ModuleList() {
  const { courseId } = useParams();
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
      );
  }, [courseId]);
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <div>
      <li className="list-group-item mb-3">
        <input
          className="form-control"
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          } />
        <textarea
          className="form-control"
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          } />
        <button
          className="btn btn-secondary gray me-2"
          onClick={handleAddModule}>
          Add
        </button>
        <button
          className="btn btn-danger"
          onClick={() => handleUpdateModule(module)}>
          Update
        </button>
      </li>
      {
        modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <ul className="list-group module">
              <li key={index} className="list-group-item list-group-item-secondary">
                <LuGripVertical className="float-start mt-1 me-1 gray" />
                <GoTriangleRight className="float-start mt-1 me-1" />
                <div className="flex-grow-1">{module.name}</div>
                <BiSolidCheckCircle className="float-end mt-1 green" />
                <GoTriangleDown className="float-end mt-1 me-2" />
                <AiOutlinePlus className="float-end mt-1 gray me-2" />
                <HiOutlineEllipsisVertical className="float-end mt-1 gray me-2" />
                <button
                  className="btn btn-secondary gray me-2"
                  onClick={() => dispatch(setModule(module))}>
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteModule(module._id)}>
                  Delete
                </button>
              </li>
            </ul>
          ))
      }
    </div>
  );
}
export default ModuleList;