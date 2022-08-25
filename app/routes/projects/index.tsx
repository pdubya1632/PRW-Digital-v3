import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getProjectListings } from "~/models/project.server";
import { useOptionalAdminUser } from "~/utils";

type LoaderData = {
  projects: Awaited<ReturnType<typeof getProjectListings>>;
};

export const loader: LoaderFunction = async () => {
  const projects = await getProjectListings();
  return json<LoaderData>({ projects });
};

export default function ProjectsRoute() {
  const { projects } = useLoaderData() as LoaderData;
  const adminUser = useOptionalAdminUser();

  return (
    <main>
      <h1>projects</h1>
      {adminUser ? (
        <Link to="admin" className="text-red-600 underline">
          Admin
        </Link>
      ) : null}
      <ul>
        {projects.map((project) => (
          <li key={project.slug}>
            <Link
              to={project.slug}
              prefetch="intent"
              className="text-blue-600 underline"
            >
              {project.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}