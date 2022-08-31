import { Link } from "@remix-run/react";

export const AppHeader = () => {
  return (
    <div className="navigation navbar mt-6">
      <div className="flex-1">
        <Link to="/" className="pl-5 text-2xl normal-case leading-6">
          Patrick
          <br />
          <span className="pl-2">Richardson</span>
          <br />
          Wright
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-0 text-xl">
          <li>
            <Link to="/">Work</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
