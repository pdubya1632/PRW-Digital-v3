import type { Project } from "@prisma/client";
import { prisma } from "~/db.server";

export type { Project };

export async function getProjectListings() {
  return prisma.project.findMany({
    select: {
      slug: true,
      title: true,
    },
  });
}

export async function getProjects() {
  return prisma.project.findMany();
}

export async function getProject(slug: string) {
  return prisma.project.findUnique({ where: { slug } });
}

export async function createProject(
  project: Pick<Project, "slug" | "title" | "markdown">
) {
  return prisma.project.create({ data: project });
}

export async function updateProject(
  slug: string,
  project: Pick<Project, "slug" | "title" | "markdown">
) {
  return prisma.project.update({ data: project, where: { slug } });
}

export async function deleteProject(slug: string) {
  return prisma.project.delete({ where: { slug } });
}
