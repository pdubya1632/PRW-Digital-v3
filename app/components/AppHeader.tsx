import { NavLink } from '@remix-run/react';

export const AppHeader = () => {
  const activeClassName = 'underline';

  return (
    <div className="navbar bg-base-100 mt-6">
      <div className="flex-1">
        <NavLink
          to="/"
          className="pl-5 text-2xl normal-case leading-6"
        >
          Patrick
          <br />
          <span className="pl-2">Richardson</span>
          <br />
          Wright
        </NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0 md:text-xl sm:text-l">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Work
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
