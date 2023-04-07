import { axios } from "./axios";
import type { Issue } from "./issues.types";
import type { Page } from "@nx-example-org/prolog-shared-models";

const ENDPOINT = "/issue";

export async function getIssues(
  page: number,
  options?: { signal?: AbortSignal }
) {
  const { data } = await axios.get<Page<Issue>>(ENDPOINT, {
    params: { page },
    signal: options?.signal,
  });
  return data;
}
