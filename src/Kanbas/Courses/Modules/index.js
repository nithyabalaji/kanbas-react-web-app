import ModuleList from "./ModuleList";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaEllipsisVertical } from "react-icons/fa6";
import { AiOutlinePlus } from "react-icons/ai";
function Modules() {
  return (
    <div>
      <div class="top-buttons flex-row-container">
            <div class="float-left flex-grow-1"></div>
                <button class="btn btn-secondary gray flex-right me-1">Collapse All</button>
                <button class="btn btn-secondary gray flex-right me-1">View Progress</button>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle gray flex-right me-1" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <AiOutlineCheckCircle className="green me-1 mb-1"/>Publish All
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                         <a class="dropdown-item" href="#">Publish All</a>
                    </div>
                </div>
                <button class="btn btn-danger flex-right me-1"><AiOutlinePlus className="me-1 mb-1"/>Module</button>
                <button class="btn btn-secondary gray flex-right"><FaEllipsisVertical className="mb-1"/></button>
            </div>
      <ModuleList />
    </div>
  );
}
export default Modules;