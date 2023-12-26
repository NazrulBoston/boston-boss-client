import { FaBookDead, FaCalendar, FaComment, FaHome, FaSearch, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex mt-6">
            {/* dashboard sidebar */}
            <div className="w-64 min-h-screen bg-orange-300">
                <ul className="menu p-4">
                    <li>
                        <NavLink to="/dashboard/userHome">
                            <FaHome></FaHome>
                           User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation">
                           <FaCalendar></FaCalendar>
                            Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart">
                            <FaShoppingCart></FaShoppingCart>
                            My Cart</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/myBooking">
                            <FaBookDead></FaBookDead>
                            My Booking</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review">
                          <FaComment></FaComment>
                            Review</NavLink>
                    </li>
                    <div className="divider"></div>

                    <li>
                        <NavLink to="/">
                          <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu">
                        <FaSearch></FaSearch>
                            Menu</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-grow p-6">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;