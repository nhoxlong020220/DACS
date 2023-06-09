import "./navbar.scss"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import logo from "../../assets/logo_food_vn.png";
import Search from "../Search/search";
const Navbar = () => {

    const { toggle, darkMode } = useContext(DarkModeContext);
    const { user } = useContext(AuthContext);
    const currentUser = user.currentUser ;
    console.log("navbar: ", currentUser)

    return (
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{ textDecoration: "none" }}>
                    {/* <span>lamasocial</span> */}
                    <img src={logo}></img>
                </Link>
                <Link to='/home'><HomeOutlinedIcon /></Link>
                {darkMode ? (
                    <WbSunnyOutlinedIcon onClick={toggle} />
                ) : (
                    <DarkModeOutlinedIcon onClick={toggle} />
                )}
                <GridViewOutlinedIcon />
                <div className="search">
                    <SearchOutlinedIcon />
                   <Search/>
                </div>
            </div>
            <div className="right">
                <PersonOutlinedIcon />
                <EmailOutlinedIcon />
                <NotificationsOutlinedIcon />
                <div className="user">
                <Link to={`/profile/${currentUser._id}` }>
                            <img
                                src={currentUser.profilePicture || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHCZuslFbn42wwA9qw6ywBERhtpr_yOFy3Cw&usqp=CAU"} 
                                alt=""
                            />
                        </Link>
                    <span>{currentUser.name}</span>
                </div>
            </div>
        </div>
    );
}

export default Navbar
