import { isFormValid } from "./validator";

describe("Home page validator test", () => {
  const setRepository = jest.fn();
  const setUsername = jest.fn();

  test.each([
    { username: "", repository: "", expected: false },
    { username: "username", repository: "", expected: false },
    { username: "", repository: "repository", expected: false },
    { username: "username", repository: "repository", expected: true },
  ])(
    "Form with username value '$username' and repository value '$repository' should be valid '$expected'",
    ({ username, repository, expected }) => {
      var result = isFormValid({
        setRepository,
        setUsername,
        username: {
          value: username,
          hasErrors: false,
        },
        repository: {
          value: repository,
          hasErrors: false,
        },
      });
      expect(result).toBe(expected);
    }
  );
});
