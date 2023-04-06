import { useQuery } from "@tanstack/react-query";
import { getProjects } from "@nx-example-org/prolog-api";
import type { Project } from "@nx-example-org/prolog-api";

export function useGetProjects() {
  return useQuery<Project[], Error>(["projects"], getProjects);
}
