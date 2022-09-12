import type { Project } from "@prisma/client";
import { prisma } from "~/database/db.server";

export type { Project };

export async function getProjectList() {
  return prisma.project.findMany({
    select: {
      slug: true,
      title: true,
      category: true,
      url: true,
    },
    orderBy: {
      category: "desc",
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
  project: Pick<Project, "slug" | "title" | "markdown" | "category">
) {
  return prisma.project.create({ data: project });
}

export async function updateProject(
  slug: string,
  project: Pick<Project, "slug" | "title" | "markdown" | "category">
) {
  return prisma.project.update({ data: project, where: { slug } });
}

export async function deleteProject(slug: string) {
  return prisma.project.delete({ where: { slug } });
}
