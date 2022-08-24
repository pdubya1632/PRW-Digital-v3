import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node'
import { getProjectListings } from '~/models/project.server'

type LoaderData = {
projects: Awaited<ReturnType<typeof getProjectListings>>
}

export const loader: LoaderFunction = async () => {
const projects = await getProjectListings();

return json<LoaderData>({projects})
}

export default function ProjectsRoute() {
const { projects } = useLoaderData() as LoaderData;
    
    return (
        <main>
            <h1>Projects</h1>
            <ul>
                {projects.map((project) => (
                <li key={project.slug}>
                    <Link to={project.slug} className="text-blue-600 underline">
                        {project.title}
                    </Link>
                </li>
                ))}
            </ul>
        </main>
    )
}