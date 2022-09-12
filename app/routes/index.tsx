import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

import { INTRO_BLURB } from "../config/constants";
import { getProjectList } from "~/models/project.server";

type LoaderData = {
  projects: Awaited<ReturnType<typeof getProjectList>>;
};

export const loader: LoaderFunction = async () => {
  const projects = await getProjectList();
  return json<LoaderData>({ projects });
};

export default function Index() {
  const { projects } = useLoaderData() as LoaderData;

  return (
    <main className="min-h-screen">
      <div>
        <h2 className="my-7 p-7 text-4xl">{INTRO_BLURB}</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-7">
          {projects.map((project) => (
            <div className="card card-compact card-bordered flex-wrap" key={project.slug}>
              <figure><a href={project.url}><img src={project.cover} alt={project.title} /></a></figure>
              <div className="card-body p-7">
                <h2 className="card-title">
                  <a href={project.url}>
                    {project.title} &#8594;
                  </a>
                  {/* <Link to={project.slug} prefetch="intent">
                    {project.title} &#8594;
                  </Link> */}
                </h2>
                <div className="card-actions justify-start">
                  <div className="badge badge-outline">{project.category}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
