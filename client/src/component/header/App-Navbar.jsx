import { Link, useNavigate } from 'react-router-dom';
import { IoNotificationsSharp } from "react-icons/io5";
import { IoCartOutline, IoLogOutOutline } from 'react-icons/io5';


const AppNavbar = () => {
    const navigate = useNavigate();

    const logout = () => {
        navigate("/login")
    }
    return (
        <div className="bg-white shadow sticky top-0 z-50">
            <div className="flex justify-between items-center px-4 py-3 max-w-7xl mx-auto">
                {/* Logo */}
                <Link to="/">
                    <span className="text-xl font-bold text-gray-900">Logo</span>
                </Link>

                {/* Icons */}
                <div className="flex items-center gap-4">
                    <button className="text-red-400 hover:text-red-500 transition-colors">
                        <IoNotificationsSharp size={24} />
                    </button>
                    <Link to="/order/delivery-order">
                        <button className="text-violet-400 hover:text-violet-500 transition-colors">
                            <IoCartOutline size={24} />
                        </button>
                    </Link>

                    {/* Logout Button */}
                    <button
                        onClick={logout}
                        className="flex items-center gap-2 bg-violet-400 text-white font-semibold px-4 py-2 rounded-lg hover:bg-violet-500 transition-colors"
                    >
                        <IoLogOutOutline size={20} />
                        Logout
                    </button>
                </div>
            </div>
        </div>

    );
};

export default AppNavbar;
