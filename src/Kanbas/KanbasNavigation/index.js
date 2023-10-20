import '../index.css';
import { FaBook, FaInbox, FaDesktop } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { BiUserCircle, BiTimeFive, BiHelpCircle } from "react-icons/bi";
import { TfiDashboard } from "react-icons/tfi"
import { BsFillCalendar2WeekFill } from "react-icons/bs"
import { GoSignOut } from "react-icons/go"
function KanbasNavigation() {
    const { pathname } = useLocation();
    const links = [
        {
          name: "Account",
          url: "../Account/Profile/index.html",
        },
        {
          name: "Dashboard",
          url: "../Dashboard/index.html",
        },
        {
          name: "Courses",
          url: "../Courses/Home/home.html",
        },
        {
          name: "Calendar",
          url: "#",
        },
        {
          name: "Inbox",
          url: "#",
        },
        {
            name: "History",
            url: "#",
        },
        {
          name: "Studio",
          url: "#",
        },
        {
          name: "Commons",
          url: "#",
        },
        {
            name: "Help",
            url: "#",
        },
    ];

    const linkToIconMap = {
        Account: <BiUserCircle className="icon"/>,
        Dashboard: <TfiDashboard className='icon'/>, 
        Courses: <FaBook className='icon'/>, 
        Calendar: <BsFillCalendar2WeekFill className='icon'/>,
        Inbox: <FaInbox className="icon"/>,
        History: <BiTimeFive className='icon'/>, 
        Studio: <FaDesktop className='icon'/>, 
        Commons: <GoSignOut className='icon'/>,
        Help: <BiHelpCircle className="icon"/>
    };

    return (  
        <ul className="list-group sidebar">
            {links.map((link, index) =>
                <Link
                    key={index}
                    to={`/Kanbas/${link.name}`}
                    className={`item ${pathname.includes(link.name) && "active"}`}>
                    {linkToIconMap[link.name]}
                    <p>{link.name}</p>
                </Link>)
            }
        </ul>
    );
  }
  
  export default KanbasNavigation;