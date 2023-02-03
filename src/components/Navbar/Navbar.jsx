import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";
import { clearCapsule } from "../../redux/capsuleSlice";

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCapsule());
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/">
          <span className="logo">SpaceX</span>
        </Link>
        <div className="search">
          <input placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
      </div>
      <div className="right">
        <ul className="list">
          <li className="listItem">
            <Link href="/">ABOUT</Link>
          </li>
          <li className="listItem">
            <Link href="/">DESIGN</Link>
          </li>
          <li className="listItem">
            <Link href="/contact">CONTACT</Link>
          </li>
          <div className="user">
            <span>{currentUser?.username?.toUpperCase()}</span>
            <button className="logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
