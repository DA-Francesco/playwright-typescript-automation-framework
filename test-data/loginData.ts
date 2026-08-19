/**
 * Login credentials used by the UiBank test suite.
 *
 * Credentials are read from environment variables so that
 * sensitive information is not stored directly in source code.
 */
const username = process.env.UIBANK_USERNAME;
const password = process.env.UIBANK_PASSWORD;

if (!username || !password) {
  throw new Error(
    "UIBANK_USERNAME and UIBANK_PASSWORD environment variables must be configured.",
  );
}

export const loginData = {
  username,
  password,
};
