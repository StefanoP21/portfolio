/**
 * Extracts the error message from the provided error object.
 *
 * @param error - The error to extract the message from.
 * @returns The error message if it exists, 'Internal server error' otherwise.
 */
export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String(error.message);
  } else if (typeof error === 'string') {
    message = error;
  } else {
    message = 'Internal server error';
  }

  return message;
};
