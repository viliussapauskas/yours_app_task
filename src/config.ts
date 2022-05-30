import { IssuesPayload } from "./redux/issues";

const FORMAT_GET_ISSUES_URL = ({ username, repository }: IssuesPayload) =>
  `https://api.github.com/repos/${username}/${repository}/issues`;

export { FORMAT_GET_ISSUES_URL };
