/**
 * Validates if a value is a string and if its length is within the specified range.
 *
 * @param value - The value to validate.
 * @param maxLength - The maximum allowed length of the string.
 * @param minLength - The minimum allowed length of the string.
 * @returns `true` if the value is a string and its length is within the specified range, `false` otherwise.
 */
export const validateInput = (
  value: unknown,
  maxLength: number,
  minLength: number = 1
) => {
  if (
    !value ||
    typeof value !== 'string' ||
    value.length > maxLength ||
    value.length < minLength
  ) {
    return false;
  }
  return true;
};
