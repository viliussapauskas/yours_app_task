import { FORMAT_GET_ISSUES_URL } from "../../config";
import { Issue, IssuesPayload } from "./types";

export async function fetchIssues(payload: IssuesPayload): Promise<Issue[]> {
  const resp = await (await fetch(FORMAT_GET_ISSUES_URL(payload))).json();
  return resp.map(
    (x: any) =>
      ({
        id: x.id,
        number: x.number,
        title: x.title,
        user: x.user,
        createdAt: x.created_at,
        commentsCount: x.comments,
      } as Issue)
  );
}
