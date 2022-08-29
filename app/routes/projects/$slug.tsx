import { marked } from "marked";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useCatch, useLoaderData, useParams } from "@remix-run/react";
import { getProject } from "~/models/project.server";
import invariant from "tiny-invariant";

type LoaderData = {
  title: string;
  html: string;
};

export const loader: LoaderFunction = async ({ params }) => {
  const { slug } = params;
  invariant(slug, "slug is required");
  const project = await getProject(slug);

  if (!project) {
    throw new Response("Not Found", { status: 404 });
  }
  const html = marked(project.markdown);
  return json<LoaderData>({ title: project.title, html });
};

export default function ProjectRoute() {
  const { title, html } = useLoaderData() as LoaderData;
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  const params = useParams();
  if (caught.status === 404) {
    return (
      <div className="text-red-500">
        Uh oh! The post with the slug "{params.slug}" does not exist!
      </div>
    );
  }
  throw new Error(`Unsupported thrown response status code: ${caught.status}`);
}
