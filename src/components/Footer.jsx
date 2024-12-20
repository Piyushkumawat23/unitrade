import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoHome, IoLogOutOutline } from "react-icons/io5";
import { TbUsersGroup } from "react-icons/tb";
import earn from '../images/earn.png'; // Ensure the path is correct
import { logout } from "../../store/actions/authActions"
import { useDispatch } from 'react-redux'; // Import useDispatch

function Footer() {
  const dispatch = useDispatch(); // Initialize useDispatch
  const navigate = useNavigate();
  const location = useLocation(); // To get the current path
  const [activePage, setActivePage] = useState('home'); // State to track the active page

  useEffect(() => {
    const path = location.pathname;
    if (path === '/home') {
      setActivePage('home');
    } else if (path === '/tasks') {
      setActivePage('tasks');
    } else if (path === '/friend') {
      setActivePage('friend');
    } else if (path === '/withdrawal') {
      setActivePage('withdrawal');
    }
  }, [location]);

  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
    navigate("/login"); // Redirect to the login page
  };

  // Function to handle page changes
  const handlePageChange = (page, path) => {
    setActivePage(page); // Set the active page
    navigate(path); // Navigate to the new path
  };

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-lg bg-black flex justify-around items-center z-10 text-xs py-2 shadow-lg">
    <div className="text-center text-white w-1/5">
      <Link
        className="flex flex-col items-center"
        to="/home"
        onClick={(e) => {
          e.preventDefault();
          handlePageChange('home', '/home');
        }}
      >
        <IoHome size={24} className={`transition-opacity duration-200 ${activePage === 'home' ? 'opacity-100' : 'opacity-50'}`} />
        <span className={`text-xs mt-1 ${activePage === 'home' ? 'font-bold' : 'opacity-50'}`}>Home</span>
      </Link>
    </div>
    <div className="text-center flex flex-col items-center text-white w-1/5">
      <Link
        className="flex flex-col items-center"
        to="/tasks"
        onClick={(e) => {
          e.preventDefault();
          handlePageChange('tasks', '/tasks');
        }}
      >
        <img src={earn} alt="Earn" className={`w-6 h-6 transition-opacity duration-200 ${activePage === 'tasks' ? 'opacity-100' : 'opacity-50'}`} />
        <span className={`text-xs mt-1 ${activePage === 'tasks' ? 'font-bold' : 'opacity-50'}`}>Earn</span>
      </Link>
    </div>
    <div className="text-center text-white w-1/5">
      <Link
        className="flex flex-col items-center"
        to="/friend"
        onClick={(e) => {
          e.preventDefault();
          handlePageChange('friend', '/friend');
        }}
      >
        <TbUsersGroup size={24} className={`transition-opacity duration-200 ${activePage === 'friend' ? 'opacity-100' : 'opacity-50'}`} />
        <span className={`text-xs mt-1 ${activePage === 'friend' ? 'font-bold' : 'opacity-50'}`}>Friends</span>
      </Link>
    </div>
    <div className="text-center flex flex-col items-center text-white w-1/5">
      <Link
        className="flex flex-col items-center"
        to="/withdrawal"
        onClick={(e) => {
          e.preventDefault();
          handlePageChange('withdrawal', '/withdrawal');
        }}
      >
        <img
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ6nn3a5smm55h4gH0ppipz_I-UqR8e_dMoH1yE-SYZnx_DB-95"
          alt="Wallet"
          className={`w-7 h-7 transition-opacity duration-200 ${activePage === 'withdrawal' ? 'opacity-100' : 'opacity-50'}`}
        />
        <span className={`text-xs mt-1 ${activePage === 'withdrawal' ? 'font-bold' : 'opacity-50'}`}>Wallet</span>
      </Link>
    </div>
  <div className="text-center text-white w-1/5">
      <div
        className="flex flex-col items-center cursor-pointer"
        onClick={handleLogout}
      >
        <IoLogOutOutline size={28} className={`transition-opacity duration-200 ${activePage === 'logout' ? 'opacity-100' : 'opacity-50'}`} />
        <span className={`text-xs mt-1 ${activePage === 'logout' ? 'font-bold' : 'opacity-50'}`}>Logout</span>
      </div>
    </div>
  </div>
  );
}

export default Footer;
