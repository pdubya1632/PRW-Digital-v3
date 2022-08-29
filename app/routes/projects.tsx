import { Outlet } from "@remix-run/react";

export default function ProjectsRoute() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className="text-red-500">
      Oops! Something went wrong.
      <pre>{error.message}</pre>
    </div>
  );
}
