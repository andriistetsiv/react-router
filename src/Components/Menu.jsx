import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <NavLink
        to="."
        style={({ isActive }) =>
          isActive ? { color: 'lightyellow', textDecoration: 'none' } : {}
        }
        end
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
      >
        About
      </NavLink>
      <NavLink
        to="/contacts"
        className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
      >
        Contact
      </NavLink>
      <NavLink
        to="/courses"
        className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
      >
        Courses
      </NavLink>
    </nav>
  );
};

export default Menu;
