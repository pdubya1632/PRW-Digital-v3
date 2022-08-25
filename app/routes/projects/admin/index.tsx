import { Link } from "@remix-run/react";

export default function AdminIndexRoute() {
  return (
    <Link to="new" className="text-blue-600 underline">
      Add New Project
    </Link>
  );
}
