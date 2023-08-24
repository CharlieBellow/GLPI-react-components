export type ApiError = {
  status: "error";
  message: string;
};

export class HttpError extends Error {
  public readonly status = "error";
  constructor(public readonly message: string) {
    super(message);
  }
}
