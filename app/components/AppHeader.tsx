import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";

export const AppHeader = () => {
  const user = useOptionalUser();
  return (
    <div className="navbar mt-6">
      <div className="flex-1">
        <Link
                    to="/" className="pl-5 font-medium normal-case leading-5">
          Patrick<span className="pl-1">Richardson</span> Wright
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-5">
          <li>
        <Link
                    to="/">
          Work
        </Link>
          </li>
          <li>
        <Link
                    to="/about">
          About
        </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
