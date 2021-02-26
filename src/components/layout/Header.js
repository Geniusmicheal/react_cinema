import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
const Header = ({icon, title}) => {
    return (
        <nav className='navbar bg-primary'>
            <h1>
                <i className={icon} /> {title}
            </h1>
            <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            </ul>
        </nav>
    )
}

Header.defaultProps = {
    title: 'Movies Finder',
    icon: 'fab fa-github'
};
  
Header.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};
export default Header;