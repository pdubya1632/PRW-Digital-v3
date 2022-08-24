import { marked } from 'marked';
import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getProject } from '~/models/project.server';

export const loader: LoaderFunction = async ({params}) => {
 const {slug} = params
 const project = await getProject(slug)
 const html = marked(project.markdown)
 return json({title: project.title, html})
}

export default function ProjectRoute() {
    const {title, html} = useLoaderData();
    return (
        <main className="mx-auto max-w-4xl">
            <h1 className="my-6 border-b-2 text-center text-3xl">{title}</h1>
            <div dangerouslySetInnerHTML={{__html: html}} />
        </main>
    )
}