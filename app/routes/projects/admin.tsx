import type { LoaderFunction } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { getProjectListings } from "~/models/project.server";

type LoaderData = {
  projects: Awaited<ReturnType<typeof getProjectListings>>;
};

export const loader: LoaderFunction = async () => {
  return json({ projects: await getProjectListings() });
};

export default function AdminRoute() {
  const { projects } = useLoaderData() as LoaderData;
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="my-6 mb-2 border-b-2 text-center text-3xl">Blog Admin</h1>
      <div className="grid grid-cols-4 gap-6">
        <nav className="col-span-4 md:col-span-1">
          <ul>
            {projects.map((project) => (
              <li key={project.slug}>
                <Link to={project.slug} className="text-blue-600 underline">
                  {project.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <main className="col-span-4 md:col-span-3">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
