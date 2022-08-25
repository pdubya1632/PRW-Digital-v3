import {
  Form,
  useActionData,
  useLoaderData,
  useTransition,
} from "@remix-run/react";
import { redirect, json } from "@remix-run/node";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import type { Project } from "~/models/project.server";
import {
  createProject,
  getProject,
  updateProject,
} from "~/models/project.server";
import invariant from "tiny-invariant";
import { requireAdminUser } from "~/session.server";

type LoaderData = { project?: Project };

export const loader: LoaderFunction = async ({ request, params }) => {
  await requireAdminUser(request);
  invariant(params.slug, "slug is required");
  if (params.slug === "new") {
    return json<LoaderData>({});
  }
  const project = await getProject(params.slug);
  if (!project) {
    throw new Response("Not Found", { status: 404 });
  }
  return json<LoaderData>({ project });
};

type ActionData =
  | {
      title: null | string;
      slug: null | string;
      markdown: null | string;
    }
  | undefined;

export const action: ActionFunction = async ({ request, params }) => {
  await requireAdminUser(request);
  invariant(params.slug, "slug is required");
  const formData = await request.formData();

  const title = formData.get("title");
  const slug = formData.get("slug");
  const markdown = formData.get("markdown");

  const errors: ActionData = {
    title: title ? null : "Title is required",
    slug: slug ? null : "Slug is required",
    markdown: markdown ? null : "Markdown is required",
  };
  const hasErrors = Object.values(errors).some((errorMessage) => errorMessage);
  if (hasErrors) {
    return json(errors);
  }

  invariant(typeof title === "string", "title must be a string");
  invariant(typeof slug === "string", "slug must be a string");
  invariant(typeof markdown === "string", "markdown must be a string");

  if (params.slug === "new") {
    await createProject({ title, slug, markdown });
  } else {
    await updateProject(params.slug, { title, slug, markdown });
  }

  return redirect("/projects/admin");
};

const inputClassName = `w-full rounded border border-gray-500 px-2 py-2`;

export default function NewProjectRoute() {
  const data = useLoaderData();
  const errors = useActionData() as ActionData;

  const transition = useTransition();
  const isCreating = transition.submission?.formData.get("intent") === "create";
  const isUpdating = transition.submission?.formData.get("intent") === "update";
  const isNewProject = !data.project;

  return (
    <Form method="post" key={data.project?.slug ?? "new"}>
      <p>
        <label>
          Project Title:{" "}
          {errors?.title ? (
            <em className="text-red-600">{errors.title}</em>
          ) : null}
          <input
            type="text"
            name="title"
            className={inputClassName}
            defaultValue={data.project?.title}
          />
        </label>
      </p>
      <p>
        <label>
          Slug:{" "}
          {errors?.slug ? (
            <em className="text-red-600">{errors.slug}</em>
          ) : null}
          <input
            type="text"
            name="slug"
            className={inputClassName}
            defaultValue={data.project?.slug}
          />
        </label>
      </p>
      <p>
        <label htmlFor="markdown">
          Markdown:{" "}
          {errors?.markdown ? (
            <em className="text-red-600">{errors.markdown}</em>
          ) : null}
        </label>
        <textarea
          id="markdown"
          rows={20}
          name="markdown"
          className={`${inputClassName}`}
          defaultValue={data.project?.markdown}
        />
      </p>
      <div className="flex justify-end gap-4">
        <button
          type="submit"
          name="intent"
          value={isNewProject ? "create" : "update"}
          className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
          disabled={isCreating || isUpdating}
        >
          {isNewProject ? (isCreating ? "Creating..." : "Create Project") : null}
          {isNewProject ? null : isUpdating ? "Updating..." : "Update"}
        </button>
      </div>
    </Form>
  );
}
