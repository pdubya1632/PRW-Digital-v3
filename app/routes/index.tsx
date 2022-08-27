import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

import { getProjectListings } from "~/models/project.server";

type LoaderData = {
  projects: Awaited<ReturnType<typeof getProjectListings>>;
};

export const loader: LoaderFunction = async () => {
  const projects = await getProjectListings();
  return json<LoaderData>({ projects });
};

export default function Index() {
  const { projects } = useLoaderData() as LoaderData;
  return (
    <main className="min-h-screen">
      <div>
        <h2 className="p-7 my-7 text-4xl">I'm a Creative Developer with a love for great design, quality code, and intuitive user experiences.</h2>
        <div className="grid grid-cols-3">
          {projects.map((project) => (
            <div className="card flex-wrap" key={project.slug}>
              <figure></figure>
              <div className="card-body p-7">
                <h2 className="card-title">
                  <Link
                    to={project.slug}
                    prefetch="intent"
                  >
                    {project.title} &#8594;
                  </Link>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Development</div>
                  <div className="badge badge-outline">Design</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
