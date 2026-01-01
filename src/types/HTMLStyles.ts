import type * as CSS from "csstype";

/**
 * Style object like React: { backgroundColor: "red", width: 10 }
 * - keys are camelCase
 * - values can be string | number
 */
export type StyleObject = CSS.Properties<string | number>;