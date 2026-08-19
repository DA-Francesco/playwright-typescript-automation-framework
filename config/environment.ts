/**
 * Supported execution environments.
 *
 * Keeping the environment names in one place prevents
 * inconsistent environment values across the framework.
 */
export type Environment = "dev" | "qa" | "uat";

/**
 * Defines the configuration required for each environment.
 */
export interface EnvironmentConfig {
  baseURL: string;
}

/**
 * Environment-specific application configuration.
 *
 * These URLs currently point to Playwright's public website
 * because we are using it as our practice application.
 *
 * In a real project, these values would point to the
 * organization's DEV, QA, and UAT environments.
 */
const environments: Record<Environment, EnvironmentConfig> = {
  dev: {
    baseURL: "https://uibank.uipath.com",
  },

  qa: {
    baseURL: "https://uibank.uipath.com",
  },

  uat: {
    baseURL: "https://uibank.uipath.com",
  },
};

/**
 * Reads the execution environment from the TEST_ENV
 * environment variable.
 *
 * QA is used as the default environment when TEST_ENV
 * is not explicitly provided.
 */
const requestedEnvironment = process.env.TEST_ENV || "qa";

/**
 * Validate the requested environment before using it.
 *
 * Failing fast here prevents the framework from running
 * with an unsupported or incorrectly configured environment.
 */
if (!(requestedEnvironment in environments)) {
  throw new Error(
    `Unsupported TEST_ENV "${requestedEnvironment}". ` +
      `Supported environments: ${Object.keys(environments).join(", ")}`,
  );
}

/**
 * The validated execution environment.
 *
 * At this point TypeScript can safely treat the value
 * as one of the supported Environment types.
 */
const currentEnvironment = requestedEnvironment as Environment;

/**
 * Returns the configuration for the selected environment.
 */
export function getEnvironmentConfig(): EnvironmentConfig {
  return environments[currentEnvironment];
}
