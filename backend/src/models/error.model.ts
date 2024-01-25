/**
 * Custom error class for handling application-specific errors.
 */
export class AppError extends Error {
  // Default status code for the error
  status: number = 400;

  // Mapping of error types to their corresponding HTTP status codes
  static typeToHTTPStatus = {
    validation: 400,
    unauthorized: 401,
    server: 500,
  };

  /**
   * Creates an instance of AppError.
   * @param {keyof typeof AppError.typeToHTTPStatus} type - The type of error.
   * @param {string} message - The error message.
   */
  constructor(type: keyof typeof AppError.typeToHTTPStatus, message: string) {
    // Call the parent class constructor with the error message
    super(message);

    // Ensure the prototype chain is set correctly
    Object.setPrototypeOf(this, new.target.prototype);

    // Set the name of the error class
    this.name = Error.name;

    // Set the status code based on the provided error type
    this.status = AppError.typeToHTTPStatus[type];

    // Capture the stack trace for debugging purposes
    Error.captureStackTrace(this);
  }
}
