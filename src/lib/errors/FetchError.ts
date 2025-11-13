export class FetchError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "FetchError";
    this.status = status;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, FetchError);
    }
  }
}
