import { Link } from 'react-router-dom';
import Logo from '../../assets/images/CareerHub.png';
import GradientBtn from '../GradientBtn/GradientBtn';

const Header = () => {
  return (
    <div className='bg-white'>
      <div className="container mx-auto px-3">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><Link to="/">Statistics</Link></li>
                <li><Link to="/aplied-jobs">Applied Jobs</Link></li>
                <li><Link to="/blog">Blog</Link></li>
              </ul>
            </div>
            <Link to='/'><img src={Logo} alt="Logo" /></Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><Link to="/">Statistics</Link></li>
              <li><Link to="/aplied-jobs">Applied Jobs</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>
          <div className="navbar-end">
            <GradientBtn text="Start Applying" link="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;