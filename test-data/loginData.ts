/**
 * Represents the credentials required for a login scenario.
 */
export interface LoginData {
  email: string;
  password: string;
  username: string;
}

/**
 * Valid login credentials for Automation Exercise.
 *
 * Credentials are retrieved from environment variables rather than
 * being hardcoded in the test framework.
 *
 * Required environment variables:
 * - TEST_EMAIL
 * - TEST_PASSWORD
 * - TEST_USERNAME
 */
export const validLoginData: LoginData = {
  email: process.env.TEST_EMAIL || "",
  password: process.env.TEST_PASSWORD || "",
  username: process.env.TEST_USERNAME || "",
};