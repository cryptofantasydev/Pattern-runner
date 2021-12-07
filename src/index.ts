/* eslint-disable @typescript-eslint/no-implied-eval */
/* eslint-disable no-new-func */

export const DEFAULT_PATTERN_SIZE = 5;

export type PatternRunner = (newline: () => void, print: (s: string) => void, size: number) => void;

/**
 * Function to evaluate pattern from given source and size
 *
 * ---
 *
 * @param source pattern source string to run
 *
 * @param size size to evaulate pattern
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
 * ```
 */
export function patternRunner(source: string, size: number = DEFAULT_PATTERN_SIZE): string {
  const evaluate = new Function("newline", "print", "size", source) as PatternRunner;
  let result = "";
  function newline(): void {
    result += "\n";
  }
  function print(s: string): void {
    result += s;
  }
  evaluate(newline, print, size);
  return result;
}
