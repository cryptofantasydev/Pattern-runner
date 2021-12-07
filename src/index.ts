/* eslint-disable @typescript-eslint/no-implied-eval */
/* eslint-disable no-new-func */

export const DEFAULT_PATTERN_SIZE = 5;

export type Runner = (newline: () => void, print: (s: string) => void, size?: number) => void;

/**
 * Function to evaluate pattern from given source and size
 *
 * ---
 *
 * @param source pattern source string to run
 *
 * @param size number value of `size` variable to evaulate pattern, use "inline" if `size` is defined in source
 *
 * @returns pattern source result
 *
 * @example
 *
 * ```js
 * import { patternRunner } from "pattern-runner";
 *
 * // https://patterns.run/pattern/square
 * const source = `for (let i = 0; i < size; i++) {
 *  for (let j = 0; j < size; j++) {
 *    print("* ");
 *  }
 *  newline();
 * }`;
 * const result = patternRunner(source);
 * const resultWithSize = patternRunner(source, 3);
 * const resultWithInlineSize = patternRunner(`const size = 3;` + source, "inline");
 * ```
 */
export function patternRunner(source: string, size: number | "inline" = DEFAULT_PATTERN_SIZE): string {
  let result = "";

  function newline(): void {
    result += "\n";
  }
  function print(s: string): void {
    result += s;
  }

  const runner =
    size == "inline"
      ? (new Function("newline", "print", source) as Runner)
      : (new Function("newline", "print", "size", source) as Runner);

  runner(newline, print, size == "inline" ? undefined : size);

  return result;
}
