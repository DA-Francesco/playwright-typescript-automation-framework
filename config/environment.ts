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
 * The same public Automation Exercise application is currently
 * used for DEV, QA, and UAT because this is a practice framework.
 *
 * In a real project, each environment would have its own
 * application URL.
 */
const environments: Record<Environment, EnvironmentConfig> = {
  dev: {
    baseURL: "https://www.automationexercise.com/",
  },

  qa: {
    baseURL: "https://www.automationexercise.com/",
  },

  uat: {
    baseURL: "https://www.automationexercise.com/",
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
