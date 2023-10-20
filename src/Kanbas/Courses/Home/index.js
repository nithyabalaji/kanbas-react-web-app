import ModuleList from "../Modules/ModuleList";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaEllipsisVertical, FaFileImport } from "react-icons/fa6";
import { AiOutlinePlus } from "react-icons/ai";
import { GoSignOut } from "react-icons/go";
import { ImTarget  } from "react-icons/im";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { LiaBullhornSolid } from "react-icons/lia";
import { BsBell } from "react-icons/bs";

function Home() {
  return (
    <div className="flex-row-container">
        <div className="flex-col-container me-4 flex-grow-1">
            <div className="top-buttons flex-row-container">
                <div className="float-left flex-grow-1"></div>
                <button className="btn btn-secondary gray flex-right me-1">Collapse All</button>
                <button className="btn btn-secondary gray flex-right me-1">View Progress</button>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle gray flex-right me-1" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <AiOutlineCheckCircle className="green me-1 mb-1"/>Publish All
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                         <a className="dropdown-item" href="#">Publish All</a>
                    </div>
                </div>
                <button className="btn btn-danger flex-right me-1"><AiOutlinePlus className="me-1 mb-1"/>Module</button>
                <button className="btn btn-secondary gray flex-right"><FaEllipsisVertical className="mb-1"/></button>
            </div>
            <ModuleList/>  
        </div>
        <div className="float-end course-details">
            <ul className="list-group">
                <li className="list-group-item list-group-item-action mb-1"><a href="#">
                    <FaFileImport className="me-2 mt-1 float-start"/>Import Existing Content
                </a></li>
                <li className="list-group-item list-group-item-action mb-1"><a href="#">
                    <GoSignOut className="me-2 mt-1 float-start"/>Import From Commons
                </a></li>
                <li className="list-group-item list-group-item-action mb-1"><a href="#">
                    <ImTarget className="me-2 mt-1 float-start"/>Choose Home Page
                </a></li>
                <li className="list-group-item list-group-item-action mb-1"><a href="#">
                    <BiSolidBarChartAlt2 className="me-2 mt-1 float-start"/>View Course Stream
                </a></li>
                <li className="list-group-item list-group-item-action mb-1"><a href="#">
                    <LiaBullhornSolid className="me-2 mt-1 float-start"/>New Announcement
                </a></li>
                <li className="list-group-item list-group-item-action mb-1"><a href="#">
                    <BiSolidBarChartAlt2 className="me-2 mt-1 float-start"/>New Analytics
                </a></li>
                <li className="list-group-item list-group-item-action mb-1"><a href="#">
                    <BsBell className="me-2 mt-1 float-start"/>View Course Notifications
                </a></li>
            </ul>

            <div className="mt-4">
                Coming Up
                <a href="#" className="red float-right">View Calendar</a>
                <hr/>
            </div>
            <ul className="coming-up">
                <li><a href="#">
                    <p className="title">Lecture</p>
                    <p className="course">CS4550.12631.202410</p>
                    <p className="time">Sep 7 at 11:45am</p>  
                </a></li>
                <li><a href="#">
                    <p className="title">Lecture</p>
                    <p className="course">CS4550.12631.202410</p>
                    <p className="time">Sep 11 at 11:45am</p>
                </a></li>
                <li><a href="#">
                    <p className="title">CS5610 06 SP23 Lecture</p>
                    <p className="course">CS4550.12631.202410</p>
                    <p className="time">Sep 11 at 6pm</p>
                </a></li>
            </ul>
        </div>
    </div>
  );
}
export default Home;