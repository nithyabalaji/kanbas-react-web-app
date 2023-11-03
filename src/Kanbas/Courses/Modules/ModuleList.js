import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
import "../../index.css";
import { LuGripVertical } from "react-icons/lu";
import { BiSolidCheckCircle } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { GoTriangleRight, GoTriangleDown } from "react-icons/go";

function ModuleList() {
  const { courseId } = useParams();
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
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
          Add
        </button>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(updateModule(module))}>
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
                  onClick={() => dispatch(deleteModule(module._id))}>
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